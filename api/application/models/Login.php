<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Model {
	public function __construct()
	{
		parent::__construct();
		define('DARTFROG_DEVICE_API_KEY', 'AAAAoZz8OAA:APA91bHsv65X8rT7Cm7idoSphMKYubYyxcLy-QU0zkT7L2TY2Izjsvw6EpCrLijIeBrSCHR9Swt9rgoUp3AoVrL3pJuK2J26JyDTfa1V6a3wdcUj1seoE7hr9bKyPWBdF4oDuhN5IknW');
	}

    ####################################################################
	# Author : Ravinder Kaur 							   #
	# Date   : 30 August 2017										   #
	# Details:	Login using Post Method For API
	####################################################################

    function clientApiLogin($username = NULL, $password = NULL, $usertype = NULL)
	{
        /* Check if accountant is trying to login with client access detail */
        //$prefix = $this->db->dbprefix;
		$username = $this->db->escape($username);
		$password = md5($password);
        $password = $this->db->escape($password);
        $status = ' AND user.userStatus = 1';
        if ($username != NULL && $password != NULL)
		{
			$query = 'SELECT * FROM pps_users as user';
			if($usertype == 34) // can be 3 or 4
			{
				$query .= " WHERE (user.userName=" . $username . " OR user.userEmail=" . $username . ") AND user.userPassword= " . $password . " AND ( user.userType = 3 or user.userType = 4 or user.userType = 9 ) ".$status ;
			}
			else
			{
				$query .= " WHERE (user.userName=" . $username . " OR user.userEmail=" . $username . ") AND user.userPassword= " . $password . " AND user.userType = " .$usertype." ".$status ;
			}

			$query = $this->db->query($query);
			//echo $this->db->last_query(); die;
			if ($query->num_rows() > 0)
			{

				$result = $query->row();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
					$response['success'] = false;
					$response['error_message'] = $db_error['message'];
				} else {

					if($result->userType == 3)
					{
						$result->apdm = $this->getrow('pps_distributor',array('apdmUserId' => $result->userId));
					}
					else if($result->userType == 9)
					{
						$result->apdm = $this->getrow('pps_exapl',array('apdmUserId' => $result->userId));
					}

					$response['success'] = true;
					$response['data'] = $result;
				}
				return $response;
			}
			else
			{
				$response['success'] = false;
				$response['data'] = 'Invalid Login Details';
				return $response;
			}
        }
        else
        {
            $response['success'] = false;
			$response['data'] = 'Something missing...';
			return $response;
        }
    }

		public function getrow($tbl,$whr)
		{
			$this->db->select('*');
	    $this->db->from($tbl);
	    $this->db->where($whr);
	    $result = $this->db->get();
	    $result = $result->row();
	    return $result;
		}

		public function getresult($tbl,$whr)
		{
			$this->db->select('*');
	    $this->db->from($tbl);
	    $this->db->where($whr);
	    $result = $this->db->get();
	    $result = $result->result();
	    return $result;
		}

		public function insert($table,$data)
  	{
  		$this->db->insert($table,$data);
  		$insert_id = $this->db->insert_id();
  		if( $insert_id != 0)
  			$output = array (1,$insert_id);
  		else
  			$output = array (0);
  		return $output;
  	}



	function insertData($type, $data,$table,$tablesecond=null)
	{
		if(!empty($data['userData']))
		{
			$this->db->insert($table,$data['userData']);
			$id = $this->db->insert_id();
			if(!empty($data['storeTableData']))
			{
				if($type == 'store')
				{
					$data['storeTableData']['storeUserId'] =  $id;
					$this->db->insert($tablesecond,$data['storeTableData']);
					$response['success'] 	= true;
					$response['userID'] 	= $id;
					$response['data'] = 'Store added Successfully..';
				}

				if($type == 'apdm')
				{
					$data['storeTableData']['apdmUserId'] =  $id;
					$this->db->insert($tablesecond,$data['storeTableData']);
					$response['success'] 	= true;
					$response['userID'] 	= $id;
					$response['data'] = 'Apdm added Successfully..';
				}
			}
			if(!empty($data['adminTableData']))
			{
				if($type == 'admin')
				$data['adminTableData']['adminUserId'] =  $id;
				$this->db->insert($tablesecond,$data['adminTableData']);
				$response['success'] 	= true;
				$response['userID'] 	= $id;
				$response['data'] = 'Admin added Successfully..';
			}
		}
		else
		{
			$response['success'] = false;
			$response['data'] = 'Please enter all details.';
		}
		return $response;
	}

	function getTableResults($type)
    {
        $table = '';
        $name = '';
        switch ($type)
        {
          case "storeTable":
              $table = 'pps_store';
              $name = 'storeName';
              break;
          default:
              $table  = '';
              $name   = '';
        }
		if($table !="")
		{
			$this->db->select('*');
			$this->db->order_by($name,'asc');
			$query    = $this->db->get($table);
			$result   = array();
			if($query->num_rows() > 0)
			{
				$result  = $query->result();
				$response['success'] = true;
				$response['data'] = $result;
			}
			else
			{
				$response['success'] = false;
				$response['data'] = 'No Data Found';
			}
		}
		else
		{
			$response['success'] = false;
			$response['data'] 	 = 'Invalid Request';
		}
        return $response;

    }

	function forgotPassword($str = NULL,$deviceId)
	{
        $this->db->select('userId,userEmail');
        $this->db->where('userEmail', $str);
        $this->db->where('userType', 3);
        $this->db->where('userActive=5');
        $query = $this->db->get('user');
        $result = $query->row();
        if (empty($result)) {
            $response['success'] = false;
            $response['error_message'] = 'Email ID / Mobile Number is not been registered. Please Signup';
        } else {
            $userEmail = $result->userEmail;
						$userId = $result->userId;
            $length = 2;
            $length2 = 3;
            $stringFirst = substr(str_shuffle("123456KWLTLKOPAXCBHmnbvcxzadfghkloE789"), 0, $length);
            $stringSec = substr(str_shuffle("ABCDEFHLIKSS123POIUYTREWQshsdiuigklu456789"), 0, $length2);
            $stringThird = $stringFirst . $stringSec;
            $message = $stringThird . ' is your Password';
						//echo $message;
						//die;
            $from_email = "reply@dartfrog.com";
            $to_email = $userEmail;
            $this->email->from($from_email, 'Password');
            $this->email->to($to_email);
            $this->email->subject('Password');
            $this->email->set_mailtype('html');
            $this->email->message($message);
            $this->email->send();
            $update = $this->updateUserPassword($stringThird, $userId, $deviceId);
            if ($update) {
                $response['success'] = true;
            } else {
                $response['success'] = false;
            }
        }
        return $response;
    }

	function updateUserPassword($data,$userId,$deviceId)
	{
		$passwrd 	= array('userPass'=>md5($data));
		$passwrdAPI = array('Password'=>$data);
		$this->db->where('userId', $userId);
		$this->db->update('user', $passwrd);
		$this->db->where('UserId', $userId);
		$this->db->where('DeviceId', $deviceId);
		$this->db->update('bookstore_api_keys', $passwrdAPI);
		return true;
	}


    ####################################################################
	# Author : Ravinder Kaur 							   #
	# Date   : 30 August 2017
	# Detail : Used for Get all Books Data including Book Cover Image							   #
