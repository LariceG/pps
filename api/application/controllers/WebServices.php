<?php

defined('BASEPATH') OR exit('No direct script access allowed');
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
require_once($_SERVER['DOCUMENT_ROOT'].'/php_fedex/vendor/jeremy-dunn/php-fedex-api-wrapper/examples/credentials.php');
require_once($_SERVER['DOCUMENT_ROOT'].'/php_fedex/vendor/jeremy-dunn/php-fedex-api-wrapper/examples/bootstrap.php');

use FedEx\ShipService;
use FedEx\ShipService\ComplexType;
use FedEx\ShipService\SimpleType;
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
        $this->load->library('encrypt');
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
          $response['data']->totalOrder = $this->common->totalOrder($userId)->total;
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
          $response['data']->apiKey     = $apiKey;
          $output['status']         		= REST_Controller::HTTP_OK;
          $output['data']           		= $response['data'];
          $output['settings']           = $this->common->getrow('pps_setting_values' , array('setName' => 'InstructionSheet'));
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
  public function insertMarketingUser_post()
  {
     $rest_json 	= 	file_get_contents("php://input");
     $postData 	= 	json_decode($rest_json, true);
     $checkEmail = $this->db->get_where('pps_marketing_users', array('email'=>$postData['email']))->row_array();
     if(!$checkEmail)
     {
         $data['name'] = $postData['username'];
         $data['email'] = $postData['email'];
         $data['phone'] = $postData['phone'];
         $data['company'] = $postData['company'];
         $data['status'] = '1';
         $data['password'] = md5($postData['password']);
         $data['created_at'] = date('Y-m-d');
         $data['last_login'] = date('Y-m-d');
         $insert = $this->db->insert('pps_marketing_users',$data);
        if ($insert)
        {
          $output['success'] = true;
          $output['status'] = REST_Controller::HTTP_OK;
          $output['message'] = 'User inserted successfully';
          $output['user_id'] = $this->db->insert_id();
          $this->response($output,REST_Controller::HTTP_OK);
        }
        else
        {
          $output['success'] = false;
          $output['status'] = REST_Controller::HTTP_OK;
          $output['message'] = 'error occured';
          $this->response($output,REST_Controller::HTTP_OK);
        }
      }
      else
      {
        $output['success'] = false;
        $output['status'] = REST_Controller::HTTP_OK;
        $output['message'] = 'Sorry, This email already exist!';
        $this->response($output,REST_Controller::HTTP_OK);
      }
  }
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
            if(isset($postData['region_id']))
            {
              $storeTableData['region_id'] = $postData['region_id'];
            }
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
  /* add region */
  public function addRegion_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if (!empty($postData))
    {

			  $response = $this->common->commonInsertData($postData,'pps_region');
			  if ($response['success'] == true)
			  {

  				$output['success'] 	= 'true';
  				$output['data'] 	= 'Region added successfully';
  				$this->response($output, REST_Controller::HTTP_OK);
			  }
			  else
			  {
  				$output['success'] = 'false';
  				$output['data'] = 'error occured';
  				$this->response($output, REST_Controller::HTTP_CONFLICT);
			  }
    }
    else
    {
      $output['success'] = 'false';
      $output['data'] = 'error occured';
      $this->response($output, REST_Controller::HTTP_CONFLICT);
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
            if(isset($postData['region_id']))
            {
              $data['region_id'] = $postData['region_id'];
            }
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
    public function changeMarketingUserPassword_post()
    {
          $rest_json 	= 	file_get_contents("php://input");
          // print_r($rest_json);die;
        $postData 	= 	json_decode($rest_json, true);
          if(NULL !=$postData['id'])
          {
            $data['password'] = md5($postData['password']);
          $response = $this->login->updateUserDetails('pps_marketing_users',$data,$postData['id']);
          if ($response['success'] == true)
          {
            $output['success'] 	= 'true';
            $output['data'] 	= 'Password Updated Successfully';
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
    public function pushNotificationToUser_post()
    {
          $rest_json 	= 	file_get_contents("php://input");
          // print_r($rest_json);die;
        $postData 	= 	json_decode($rest_json, true);
          if(NULL !=$postData['message'])
          {
            $users = $this->db->get_where('pps_marketing_users')->result_array();
            foreach ($users as $key => $user) {
            //print_r($user['notficationStatus']);die;
              if($user['notficationStatus'] == 1)
              {
              //  echo $user['notificationStatus'];die;
                if($user['device_type'] == 'IOS')
                {
                  $this->iosMarketingNotification($user['device_id'],$postData['message']);
                }
                else
                {
                  $this->androidMarketingNotification($user['device_id'],$postData['message']);
                }
              }
            }

            $output['success'] 	= 'true';
            $output['data'] 	= 'Notification Send Successfully';
            $this->response($output, REST_Controller::HTTP_OK);
          }
          else
          {
              $output['success'] 	= 'false';
              $output['data'] = 'Check your parameter. ';
              $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
          }
    }
    public function updateMarketingUserStatus_post()
    {
      $rest_json 	= 	file_get_contents("php://input");
      // print_r($rest_json);die;
      $postData 	= 	json_decode($rest_json, true);
      $dev_data['status'] = $postData['status'];
      $this->db->where('id',$postData['id']);
      $update = $this->db->update('pps_marketing_users',$dev_data);
      if($postData['status'] == '0')
      {
        $message = 'User deactivate succesfully';
      }
      else
      {
        $message = 'User activate succesfully';
      }
      $output['success'] 	= 'true';
      $output['data'] 	= $message;
      $this->response($output, REST_Controller::HTTP_OK);
    }
    public function pushNotificationToRadUser_post()
    {
          $rest_json 	= 	file_get_contents("php://input");
          // print_r($rest_json);die;
        $postData 	= 	json_decode($rest_json, true);
          if(NULL !=$postData['message'])
          {
            if($postData['device_type'] == 'ios')
            {
              $this->iosNotification($postData['device_id'],$postData['message']);
            }
            else
            {
              $this->androidNotification($postData['device_id'],$postData['message']);
            }
            $output['success'] 	= 'true';
            $output['data'] 	= 'Notification Send Successfully';
            $this->response($output, REST_Controller::HTTP_OK);
          }
          else
          {
              $output['success'] 	= 'false';
              $output['data'] = 'Check your parameter. ';
              $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
          }
    }

    public function updateNote_post()
    {
        $rest_json 	= 	file_get_contents("php://input");
        // print_r($rest_json);die;
        $postData 	= 	json_decode($rest_json, true);
          if(NULL !=$postData['note'])
          {
            $data['note'] = $postData['note'];
            $this->db->where('orderItemId',$postData['orderItemId']);
            $this->db->update('pps_orderitem',$data);
            $output['success'] 	= 'true';
            $output['data'] 	= 'Note updated successfully';
            $this->response($output, REST_Controller::HTTP_OK);
          }
          else
          {
              $output['success'] 	= 'false';
              $output['data'] = 'Check your parameter. ';
              $this->response($output, REST_Controller::HTTP_BAD_REQUEST);
          }
    }
    public function updateRegion_post()
    {
          $rest_json 	= 	file_get_contents("php://input");
          // print_r($rest_json);die;
        $postData 	= 	json_decode($rest_json, true);
          if(NULL !=$postData['id'])
          {
              $response = $this->login->updateUserDetails('region',$postData,$postData['id']);
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
    public function regionListing_get()
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

        $response   = $this->common->regionList($start,$perPage,$text);
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

    public function NotificationCount_get()
    {
        $response   = $this->common->NotificationCount();
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
    public function subscribedUsers_get()
    {
        $response   = $this->common->subscribedUsers();
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
    public function marketingUsers_get()
    {
      //       ini_set('display_errors', 1);
      // ini_set('display_startup_errors', 1);
      // error_reporting(E_ALL);
        $response   = $this->common->marketingUsers();
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

    public function storeNotificationListing_get()
    {
//       ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
      $page = $this->get('page');
      $perPage = $this->get('perpage');

      if ($page && $perPage)
      {
        if( $perPage <= 0 )
         $perPage = 10;

         if( $page <= 0 )
         $page = 1;

         $start = ($page-1) * $perPage;

        $response   = $this->common->NotificationList($start,$perPage);
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
    public function regionDetails_get()
    {
		$id = $this->get('regionid');
    //echo $id;die;
		if($id)
		{
			$response = $this->common->regionDetails($id);
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
  public function assignRegion_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
      $postData 	= 	json_decode($rest_json, true);
    //print_r($postData); die;
        if(NULL !=$postData)
        {
      $response = $this->common->assignRegion($postData,$postData['asignRegion']);
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
  public function getRegionsAssignes_get()
  {
//     error_reporting(E_ALL);
// ini_set('display_errors', 1);
        $apdm = $this->common->getRegionsAssignes($this->get('apdm'));
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
  public function getExRegionsAssignes_get()
  {
//     error_reporting(E_ALL);
// ini_set('display_errors', 1);
        $apdm = $this->common->getExRegionsAssignes($this->get('apdm'));
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
  public function getAssignesRegionStore_get()
  {
        $apdm = $this->common->getAssignesRegionStore($this->get('apdm'));
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

  public function duplicateProduct_get($id)
  {
    $productDetails = $this->db->get_where('pps_products',array('productID'=>$id))->row_array();
    unset($productDetails['productID']);
    $this->db->insert('pps_products',$productDetails);
    $insert_id = $this->db->insert_id();
    $classes = $this->db->select('productClass')->get_where('pps_products_classes',array('productID'=>$id))->result_array();
    $variations = $this->db->select('productVarPrice,productVarStatus,productVarDesc,productVarItemId,productVarItemQuantity')->get_where('pps_products_variations',array('productID'=>$id))->result_array();
    $upcs = $this->db->select('upc')->get_where('pps_products_upcs',array('productID'=>$id))->result_array();
    $groupPrices = $this->db->select('product_code,productCustomerGroup,productGroupPrice')->get_where('pps_products_group_price',array('productID'=>$id))->result_array();
    $tierPrices = $this->db->select('product_code,productCustomerTierGroup,productTierPrice,productTierPriceQuantity')->get_where('pps_products_tier_price',array('productID'=>$id))->result_array();
    foreach ($classes as $key => $class) {
      $class['productID'] = $insert_id;
      $this->db->insert('pps_products_classes',$class);
    }
    foreach ($groupPrices as $key => $groupPrice) {
      $groupPrice['productID'] = $insert_id;
      $this->db->insert('pps_products_group_price',$groupPrice);
    }
    foreach ($tierPrices as $key => $tierPrice) {
      $tierPrice['productID'] = $insert_id;
      $this->db->insert('pps_products_group_price',$tierPrice);
    }
    foreach ($variations as $key => $variation) {
      $variation['productID'] = $insert_id;
      $this->db->insert('pps_products_variations',$variation);
    }
    foreach ($upcs as $key => $upc) {
      $upc['productID'] = $insert_id;
      $this->db->insert('pps_products_upcs',$upc);
    }
    $output['success'] 	= 'true';
    $output['data'] 	= 'product duplicate successfully';
    $this->response($output, REST_Controller::HTTP_OK);
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

          case 'faq':
          $response = $this->common->getrow('pps_setting_values',array('setName' => 'faq'));
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

    public function exaplDetails_get()
    {
      $id = $this->get('apdmID');
      if($id)
      {
        $response = $this->common->exaplDetails($id);
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

          unset($postData['rad_portal']);
          unset($postData['seven_portal']);
          unset($postData['aeo_portal']);
          unset($postData['ecommerce_portal']);
          unset($postData['fmd_portal']);

				if($postData['catParent'] == 0)
				{
				  $postData['catLevel'] = 0;
				}
				else
				{
				  $parent = $this->common->getrow('pps_cats',array('catId' => $postData['catParent']));
				  $postData['catLevel'] = $parent->catLevel + 1;
				}
      //  print_r($postData);die;
				$response = $this->common->insert('pps_cats',$postData);
      //  echo $this->db->last_query();die;
				if ($response['success'] == true)
				{
					$output['success'] 	= 'true';
					$output['catID'] 	= $response['data'];
					$output['data'] 	= 'Added Successfully';
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
        public function getUnAssignedRegions_get()
        {
    			$key  = $this->get('key');
    			$adpm = $this->get('apdm');
    			$response = $this->common->getUnAssignedRegions($key,$adpm);
    			$this->response($response,REST_Controller::HTTP_OK);
        }
        public function getUnAssignedRegionStores_get()
        {
    			$key  = $this->get('key');
    			$adpm = $this->get('adpm');
    			$response = $this->common->getUnAssignedRegionStores($key,$adpm);
    			$this->response($response,REST_Controller::HTTP_OK);
        }
        public function getUnAssignedExRegions_get()
        {
    			$key  = $this->get('key');
    			$adpm = $this->get('apdm');
    			$response = $this->common->getUnAssignedExRegions($key,$adpm);
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

      public function forgotPasswordLink_post()
      {
        $rest_json 	= 	file_get_contents("php://input");
  			$postData 	= 	json_decode($rest_json, true);
  			if(!empty($postData))
        {
          $data = array();
          $get = $this->common->getrow("pps_users",array('userEmail' => $postData['com_email']));
          if($get->userType == 3)
          {
            $apl = $this->common->getrow("pps_distributor",array('apdmUserId' => $get->userId));
            $data['user'] = $apl->apdmFirstName.' '.$apl->apdmLastName;
          }
          else if($get->userType == 9)
          {
            $apl = $this->common->getrow("pps_exapl",array('apdmUserId' => $get->userId));
            $data['user'] = $apl->apdmFirstName.' '.$apl->apdmLastName;
          }
          else
          {
            $this->response( ['success'=>false,'message'=>'Sorry, This Email address you are not registered with us','status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);exit;
          }
          // print_r($data);
          // $this->common;
          $link = $this->encrypt->encode($postData['com_email']);
          $data['link'] = 'https://www.productprotectionsolutions.com/order/#/reset-account-password/'.$link;
          $date = date('Y-m-d H:i:s', strtotime('+1 hour'));

          $this->common->update(array('linkRef' => $postData['com_email']) , array('linkStatus' => 1) , "pps_temp_links" );

          $data['linkRef'] = $postData['com_email'];
          $apl = $this->common->insert("pps_temp_links",array('link' => $link , 'linkValid' => $date , 'linkRef' => $postData['com_email'] ));
          // $data['track'] = $orderTrackNumber;
          // echo "<pre>";
          // print_r($data);

          $template = $this->load->view('forgotpassword',$data,true);
          // print_r($to);die;
          $result = $this->login->sendEmailMultiple(array($postData['com_email']),'',$template,'PPS Password Assistance');
          if ($result)
          {
            $this->response(['status'=>REST_Controller::HTTP_OK], REST_Controller::HTTP_OK);
          }
          else
          {
              //$this->response($output, REST_Controller::HTTP_CONFLICT);
              $this->response( ['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
          }
          // forgotPasswordLink
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
       // error_reporting(E_ALL);
       // ini_set('display_errors', 1);
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
                $storeDetail = $this->common->getStoreDetails($response['data']);
                $message = 'Your order '.$response['data'].' for Store '.$storeDetail->storeName.' is placed.';
                if($storeDetail->notficationStatus == '1'){
                  if($storeDetail->deviceType == 'ios')
                  {
                    $this->iosNotification($storeDetail->deviceId,$message);
                  }
                  else
                  {
                    $this->androidNotification($storeDetail->deviceId,$message);
                  }
                }
                $output['data']           = $response['data'];
                $output['success']           = true;
                $this->response($output,REST_Controller::HTTP_OK);
              }
              else if ($response['notAvl'] == true)
              {
                $output['data']             = $response['data'];
                $output['products']         = $response['products'];
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
    public function getMasterCatss_get()
    {
        $response = $this->common->getMasterCatss();
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
     // die;
      if(!empty($postData))
      {
        if($postData['type'] == 'cat')
        {
          $id = $postData['catId'];
          unset($postData['catId']);
          unset($postData['type']);
          if(isset($postData['rad_portal']))
          {
            unset($postData['rad_portal']);
            unset($postData['seven_portal']);
            unset($postData['aeo_portal']);
            unset($postData['ecommerce_portal']);
            unset($postData['fmd_portal']);
          }
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
          $postData['orderStatus'] = 12;
          $response = $this->common->update(array('orderNumber' => $num ),$postData,'pps_orders');
          $apl = $this->common->AplandStorewithOrderNumber($num);

          $nottifyMessage = "Your Order number $num is shipped, Tracking number of order is : $orderTrackNumber";
          //print_r($apl);die;
          if($apl->notficationStatus == '1'){
            if($apl->deviceType == 'ios')
            {
              $this->iosNotification($apl->deviceId,$nottifyMessage);
            }
            else
            {
              $this->androidNotification($apl->deviceId,$nottifyMessage);
            }
          }
          $to = array();

          if($apl->apdmEmail != '')
          $to[]  = $apl->apdmEmail;

          if($apl->userEmail != '')
          $to[]  = $apl->userEmail;

          $template = "
          Your Order number $num is shipped \r\n,
      			Tracking number of order is : $orderTrackNumber \r\n

      			";

//             die;
//
            $data = array();
            $data['apl'] = $apl->apdmFirstName.' '.$apl->apdmLastName;
            $data['order'] = $num;
            $data['store'] = $apl->storeName;
            $data['track'] = $orderTrackNumber;
            // echo "<pre>";
            // print_r($data);

            $template = $this->load->view('email',$data,true);
            // print_r($to);die;

      		$result = $this->login->sendEmailMultiple($to,'',$template,'Order '.$num.' has Shipped');
        }
        else if($postData['type'] == 'orderStatus')
        {
          unset($postData['type']);
          if($postData['data']['orderStatus'] == 1 || $postData['data']['orderStatus'] == 2)
          {
            $postData['data']['orderApprovedOn'] = date('Y-m-d H:i:s');
            $response = $this->common->update($postData['where'],$postData['data'],'pps_orders');
          }
          else
          $response = $this->common->update($postData['where'],$postData['data'],'pps_orders');

          if($postData['data']['orderStatus'] == 9)
          {
            $apl = $this->common->AplandStorewithOrderNumber($postData['where']['orderNumber']);

            $data          = array();
            $data['user']  = $apl->storeName;
            $data['order'] = $postData['where']['orderNumber'];
            // echo "<pre>";
            // print_r($data);
            // print_r($apl->storeEmail);
            // die;

            $template = $this->load->view('backorderemail',$data,true);
            // print_r($to);die;
            $nottifyMessage = "Order ".ucfirst($data['order'])." is on backorder. Any items currently out of stock will ship as soon as they arrive. We apologize for the inconvenience. if you have any questions, please do not hesitate to contact us.";
            if($apl->notficationStatus == '1'){
              if($apl->deviceType == 'ios')
              {
                $this->iosNotification($apl->deviceId,$nottifyMessage);
              }
              else
              {
                $this->androidNotification($apl->deviceId,$nottifyMessage);
              }
            }
      		$result = $this->login->sendEmailMultiple(array($apl->storeEmail),'',$template,'Order '.$postData['where']['orderNumber'].' is on backorder');
          }
        }
        else if($postData['type'] == 'faq')
        {
          $response = $this->common->update(array('setName' => 'faq'),array('setValue' => $postData['setValue']),'pps_setting_values');
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
   public function updateOrderDetails_post()
   {
     $rest_json 	= 	file_get_contents("php://input");
     $postData 	= 	json_decode($rest_json, true);
     $apl = $this->common->AplandStorewithOrderNumber($postData['orderNumber']);
     $data          = array();
     $data['user']  = $apl->storeName;
     $data['order'] = $postData['orderNumber'];

     $template = $this->load->view('backorderemail',$data,true);
     // print_r($to);die;
     $nottifyMessage = "Order ".ucfirst($data['order'])." is on backorder. item (".$postData['orderItemName'].") is currently out of stock will ship as soon as they arrive. We apologize for the inconvenience. if you have any questions, please do not hesitate to contact us.";
     if($apl->notficationStatus == '1'){
       if($apl->deviceType == 'ios')
       {
         $this->iosNotification($apl->deviceId,$nottifyMessage);
       }
       else
       {
         $this->androidNotification($apl->deviceId,$nottifyMessage);
       }
     }
   $result = $this->login->sendEmailMultiple(array($apl->storeEmail),'',$template,'Order '.$postData['where']['orderNumber'].' is on backorder with item('.$postData['orderItemName'].')');
   $this->db->where('orderItemId',$postData['orderItemId']);
   $this->db->update('pps_orderitem',['isBackItem'=>'yes']);
   $output['success'] 	= 'true';
   $output['data'] 	= 'Updated Successfully';
   $this->response($output, REST_Controller::HTTP_OK);
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

			$response   = $this->common->productListNewRad($start,$perPage,$cats,$cat,$store);

      foreach ($response['result'] as $kkk => $vvv)
      {
        $response['result'][$kkk]->classes   = $this->common->get('pps_products_classes', array('productID' => $vvv->productID));
      }
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
			$response['data']->classes    = $this->common->get('pps_products_classes',array('productID' => $productId));
			$response['data']->productUpc = $this->common->get('pps_products_upcs',array('productID' => $productId));
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
      foreach ($response['result'] as $kkk => $vvv)
      {
        $response['result'][$kkk]->classes   = $this->common->get('pps_products_classes', array('productID' => $vvv->productID));
      }
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
    public function productListingRad_post()
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

  			$response   = $this->common->productListNewRad($start,$perPage,$cats,$cat,$store,$text,$LoggedIn);
        foreach ($response['result'] as $kkk => $vvv)
        {
          $response['result'][$kkk]->classes   = $this->common->get('pps_products_classes', array('productID' => $vvv->productID));
        }
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
				$output['last_query']         = $this->db->last_query();
				$this->response($output,REST_Controller::HTTP_OK);
			}
			else
			{
        $output['last_query']         = $this->db->last_query();
				$this->response(['status'=>REST_Controller::HTTP_CONFLICT , 'query' => $this->db->last_query() ], REST_Controller::HTTP_CONFLICT);
			}
		}
		else
		{
			$this->response(['status'=>REST_Controller::HTTP_BAD_REQUEST], REST_Controller::HTTP_CONFLICT);
		}
  }
  public function getexportReportData_get()
  {
       $stores = $this->db->get_where('pps_store')->result_array();
       $apls = $this->db->get_where('pps_exapl')->result_array();
				$output['status']       = REST_Controller::HTTP_OK;
        $output['apls']         = $apls;
				$output['stores']         = $stores;
				$this->response($output,REST_Controller::HTTP_OK);
  }

  public function updatefun_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    if(!empty($postData))
    {
      if($postData['type'] == 'orderStatus')
      {
        if($postData['data']['orderStatus'] == 1)
        {
          $postData['data']['orderApprovedOn'] = date('Y-m-d H:i:s');
          $ok = $this->common->update(array('orderNumber'=>$postData['ref']),$postData['data'],'pps_orders');
          $storeDetail = $this->common->getStoreDetails($postData['ref']);
          $message = 'Order '.$postData['ref'].' for Store '.$storeDetail->storeName.' has been Approved by Corporate.';
        }
        elseif($postData['data']['orderStatus'] == 00)
        {
          $postData['data']['orderApprovedOn'] = date('Y-m-d H:i:s');
          $postData['data']['orderStatus'] = '1';
          $postData['data']['fm_status'] = '1';
          $ok = $this->common->update(array('orderNumber'=>$postData['ref']),$postData['data'],'pps_orders');
          $storeDetail = $this->common->getStoreDetails($postData['ref']);
          $message = 'Order '.$postData['ref'].' for Store '.$storeDetail->storeName.' has been Approved by Corporate.';
        }
        else
        {
        $ok = $this->common->update(array('orderNumber'=>$postData['ref']),$postData['data'],'pps_orders');
        $storeDetail = $this->common->getStoreDetails($postData['ref']);
        $message = 'Order '.$postData['ref'].' for Store '.$storeDetail->storeName.'has been Cancelled.';
        }
        if($ok)
        {
         // if($storeDetail->addedBy == 'apdm'){
            if($storeDetail->notficationStatus == '1'){
              if($storeDetail->deviceType == 'ios')
              {
                $this->iosNotification($storeDetail->deviceId,$message);
              }
              else
              {
                $this->androidNotification($storeDetail->deviceId,$message);
              }
            }
         // }
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

  public function orderToCart_get($order)
  {
    $response = $this->common->orderDetails($order);
    $n = $this->common->findOrderTotalFromItems($response->orderId);
    if($n)
    $response->orderTotal = $n;
    $items  = $response->items;
    foreach ($items as $key => $value)
    {
      $aa     = array();
      $aa['userId'] = $value->orderItemAddedBy;
      $aa['productId'] = $value->orderItemProductId;
      $aa['variation_id'] = $value->orderItemProductVarId;
      $aa['quantity'] = $value->orderItemQty;
      $aa['addedOn'] = date('Y-m-d H:i:s');
      $aa['productVarItemId'] = 0;
      $cartItem = $this->common->get('pps_addtocart',array('productId' => $value->orderItemProductId , 'variation_id' => $value->orderItemProductVarId ));
      if(!empty($cartItem))
      $this->common->update(array('productId' => $value->orderItemProductId , 'variation_id' => $value->orderItemProductVarId ),$aa,'pps_addtocart');
      else
      $this->common->insert('pps_addtocart',$aa);
    }
    $output['success']       = 'Items added to cart';
    header('Content-Type: application/json');
    echo json_encode($output);exit;
    // $output['data']         = $response;
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
      if($type == 'admin-all')
			{
				$response = $this->common->getAllAdminApdmOrders($this->get('text'),$start,$perPage);
			}
			else if($type == 'admin-apdm')
			{
				$response = $this->common->getAdminApdmOrders($this->get('text'),$start,$perPage);
			}
      else if($type == 'admin-accepted')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,1);
			}
			else if($type == 'admin-approved')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,'all');
			}
      else if($type == 'admin-denied')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,'denied');
			}
      else if($type == 'admin-back')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,9);
			}
      else if($type == 'admin-printed')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,11);
			}
      else if($type == 'admin-shipped')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,12);
			}
      else if($type == 'admin-cancel')
			{
				$response = $this->common->getAdminApprovedOrders($this->get('text'),$start,$perPage,10);
			}
			else if($type == 'apdm-my')
			{
				$response = $this->common->getapdmorders($this->get('apdm'),'my',$this->get('text'),$start,$perPage);
			}
      else if($type == 'exapl-my')
			{
				$response = $this->common->getexaplorders($this->get('apdm'),'my',$this->get('text'),$start,$perPage);
			}
			else if($type == 'apdm-stores')
			{
				$response = $this->common->getapdmorders($this->get('apdm'),'store',$this->get('text'),$start,$perPage);
			}
      else if($type == 'exapl-stores')
			{
				$response = $this->common->getexaplstoreorders($this->get('apdm'),'store',$this->get('text'),$start,$perPage);
			}
			else if($type == 'admin-pending')
			{
				$response = $this->common->getAdminPendingOrders($this->get('text'),$start,$perPage);
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
              $value->Shipped = 1;
              // $response['data'][$key]->Shipped = 1;
              // $track = $this->trackOrder($value->orderTrackNumber);
              // if($track)
              // {
              //   if($track->Notification->Severity != 'ERROR')
              //   {
              //     if(!empty($track->Events))
              //     {
              //     }
              //   }
              // }
              // else
              // {
              //   $value->Shipped = 1;
              // }
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
  public function downloadAllOrderPdf_get()
  {
      ini_set('display_errors', 1);
      ini_set('display_startup_errors', 1);
      error_reporting(E_ALL);
      $output['orderDetail']	=  $this->common->getAllAdminApdmOrdersPdf();

      //echo 'hi';die;
      $html1 = $this->load->view('projectAllOrderdetails_pdf', $output, TRUE);
      //echo 'hi';die;
      //print_r($html1);die;
      $this->generatePDF($html1, ucwords(date('Y-m-d').'-order'), '', 'D');

  }
	public function downloadOrderPdf_get()
	{
		$orderNo = $this->get('orderno');
		if(NULL != $orderNo)
		{
      $this->common->update(array('orderNumber' => $orderNo),array('printed' => 1 , 'orderStatus' => 11),'pps_orders');
			$output['orderDetails']	=  $this->common->orderDetails($orderNo);
      //echo $this->load->view('projectorderdetails_pdf', $output);
		  	$html1 = $this->load->view('projectorderdetails_pdf', $output, TRUE);

			$this->generatePDF($html1, ucwords($orderNo.'-order'), '', 'D');
		}
	}

	public function generatePDF($html1 = NULL, $name = 'PDF', $path = null, $action = 'D')
	{
        ob_start();
        ob_clean();
        ob_end_clean();
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
        // Clean any content of the output buffer
        ob_end_clean();
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

  public function changePasswordLink_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    // print_r($rest_json);die;
    $postData 	= 	json_decode($rest_json, true);
     if(!empty($postData))
     {
      $email = $this->encrypt->decode($postData['userref']);
      $user  = $this->common->getrow("pps_users",array('userEmail' => $email));
      $link  = $this->common->getrow("pps_temp_links",array('link' => $postData['userref'] , 'linkStatus' => 0));
      if(empty($user))
      {
        $result["success"] 	 = false;
        $result["error_msg"] = 'Something went wrong. Please try again22';
      }
      else if(empty($link))
      {
        $result["success"] 	 = false;
        $result["error_msg"] = 'Something went wrong. Please try again';
      }
      else
      {
        $password	  		=   md5($postData['password']);
        $response	      = $this->common->update(array('userId'=>$user->userId),array('userPassword' => $password ),'pps_users');
        if( $response == 0 )
        {
          $result["success"] 		= false;
          $result["error_msg"] 	= 'Data not saved. Please try again.';
        }
        else
        {
          $this->common->update(array('link' => $postData['userref']) , array('linkStatus' => 1) , "pps_temp_links" );
          $result["success"] 				= true;
          $result["success_msg"] 		= 'Password changed successfully.';
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

  public function updateAdminProfile_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    // print_r($rest_json);die;
    $postData 	= 	json_decode($rest_json, true);
		if(!empty($postData))
		{
					$response	= $this->common->update(array('userId'=>$postData['userId']),array('userName' => $postData['username'],'userEmail' => $postData['email'] ),'pps_users');
					if( $response == 0 )
					{
						$result["success"] 		= false;
						$result["error_msg"] 	= 'Data not saved. Please try again.';
					}
					else
					{
						$result["success"] 				= true;
						$result["success_msg"] 		= 'Profile updated successfully.';
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
    // echo "<pre>";
    // print_r($_REQUEST);
    // die;
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
      $val = '';

      if($_REQUEST['type'] == 'InstructionSheet')
      $val = 'InstructionSheet';

      else if($_REQUEST['type'] == 'Newsletter')
      $val = 'catalogue';

      if($_REQUEST['type'] == 'Newsletter')
      {
        $this->common->update(array('setName' => $val) , array('setValue' => base_url()."assets/uploads/catalogue/".$fileName) , 'pps_setting_values');
      }
      else if($_REQUEST['type'] == 'InstructionSheet')
      {
        $dd = array( 'name' => $_REQUEST['sheetName'] ,'val' => base_url()."assets/uploads/catalogue/".$fileName );
        $this->common->insert('pps_setting_values',array('setName' => $val , 'setValue' => json_encode($dd) ));
      }
      $a = array();
      $a['success'] = true;
      $a['url']     = base_url()."assets/uploads/catalogue/".$fileName;
      echo json_encode($a); exit;
    }
  }
  public function exportReports_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    $data = $this->common->exportReports($postData);
    //print_r($data);
    $a = array();
    $a['success'] = true;
    $a['data']     = $data;
    echo json_encode($a); exit;
  }
  public function exportProducts_get()
  {
    $data = $this->common->exportProducts();
    //print_r($data);
    $a = array();
    $a['success'] = true;
    $a['data']     = $data;
    echo json_encode($a); exit;
  }
  public function dashboardInfoNew_get()
  {
      $aa  = $this->get('token');
      $get = json_decode(base64_decode(urldecode($aa)),1);
      // print_r($get);
      // print_r($get['products']);
      // die;

      $str = array();


     $data['today'] = $this->common->dashboardinfonew('today');
     $data['week'] = $this->common->dashboardinfonew('week');
     $data['month'] = $this->common->dashboardinfonew('month');
     if(!empty($get['stores']))
     $data['total'] = $this->common->dashboardinfonew('total','stores',$get['stores']);
     else if(!empty($get['products']))
     $data['total'] = $this->common->dashboardinfonew('total','products',$get['products']);
     else if(!empty($get['apls']))
     {
      //  print_r($get['apls']);
      //  die;
       $data['total'] = $this->common->dashboardinfonew('total','apls',$get['apls']);
     }
     else
     $data['total'] = $this->common->dashboardinfonew('totdddal');

    //  echo $this->db->last_query();
    //  die;


     $sale = $this->common->dashboardSale();
     $sale2 = array();
     for ($i=0; $i < count($sale); $i++)
     {
       if(isset($sale2[date('F_Y', strtotime($sale[$i]->orderAddedOn) )]['total']))
       $sale2[date('F_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] = $sale2[date('F_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] += $sale[$i]->orderItemPrice;
       else
       $sale2[date('F_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] = $sale[$i]->orderItemPrice;
     }
     $data['sale'] = $sale;
     $data['sale2'] = $sale2;

     $a['success'] = true;
     $a['data'] = $data;
     echo json_encode($a); exit;
  }
  public function superDashboardInfoNew_get()
  {
      $aa  = $this->get('token');
      $get = json_decode(base64_decode(urldecode($aa)),1);
      // print_r($get);
      // print_r($get['products']);
      // die;

      $str = array();



     $sale = $this->common->superDashboardSale();
     $sale2 = array();
     for ($i=0; $i < count($sale); $i++)
     {
       if(isset($sale2[date('D_Y', strtotime($sale[$i]->orderAddedOn) )]['total']))
       $sale2[date('D_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] = $sale2[date('D_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] += round($sale[$i]->orderItemPrice);
       else
       $sale2[date('D_Y', strtotime($sale[$i]->orderAddedOn) )]['total'] = round($sale[$i]->orderItemPrice);
     }
     $data['sale'] = $sale;
     $data['sale2'] = $sale2;

     $a['success'] = true;
     $a['data'] = $data;
     echo json_encode($a); exit;
  }
  public function searchStores_get($text)
  {
    $d = $this->common->searchStores($text);
    echo json_encode($d); exit;
  }

  public function searchProducts_get($text)
  {
    $d = $this->common->searchProducts($text);
    echo json_encode($d); exit;
  }

  public function searchApls_get($text)
  {
    $d = $this->common->searchApls($text);
    echo json_encode($d); exit;
  }

  public function searchOrders_get($apl,$text)
  {
    $d = $this->common->searchOrders($apl,$text);
    echo json_encode($d); exit;
  }

  public function logStatus_get()
  {
    $d = $this->common->getTable('pps_status_log');
    $a['success'] = true;
    $a['data'] = $d;
    echo json_encode($a); exit;
  }

  public function addlogStatus_post()
  {
    $rest_json 	= 	file_get_contents("php://input");
    $postData 	= 	json_decode($rest_json, true);
    // $date       = date("d M Y H:i:s");
    $date = date('Y-m-d H:i:s');
    $postData['logDate'] =  $date;
    $this->common->insert('pps_status_log',$postData);

    $a['success'] = true;
    $a['data'] = 'Successfully added';
    echo json_encode($a); exit;
  }
  public function iosNotification($deviceId,$message)
  {
	    $deviceToken = $deviceId;
		// fake password:
		$passphrase = '123';
		// Put your alert message here:
		//$message = 'New Message';
		   ////////////////////////////////////////////////////////////////////////////////

		$ctx = stream_context_create();
		stream_context_set_option($ctx, 'ssl', 'local_cert', 'certificates/pushcert.pem');
		stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);

		// Open a connection to the APNS server
		$fp = stream_socket_client(
								   'ssl://gateway.push.apple.com:2195', $err,
								   $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);

		// if (!$fp)
		// exit("Failed to connect: $err $errstr" . PHP_EOL);

		//echo 'Connected to APNS' . PHP_EOL;

		// Create the payload body
		$body['aps'] = array(
							 'alert' => $message,
							 'sound' => 'default',
							 'badge' => 1
							 );

		// Encode the payload as JSON
		$payload = json_encode($body);

		// Build the binary notification
		$msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;

		// Send it to the server
		$result = fwrite($fp, $msg, strlen($msg));

		// if (!$result)
		// echo 'Message not delivered' . PHP_EOL;
		// else
		// echo 'Message successfully delivered' . PHP_EOL;
        return true;
		// Close the connection to the server
		fclose($fp);

  }
  public function iosMarketingNotification($deviceId,$message)
  {
	    $deviceToken = $deviceId;
		// fake password:
		$passphrase = '123';
		// Put your alert message here:
		//$message = 'New Message';
		   ////////////////////////////////////////////////////////////////////////////////

		$ctx = stream_context_create();
		stream_context_set_option($ctx, 'ssl', 'local_cert', 'certificates/LPPUSH.pem');
		stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);

		// Open a connection to the APNS server
		$fp = stream_socket_client(
								   'ssl://gateway.push.apple.com:2195', $err,
								   $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);

		// if (!$fp)
		// exit("Failed to connect: $err $errstr" . PHP_EOL);

		//echo 'Connected to APNS' . PHP_EOL;

		// Create the payload body
		$body['aps'] = array(
							 'alert' => $message,
							 'sound' => 'default',
							 'badge' => 1
							 );

		// Encode the payload as JSON
		$payload = json_encode($body);

		// Build the binary notification
		$msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;

		// Send it to the server
		$result = fwrite($fp, $msg, strlen($msg));

		// if (!$result)
		// echo 'Message not delivered' . PHP_EOL;
		// else
		// echo 'Message successfully delivered' . PHP_EOL;
        return true;
		// Close the connection to the server
		fclose($fp);

  }
  public function androidMarketingNotification($deviceId,$message)
  {
      $url = 'https://fcm.googleapis.com/fcm/send';
      $fields = array (
              'to' => $deviceId,
              'notification' => array (
                      "body" => $message,
                      "title" => "TotalLP Notification",
                      "icon" => "myicon"
              )
      );
      $fields = json_encode ( $fields );
      $headers = array (
              'Authorization: key=' . "AAAAlme208o:APA91bFGPze4wJAOyBQxHpc-ccl_Bp_VFqv90le2-nY19aiDOFqwIUFuLE4rHNfcPHBZQeFD22CM87BcYLGD30Z5Ex9dT3tfcli8qt1qxlOBXLvnq0ssr83OY5p_cgO58SPkWWhSgmmB",
              'Content-Type: application/json'
      );
      $ch = curl_init ();
      curl_setopt ( $ch, CURLOPT_URL, $url );
      curl_setopt ( $ch, CURLOPT_POST, true );
      curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
      curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
      curl_setopt ( $ch, CURLOPT_POSTFIELDS, $fields );

      $result = curl_exec ( $ch );
      curl_close ( $ch );
    //  echo $result;die;
      return true;
  }
  public function androidNotification($deviceId,$message)
  {
      $url = 'https://fcm.googleapis.com/fcm/send';
      $fields = array (
              'to' => $deviceId,
              'notification' => array (
                      "body" => $message,
                      "title" => "PPS Notification",
                      "icon" => "myicon"
              )
      );
      $fields = json_encode ( $fields );
      $headers = array (
              'Authorization: key=' . "AAAA1hmbIKk:APA91bHWXqiuZ7HlqKZFs-_4M2a0jERdu1woniw2fTpbUy8pE1KuvsglFAJZn01X__M0nHIoi3pQpOD76ltD8JnIJ9F8ghXPdVLSdw467rb069hzvR_7v9OftCI4BW0EzXdaHJrh8pCa",
              'Content-Type: application/json'
      );
      $ch = curl_init ();
      curl_setopt ( $ch, CURLOPT_URL, $url );
      curl_setopt ( $ch, CURLOPT_POST, true );
      curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
      curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
      curl_setopt ( $ch, CURLOPT_POSTFIELDS, $fields );

      $result = curl_exec ( $ch );
      curl_close ( $ch );
      return true;
  }
  public function iosNotificationTest_get()
  {
    $deviceToken = 'bf5db284cc957c2a304abca27cd2d8c04b289a9d923323fec16aeffcf832a5b6';
  // fake password:
  $passphrase = '123';
  // Put your alert message here:
  //$message = 'New Message';
     ////////////////////////////////////////////////////////////////////////////////

  $ctx = stream_context_create();
  stream_context_set_option($ctx, 'ssl', 'local_cert', 'certificates/LPPUSH.pem');
  stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);

  // Open a connection to the APNS server
  $fp = stream_socket_client(
                 'ssl://gateway.push.apple.com:2195', $err,
                 $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);

  // if (!$fp)
  // exit("Failed to connect: $err $errstr" . PHP_EOL);

  //echo 'Connected to APNS' . PHP_EOL;

  // Create the payload body
  $body['aps'] = array(
             'alert' => 'test',
             'sound' => 'default',
             'badge' => 1
             );

  // Encode the payload as JSON
  $payload = json_encode($body);

  // Build the binary notification
  $msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;

  // Send it to the server
  $result = fwrite($fp, $msg, strlen($msg));

  // if (!$result)
  // echo 'Message not delivered' . PHP_EOL;
  // else
  // echo 'Message successfully delivered' . PHP_EOL;
      return true;
  // Close the connection to the server
  fclose($fp);
    }
    public function test_fedex_get()
    {

              /**
        * This test will send the same test data as in FedEx's documentation:
        * /php/RateAvailableServices/RateAvailableServices.php5
        */

        //remember to copy example.credentials.php as credentials.php replace 'FEDEX_KEY', 'FEDEX_PASSWORD', 'FEDEX_ACCOUNT_NUMBER', and 'FEDEX_METER_NUMBER'


        $userCredential = new ComplexType\WebAuthenticationCredential();
        $userCredential
          ->setKey(FEDEX_KEY)
          ->setPassword(FEDEX_PASSWORD);

        $webAuthenticationDetail = new ComplexType\WebAuthenticationDetail();
        $webAuthenticationDetail->setUserCredential($userCredential);

        $clientDetail = new ComplexType\ClientDetail();
        $clientDetail
          ->setAccountNumber(FEDEX_ACCOUNT_NUMBER)
          ->setMeterNumber(FEDEX_METER_NUMBER);

        $version = new ComplexType\VersionId();
        $version
          ->setMajor(21)
          ->setIntermediate(0)
          ->setMinor(0)
          ->setServiceId('ship');

        $shipperAddress = new ComplexType\Address();
        $shipperAddress
          ->setStreetLines(['Address Line 1'])
          ->setCity('Austin')
          ->setStateOrProvinceCode('TX')
          ->setPostalCode('73301')
          ->setCountryCode('US');

        $shipperContact = new ComplexType\Contact();
        $shipperContact
          ->setCompanyName('Company Name')
          ->setEMailAddress('test@example.com')
          ->setPersonName('Person Name')
          ->setPhoneNumber(('123-123-1234'));

        $shipper = new ComplexType\Party();
        $shipper
          ->setAccountNumber(FEDEX_ACCOUNT_NUMBER)
          ->setAddress($shipperAddress)
          ->setContact($shipperContact);

        $recipientAddress = new ComplexType\Address();
        $recipientAddress
          ->setStreetLines(['Address Line 1'])
          ->setCity('Herndon')
          ->setStateOrProvinceCode('VA')
          ->setPostalCode('20171')
          ->setCountryCode('US');

        $recipientContact = new ComplexType\Contact();
        $recipientContact
          ->setPersonName('Contact Name')
          ->setPhoneNumber('1234567890');

        $recipient = new ComplexType\Party();
        $recipient
          ->setAddress($recipientAddress)
          ->setContact($recipientContact);

        $labelSpecification = new ComplexType\LabelSpecification();
        $labelSpecification
          ->setLabelStockType(new SimpleType\LabelStockType(SimpleType\LabelStockType::_PAPER_7X4POINT75))
          ->setImageType(new SimpleType\ShippingDocumentImageType(SimpleType\ShippingDocumentImageType::_PDF))
          ->setLabelFormatType(new SimpleType\LabelFormatType(SimpleType\LabelFormatType::_COMMON2D));

        $packageLineItem1 = new ComplexType\RequestedPackageLineItem();
        $packageLineItem1
          ->setSequenceNumber(1)
          ->setItemDescription('Product description')
          ->setDimensions(new ComplexType\Dimensions(array(
              'Width' => 10,
              'Height' => 10,
              'Length' => 25,
              'Units' => SimpleType\LinearUnits::_IN
          )))
          ->setWeight(new ComplexType\Weight(array(
              'Value' => 2,
              'Units' => SimpleType\WeightUnits::_LB
          )));

        $shippingChargesPayor = new ComplexType\Payor();
        $shippingChargesPayor->setResponsibleParty($shipper);

        $shippingChargesPayment = new ComplexType\Payment();
        $shippingChargesPayment
          ->setPaymentType(SimpleType\PaymentType::_SENDER)
          ->setPayor($shippingChargesPayor);

        $requestedShipment = new ComplexType\RequestedShipment();
        $requestedShipment->setShipTimestamp(date('c'));
        $requestedShipment->setDropoffType(new SimpleType\DropoffType(SimpleType\DropoffType::_REGULAR_PICKUP));
        $requestedShipment->setServiceType(new SimpleType\ServiceType(SimpleType\ServiceType::_FEDEX_GROUND));
        $requestedShipment->setPackagingType(new SimpleType\PackagingType(SimpleType\PackagingType::_YOUR_PACKAGING));
        $requestedShipment->setShipper($shipper);
        $requestedShipment->setRecipient($recipient);
        $requestedShipment->setLabelSpecification($labelSpecification);
        $requestedShipment->setRateRequestTypes(array(new SimpleType\RateRequestType(SimpleType\RateRequestType::_PREFERRED)));
        $requestedShipment->setPackageCount(1);
        $requestedShipment->setRequestedPackageLineItems([
          $packageLineItem1
        ]);
        $requestedShipment->setShippingChargesPayment($shippingChargesPayment);

        $processShipmentRequest = new ComplexType\ProcessShipmentRequest();
        $processShipmentRequest->setWebAuthenticationDetail($webAuthenticationDetail);
        $processShipmentRequest->setClientDetail($clientDetail);
        $processShipmentRequest->setVersion($version);
        $processShipmentRequest->setRequestedShipment($requestedShipment);

        $shipService = new ShipService\Request();
        //die;
        //$shipService->getSoapClient()->__setLocation('http://161.35.123.73/fedex/vendor/jeremy-dunn/php-fedex-api-wrapper/src/FedEx/_wsdl/ShipService_v23.wsdl');
        $result = $shipService->getProcessShipmentReply($processShipmentRequest);

        var_dump($result);
        // Save .pdf label
        // file_put_contents('/path/to/label.pdf', $result->CompletedShipmentDetail->CompletedPackageDetails[0]->Label->Parts[0]->Image);
        //var_dump($result->CompletedShipmentDetail->CompletedPackageDetails[0]->Label->Parts[0]->Image);
    }

}
