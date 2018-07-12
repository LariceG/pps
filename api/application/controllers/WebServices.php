<?php

defined('BASEPATH') OR exit('No direct script access allowed');

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE');
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS ,PUT, DELETE");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class WebServices extends REST_Controller {

  function __construct()
	{
        // Construct the parent class
        parent::__construct();
        $this->load->model('login');
        $this->load->model('common');
        $this->load->library("email");
        $this->load->library('form_validation');
        $this->load->helper('url');
        $this->perPageNum = 9;
    }

    /*
     * Login Request
     * Function -  Login
     */

    public function login_post() {
        $rest_json = file_get_contents("php://input");
        $postData = json_decode($rest_json, true);
        if(NULL !=$postData['useremail'] && NULL !=$postData['password'])
        {
			$username   =   $postData['useremail'];
			$password   =   $postData['password'];
			$userType   =   $postData['usertype'];
			$deviceId   =   $postData['deviceId'];
			$registerId =   $postData['registerId'];
			$response = $this->login->clientApiLogin($username,$password,$userType);
			if ($response['success'] == true)
			{
          $userId = $response['data']->userId;
          if(!$this->_get_key_user($userId, $deviceId,$registerId))
          {
              $apiKey = $this->createKey($response['data'], $password, $deviceId,$registerId);
          }
          // Else regenerate key for current user
          else
          {
             // $apiKey = $this->regenerateKey($userId, $deviceId,$registerId);
      				$apiKey = $this->_get_key_user($userId, $deviceId,$registerId);
      				$apiKey = $apiKey->key;
          }
          $response['data']->apiKey       =   $apiKey;
          $output['status']         		= 	REST_Controller::HTTP_OK;
          $output['data']           		= 	$response['data'];
          $this->response($output, REST_Controller::HTTP_OK);
        }
        else
        {
            $this->response($response, REST_Controller::HTTP_CONFLICT);
        }
        }
        else
        {
          $this->response( ['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
        }
    }

  /* Add Store User Detail with Data */

  public function addStoreUser_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if (!empty($postData))
    {
        if(isset($postData['userName']))
        {
          $checkUserEmail = array(
      			'userName' => $postData['userName'],
      			'userEmail' => $postData['userEmail']
      		);
          $resultReturn = $this->common->checkexist('pps_users',$checkUserEmail);
        }
        else // if no credentials then generate random
        {
          $postData['userName'] = $this->login->generateCredentials($postData['storeName'],'username');
          $postData['userEmail'] = $this->login->generateCredentials($postData['storeName'],'useremail');
          $date = date("d M Y H:i:s");
          $postData['userPassword'] = strtotime($date) . rand(0,9999);
          $resultReturn = 0;
        }
       if($resultReturn == 0)
       {
			      $userData = array(
      				'userName' => $postData['userName'],
      				'userEmail' => $postData['userEmail'],
      				'userPassword' => md5($postData['userPassword']),
      				'userType' => $postData['userType'],
      				'userStatus' => $postData['userStatus']
  					);
    			  $storeTableData = array(
      				'storeName' => $postData['storeName'],
      				'storeEmail' => $postData['storeEmail'],
      				'storeMobile' => $postData['storeMobile'],
      				'storeAddress' => $postData['storeAddress'],
      				'storeCity' => $postData['storeCity'],
      				'storeState' => $postData['storeState'],
      				'storeZip' => $postData['storeZip'],
      				'storeClass' => $postData['storeClass']
    				);

    			  $data = array('userData'=>$userData,'storeTableData'=>$storeTableData);
    			  $response = $this->login->insertData('store',$data,'pps_users','pps_store');
    			  if ($response['success'] == true)
    			  {
      				$output['success'] 	= 'true';
      				$output['data'] 	= $response['data'];
      				$output['userID'] 	= $response['userID'];
      				$this->response($output, REST_Controller::HTTP_OK);
    			  }
    			  else
    			  {
      				$output['success'] = 'false';
      				$output['data'] = $response['message'];
      				$this->response($output, REST_Controller::HTTP_CONFLICT);
    			  }

    		}
    		else
    		{
    			$output['success'] = 'false';
    			$output['data'] = 'Username or Email already exists.';
    			$this->response($output, REST_Controller::HTTP_CONFLICT);
    		}
    }
  }


    /*  Update Store User Details by User ID */
  public function updateStoreUserDetail_post()
  {
        $rest_json 	= 	file_get_contents("php://input");
        // print_r($rest_json);die;
      $postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
          $data = array(
                'storeName'     => $postData['storeName'],
                'storeEmail'    => $postData['storeEmail'],
                'storeMobile'   => $postData['storeMobile'],
                'storeAddress'  => $postData['storeAddress'],
                'storeCity'    	=> $postData['storeCity'],
        				'storeState' => $postData['storeState'],
        				'storeZip' => $postData['storeZip'],
                'storeClass' => $postData['storeClass']
            );
            if(isset($postData['userPassword']))
            $data['userPassword'] = $postData['userPassword'];
            $response = $this->login->updateUserDetails('store',$data,$postData['userId']);
            if ($response['success'] == true)
            {
        $output['success'] 	= 'true';
        $output['data'] 	= 'Updated Successfully';
        $this->response($output, REST_Controller::HTTP_OK);
            }
            else
            {
        $output['success'] 	= 'false';
        $output['data'] 	= 'Not Updated...';
        $this->response($output, REST_Controller::HTTP_CONFLICT);

            }
        }
        else
        {
      $output['success'] 	= 'false';
      $output['data'] = 'Check your parameter. ';
            $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

  public function activeUserStatus_put()
  {
        $rest_json 	= 	file_get_contents("php://input");
        $postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
            $caseStatment = $postData['caseStatment'];
            $data = array(
                'userStatus'  => $postData['userStatus']
            );
            $response = $this->login->updateData($caseStatment,$postData['userId'],$data);
            if ($response['success'] == true)
            {
              $output['success'] 	= 'true';
              $output['data'] 	= 'Updated Successfully';
              $this->response($output, REST_Controller::HTTP_OK);
            }
            else
            {
              $output['success'] 	= 'false';
              $output['data'] 	= 'Not Updated...';
              $this->response($output, REST_Controller::HTTP_CONFLICT);
            }
        }
        else
        {
            $output['success'] 	= 'false';
            $output['data'] = 'Check your parameter. ';
            $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function storeUserListing_get()
    {
      $page = $this->get('page');
      $perPage = $this->get('perpage');
      $text = $this->get('text');

      if ($page && $perPage)
      {
        if( $perPage <= 0 )
         $perPage = 10;

         if( $page <= 0 )
         $page = 1;

         $start = ($page-1) * $perPage;

        $response   = $this->common->StoreList($start,$perPage,$text);
        if ($response)
        {
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $output['data']           = array('total_rows'=>0, 'result' => array());
          $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
      }
      else
      {
        $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
      }
    }

    public function storeDetails_get()
    {
		$id = $this->get('storeid');
		if($id)
		{
			$response = $this->common->storeDetails($id);
			if (!empty($response))
			{
			  $output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
			$output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
    }

  public function insert_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
    //print_r($postData); die;
        if(NULL !=$postData['data'])
        {
      $response = $this->common->commonInsertData($postData['data'],$postData['type']);
      if ($response['success'] == true)
      {
        $output['success'] 	= 'true';
        $output['data'] 	= $response['data'];
        $output['catID'] 	= $response['catID'];
        $this->response($output, REST_Controller::HTTP_OK);
      }
      else
      {
        $output['success'] = 'false';
        $output['data'] = $response['message'];
        $this->response($output, REST_Controller::HTTP_CONFLICT);
      }
    }
  }

  public function getAssignes_get()
  {
        $apdm = $this->common->getAssignes($this->get('apdm'));
        if ($apdm)
        {
          $output['success'] 	= 'true';
          $output['data'] 	= $apdm;
          $this->response($output, REST_Controller::HTTP_OK);
        }
        else
        {
          $output['success'] = 'false';
          $this->response($output, REST_Controller::HTTP_CONFLICT);
        }
  }

  public function getExAplAssignes_get()
  {
    $apdm = $this->common->getExAplAssignes($this->get('apdm'));
    if ($apdm)
    {
      $output['success'] 	= 'true';
      $output['data'] 	= $apdm;
      $this->response($output, REST_Controller::HTTP_OK);
    }
    else
    {
      $output['success'] = 'false';
      $this->response($output, REST_Controller::HTTP_CONFLICT);
    }
  }

  public function Delete_delete()
  {
      if(NULL != $this->get('id'))
      {
        $response = $this->common->commonDeleteData($this->get('type'),$this->get('id'));
        if ($response['success'] == true)
        {
          $output['success'] 	= 'true';
          $output['data'] 	= $response['data'];
          $this->response($output, REST_Controller::HTTP_OK);
        }
        else
        {
          $output['success'] = 'false';
          $output['data'] = $response['data'];
          $this->response($output, REST_Controller::HTTP_CONFLICT);
        }
      }
  }

  public function getMethod_get()
    {
      $type = $this->get('type');
      if($type)
      {
        $response = $this->common->getCatDetails($type);
        if (!empty($response))
    {
      $output['data']           = $response;
      $this->response($output,REST_Controller::HTTP_OK);
    }
    else
    {
    $output['data']           = $response;
      $this->response($output,REST_Controller::HTTP_CONFLICT);
    }
      }
    }

  public function getWhere_get()
  {
    $type = $this->get('type');
    $id = $this->get('id');
    if($type && $id)
    {
      $isErrr = false;
			switch ($type)
			{
				case 'cat':
        $response = $this->common->catDetails($id);
					break;
          case 'parentCats':
          $response = $this->common->parentCats($id);
          //echo $this->db->last_query(); die;
  					break;


      }
      if(!$isErrr)
      {
        if (!empty($response))
        {
          $output['success']           = true;
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
      }
      else
      {
        $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
      }
    }
  }

  public function addApdmUser_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if (!empty($postData))
    {
		$checkUserEmail = array(
			'userName' => $postData['userName'],
			'userEmail' => $postData['userEmail']
		);
		$resultReturn = $this->common->checkexist('pps_users',$checkUserEmail);
        if($resultReturn == 0)
        {
      			$userData = array(
      				'userName' => $postData['userName'],
      				'userEmail' => $postData['userEmail'],
      				'userPassword' => md5($postData['userPassword']),
      				'userType' => $postData['userType'],
      				'userStatus' => $postData['userStatus']
                  );
      			$storeTableData = array(
      				'apdmFirstName' => $postData['apdmFirstName'],
      				'apdmLastName' => $postData['apdmLastName'],
      				'apdmCity' => $postData['apdmCity'],
      				//'apdmState' => $postData['apdmState'],
      				//'apdmCountry' => $postData['apdmCountry'],
      				'apdmEmail' => $postData['apdmEmail'],
      				'apdmMobileNo' => $postData['apdmMobileNo'],
      				'apdmAddress' => $postData['apdmAddress']
      			);

            $data = array('userData'=>$userData,'storeTableData'=>$storeTableData);
            if(isset($postData['readOnly']) && $postData['readOnly'] == 1)
            {
              $data['userData']['userType'] = 9;
              $response = $this->login->insertData('apdm',$data,'pps_users','pps_exapl');
            }
            else
            $response = $this->login->insertData('apdm',$data,'pps_users','pps_distributor');

    			  if ($response['success'] == true)
    			  {
        				$output['success'] 	= 'true';
        				$output['data'] 	= $response['data'];
        				$output['userID'] 	= $response['userID'];
        				$this->response($output, REST_Controller::HTTP_OK);
    			  }
    			  else
    			  {
        				$output['success'] = 'false';
        				$output['data'] = $response['message'];
        				$this->response($output, REST_Controller::HTTP_CONFLICT);
    			  }
  		}
  		else
  		{
  			$output['success'] = 'false';
  			$output['data'] = 'Username or Email already exists.';
  			$this->response($output, REST_Controller::HTTP_CONFLICT);
  		}
    }
  }

   /*  Update APDM User Details by User ID */
  public function updateApdmUserDetail_post()
  {
        $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
          $data = array(
                'apdmFirstName' => $postData['apdmFirstName'],
        'apdmLastName' => $postData['apdmLastName'],
        'apdmCity' => $postData['apdmCity'],
        // 'apdmState' => $postData['apdmState'],
        // 'apdmCountry' => $postData['apdmCountry'],
        'apdmEmail' => $postData['apdmEmail'],
        'apdmMobileNo' => $postData['apdmMobileNo'],
        'apdmAddress' => $postData['apdmAddress']
            );
            if(isset($postData['userPassword']))
            $data['userPassword'] = $postData['userPassword'];
            $response = $this->login->updateUserDetails('apdm',$data,$postData['userId']);
            if ($response['success'] == true)
            {
				$output['success'] 	= true;
				$output['data'] 	= 'Updated Successfully';
				$this->response($output, REST_Controller::HTTP_OK);
            }
            else
            {
				$output['success'] 	= 'false';
				$output['data'] 	= 'Not Updated...';
				$this->response($output, REST_Controller::HTTP_CONFLICT);
            }
        }
        else
        {
      $output['success'] 	= 'false';
      $output['data'] = 'Check your parameter. ';
            $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
        }
    }


	public function apdmUserListing_get()
    {
      $page = $this->get('page');
      $perPage = $this->get('perpage');
      $type = $this->get('type');
      if($this->get('text'))
      $text = $this->get('text');
      else
      $text = '';
      if ($page && $perPage)
      {
        if( $perPage <= 0 )
         $perPage = 10;

         if( $page <= 0 )
         $page = 1;

         $start = ($page-1) * $perPage;

        if($type == 9)
        $response   = $this->common->exAplList($start,$perPage,$type,$text);
        else
        $response   = $this->common->adpdmList($start,$perPage,$type,$text);

        if ($response)
        {
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $output['data']           = array();
          $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
      }
      else
      {
        $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
      }
    }

    public function apdmDetails_get()
    {
      $id = $this->get('apdmID');
      if($id)
      {
        $response = $this->common->apdmDetails($id);
        if (!empty($response))
        {
          $output['success']           = true;
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $output['data']           = $response;
          $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
      }
    }


    public function uploadImage_post()
    {
      $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
      if( $_FILES['file']['name'] == '' )
      {
        $result["success"] 	 = false;
        $result["error_msg"] = 'Please select an image.';
        $this->response($result,REST_Controller::HTTP_CONFLICT);
      }

      if( isset($_FILES) && $_FILES['file']['name'] != '' )
      {
        $fileName = '';
        if (!is_dir('./assets/uploads/catPics/'))
        {
          mkdir('./assets/uploads/catPics/', 0777, TRUE);
        }
        $config['upload_path']   = './assets/uploads/catPics/';
        $config['allowed_types'] = 'gif|jpg|png|tiff|tif|jpeg|bmp|BMPf';
        $this->load->library('upload', $config);
        if ($this->upload->do_upload('file'))
        {
          $data_upload 	   		= $this->upload->data();
          $fileName         		= $data_upload['file_name'];
          $result["success"] 	 = true;
          $result["filePath"] 	= base_url().'assets/uploads/catPics/'.$fileName;
          $result["fileName"] 	= $fileName;
          $this->response($result,REST_Controller::HTTP_OK);
        }
        if($this->upload->display_errors())
        {
          $error = $this->upload->display_errors();
          $result["success"] 	 = false;
          $result["error_msg"] = $error;
        }
        $this->response($result,REST_Controller::HTTP_CONFLICT);
      }
    }


        public function submitCat_post()
        {
			$rest_json 	= 	file_get_contents("php://input");
			$postData 	= 	json_decode($rest_json, true);
			if(!empty($postData))
			{
				if($postData['catParent'] == 0)
				{
				  $postData['catLevel'] = 0;
				}
				else
				{
				  $parent = $this->common->getrow('pps_cats',array('catId' => $postData['catParent']));
				  $postData['catLevel'] = $parent->catLevel + 1;
				}
				$response = $this->common->insert('pps_cats',$postData);
				if ($response['success'] == true)
				{
					$output['success'] 	= 'true';
					$output['catID'] 	= $response['data'];
					$output['data'] 	= 'Inserted Successfully';
					$this->response($output, REST_Controller::HTTP_OK);
				}
				else
				{
					$output['success'] 	= 'false';
					$output['catID'] 	= $response['data'];
					$output['data'] 	= 'Not Inserted...';
					$this->response($output, REST_Controller::HTTP_CONFLICT);
				}
			}
        }

		public function getCats_get()
        {
			$id = $this->get('parentCat');
			if($id)
			{
				$parent = $this->common->parentChildNested();

				$array_push = array();
				if(!empty($parent))
				{
					foreach($parent as $key=>$val)
					{
						$catId 			= $val['catId'];
						$catParent 		= $val['catParent'];
						$catName 		= $val['catName'];
						if(isset($val['children']))
						{
							$children 	=  $val['children'];
						}
						else
						{
							$children 		= array();
						}
						array_push($array_push,$catName);

						if(!empty($children))
						{
							foreach($children as $chkey=>$chval)
							{
								$childcatParent 		= $chval['catParent'];
								$childcatName 			= $chval['catName'];
								array_push($array_push,$childcatName);
							}
						}
					}
				}
				echo "<pre>";
				//print_r($array_push);
				print_r($parent);
				echo "</pre>";

			}
        }


        /*  Get All Genre Listing and also with Genre Search */
        public function bookStoreGetBookDetail_get()
        {
              $bookid = $this->get('bookid');
              $response = $this->login->getBookDetailById($bookid);
              if ($response['success'] == true)
              {
                  //$output['status']         = REST_Controller::HTTP_OK;
                  $output           = $response['data'];
                  $this->response($output,REST_Controller::HTTP_OK);
              }
              else
              {
                  $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
              }
        }

        public function getUnAssignedStores_get()
        {
    			$key  = $this->get('key');
    			$adpm = $this->get('adpm');
    			$response = $this->common->getUnAssignedStores($key,$adpm);
    			$this->response($response,REST_Controller::HTTP_OK);
        }

        public function getUnAssignedStoresExApl_get()
        {
          $key  = $this->get('key');
    			$adpm = $this->get('adpm');
    			$response = $this->common->getUnAssignedStoresExApl($key,$adpm);
    			$this->response($response,REST_Controller::HTTP_OK);
        }



      /*  Update Book Store User Detail with User ID */
      public function forgotPassword_put()
      {
        $emailAddress = $this->put('emailAddress');
        $deviceId = $this->put('deviceId');
        if(NULL !=$this->put('emailAddress'))
        {
            $response = $this->login->forgotPassword($emailAddress,$deviceId);
          //  echo "<pre>"; print_r($response); echo "</pre>"; die;
            if ($response['success'] == true)
            {
              $this->response(['status'=>REST_Controller::HTTP_OK], REST_Controller::HTTP_OK);
            }
            else
            {
                //$this->response($output, REST_Controller::HTTP_CONFLICT);
                $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
            }
        }
      }

      /*  Get All Genre Listing and also with Genre Search */
      public function bookStoreGetCountriesData_get()
      {
            $countryid = $this->get('countryid');
            $response  = $this->login->getCountryStates($countryid);
            if ($response['success'] == true)
            {
                //$output['status']         = REST_Controller::HTTP_OK;
                $output['data']           = $response['data'];
                $this->response($output,REST_Controller::HTTP_OK);
            }
            else
            {
                $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
            }
    }

    /*  Get All Orders Listing of Particular User using user ID */
    public function bookStoreGetMyOrders_get()
    {
          $page = ($this->get('page')) ? $this->get('page') : 0;
          $page = $this->perPageNum * $page;
          $userId = $this->get('userId');
          if(NULL != $userId)
          {
            $response = $this->login->getallMyOrdersData($this->perPageNum, $page, $userId);
            if ($response['success'] == true)
            {
                //$output['status']         = REST_Controller::HTTP_OK;
              //  $output['totalOrders']   = $response['totalRecords'];
                $output['data']           = $response['data'];
                $this->response($output,REST_Controller::HTTP_OK);
            }
            else
            {
                $this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
            }
          }
          else
          {
                $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
          }
      }

      /*  Get All Orders Listing of Particular User using user ID */
      public function bookStoreGetMyOrderItemsByOrderId_get()
      {
            $page     = ($this->get('page')) ? $this->get('page') : 0;
            $page     = $this->perPageNum * $page;
            $orderId  = $this->get('orderId');
            if(NULL != $orderId)
            {
              $response = $this->login->getOrderItemsByOrderId($this->perPageNum,$page, $orderId);
              if ($response['success'] == true)
              {
                  $output['data']           = $response['data'];
                  $output['totalRecords']   = $response['totalRecords'];
                  $this->response($output,REST_Controller::HTTP_OK);
              }
              else
              {
                  $this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
              }
            }
            else
            {
                  $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
            }
        }
    /*
     *  Logout
     */

     public function logout_get()
     {
          $Id       = $this->_get_key($this->get('ApiKey'))->id;
          $UserId   = $this->_get_key($this->get('ApiKey'))->UserId;
          $this->_delete_key($Id, $UserId);
          $this->response(['STATUS'=>REST_Controller::HTTP_OK, 'CONTENT'=>'Logout Successful'], REST_Controller::HTTP_OK);
     }

    public function addProductAddToCart_post()
    {
  		$rest_json = file_get_contents("php://input");
  		$postData  = json_decode($rest_json, true);
  		if ($postData)
  		{
  			$userId    	= $postData['userId'];
  			$userType   = $postData['userType'];
  			$productId  = $postData['productId'];
  			$quantity  	= $postData['quantity'];
  			$variationid  	= $postData['variationid'];
  			if(NULL != $userId && NULL != $productId && NULL != $quantity )
  			{
  				$response = $this->login->saveAddTocartMyOrders($userType,$userId,$productId,$quantity,$variationid);
  				if ($response['success'] == true)
  				{
  					$totalCartITems  = $this->login->getAddedCartItemsByUserId($userId);
  					$output['totalCartItems']  = $totalCartITems;
  					$output['data']            = $response['data'];
  					$output['success']            = true;
  					$this->response($output,REST_Controller::HTTP_OK);
  				}
  				else
  				{
  					$this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
  				}
  			}
  			else
  			{
  				$this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
  			}
  		}
  		else
  		{
              $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
  		}
    }

	public function updateAddToCartProductQty_post()
    {
       $rest_json = file_get_contents("php://input");
       $postData  = json_decode($rest_json, true);
		if ($postData)
		{
			$userId    = $postData['userId'];
			$productId = $postData['productId'];
			$quantity  = $postData['quantity'];
			$bkId      = $postData['bkId'];
			if(NULL != $userId && NULL != $productId && NULL != $quantity && NULL != $bkId )
			{
				$response = $this->login->updateAddTocartProductQty($userId,$productId,$quantity,$bkId);
				if ($response['success'] == true)
				{
				  $totalCartITems  = $this->login->getAddedCartItemsByUserId($userId);
				//   $output['status']         = REST_Controller::HTTP_OK;
				   $output['totalCartItems']  = $totalCartITems;
				   $output['data']            = $response['data'];
				   $output['success']            = true;
				   $this->response($output,REST_Controller::HTTP_OK);
				}
				else
				{
				   $this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
				}
			}
			else
			{
				$this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
            $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
    }

	 public function GetAllProductFromAddToCart_get()
     {
       $userId = $this->get('userId');
       if(NULL != $userId)
       {
         $response     = $this->login->getAllAddedProductsFromAddtoCartByUserId($userId);

         if ($response['success'] == true)
         {
            // $output['status']         = REST_Controller::HTTP_OK;
             $output['totalItems']    = $response['num_results'];
             $output['totalItemPrice']= $response['totalItemPrice'];
             $output['data']          = $response['data'];
             $this->response($output,REST_Controller::HTTP_OK);
         }
         else
         {
             $this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
         }
       }
       else
       {
         $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
       }
     }

     public function DeleteUserProductFromAddToCart_get()
     {
       $bkId = $this->get('bkId');
       if(NULL != $bkId)
       {
         $response = $this->login->deleteProductfromAddTocart($bkId);
         if ($response['success'] == true)
         {
            // $output['status']          = REST_Controller::HTTP_OK;
             $output['data']            = 'removed';
             $this->response($output,REST_Controller::HTTP_OK);
         }
         else
         {
             $this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
         }
       }
       else
       {
         $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
       }
     }

     /*  Get All Genre Listing and also with Genre Search */
     public function userStoreSaveMyOrders_post()
     {
       $rest_json = file_get_contents("php://input");
       $postData  = json_decode($rest_json, true);
    		if ($postData)
           {

             $get = $this->common->getrow("pps_setting_values",array('setName' => 'priceLimit'));
             if(!empty($get))
             {
               if($get->setStatus == 1 && $postData['total'] > 250)
               {
                 $output['data']           = 'You have exceeded your limit of $250';
                 $output['error']           = true;
                 $this->response($output,REST_Controller::HTTP_OK);
               }
             }

              if(isset($postData['orderForStore']))
              {
                $for  = $postData['orderForStore'];
              }
              else
              {
                $for  = '';
              }
              $response = $this->login->saveMyOrders($postData['userType'],$postData['userId'],$postData['orderLevel'],$for);
              if ($response['success'] == true)
              {
                $output['data']           = $response['data'];
                $output['success']           = true;
                $this->response($output,REST_Controller::HTTP_OK);
              }
              else if ($response['notAvl'] == true)
              {
                $output['data']             = $response['data'];
                $output['success']           = false;
                $output['error']           = true;
                $this->response($output,REST_Controller::HTTP_OK);
              }
              else
              {
                $output['data']    = 'Error Occured';
                $this->response($output, REST_Controller::HTTP_CONFLICT);
              }
           }
           else
           {
                 $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
           }
       }

       public function updatePassword_post() {
           $rest_json = file_get_contents("php://input");
           $postData = json_decode($rest_json, true);
           if ($postData) {
               $passwordExist = $this->login->checkPassword($postData['oldPassword'], $postData['userId']);
               if ($passwordExist['success'] == false) {
                   $output['success'] = 'false';
                   $output['error_message'] = $passwordExist['error_message'];
                   $this->response($output, REST_Controller::HTTP_CONFLICT);
               }
               $response = $this->login->updatePassword($postData);
               if ($response['success'] == true) {
                   $output['success'] = 'true';
                   $output['success_message'] = $response['success_message'];
                   $this->response($output);
               } else {
                   $output['success'] = 'false';
                   $output['error_message'] = $response['error_message'];
                   $this->response($output, REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
               }
           } else {
               $output['success'] = 'false';
               $output['error_message'] = 'Check your parameter.';
               $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
           }
       }


       public function checkOutNewAddedBooks_post() {
           $rest_json = file_get_contents("php://input");
           $postData = json_decode($rest_json, true);
           if ($postData) {
               $response = $this->login->checkOutNewAddedBooks($postData);
               if ($response['success'] == true) {
                   $output['success'] = ' true';
                   $output['success_message'] = $response['success_message'];
                   $this->response($output);
               } else {
                   $output['success'] = 'false';
                   $output['error_message'] = $response['error_message'];
                   $this->response($output, REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
               }
           } else {
               $output[' success'] = 'false';
               $output['error_message'] = 'Check your parameter. ';
               $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
           }
       }
       // get latest notification

    public function bookNotificationHistory_get()
    {
        $response = $this->login->getLatestBooksData();
        //print_r($response); die;
        if ($response['success'] == true)
        {
          //  $output['status']         = REST_Controller::HTTP_OK;
            $output['totalRecords']   = $response['totalRecords'];
            $output['data']           = $response['data'];
            $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {

        $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
        }
    }

    public function getCatss_get()
    {
        $response = $this->common->getCatss();
        if ($response)
        {
            $output['data']           = $response;
            $output['success']        = true;
            $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
            $output['data']           = array();
            $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
    }

    public function update_post()
    {
      $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
      if(!empty($postData))
      {
        if($postData['type'] == 'cat')
        {
          $id = $postData['catId'];
          unset($postData['catId']);
          unset($postData['type']);
          if($postData['catParent'] == 0)
  				{
  				  $postData['catLevel'] = 0;
  				}
  				else
  				{
  				  $parent = $this->common->getrow('pps_cats',array('catId' => $postData['catParent']));
  				  $postData['catLevel'] = $parent->catLevel + 1;
  				}

          $response = $this->common->update(array('catId' => $id),$postData,'pps_cats');
        }

        else if($postData['type'] == 'productStockStatus')
        {
          $id = $postData['id'];
          unset($postData['id']);
          unset($postData['type']);
          $response = $this->common->update(array('productID' => $id),$postData,'pps_products');
        }

        else if($postData['type'] == 'ProductIsAactive')
        {
          $id = $postData['id'];
          unset($postData['id']);
          unset($postData['type']);
          $response = $this->common->update(array('productID' => $id),$postData,'pps_products');
        }

        else if($postData['type'] == 'PriceLimit')
        {
          unset($postData['type']);
          $response = $this->common->update(array('setName' => 'priceLimit'),$postData,'pps_setting_values');
        }

        else if($postData['type'] == 'orderTrackNumber')
        {
          unset($postData['type']);
          $num  = $postData['orderNumber'];
          unset($postData['orderNumber']);
          $orderTrackNumber = $postData['orderTrackNumber'];
          $response = $this->common->update(array('orderNumber' => $num ),$postData,'pps_orders');
          $apl = $this->common->AplandStorewithOrderNumber($num);


          $to = array();

          if($apl->apdmEmail != '')
          $to[]  = $apl->apdmEmail;

          if($apl->userEmail != '')
          $to[]  = $apl->userEmail;

          $template = "
          Your Order number $num is shipped \r\n,
      			Tracking number of order is : $orderTrackNumber \r\n

      			";
            // print_r($to);die;
      		$result = $this->login->sendEmailMultiple($to,'',$template,'Order Shipped');
        }


        if ($response == true)
        {
          $output['success'] 	= 'true';
          $output['data'] 	= 'Updated Successfully';
          $this->response($output, REST_Controller::HTTP_OK);
        }
        else
        {
          $output['success'] 	= 'false';
          $output['data'] 	= 'Not Updated...';
          $this->response($output, REST_Controller::HTTP_CONFLICT);
        }
      }
      else
      {
          $output['success'] 	= 'false';
          $output['data'] = 'Check your parameter. ';
          $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
      }
    }

	public function saveProducts_post()
	{
		$rest_json 	= 	file_get_contents("php://input");
		$postData 	= 	json_decode($rest_json, true);
		if(NULL !=$postData)
		{
			$response = $this->common->productVariationInsert($postData,'products');
			if ($response['success'] == true)
			{
				$output['success'] 		= 'true';
				$output['data'] 		= $response['data'];
				$output['productID'] 	= $response['productID'];
				$this->response($output, REST_Controller::HTTP_OK);
			}
			else
			{
				$output['success'] 	= 'false';
				$output['data'] 	= $response['data'];
				$this->response($output, REST_Controller::HTTP_CONFLICT);
			}
		}
	}

	public function productListingg_post()
    {
		$rest_json 	= 	file_get_contents("php://input");
		$postData 	= 	json_decode($rest_json, true);
		if(NULL !=$postData)
		{
		$page 		= $postData['page'];
		$perPage 	= $postData['perpage'];
		$cats 		= $postData['cats'];
		$cat 		= $postData['cat'];
    $store = false;

    if(isset($postData['store']) && $postData['store'] == true)
    {
      $store = true;
    }
		//echo "<pre>"; print_r($postData); echo "</pre>";
		//if ($page && $perPage)
		//{
			if( $perPage <= 0 )
			 $perPage = 10;

			 if( $page <= 0 )
			 $page = 1;

			$start = ($page-1) * $perPage;

			$response   = $this->common->productList($start,$perPage,$cats,$cat,$store);
			if ($response)
			{
        $output['success']           = true;
			  $output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
			  $output['data']           = array();
			  $this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
  }

	public function getProductDetail_get()
	{
		$productId = $this->get('productId');
		if(NULL != $productId)
		{
			$response = $this->login->getProductDetails($productId);
      $response['data']->classes = $this->common->get('pps_products_classes',array('productID' => $productId));
			if ($response['success'] == true)
			{
				$output['status']       = REST_Controller::HTTP_OK;
				$output['data']         = $response['data'];
				$this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
				$output['data']           = $response['data'];
				$this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
	}


  public function getadpmorders_get()
  {
    $apdm = $this->get('apdm');
		if(NULL != $apdm)
		{
			$response = $this->common->getapdmorders($apdm);
			if ($response)
			{
				$output['status']       = REST_Controller::HTTP_OK;
				$output['data']         = $response;
				$this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
				$this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
  }



	public function productListing_post()
    {
		$rest_json 	= 	file_get_contents("php://input");
		$postData 	= 	json_decode($rest_json, true);
		if(NULL !=$postData)
		{
		$page 		= $postData['page'];
		$perPage 	= $postData['perpage'];
	//	$cats 		= array('1','2','3','4','5','6','7','8','9','10');
		$cats 		= $postData['cats'];
    $cat 		= isset($postData['cat']) ? $postData['cat'] : '';

    $LoggedIn 		= isset($postData['StoreLoggedIn']) ? $postData['StoreLoggedIn'] : '';

    $store = false;

    if(isset($postData['store']) && $postData['store'] == true)
    {
      $store = true;
    }

    $text = '';

    if(isset($postData['text']))
    {
      $text = $postData['text'];
    }
		//echo "<pre>"; print_r($postData); echo "</pre>";
		//if ($page && $perPage)
		//{
			if( $perPage <= 0 )
			 $perPage = 10;

			 if( $page <= 0 )
			 $page = 1;

			$start = ($page-1) * $perPage;

			$response   = $this->common->productListNew($start,$perPage,$cats,$cat,$store,$text,$LoggedIn);
			if ($response)
			{
        $output['success']           = true;
			  $output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
			  $output['data']           = array();
			  $this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
    }

  public function getAdpmStores_get()
  {
    $apdm = $this->get('apdm');
    $type = $this->get('type');
		if(NULL != $apdm)
		{
      if($type == 9) // if exapl
      $response = $this->common->getExAplStores($apdm);
      else
			$response = $this->common->getAdpmStores($apdm); //if apl

			if ($response)
			{
				$output['status']       = REST_Controller::HTTP_OK;
				$output['data']         = $response;
				$this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
				$this->response(['status'=>REST_Controller::HTTP_CONFLICT], REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
  }



  public function updatefun_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if(!empty($postData))
    {
      if($postData['type'] == 'orderStatus')
      {
        $ok = $this->common->update(array('orderNumber'=>$postData['ref']),$postData['data'],'pps_orders');
        if($ok)
        {
          $output['status']       = REST_Controller::HTTP_OK;
  				$output['data']         = 'Successfully Updated';
  				$this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $this->response($output,REST_Controller::HTTP_CONFLICT);
        }
      }
    }
    else
    {
      $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
    }
  }

    public function customerOrders_get()
  {
    $cus = $this->get('cus');
    $page = $this->get('page');
    $perpage = $this->get('perpage');

    if ($page && $perPage)
    {
      if( $perPage <= 0 )
       $perPage = 10;

       if( $page <= 0 )
       $page = 1;

       $start = ($page-1) * $perPage;
    }


    if(NULL != $cus)
    {
      $response = $this->common->customerOrders_get($cus,$start,$perpage);
      if ($response)
      {
        $output['status']       = REST_Controller::HTTP_OK;
        $output['data']         = $response;
        $this->response($output,REST_Controller::HTTP_OK);
      }
      else
      {
        $output['success']       = 'false';
        $this->response($output,REST_Controller::HTTP_CONFLICT);
      }
    }
    else
    {
      $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
    }
  }




  public function trackOrder($orderNo)
  {
    require_once(APPPATH . 'third_party/fedex/fedex-common.php5');
    $path_to_wsdl = APPPATH.'third_party/fedex/TrackService_v14.wsdl';

    ini_set("soap.wsdl_cache_enabled", "0");
    libxml_disable_entity_loader(false);

    // echo $path_to_wsdl;
    // echo base_url().'TrackService_v14.wsdl';
    $options = array(
        'cache_wsdl' => 0,
        'trace' => 1,
        'stream_context' => stream_context_create(array(
              'ssl' => array(
                   'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
              )
        )));
    $client = new SoapClient(base_url().'TrackService_v14.wsdl', $options); // Refer to http://us3.php.net/manual/en/ref.soap.php for more information


    $request['WebAuthenticationDetail'] = array(
        'ParentCredential' => array(
            'Key' => getProperty('parentkey'),
            'Password' => getProperty('parentpassword')
        ),
        'UserCredential' => array(
            'Key' => getProperty('key'),
            'Password' => getProperty('password')
        )
    );

    $request['ClientDetail'] = array(
        'AccountNumber' => getProperty('shipaccount'),
        'MeterNumber' => getProperty('meter')
    );
    $request['TransactionDetail'] = array('CustomerTransactionId' => 'Track By Number_v14');
    $request['Version'] = array(
        'ServiceId' => 'trck',
        'Major' => '14',
        'Intermediate' => '0',
        'Minor' => '0'
    );
    $request['SelectionDetails'] = array(
        'PackageIdentifier' => array(
            'Type' => 'TRACKING_NUMBER_OR_DOORTAG',
            'Value' => $orderNo, // Replace 'XXX' with a valid tracking identifier
        )
    );

    // echo "<pre>"; print_r($request);die;

    try
    {
        if (setEndpoint('changeEndpoint'))
        {
            $newLocation = $client->__setLocation(setEndpoint('endpoint'));
        }

        $response = $client->track($request);
        // print_r($response);
        // die;
        // return $response;
        #echo $trackingNum."<br>";
        return $response->CompletedTrackDetails->TrackDetails;
        #return $response -> CompletedTrackDetails -> TrackDetails -> Events;
        #echo $trackingNum."<br>";
      //  echo "<pre>"; print_r($response);die('asdfasdf');
    } catch (SoapFault $exception) {
        printFault($exception, $client);
    }

  }

  public Function orderDetails_get()
	{
		$cus = $this->get('orderno');
		if(NULL != $cus)
		{
		  $response = $this->common->orderDetails($cus);
      $n = $this->common->findOrderTotalFromItems($response->orderId);
      if($n)
      $response->orderTotal = $n;
      if($response->orderTrackNumber != null &&  $response->orderTrackNumber != '')
      {
        $track =  $this->trackOrder($response->orderTrackNumber);
        if($track)
        {
          // print_r($track->Notification->Severity);
          if($track->Notification->Severity != 'ERROR' && $track->Notification->Severity != 'FAILURE')
          {
            $response->TrackDetails = array('success'  => true);
            $response->TrackDetails['data']['dates'] = $track->DatesOrTimes;
            // print_r($track);
            if(!empty($track->Events))
            {
              $response->TrackDetails['data']['event'] = $track->Events;
            }
            // print_r($track->DatesOrTimes);
          }
          else
          {
            $response->TrackDetails = array('error'  => 'Track Number is incorrect');
          }
        }
        else
        $response->TrackDetails = array('error'  => 'Error in fetching details from fedex');
      }
      else
      {
        $response->TrackDetails = array('error'  => 'Fedex Tracking number is not updated');
      }
      // $response->TrackDetails
		  if ($response)
		  {
  			$output['status']       = REST_Controller::HTTP_OK;
  			$output['data']         = $response;
  			$this->response($output,REST_Controller::HTTP_OK);
		  }
		  else
		  {
  			$output['success']       = 'false';
  			$this->response($output,REST_Controller::HTTP_CONFLICT);
		  }
		}
		else
		{
		  $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
	}


  /* RAvinder 01-12-2017 */
	public function requestStoreAccess_post()
	{
		$rest_json 	= 	file_get_contents("php://input");
		$postData 	= 	json_decode($rest_json, true);
		if(NULL !=$postData)
		{
			$response = $this->login->requestStoreAccessAdd($postData);
			if ($response['success'] == true)
			{
				$storeUsername = ucwords($response['storeUserName']);
				$this->sendEmailofRequestUser($storeUsername,$response['sys_mailEmail']);
				$output['success'] 		= 'true';
				$output['storeUserName']= $storeUsername;
				$output['sys_mailEmail']= $response['sys_mailEmail'];
				$output['data'] 		= $response['data'];
				$output['storeID'] 		= $response['storeUserId'];
				$this->response($output, REST_Controller::HTTP_OK);
			}
			else
			{
				$output['success'] 	= 'false';
				$output['data'] 	= $response['data'];
				$this->response($output, REST_Controller::HTTP_CONFLICT);
			}
		}

	}

	public function sendEmailofRequestUser($email,$name)
	{
		$template = "Response to Request for System Access

			Dear $name ,

			Thank you for your recent request to access our customer portal. We will review and let you know our decision, typically within the next 72 business hours. We apologize for the delay, but must take the time to verify the business and protect against unauthorized access. We greatly appreciate your interest and look forward to doing business with you in the future.

			If you have any questions, please email us at info@productprotectionsolutions.com.
			Thank you again,

			The Product Protection Solutions Team";
		$result = $this->login->sendEmail($email,$name,$template,'Thanks for Register.');
	}

	public function enableStoreUserRequest_get()
	{
		$storeID = $this->get('storeID');
		$status = $this->get('status');
		//echo $storeID; die;
		if(NULL != $storeID)
		{
			$response = $this->login->getSystemStoreDetailById($storeID,$status);
			if ($response['success'] == true)
			{
				$output['success'] 	= 'true';
				$output['data'] 	= $response['data'];
				$output['password'] = $response['userPassword'];
				$output['email'] 	= $response['email'];
				$output['name'] 	= $response['userName'];
				$this->sendEmailtoEnabledUser($response['email'],$response['userName'],$response['userPassword']);
				$this->response($output, REST_Controller::HTTP_OK);
			}
			else
			{
				$output['success'] 	= 'false';
				$output['data'] 	= $response['data'];
				$this->response($output, REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
		  $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}

	}

	public function sendEmailtoEnabledUser($email,$name,$password)
	{
		$template = "Response to Request for System Access

			Dear $name ,

			Your account has been activated.

			Please login with following Details :-

			Email : $email
			Password : $password

			Thanks for Connecting with PPS.";

		$result = $this->login->sendEmail($email,$name,$template,'Thanks for Register.');
	}

  public function sysAccessReq_get()
  {
			$response           = $this->login->getSystemAccessRequest();
      if ($response['success'] == true)
			{
			      $output['success'] 	= 'true';
			      $output['data'] 	  = $response['data'];
			      $this->response($output, REST_Controller::HTTP_OK);
      }
      else
      {
          $output['success'] 	= 'false';
          $output['data'] 	  = $response['data'];
          $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
      }

  }

   public function addAdminData_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if (!empty($postData))
    {
      $checkUserEmail = array(
        'userName' => $postData['userName'],
        'userEmail' => $postData['userEmail']
      );
      $resultReturn = $this->common->checkexist('pps_users',$checkUserEmail);
    //  echo "<pre>"; print_r($resultReturn); echo "</pre>"; die;
       if($resultReturn == 0)
       {
          $userData = array(
            'userName' => $postData['userName'],
            'userEmail' => $postData['userEmail'],
            'userPassword' => md5($postData['userPassword']),
            'userType' => $postData['userType'],
            'userStatus' => $postData['userStatus']
                );
          $storeTableData = array(
            'adminName' => $postData['adminName'],
            'adminEmail' => $postData['adminEmail'],
            'adminMobile' => $postData['adminMobile'],
            'adminAddress' => $postData['adminAddress'],
            'adminCity' => $postData['adminCity'],
            'adminState' => $postData['adminState'],
            'adminZip' => $postData['adminZip'],
            'adminCountry' => $postData['adminCountry']
          );
          $data = array('userData'=>$userData,'adminTableData'=>$storeTableData);
          $response = $this->login->insertData('admin',$data,'pps_users','pps_admin');
          if ($response['success'] == true)
          {
            $output['success'] 	= 'true';
            $output['data'] 	= $response['data'];
            $output['userID'] 	= $response['userID'];
            $this->response($output, REST_Controller::HTTP_OK);
          }
          else
          {
            $output['success'] = 'false';
            $output['data'] = $response['message'];
            $this->response($output, REST_Controller::HTTP_CONFLICT);
          }
        }
        else
        {
          $output['success'] = 'false';
          $output['data'] = 'Username or Email already exists.';
          $this->response($output, REST_Controller::HTTP_CONFLICT);
        }
    }
  }

	public function updateAdminDetail_post()
	{
        $rest_json 	= 	file_get_contents("php://input");
        // print_r($rest_json);die;
		$postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
			$data = array(
				'adminName' => $postData['adminName'],
				'adminEmail' => $postData['adminEmail'],
				'adminMobile' => $postData['adminMobile'],
				'adminAddress' => $postData['adminAddress'],
				'adminCity' => $postData['adminCity'],
				'adminState' => $postData['adminState'],
				'adminZip' => $postData['adminZip'],
				'adminCountry' => $postData['adminCountry']
			);

            if(isset($postData['userPassword']))
			$data['userPassword'] = $postData['userPassword'];

			$response = $this->login->updateUserDetails('admin',$data,$postData['userId']);
            if ($response['success'] == true)
            {
				$output['success'] 	= 'true';
				$output['data'] 	= 'Updated Successfully';
				$this->response($output, REST_Controller::HTTP_OK);
            }
            else
            {
				$output['success'] 	= 'false';
				$output['data'] 	= 'Not Updated...';
				$this->response($output, REST_Controller::HTTP_CONFLICT);

            }
        }
        else
        {
			$output['success'] 	= 'false';
			$output['data'] = 'Check your parameter. ';
            $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
        }
    }

    public function adminUserListing_get()    {
        $page = $this->get('page');
        $perPage = $this->get('perpage');
        if ($page && $perPage)
        {
          if( $perPage <= 0 )
           $perPage = 10;

           if( $page <= 0 )
           $page = 1;

           $start = ($page-1) * $perPage;

          $response   = $this->login->adminUserList($start,$perPage);
          if ($response)
          {
            $output['data']           = $response;
            $this->response($output,REST_Controller::HTTP_OK);
          }
          else
          {
            $output['data']           = array();
            $this->response($output,REST_Controller::HTTP_CONFLICT);
          }
        }
        else
        {
          $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
        }
      }

      public function getAdminDetails_get($admin)
      {
          $response   = $this->login->getAdminDetails($admin);
          if ($response)
          {
            $output['data']           = $response;
            $this->response($output,REST_Controller::HTTP_OK);
          }
          else
          {
            $output['data']           = array();
            $this->response($output,REST_Controller::HTTP_CONFLICT);
          }
      }


  public function getPortalOrders_get()
  {
    $type = $this->get('type');
    if(NULL != $type)
    {
      $page = $this->get('page');
      $perPage = $this->get('perpage');

      if ($page && $perPage)
      {
        if( $perPage <= 0 )
         $perPage = 10;

         if( $page <= 0 )
         $page = 1;

         $start = ($page-1) * $perPage;
      }

      $error = false;
			if($type == 'admin-apdm')
			{
				$response = $this->common->getAdminApdmOrders($this->get('text'),$start,$perpage);
			}
			else if($type == 'admin-approved')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perpage);
			}
			else if($type == 'apdm-my')
			{
				$response = $this->common->getapdmorders($this->get('apdm'),'my',$this->get('text'),$start,$perpage);
			}
      else if($type == 'exapl-my')
			{
				$response = $this->common->getexaplorders($this->get('apdm'),'my',$this->get('text'),$start,$perpage);
			}
			else if($type == 'apdm-stores')
			{
				$response = $this->common->getapdmorders($this->get('apdm'),'store',$this->get('text'),$start,$perpage);
			}
      else if($type == 'exapl-stores')
			{
				$response = $this->common->getexaplstoreorders($this->get('apdm'),'store',$this->get('text'),$start,$perpage);
			}
			else if($type == 'admin-pending')
			{
				$response = $this->common->getAdminPendingOrders($this->get('text'),$start,$perpage);
			}
			else
			{
				$error = true;
			}
			if(!$error)
			{
        if ($response['data'])
        {
          foreach ($response['data'] as $key => $value)
          {
            $n = $this->common->findOrderTotalFromItems($value->orderId);
            if($n)
            $value->orderTotal = $n;

            if($value->orderTrackNumber != '')
            {
              $response['data'][$key]->Shipped = 1;
              $track = $this->trackOrder($value->orderTrackNumber);
              if($track)
              {
                // print_r($track->Notification->Severity);
                if($track->Notification->Severity != 'ERROR')
                {
                  // print_r($track);
                  if(!empty($track->Events))
                  {
                    // print_r($track->Events);die;
                    $value->Shipped = 1;
                  }
                  // print_r($track->DatesOrTimes);
                }
              }
              else
              {
                $value->Shipped = 1;
              }
            }
          }
				  $output['status']       = REST_Controller::HTTP_OK;
				  $output['data']         = $response;
				  $this->response($output,REST_Controller::HTTP_OK);
				}
				else
				{
				  $output['status']       = REST_Controller::HTTP_CONFLICT;
				  $this->response($output,REST_Controller::HTTP_CONFLICT);
				}
			}
			else
			{
				$output['status']       = REST_Controller::HTTP_CONFLICT;
				$this->response($output,REST_Controller::HTTP_CONFLICT);
			}
    }
    else
    {
      $this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
    }
  }

	public function downloadOrderPdf_get()
	{
		$orderNo = $this->get('orderno');
		if(NULL != $orderNo)
		{
      $this->common->update(array('orderNumber' => $orderNo),array('printed' => 1),'pps_orders');
			$output['orderDetails']	=  $this->common->orderDetails($orderNo);
			$html1 = $this->load->view('projectorderdetails_pdf', $output, TRUE);
			$this->generatePDF($html1, ucwords($orderNo.'-order'), '', 'D');
		}
	}

	public function generatePDF($html1 = NULL, $name = 'PDF', $path = null, $action = 'D')
	{
        ob_start();
        ob_clean();
        ini_set('memory_limit', '-1');
        require_once(APPPATH . 'third_party/tcpdf/tcpdf.php');
        $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
        $pdf->SetPrintHeader(false);
        $pdf->setFooterData(array(0, 64, 0), array(0, 64, 128));
        $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
        $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
		// set default monospaced font
        $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);
        // set margins
        $pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
        $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
        $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);
        // set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);
        // set image scale factor
        $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);
        $pdf->SetFont('dejavusans', '', 10);
        // add a page
        $pdf->AddPage();
        // output the HTML content
        $pdf->writeHTML($html1, true, false, true, false, '');
		$pdf->Output($path.$name . '.pdf', $action);
    }

	public function getApdmDashboardOrderDetails_get()
	{
		$userID = $this->get('userID');
		if($userID)
		{
			$response = $this->login->apdmDashboardOrderDetails($userID);
			if (!empty($response))
			{
        $output['success']           = true;
			  $output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
			$output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
	}

  public function aplAlter_get()
  {
    $user   = $this->get('user');
    $type   = $this->get('type');
    $usR   = $this->login->getrow('pps_users',array( 'userId' => $user ));
    if(!empty($usR))
    {
      if($type == 'apltoex')
      {
        $this->login->update(array( 'userId' => $user ),'pps_users',array( 'userType' => 9 ));
        $this->login->update(array( 'orderAddedBy' => $user ),'pps_orders',array( 'orderLevel' => 3 ));
        $dist     = $this->login->getrow('pps_distributor',array( 'apdmUserId' => $user ));
        $old = $dist->apdmID;
        unset($dist->apdmID);
        $insert   = $this->login->insert('pps_exapl',$dist);

        $asigns   = $this->login->getresult('pps_apdm_assigns',array( 'apdmID' => $old ));

        $this->db->where(array( 'apdmUserId' => $user ));
    		$this->db->delete('pps_distributor');

        $this->db->where(array( 'apdmID'=> $old ));
    		$this->db->delete('pps_apdm_assigns');

        foreach ($asigns as $key => $value)
        {
          unset($asigns[$key]->apdmID);
          unset($asigns[$key]->asgnId);
          $asigns[$key]->apdmID = $insert[1];
        }
        $this->common->insert_batch('pps_exapl_assigns',$asigns);
      }
    }
    $output['success']           = true;
    $output['data']           = 'Successfully Converted';
    $this->response($output,REST_Controller::HTTP_OK);
  }

	public function getAdminDashboardOrderDetails_get()
	{
		$userID = $this->get('userID');
		if($userID)
		{
			$response = $this->login->adminDashboardOrderDetails($userID);
			if (!empty($response))
			{
        $output['success']           = true;
			  $output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
			$output['data']           = $response;
			  $this->response($output,REST_Controller::HTTP_CONFLICT);
			}
		}
	}

	public function getCatsdata_get()
	{
		$parent = $this->common->parentChildCatNested();
		if(!empty($parent))
		{
			$postData 				  = 	$parent;
			$output['data']           = $postData;
			$this->response($output,REST_Controller::HTTP_OK);
		}
		else
		{
			$output['data']           = 'No Data found';
			$this->response($output,REST_Controller::HTTP_CONFLICT);
		}
	}

  public function changePassword_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    // print_r($rest_json);die;
    $postData 	= 	json_decode($rest_json, true);
		 if(!empty($postData))
		{
			$user = $this->common->getrow("pps_users", array( 'userId' => $postData['userId'] ));
			if(empty($user))
			{
				$result["success"] 	 = false;
				$result["error_msg"] = 'Something went wrong. Please try again';
			}
			else
			{
				if (md5($postData['current_password']) == $user->userPassword)
				{
					$password	  		=   md5($postData['password']);

					$response	= $this->common->update(array('userId'=>$postData['userId']),array('userPassword' => $password ),'pps_users');
					if( $response == 0 )
					{
						$result["success"] 		= false;
						$result["error_msg"] 	= 'Data not saved. Please try again.';
					}
					else
					{
						$result["success"] 				= true;
						$result["success_msg"] 		= 'Password changed successfully.';
					}
				}
				else
				{
						$result["success"] 		= false;
						$result["error_msg"] 	= 'Current password is wrong';
				}
			}
		}
		else
		{
			$result["success"] 	 = false;
			$result["error_msg"] = 'Parameters missing. Please try again.';
		}
		header('Content-Type: application/json');
		echo json_encode($result);exit;

  }

  public function getLimit_get()
  {
    $get = $this->common->getrow("pps_setting_values",array('setName' => 'priceLimit'));
    if(!empty($get))
    {
      if($get->setStatus == 1)
      {
        $result["success"] 	 = true;
  			$result["limit"] = 1;
      }
      else
      {
        $result["success"] 	 = true;
  			$result["limit"] = 0;
      }
    }
    else
    {
      $result["success"] 	 = true;
			$result["limit"] = 0;
    }
    header('Content-Type: application/json');
		echo json_encode($result);exit;
  }

  public function updateInventory_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if(!empty($postData))
    {
      // print_r($postData);
      // echo $postData['productID'];
      // print_r($postData['productVariations']);
      foreach ($postData['productVariations'] as $key => $value)
      {
        $this->common->update(array('productVarID' => $value['productVarID']),array('productVarItemQuantity' => $value['productVarItemQuantity']),'pps_products_variations');
      }
    }
    $result["success"] 	 = 'Updates Successfully';
    header('Content-Type: application/json');
    echo json_encode($result);exit;
  }

  public function storeImports_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if(!empty($postData))
    {
      $res = array();
      foreach ($postData['data'] as $key => $value)
      {
        if(isset($postData['data'][$key]['userName']))
        {
          $checkUserEmail = array(
            'userName'  => $postData['data'][$key]['userName'],
            'userEmail' => $postData['data'][$key]['userEmail']
          );
          $resultReturn = $this->common->checkexist('pps_users',$checkUserEmail);
        }
        else // if no credentials then generate random
        {
          $postData['data'][$key]['userName'] = $this->login->generateCredentials($postData['data'][$key]['storeName'],'username');
          $postData['data'][$key]['userEmail'] = $this->login->generateCredentials($postData['data'][$key]['storeName'],'useremail');
          $date = date("d M Y H:i:s");
          $postData['data'][$key]['userPassword'] = strtotime($date) . rand(0,9999);
          $resultReturn = 0;
        }
         if($resultReturn == 0)
         {
              $userData = array(
                'userName'      => $postData['data'][$key]['userName'],
                'userEmail'     => $postData['data'][$key]['userEmail'],
                'userPassword'  => md5($postData['data'][$key]['userPassword']),
                'userType'      => 2,
                'userStatus'    => 1
              );
              $storeTableData = array(
                'storeName'     => (isset($postData['data'][$key]['storeName']) ? $postData['data'][$key]['storeName'] : ''),
                'storeEmail'    => (isset($postData['data'][$key]['storeEmail']) ? $postData['data'][$key]['storeEmail'] : ''),
                'storeMobile'   => (isset($postData['data'][$key]['storeMobile']) ? $postData['data'][$key]['storeMobile'] : ''),
                'storeAddress'  => (isset($postData['data'][$key]['storeAddress']) ? $postData['data'][$key]['storeAddress'] : ''),
                'storeCity'     => (isset($postData['data'][$key]['storeCity']) ? $postData['data'][$key]['storeCity'] : ''),
                'storeState'    => (isset($postData['data'][$key]['storeState']) ? $postData['data'][$key]['storeState'] : ''),
                'storeZip'      => (isset($postData['data'][$key]['storeZip']) ? $postData['data'][$key]['storeZip'] : ''),
                'storeClass'    => (isset($postData['data'][$key]['storeClass']) ? $postData['data'][$key]['storeClass'] : '')
              );

              $data = array('userData'=>$userData,'storeTableData'=>$storeTableData);
              $response = $this->login->insertData('store',$data,'pps_users','pps_store');
              if ($response['success'] == true)
              {
                $res[$key] = 0; // ok Inserted
              }
              else
              {
                $res[$key] = 1; // Insert Error
              }
          }
          else
          {
            $res[$key] = 2; // already exist
          }
      }
    }
    header('Content-Type: application/json');
    echo json_encode(array('success' => true , 'response' => $res));exit;
  }


  public function getSettings_get()
  {
    $d = $this->common->getTable('pps_setting_values');
    header('Content-Type: application/json');
    echo json_encode(array('success' => true , 'data' => $d));exit;
  }

  public function uploadFile_post()
  {
    header("Access-Control-Allow-Origin: *");
    // other CORS headers if any...
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
    {
    	exit; // finish preflight CORS requests here
    }

    @set_time_limit(120 * 60);
    $targetDir = FCPATH."assets/uploads/catalogue/";
    $cleanupTargetDir = true; // Remove old files
    $maxFileAge = 5 * 3600; // Temp file age in seconds  }
    // Create target dir
    if (!file_exists($targetDir)) {
    	@mkdir($targetDir);
    }

    // Get a file name
    if (isset($_REQUEST["name"])) {
    	$fileName = $_REQUEST["name"];
    } elseif (!empty($_FILES)) {
    	$fileName = $_FILES["file"]["name"];
    } else {
    	$fileName = uniqid("file_");
    }

    $filePath = $targetDir . DIRECTORY_SEPARATOR . $fileName;

    $chunk = isset($_REQUEST["chunk"]) ? intval($_REQUEST["chunk"]) : 0;
    $chunks = isset($_REQUEST["chunks"]) ? intval($_REQUEST["chunks"]) : 0;

    // Remove old temp files
    if ($cleanupTargetDir)
    {

    	if (!is_dir($targetDir) || !$dir = opendir($targetDir)) {
    		die('{"jsonrpc" : "2.0", "error" : {"code": 100, "message": "Failed to open temp directory."}, "id" : "id"}');
    	}

    	while (($file = readdir($dir)) !== false) {
    		$tmpfilePath = $targetDir . DIRECTORY_SEPARATOR . $file;

    		// If temp file is current file proceed to the next
    		if ($tmpfilePath == "{$filePath}.part") {
    			continue;
    		}

    		// Remove temp file if it is older than the max age and is not the current file
    		if (preg_match('/\.part$/', $file) && (filemtime($tmpfilePath) < time() - $maxFileAge)) {
    			@unlink($tmpfilePath);
    		}
    	}
    	closedir($dir);
    }

    // Open temp file
    if (!$out = @fopen("{$filePath}.part", $chunks ? "ab" : "wb")) {
    	die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}');
    }

    if (!empty($_FILES))
    {
    	if ($_FILES["file"]["error"] || !is_uploaded_file($_FILES["file"]["tmp_name"])) {
    		die('{"jsonrpc" : "2.0", "error" : {"code": 103, "message": "Failed to move uploaded file."}, "id" : "id"}');
    	}

    	// Read binary input stream and append it to temp file
    	if (!$in = @fopen($_FILES["file"]["tmp_name"], "rb")) {
    		die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');
    	}
    }
    else
    {
    	if (!$in = @fopen("php://input", "rb")) {
    		die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');
    	}
    }

    while ($buff = fread($in, 4096))
    {
    	fwrite($out, $buff);
    }

    @fclose($out);
    @fclose($in);

    if (!$chunks || $chunk == $chunks - 1)
    {
    	// Strip the temp .part suffix off
    	rename("{$filePath}.part", $filePath);
      $this->common->update(array('setName' => 'catalogue') , array('setValue' => base_url()."assets/uploads/catalogue/".$fileName) , 'pps_setting_values');
      $a = array();
      $a['success'] = true;
      $a['url']     = base_url()."assets/uploads/catalogue/".$fileName;
      echo json_encode($a); exit;
    }
  }

}