####################################################################
	public function getAllBooksData($limit = NULL, $start = NULL, $genreId = null,$searchData = null)
	{
		$this->db->select('book.bookId,book.bookName,book.availability,book.bookGenre,book.bookCost,book.bookAuthorId,book.bookDiscount,book.bookDeliveryCharge,book.bookReview1,book.bookReview2,book.bookDescription,genre.genreName');
		$this->db->from('book');
		$this->db->join('genre', 'genre.genreId = book.bookGenre', 'left');
		$this->db->where('book.bookActive',5);
		$this->db->not_like('book.availability','INGRAM');
		if($genreId != '' && $genreId != 18)
		{
			$this->db->where('book.bookGenre',$genreId);
		}
		if($searchData != '')
		{
			$where = "( book.bookName LIKE '%$searchData%' or book.availability LIKE '%$searchData%'
			or genre.genreName LIKE '%$searchData%')";
			$this->db->where($where);
		}
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();
		$query = $this->db->get();
		$data = array();
		if ($query->num_rows() > 0)
		{
			$data = $query->result();
			foreach($data as $key=>$d)
			{
				$discountAmount 			= ($d->bookCost * $d->bookDiscount / 100);
				$newCost 					= ($d->bookCost - $discountAmount);
				$bookCoverIamge 			= $this->getBookCoverImage($d->bookId);
				$data[$key]->bookCoveImage 	= $bookCoverIamge;
				$data[$key]->bookCost 		= number_format($d->bookCost ,2);
				$data[$key]->bookNewCost 	= number_format($newCost,2);
			}
			$db_error = $this->db->error();
			if ($db_error['code'] != 0)
			{
				$response['success'] = false;
				$response['error_message'] = $db_error['message'];
			}
			else
			{
				$response['success'] = true;
				$response['totalRecords'] = $num_results;
				$response['data'] = $data;
			}
			return $response;
		}
		else
		{
			$response['success'] = false;
			return $response;
		}
	}
	####################################################################
	# Author :Raman preet							   #
	# Date   : 09 October 2017
	# Detail : Used for Get all Ingram Books Data  only including Book Cover Image							   #
