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

    function __construct() {
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
		//  $userType   =   $postData['usertype'];
          $deviceId   =   $postData['deviceId'];
          $registerId =   $postData['registerId'];
          $response = $this->login->clientApiLogin($username,$password);
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
        'storeCity' => $postData['storeCity']
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
  }


    /*  Update Store User Details by User ID */
  public function updateStoreUserDetail_put()
  {
        $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
          $data = array(
                'storeName'     => $postData['storeName'],
                'storeEmail'    => $postData['storeEmail'],
                'storeMobile'   => $postData['storeMobile'],
                'storeAddress'  => $postData['storeAddress'],
                'storeCity'    	=> $postData['storeCity'],
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
      if ($page && $perPage)
      {
        if( $perPage <= 0 )
         $perPage = 10;

         if( $page <= 0 )
         $page = 1;

         $start = ($page-1) * $perPage;

        $response   = $this->common->StoreList($start,$perPage);
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
        $output['data'] = $response['message'];
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
        'apdmState' => $postData['apdmState'],
        'apdmCountry' => $postData['apdmCountry'],
        'apdmEmail' => $postData['apdmEmail'],
        'apdmMobileNo' => $postData['apdmMobileNo'],
        'apdmAddress' => $postData['apdmAddress']
      );

      $data = array('userData'=>$userData,'storeTableData'=>$storeTableData);
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
  }

   /*  Update APDM User Details by User ID */
  public function updateApdmUserDetail_put()
  {
        $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
        if(NULL !=$postData['userId'])
        {
          $data = array(
                'apdmFirstName' => $postData['apdmFirstName'],
        'apdmLastName' => $postData['apdmLastName'],
        'apdmCity' => $postData['apdmCity'],
        'apdmState' => $postData['apdmState'],
        'apdmCountry' => $postData['apdmCountry'],
        'apdmEmail' => $postData['apdmEmail'],
        'apdmMobileNo' => $postData['apdmMobileNo'],
        'apdmAddress' => $postData['apdmAddress']
            );
            if(isset($postData['userPassword']))
            $data['userPassword'] = $postData['userPassword'];
            $response = $this->login->updateUserDetails('apdm',$data,$postData['userId']);
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


   public function apdmUserListing_get()
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

        $response   = $this->common->adpdmList($start,$perPage);
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

     public function bookStoreAddToCartProduct_post()
     {
       $rest_json = file_get_contents("php://input");
       $postData  = json_decode($rest_json, true);
       if ($postData)
       {
         $userId    = $postData['userId'];
         $bookid    = $postData['bookid'];
         $quantity  = $postData['quantity'];
         if(NULL != $userId && NULL != $bookid && NULL != $quantity )
         {
           $response = $this->login->saveAddTocartMyOrders($userId,$bookid,$quantity);
           if ($response['success'] == true)
           {
              $totalCartITems  = $this->login->getAddedCartItemsByUserId($userId);
            //   $output['status']         = REST_Controller::HTTP_OK;
               $output['totalCartItems']  = $totalCartITems;
               $output['data']            = $response['data'];
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

     public function bookStoreUpdateAddToCartProductQty_post()
     {
       $rest_json = file_get_contents("php://input");
       $postData  = json_decode($rest_json, true);
       if ($postData)
       {
         $userId    = $postData['userId'];
         $bookid    = $postData['bookid'];
         $quantity  = $postData['quantity'];
         $bkId      = $postData['bkId'];
         if(NULL != $userId && NULL != $bookid && NULL != $quantity && NULL != $bkId )
         {
           $response = $this->login->updateAddTocartProductQty($userId,$bookid,$quantity,$bkId);
           if ($response['success'] == true)
           {
              $totalCartITems  = $this->login->getAddedCartItemsByUserId($userId);
            //   $output['status']         = REST_Controller::HTTP_OK;
               $output['totalCartItems']  = $totalCartITems;
               $output['data']            = $response['data'];
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

     public function bookStoreGetAllProductFromAddToCart_get()
     {
       $userId = $this->get('userId');
       if(NULL != $userId)
       {
         $response        = $this->login->getAllAddedProductsFromAddtoCartByUserId($userId);

         if ($response['success'] == true)
         {
            // $output['status']         = REST_Controller::HTTP_OK;
             $output['totalItems']    = $response['num_results'];
             $output['totalItemPrice']= $response['totalItemPrice'];
             $output['totalNewItemPrice']= $response['totalNewItemPrice'];
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

     public function bookStoreDeleteProductFromAddToCart_get()
     {
       $bkId = $this->get('bkId');
       if(NULL != $bkId)
       {
         $response = $this->login->deleteBookfromAddTocart($bkId);
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
     public function bookStoreSaveMyOrders_post()
     {
           $userId      = $this->post('userId');
           $bookStoreId = $this->post('bookStoreId');
           if(NULL != $userId)
           {
             $response = $this->login->saveMyOrders($userId,$bookStoreId);
             if ($response['success'] == true)
             {
                // $output['status']         = REST_Controller::HTTP_OK;
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

    public function update_put()
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

}

//Book my saloon RESTful API using PHP & CodeIgniter