####################################################################
	public function getAllBooksDataIngram($limit = NULL, $start = NULL, $genreId = null,$searchData = null)
	{
		$this->db->select('book.bookId,book.bookName,book.availability,book.bookGenre,book.bookCost,book.bookAuthorId,book.bookDiscount,book.bookDeliveryCharge,book.bookReview1,book.bookReview2,book.bookDescription,genre.genreName');
		$this->db->from('book');
		$this->db->join('genre', 'genre.genreId = book.bookGenre', 'left');
		$this->db->where('book.bookActive',5);
		$this->db->like('book.availability','INGRAM');
		if($genreId != '' && $genreId != 18)
		{
			$this->db->where('book.bookGenre',$genreId);
		}
		if($searchData != '')
		{
			$where = "( book.bookName LIKE '%$searchData%' or book.availability LIKE '%$searchData%'
			or genre.genreName LIKE '%$searchData%')";
			$this->db->where($where);
			//or book.availability LIKE "'%$searchData%'" or genre.genreName LIKE "'%$searchData%'"');
			//$this->db->like('book.bookName', $searchData);
			//$this->db->or_like('book.availability', $searchData);
		//	$this->db->or_like('genre.genreName', $searchData);
		}
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();
		//$this->db->limit($limit, $start);
    $query = $this->db->get();
		//echo $num_results;
		//echo $this->db->last_query(); die;
		$data = array();
    if ($query->num_rows() > 0)
		{
        $data = $query->result();
				foreach($data as $key=>$d)
				{
						$discountAmount 						= ($d->bookCost * $d->bookDiscount / 100);
						$newCost 										= ($d->bookCost - $discountAmount);
						$bookCoverIamge 						= $this->getBookCoverImage($d->bookId);
						$data[$key]->bookCoveImage 	= $bookCoverIamge;
						$data[$key]->bookCost 			= number_format($d->bookCost ,2);
						$data[$key]->bookNewCost 		= number_format($newCost,2);
				}
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						$response['totalRecords'] = $num_results;
						$response['data'] = $data;
				}
				return $response;
    }
		else
		{
			  $response['success'] = false;
        return $response;
    }
	}

	public function getBookCoverImage($bookid)
	{
		$this->db->select('bookImgPath');
		$this->db->where('bookImgBookId',$bookid);
    $query = $this->db->get('bookimages');
		if ($query->num_rows() > 0)
		{
				$bookImgPath = $query->row()->bookImgPath;
		}
		else
		{
				$bookImgPath = '';
		}
		return $bookImgPath;
	}



	####################################################################
	# Author : Ravinder Kaur 							   #
	# Date   : 31 August 2017										   #
	####################################################################
	public function getBookStoreUserDetail($bookstoreUserId)
	{
		$this->db->select('bkstore.bookStId,bkstore.bookStFName,bkstore.bookStLName,
		bkstore.bookStAddress,bkstore.bookStCity,bkstore.bookStCountry,bkstore.bookStState,
		bkstore.bookStZip,bkstore.bookStEmail,bkstore.bookStContactNo,user.userId,user.userEmail,regions.country as Country,subregions.name as State');
		$this->db->from('bookstore as bkstore');
		$this->db->join('user as user', 'user.userId = bkstore.bookStUserId', 'left');
		$this->db->join('regions as regions', 'regions.id = bkstore.bookStCountry', 'left');
		$this->db->join('subregions as subregions', 'subregions.id = bkstore.bookStState', 'left');
		$this->db->where('bkstore.bookStUserId',$bookstoreUserId);
		$this->db->where('user.userActive',5);
		$query = $this->db->get();
		//echo $this->db->last_query(); die;
		$data = array();
		if ($query->num_rows() > 0)
		{
			$data = $query->row();
			$db_error = $this->db->error();
			if ($db_error['code'] != 0)
			{
				$response['success'] = false;
				$response['error_message'] = $db_error['message'];
			}
			else
			{
				$response['success'] = true;
				$response['data'] = $data;
			}
			return $response;
		}
		else
		{
			$response['success'] = false;
			return $response;
		}
	}

	public function getBookStoreUserDetailData($bookstoreUserId)
	{
			$this->db->select('bkstore.bookStAddress,bkstore.bookStCity,bkstore.bookStCountry,bkstore.bookStState,
			bkstore.bookStZip,bkstore.bookStEmail,bkstore.bookStContactNo,regions.country as Country,subregions.name as State');
			$this->db->from('bookstore as bkstore');
			$this->db->join('user as user', 'user.userId = bkstore.bookStUserId', 'left');
			$this->db->join('regions as regions', 'regions.id = bkstore.bookStCountry', 'left');
			$this->db->join('subregions as subregions', 'subregions.id = bkstore.bookStState', 'left');
			$this->db->where('bkstore.bookStUserId',$bookstoreUserId);
			$this->db->where('user.userActive',5);
	    $query = $this->db->get();
			//echo $this->db->last_query(); die;
			$data = array();
	    if ($query->num_rows() > 0)
			{
	        $data = $query->row();
					$db_error = $this->db->error();
					if ($db_error['code'] != 0) {
							$response['success'] = false;
							$response['error_message'] = $db_error['message'];
					} else {
							$response['success'] = true;
							$response['data'] = $data;
					}
					return $response;
	    }
			else
			{
				  $response['success'] = false;
	        return $response;
	    }
	}

	####################################################################
	# Author : Ravinder Kaur 							   				#
	# Date   : 24 November 2017										    #
	####################################################################

	public function updateUserDetails($type,$data,$userId)
	{
		if(isset($data['userPassword']))
		{
			$this->db->where('userId', $userId);
			$this->db->update('pps_users', array('userPassword' => md5($data['userPassword'])));
			unset($data['userPassword']);
		}

		switch ($type)
		{
			case "store":
				$table = 'pps_store';
				$field = 'storeUserId';
			break;

			case "apdm":
				$table = 'pps_distributor';
				$field = 'apdmUserId';
			break;

			case "admin":
				$table = 'pps_admin';
				$field = 'adminUserId';
			break;

			default:
				$table  = '';
				$field 	= '';
		}

		if($table != '')
		{
			$this->db->where($field, $userId);
			$this->db->update($table, $data);
			$response['success'] = true;
			$response['data'] = true;
		}
		else
		{
			$response['success'] = false;
			$response['data'] 	 = 'Invalid Request';
		}

		return $response;
	}

	public function update($where,$table,$data)
	{
		$this->db->where($where);
		$this->db->update($table, $data);
		$db_error = $this->db->error();
		if ($db_error['code'] == 0)
			return '1';
		else
			return '0';
	}

	public function updateData($type,$id,$data)
	{
		switch ($type)
		{
			case "usersTable":
			$table = 'pps_users';
			$typed = 'userId';
			break;

			default:
			$table = '';
			$typed = '';
		}
		$this->db->where($typed,$id);
		$this->db->update($table, $data);
		$response['success'] = true;
		$response['data'] = true;
		return $response;

	}

	public function getProductDetails($productId = null)
	{
		$this->db->select('prds.productCode, prds.productName, prds.productDescription, prds.productImage, prds.productPrice, prds.productCategory,prds.IsAvailable');
		$this->db->from('pps_products as prds');
		$this->db->where('prds.productID',$productId);
		$query = $this->db->get();
		//echo $this->db->last_query(); die;
		$data = array();
		if ($query->num_rows() > 0)
		{
			$data = $query->row();
			$data;
			$data->productVariations  = $this->productVariations($productId);
			$db_error = $this->db->error();
			if ($db_error['code'] != 0) {
					$response['success'] = false;
					$response['error_message'] = $db_error['message'];
			} else {
					$response['success'] = true;
					$response['data'] = $data;
			}
		}
		else
		{
			$response['data'] = 'No Data Found';
			$response['success'] = false;
		}
		return $response;
	}


	public function productVariations($productID)
	{
		$this->db->select('*');
		$this->db->from('pps_products_variations');
		$this->db->where('productID',$productID);
		$query = $this->db->get();
		$data = array();
		if ($query->num_rows() > 0)
		{
			$data = $query->result();
			$db_error = $this->db->error();
			if ($db_error['code'] != 0) {
				$response['success'] = false;
				$response['error_message'] = $db_error['message'];
			}
			else
			{
				$response = $data;
			}
		}
		else
		{
			$response = '';
		}
		return $response;
	}

	public function getAllGenres($searchData = null)
	{
		$this->db->select('genreId,genreName');
		$this->db->from('genre');

		$this->db->join('book', 'book.bookGenre = genre.genreId', 'inner');
		$this->db->where('genreActive',5);
		$this->db->or_where('genreId',18);
		$this->db->order_by('genreName','ASC');
		$this->db->group_by('book.bookGenre');
		if($searchData != '')
		{
			$this->db->like('genreName', $searchData);
		}

		$query = $this->db->get();
		$data = array();
		if ($query->num_rows() > 0)
		{
				$data = $query->result();
				$data[] = (object) array('genreId' => '', 'genreName' => 'All Genres');
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						$response['data'] = $data;
				}
				return $response;
		}
		else
		{
				$response['success'] = false;
				return $response;
		}
	}

	public function getBookDetailById($bookid = null)
	{
		$this->db->select('bookimages.bookImgPath,bk.bookId,bk.bookName,,bk.bookDiscount,bk.bookDeliveryCharge,
		bk.bookCost,bk.bookAuthorId,bk.availability,bk.bookPublishName,bk.bookReviews as bookDescription,bk.bookReview1,bk.bookReview2,
		bk.bookSKU,CONCAT(author.authorFName," ",author.authorLName) as authorName');
		$this->db->from('book as bk');
		$this->db->join('bookimages as bookimages', 'bookimages.bookImgBookId = bk.bookId', 'left');
		$this->db->join('author as author', 'author.authorId = bk.bookAuthorId', 'left');
		$this->db->where('bk.bookId',$bookid);
		$this->db->where('bk.bookActive',5);
		//$this->db->where('bk.bookName','ASC');
		//$this->db->group_by('bookimages.bookImgBookId');
		$query = $this->db->get();
		//echo $this->db->last_query(); die;
		$data = array();
		if ($query->num_rows() > 0)
		{
				$data = $query->row();
				//echo "<prE>"; print_r($data); echo "</pre>";
				$discount = $data->bookCost * $data->bookDiscount/100;
				$newBookPrice = $data->bookCost - $discount;
				$data->newBookPrice = number_format($newBookPrice,2);
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						$response['data'] = $data;
				}
				return $response;
		}
		else
		{
				$response['success'] = false;
				return $response;
		}
	}

	public function getCountryStates($countryId = null)
	{
		if($countryId != '')
		{
			$this->db->select('reg.country as CountryName,reg.id as countryid,subreg.name as stateName,subreg.id as stateId');
			$this->db->from('regions as reg');
			$this->db->join('subregions as subreg', 'subreg.region_id = reg.id', 'left');
			$this->db->where('reg.id',$countryId);
		}
		else
		{
			$this->db->select('reg.country as CountryName,reg.id as countryid');
			$this->db->from('regions as reg');
		}
		$query = $this->db->get();
		$data = array();
    if ($query->num_rows() > 0)
		{
        $data = $query->result();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						//$response['totalRecords'] = $num_results;
						$response['data'] = $data;
				}
				return $response;
    }
		else
		{
			  $response['success'] = false;
        return $response;
    }

	}

	public function getallMyOrders($limit = NULL, $start = NULL,$userId = null)
	{
		$this->db->select('orditem.orderItemQty,orditem.orderItemPrice,orditem.orderItemAddedOn,
		book.bookName,book.bookCost,bookimg.bookImgPath');
		$this->db->from('orders as ord');
		$this->db->join('orderitem as orditem', 'orditem.orderItemOrderId = ord.orderId', 'left');
		$this->db->join('book as book', 'book.bookId = orditem.orderItemBookid', 'left');
		$this->db->join('bookimages as bookimg', 'book.bookId = bookimg.bookImgBookId', 'left');
		$this->db->where('ord.orderUserId',$userId);
		$this->db->where('ord.orderActive',5);
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();

		$this->db->limit($limit, $start);
		$query = $this->db->get();
		//echo $num_results;
		//echo $this->db->last_query(); die;
		$data = array();
		if ($query->num_rows() > 0)
		{
				$data = $query->result();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						$response['data'] = $data;
						$response['totalRecords'] = $num_results;
				}
				return $response;
		}
		else
		{
				$response['success'] = false;
				return $response;
		}
	}


	public function getallMyOrdersData($limit = NULL, $start = NULL,$userId = null)
	{
		$this->db->select('orderId,orderNumber,orderTotal,orderAddedOn');
		$this->db->from('orders');
		$this->db->where('orderUserId',$userId);
		$this->db->order_by('orderId','DESC');
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();
		//$this->db->limit($limit, $start);
		$query = $this->db->get();
		//echo $this->db->last_query(); //die;
		$data = array();
		if ($query->num_rows() > 0)
		{
			$data = $query->result();
			//echo "<pre>"; print_r($data); echo "</pre>"; die;
			if(!empty($data))
			{
				foreach($data as $key=>$val)
				{
					$orderId = $val->orderId;
					//$data[$key]->itemOrders  = $this->getOrderItemsByOrderId($limit,$start,$orderId);
					$response['data'] = $data;
					$response['totalRecords'] = $num_results;
					$response['success'] = true;
				}
				return $response;
			}
			else
			{
				$response['success'] = false;
				return $response;
			}
		}
		else
		{
			$response['success'] = false;
			return $response;
		}
	}

	public function getOrderItemsByOrderId($limit = NULL, $start = NULL, $orderId)
	{
		$this->db->select('orditem.orderItemId,orditem.orderItemQty,orditem.orderItemPrice,orditem.orderItemAddedOn,
		book.bookName,book.bookCost,bookimg.bookImgPath');
		$this->db->from('orders as ord');
		$this->db->join('orderitem as orditem', 'orditem.orderItemOrderId = ord.orderId', 'left');
		$this->db->join('book as book', 'book.bookId = orditem.orderItemBookid', 'left');
		$this->db->join('bookimages as bookimg', 'book.bookId = bookimg.bookImgBookId', 'left');
		$this->db->where('orditem.orderItemOrderId',$orderId);
		$this->db->where('ord.orderActive',5);
		$this->db->group_by('book.bookId');
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();
		$this->db->limit($limit, $start);
		$query = $this->db->get();
		//echo $num_results;
		//echo $this->db->last_query(); die;
		$data = array();
		if ($query->num_rows() > 0)
		{
				$data = $query->result();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['data'] = $data;
						$response['success'] = true;
						$response['totalRecords'] = $num_results;
				}
				return $response;
		}
		else
		{
				$response['success'] = false;
				return $response;
		}
	}

	public function getAcutalPriceAndQuanityofBook($bookid)
	{
			$this->db->select('bookId,bookCost');
			$this->db->from('book');
			$this->db->where('bookId',$bookid);
			$query = $this->db->get();
			if ($query->num_rows() > 0)
			{
					$bookCost = $query->row()->bookCost;
					$db_error = $this->db->error();
					if ($db_error['code'] != 0) {
							$response['success'] = false;
							$response['error_message'] = $db_error['message'];
					} else {
							$response['success'] = true;
							$response['bookCost'] = $bookCost;
					}
					return $response;
			}
			else
			{
					$response['bookCost']  		=	'';
					$response['success']		  = false;
					return $response;
			}
	}

	public function getAllAddedProductsFromAddtoCartByUserId($userId)
	{
			$this->db->select('ppcadd.bkId,ppcadd.userId,ppcadd.productId,ppcadd.quantity,prds.productCode, prds.productName, prds.productDescription, prds.productImage, prds.productPrice, prc.catName,vars.productVarDesc,vars.productVarPrice,ppcadd.variation_id');
			$this->db->from('addtocart as ppcadd');
			$this->db->join('products as prds', 'prds.productID = ppcadd.productId', 'left');
			$this->db->join('cats as prc', 'prc.catId = prds.productCategory', 'left');
			$this->db->join('products_variations as vars', 'vars.productVarID = ppcadd.variation_id', 'left');
			$this->db->where('ppcadd.userId',$userId);
			$this->db->order_by('ppcadd.bkId','DESC');
			$tempdb = clone $this->db;
			$num_results = $tempdb->count_all_results();
			$query = $this->db->get();
			//echo $this->db->last_query();die;
			$data  = array();
			if ($query->num_rows() > 0)
			{
					$data = $query->result();
					// echo "<pre>";
					// print_r($data);
					// die;
					$orderItemPrice = 0;
					$orderNewItemPrice = 0;
					foreach($data as $key=>$d)
					{
						$totalQty = $d->quantity;
						// print_r($d);
						if($d->productVarPrice != null)
						{
							$productPrice = $d->productVarPrice;
							$d->productPrice = $productPrice;
							$orderproductPrice = ($totalQty * $d->productVarPrice);
						}
						else
						{
							$productPrice = $d->productPrice;
							$orderproductPrice = ($totalQty * $productPrice);
						}
						$data[$key]->orderProductPrice = $orderproductPrice;
						$orderItemPrice += $orderproductPrice;
					}
					$db_error = $this->db->error();
					if ($db_error['code'] != 0) {
							$response['success'] = false;
							$response['error_message'] = $db_error['message'];
					} else {
							$response['success'] 		 		= true;
							$response['data'] 					= $data;
							$response['num_results'] 		= $num_results;
							$response['totalItemPrice'] = $orderItemPrice;
					}
					return $response;
			}
			else
			{
					$response['success']		  = false;
					return $response;
			}
	}

	public function saveAddTocartMyOrders($userType,$userId,$productId,$qty,$varid)
	{
		$orderDatas = array(
				'userId'=>$userId,
				// 'userType'=>$userType,
				'productId'=>$productId,
				'quantity'=>$qty,
				'variation_id'=>$varid,
				'addedOn'=>date('Y-m-d H:i:s')
		);
		$this->db->select('userId,productId,quantity');
		$this->db->from('pps_addtocart');
		$this->db->where('productId',$productId);
		$this->db->where('userId',$userId);
		if($varid !='')
		$this->db->where('variation_id',$varid);
		$query = $this->db->get();
		if ($query->num_rows() > 0)
		{
			//$quantity = $query->row()->quantity;
			//$totalQty = ($quantity + $qty);
			$this->db->set('quantity',$qty);
			$this->db->where('productId',$productId);
			$this->db->where('userId',$userId);
			if($varid !='')
			$this->db->where('variation_id',$varid);
			$this->db->update('pps_addtocart');
			$db_error = $this->db->error();
			if ($db_error['code'] != 0)
			{
				$response['success'] = false;
				$response['error_message'] = $db_error['message'];
			}
			else
			{
				$response['success'] 	= 	true;
				$response['data'] 		= 	'Updated succesfully to cart.';
			}
			return $response;
		}
		else
		{
			$this->db->insert('pps_addtocart', $orderDatas);
			if ($this->db->affected_rows() > 0) {
				$response['success'] = true;
				$response['data'] 	 = 'Added succesfully to cart.';
				return $response;
			}
			else
			{
				$response['success'] = false;
				return $response;
			}
		}
	}

	public function updateAddTocartProductQty($userId,$bookid,$qty,$bkId)
	{
		$this->db->select('userId,productId,quantity');
		$this->db->from('pps_addtocart');
		$this->db->where('productId',$bookid);
		$this->db->where('userId',$userId);
		$this->db->where('bkId',$bkId);
		$query = $this->db->get();
		if ($query->num_rows() > 0)
		{
			$this->db->set('quantity',$qty);
			$this->db->where('productId',$bookid);
			$this->db->where('userId',$userId);
			$this->db->where('bkId',$bkId);
			$this->db->update('pps_addtocart');
			$db_error = $this->db->error();
			if ($db_error['code'] != 0)
			{
				$response['success'] = false;
				$response['error_message'] = $db_error['message'];
			}
			else
			{
				$response['success'] 	= true;
				$response['data'] 		= 'Updated succesfully to cart.';
			}
			return $response;
		}
		else
		{
			$response['success'] = false;
			return $response;
		}
	}

	public function deleteProductfromAddTocart($bkId)
	{
		$this->db->where('bkId', $bkId);
		$this->db->delete('pps_addtocart');
		if ($this->db->affected_rows() > 0) {
			$response['success'] = true;
		}
		else
		{
			$response['success'] = false;
		}
		return $response;
	}

	public function saveMyOrders($userType,$userId,$orderlevel,$for)
	{
		$rand 				= rand(0,9999);
		$orderNumber		=	date('Ymd').$rand;
		if(!empty($userId))
		{
			$resultData = $this->getAllAddedProductsFromAddtoCartByUserId($userId);
			$stt = $this->getrow("pps_store",array('storeUserId' => $for));
			// echo "<pre>"; print_r($resultData['data']); echo "</pre>"; die;
			if(!empty($resultData['data']))
			{
				$orderItemPrice = 0;
				$notAvl = 0;
				foreach($resultData['data'] as $key=>$val)
				{
					$orderItemPrice += $val->orderProductPrice;
					$cls = $this->getresult("pps_products_classes",array('productClass' => $stt->storeClass , "productID" => $val->productId));
					if(empty($cls))
					{
						$notAvl = 1;
					}
					//$orderDataMerge[] = array_merge($resultData['data'][$key],$arr);
				}

				if($notAvl == 1)
				{
					$response['notAvl'] = true;
					$response['data'] 	 = 'Some Products Are not available to this store';
					return $response;
				}
				// echo $orderItemPrice;
				// echo "<pre>"; print_r($resultData); echo "</pre>"; die;

				$orderDatas = array(
						'orderNumber'=>$orderNumber,
						'orderTotal'=>$orderItemPrice,
						'orderUserId'=>$userId,
						'orderActive'=>1,
						'orderAddedOn'=>date('Y-m-d h:i'),
						'orderAddedBy'=>$userId,
						'orderAddedByType'=>$userType,
						'orderLevel' => $orderlevel
				);

				if($for != '')
				{
					$orderDatas['orderUserId'] = $for;
					$orderDatas['addedBy'] = 'apdm';
				}
				else
				{
					$orderDatas['orderUserId'] = $userId;
					$orderDatas['addedBy'] = 'store';
				}

				$this->db->insert('orders', $orderDatas);
				if ($this->db->affected_rows() > 0)
				{
						$orderId 	= $this->db->insert_id();
						$return 	= $this->addOrderItems($orderId,$resultData['data']);
						$this->removeAddtoCartMyOrdersAfterPurchase($userId);
						$response['success'] = true;
						$response['data'] 	 = $orderNumber;
						return $response;
				}
				else
				{
					$response['success'] = false;
					return $response;
				}
			}
			else
			{
				$response['success'] = false;
				return $response;
			}
		}
		else
		{
			$response['success'] = false;
			return $response;
		}
	}


	public function addOrderItems($orderId, $orderItems)
	{
	//	echo "<pre>"; print_r($orderItems); echo "</pre>"; die;
		if(!empty($orderItems))
		{
			foreach($orderItems as $key=>$val)
			{
				$orderItemPrice			 	=	 $val->orderProductPrice;
				$orderItemproductId 		=	 $val->productId;
				$orderItemQty				= 	 $val->quantity;
				$orderBookStoreuserId		= 	 $val->userId;
				$orderItemProductVarId		= 	 $val->variation_id;

				$orderItemData = array(
					'orderItemOrderId'=>$orderId,
					'orderItemProductId'=>$orderItemproductId,
					'orderItemProductVarId'=>$orderItemProductVarId,
					// 'productVarItemId'=>$val->productVarItemId,

					'orderItemQty'=>$orderItemQty,
					'orderItemPrice'=>$orderItemPrice,
					'orderItemUserStoreid'=>$orderBookStoreuserId,
					'orderItemActive'=>1,
					'orderItemAddedOn'=>date('Y-m-d H:i:s'),
					'orderItemAddedBy'=>$orderBookStoreuserId
				);
				//echo "<pre>"; print_r($orderItemData); echo "</pre>"; die;
				$this->db->insert('orderitem', $orderItemData);
				if ($this->db->affected_rows() > 0) {
						$response['success'] = true;
				}
				else
				{
					$response['success'] = false;
				}
			}
			return $response;
		}

	}

	public function removeAddtoCartMyOrdersAfterPurchase($userId)
	{
		$this->db->where('userId', $userId);
		$this->db->delete('pps_addtocart');
		return true;
	}

	public function checkPassword($password = NULL, $userId = NULL) {
			$this->db->select('userId,userEmail,userPass');
			$this->db->from('user');
			$this->db->where('userId', $userId);
			$this->db->where('userPass', md5($password));
			$query = $this->db->get();
		//	echo $this->db->last_query(); die;
			$result = $query->row();
			if (empty($result)) {
					$response['success'] = false;
					$response['error_message'] = 'Please correct your entries and try again.';
			}
			else
			 {
							$response['success'] = true;
							$response['success_message'] = 'Your password matched successfully.';
				}
			return $response;
	}

	public function updatePassword($param) {
			$hash = md5($param['newPassword']);
			$this->db->set('userPass', $hash);
			$this->db->where('userId', $param['userId']);
			$this->db->update('user');

			$this->db->set('Password', $param['newPassword']);
			$this->db->where('UserId', $param['userId']);
			$this->db->where('DeviceId', $param['deviceId']);
			$this->db->update('bookstore_api_keys');
			//echo $this->db->last_query(); die;
			$db_error = $this->db->error();
			if ($db_error['code'] != 0) {
					$result['success'] = false;
					$result['error_message'] = $db_error['message'];
			} else {
					$result['success'] = true;
					$result['success_message'] = 'Your password changed successfully.';
			}
			return $result;
	}

	public function getAddedCartItemsByUserId($userId)
	{
		$this->db->select('count(bkId) as totalItems');
		$this->db->from('pps_addtocart');
		$this->db->where('userId', $userId);
		$query = $this->db->get();
		if ($query->num_rows() > 0)
		{
			$total = $query->row()->totalItems;
		}
		else {
			$total = '';
		}
		return $total;
	}

	public function checkOutNewAddedBooks($bookId)
	{
				$data = $this->checkApiKeyUsers();
				$notificationMessage = "Thank you for using Dart Frog.New book has been added. Please check the latest one.";
				$notificationTitle 	 = 'New Book Added.';
				$length = 8;
				$randomString = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
				$randomString1 = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
				$randomString = $randomString . $randomString1;
				$message = array(
						'message_id' => $randomString,
						'message' => $notificationMessage,
						'messagetitle' => $notificationTitle,
						'bookId' => $bookId,
						'type' => 1,
						'msg_type' => 'New Book Added',
						'title' => $notificationTitle,
						'notificationRef' => $randomString,
						'notification' => 'Check New Book',
				);
				if(!empty($data))
				{
					foreach($data as $key=>$val)
					{
							$array = array(
								'message'=>$message,
								'registerID'=>$val->registerID,
								'ApiKey'=>DARTFROG_DEVICE_API_KEY
							);
					$responsez = sendNotification($array);
					}
				}
				return true;
	}

	public function checkApiKeyUsers()
	{
		$this->db->select('id,UserId,key,DeviceId,registerID');
		$this->db->from('bookstore_api_keys');
		$query = $this->db->get();
		if ($query->num_rows() > 0)
		{
			$total = $query->result();
		}
		else {
			$total = '';
		}
		return $total;
	}

	// get latest notification
	public function getLatestBooksData()
	{
		//$this->db->select('bookimages.bookImgPath,book.bookId,book.bookName,book.bookCost,author.authorFName,author.authorLName,book.bookAddedOn');
		$this->db->select("( CASE WHEN bookimages.bookImgPath != '' THEN bookimages.bookImgPath ELSE '' END) as bookImgPath1, book.bookId,book.bookName,book.bookCost,book.availability,author.authorFName,author.authorLName,book.bookAddedOn ", FALSE);
		$this->db->from('book');
		$this->db->join('author', 'author.authorId = book.bookAuthorId', 'left');
		$this->db->join('bookimages as bookimages', 'bookimages.bookImgBookId = book.bookId', 'left');
		$this->db->where('book.bookActive',5);
		//$this->db->limit('30');
		$this->db->order_by('bookAddedOn','desc');
		$tempdb = clone $this->db;
		$num_results = $tempdb->count_all_results();

    	$query = $this->db->get();
		//echo $num_results;
		//echo $this->db->last_query(); //die;
		$data = array();
    	if ($query->num_rows() > 0)
		{
        		$data = $query->result();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				} else {
						$response['success'] = true;
						$response['totalRecords'] = $num_results;
						$response['data'] = $data;
				}
				return $response;
    }
		else
		{
			  $response['success'] = false;
        return $response;
    }
}

/* RAvinder Work 01-12-2017 */
	function requestStoreAccessAdd($data)
	{
		if(!empty($data))
		{
			$this->db->insert('pps_system_access',$data);
			if ($this->db->affected_rows() > 0)
			{
				$id 	= $this->db->insert_id();
				$response['storeUserName'] 	= $data['sys_name'];
				$response['sys_mailEmail'] 	= $data['sys_mailEmail'];
				$response['storeUserId'] 	= $id;
				$response['success'] = true;
				$response['data'] = 'Store request has been genereated Successfully..';
			}
			else
			{
				$response['data'] = 'Error Occured';
				$response['success'] = false;
			}
		}
		else
		{
			$response['success'] = false;
			$response['data'] = 'Please enter all details.';
		}
		return $response;
	}

	function sendEmail($email,$name,$template,$subject)	{

			$this->config_email = Array(
				'protocol'  => "ssl",
				'smtp_host' => "mail.1wayit.com",
				'smtp_port' => '25',
				'smtp_user' => 'gurdeep@1wayit.com',
				'smtp_pass' => 'Gurdeep@786',
				'mailtype'  => "html",
				'wordwrap'  => TRUE,
				'crlf'  	=> '\r\n',
				'charset'   => "utf-8"
        );
		$this->email->initialize($this->config_email);
		$this->email->set_newline("\r\n");
		$this->email->from('info@gmail.com');
		$this->email->to($email);
		$this->email->subject($subject);
		$this->email->message($template);
		//echo "<pre>";print_r($ci->email);die;
		$this->email->send();
		return true;
    }

		function sendEmailMultiple($email,$name,$template,$subject)	{

				$this->config_email = Array(
					'protocol'  => "smtp",
					'smtp_host' => "ssl://smtp.googlemail.com",
					'smtp_port' => '465',
					'smtp_user' => 'nitindeveloper23@gmail.com',
					'smtp_pass' => 'nitin@123',
					'mailtype'  => "html",
					'wordwrap'  => TRUE,
					'crlf'  	=> '\r\n',
					'charset'   => "utf-8"
					);
			$this->email->initialize($this->config_email);
			$this->email->set_newline("\r\n");
			$this->email->from('info@gmail.com','PPS');
			$this->email->to($email);
			$this->email->subject($subject);
			$this->email->message($template);
			// echo "<pre>";print_r($this->email);die;
			$this->email->send();
			return true;
			}

	function getSystemStoreDetailById($storeid,$status)
	{
		$this->db->select('*');
		//$this->db->where('sys_reqStatus', '0');
		$this->db->where('sys_Id', $storeid);
		$query =  $this->db->get('pps_system_access');
		//echo $this->db->last_query(); die;
		$result   = array();
		if($query->num_rows() > 0)
		{
			if($status == 1)
			{
				$rs   = $query->row();
				$sys_name 		 = $rs->sys_name;
				$sys_mailEmail 	 = $rs->sys_mailEmail;
				$sys_mailPhone 	 = $rs->sys_mailPhone;
				$sys_bussAddress = $rs->sys_bussAddress;
				$sys_city 		 = $rs->sys_city;

				$password = $this->generateRandomString(10);

				$mdpassword = md5($password);
				$userData = array (
					'userName' => $sys_name,
					'userEmail' => $sys_mailEmail,
					'userPassword' => $mdpassword,
					'userType' => 2,
					'userStatus' => 1
				);

				$this->db->insert('pps_users',$userData);
				//echo $this->db->last_query();
				$id = $this->db->insert_id();

				$storeTableData = array (
					'storeUserId' => $id,
					'storeName' => $sys_name,
					'storeEmail' => $sys_mailEmail,
					'storeMobile' => $sys_mailPhone,
					'storeAddress' => $sys_bussAddress,
					'storeCity' => $sys_city
				);
				$this->db->insert('pps_store',$storeTableData);


				$response['success'] = true;
				$response['userPassword'] = $password;
				$response['userName'] = $sys_name;
				$response['email'] = $sys_mailEmail;
				$response['data'] = 'User has been enabled successfully.';
			}
			else
			{
				$response['success'] = false;
				$response['data'] = 'User request has been declined.';
			}
			$systemAccess = array (
				'sys_reqStatus' => $status
			);
			$this->db->where('sys_Id', $storeid);
			$this->db->update('pps_system_access',$systemAccess );

			//echo $this->db->last_query();	die;


		}
		else
		{
			$response['success'] = false;
			$response['data'] 	 = 'Error Occured.';
		}
		return $response;
	}

	function generateRandomString($length = 10) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}

	function getSystemAccessRequest()
	{
		$this->db->select('*');
		$this->db->from('pps_system_access');
		$this->db->where('sys_reqStatus',0);
		$result = $this->db->get();
		if ($result->num_rows() > 0)
		{
			$response['success'] 	= true;
			$result 							= $result->result();
			$response['data'] 		= $result;
		}
		else
		{
			$response['success'] = false;
			$response['data'] 	 = 'Error Occured.';
		}
		return $response;
	}

	function checkEmailAlreadyExists($email)
	{
		$this->db->select('*');
		$this->db->from('pps_users');
		$this->db->where('userEmail',$email);
		$result = $this->db->get();
		if ($result->num_rows() > 0)
		{
			$response['success'] 	= true;
			$response['data'] 		= 'yes';
		}
		else
		{
			$response['success'] = false;
			$response['data'] 	 = 'no';
		}
		return $response;
	}

	public function adminUserList($start,$perPage)
	{
	  $this->db->select('admin.*');
	  $this->db->from('pps_admin as admin');
	  $this->db->join('pps_users as usr','usr.userId = admin.adminUserId','inner');
	  $this->db->where('usr.userStatus','1');
	  $result = $this->db->get();
	  $num_rows = $result->num_rows();


	  $this->db->select('admin.*');
	  $this->db->from('pps_admin as admin');
	  $this->db->join('pps_users as usr','usr.userId = admin.adminUserId','inner');
	  $this->db->where('usr.userStatus','1');
	  $this->db->limit($perPage, $start);
	  $result = $this->db->get();
	 // echo $this->db->last_query(); die;
	  $result2 = $result->result();

	  if(!empty($result2))
	  {
	    return array
	    (
	     'total_rows'   => $num_rows,
	     'result'       => $result2
	    );
	  }
	}

	public function getAdminDetails($admin)
	{
	  $this->db->select('admin.*');
	  $this->db->from('pps_admin as admin');
	  $this->db->join('pps_users as usr','usr.userId = admin.adminUserId','inner');
	  $this->db->where('admin.adminUserId',$admin);
	  $result = $this->db->get();
	  $result2 = $result->row();
	  return $result2;
	}

	public function apdmDashboardOrderDetails($apdmid)
	{
		$this->db->select('str.storeName,ordr.*');
	  $this->db->from('pps_apdm_assigns as asgn');
	  $this->db->join('pps_store as str','str.storeId = asgn.storeId','left');
	  $this->db->join('pps_orders as ordr','ordr.orderUserId = str.storeUserId','left');
		$this->db->where('DATE(ordr.orderAddedOn)',date('Y-m-d'));
	  $this->db->where('asgn.apdmID',$apdmid);
	  $this->db->where('ordr.orderNumber !=',NULL);
	  $this->db->where('ordr.orderLevel',1);
		$result = $this->db->get();
		//echo $this->db->last_query(); die;
		$todaysOrdersMy = $result->num_rows();

		$this->db->select('assgn.storeId as totalStoreCount');
		$this->db->from('pps_apdm_assigns as assgn');
		$this->db->where('assgn.apdmID',$apdmid);
		$result2 = $this->db->get();
		//echo $this->db->last_query(); die;
		$storeCount = $result2->num_rows();

		$this->db->select('str.storeName,ordr.*');
	  $this->db->from('pps_apdm_assigns as asgn');
	  $this->db->join('pps_store as str','str.storeId = asgn.storeId','left');
	  $this->db->join('pps_orders as ordr','ordr.orderUserId = str.storeUserId','left');
	  $this->db->where('asgn.apdmID',$apdmid);
	  $this->db->where('ordr.orderNumber !=',NULL);
	  $this->db->where('ordr.orderLevel',1);
		$result3 = $this->db->get();
		//echo $this->db->last_query(); die;
		$totalOrderMy = $result3->num_rows();


		$this->db->select('str.storeName,ordr.*');
	  $this->db->from('pps_apdm_assigns as asgn');
	  $this->db->join('pps_store as str','str.storeId = asgn.storeId','left');
	  $this->db->join('pps_orders as ordr','ordr.orderUserId = str.storeUserId','left');
	  $this->db->where('asgn.apdmID',$apdmid);
	  $this->db->where('ordr.orderNumber !=',NULL);
	  $this->db->where('ordr.orderLevel',2);
		$result32 = $this->db->get();
		$totalOrderStore = $result32->num_rows();

		$this->db->select('str.storeName,ordr.*');
	  $this->db->from('pps_apdm_assigns as asgn');
	  $this->db->join('pps_store as str','str.storeId = asgn.storeId','left');
	  $this->db->join('pps_orders as ordr','ordr.orderUserId = str.storeUserId','left');
	  $this->db->where('asgn.apdmID',$apdmid);
		$this->db->where('DATE(ordr.orderAddedOn)',date('Y-m-d'));
	  $this->db->where('ordr.orderNumber !=',NULL);
	  $this->db->where('ordr.orderLevel',2);
		$result33 = $this->db->get();
		$todayOrderStore = $result33->num_rows();


		return array
			(
				'todaysOrdersMy' 	=> $todaysOrdersMy,
				'storeCount'      	 => $storeCount,
				'totalOrderMy'   		=> $totalOrderMy,
				'totalOrderStore'   => $totalOrderStore,
				'todayOrderStore'   => $todayOrderStore,
			);
	}

	public function adminDashboardOrderDetails($adminid)
	{
		$this->db->select('ppsord.*');
		$this->db->from('pps_orders as ppsord');
		$this->db->where('ppsord.orderStatus',1);
		$result = $this->db->get();
		//echo $this->db->last_query(); die;
		$totalapproved = $result->num_rows();

		$this->db->select('ppsord.*');
		$this->db->from('pps_orders as ppsord');
		$result2 = $this->db->get();
		$totalOrders = $result2->num_rows();

		return array
			(
				'totalapproved'       => $totalapproved,
				'totalOrders' => $totalOrders
			);
	}

	public function generateCredentials($name,$type)
	{
			do
			{
			    // Generate a random salt
			    $salt = rand(0,9000);
					$name = preg_replace('/\s+/', '', $name);
					$name = (strlen($name) > 8) ? substr($name,0,8) : $name;
					if($type == 'username')
			    $new_key = $name.$salt;
					else if($type == 'useremail')
					$new_key = $name.$salt.'@pps.com';
			}
			while ($this->credentials_exists($new_key,$type));

			return $new_key;
	}

	public function credentials_exists($key,$type)
	{
		if($type == 'username')
		{
			return $this->db
			    ->where('userName', $key)
			    ->count_all_results('pps_users') > 0;
		}
		else if($type == 'useremail')
		{
			return $this->db
			    ->where('userEmail', $key)
			    ->count_all_results('pps_users') > 0;
		}
	}


}
