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

    public function clientApiLogin($username = NULL, $password = NULL)
		{
        /* Check if accountant is trying to login with client access detail */
        //$prefix		= $this->db->dbprefix;
		$username = $this->db->escape($username);
		$password = md5($password);
        $password = $this->db->escape($password);
        $status = ' AND user.userStatus = 1';
        if ($username != NULL && $password != NULL)
		{
            $query = 'SELECT * FROM pps_users as user';
            $query .= " WHERE (user.userName=" . $username . " OR user.userEmail=" . $username . ") AND user.userPassword= " . $password . " " . $status ;
			$query = $this->db->query($query);
			if ($query->num_rows() > 0)
			{

				$result = $query->row();
				$db_error = $this->db->error();
				if ($db_error['code'] != 0) {
					$response['success'] = false;
					$response['error_message'] = $db_error['message'];
				} else {
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

	function insertData($type, $data,$table,$tablesecond=null)
	{		
		if(!empty($data['userData']))
		{
			$this->db->insert($table,$data['userData']);
			$id = $this->db->insert_id();
			if(!empty($data['storeTableData']))
			{
				if($type == 'store')
				$data['storeTableData']['storeUserId'] =  $id;
				if($type == 'apdm')
				$data['storeTableData']['apdmUserId'] =  $id;
				$this->db->insert($tablesecond,$data['storeTableData']);
				$response['success'] 	= true;
				$response['userID'] 	= $id;
				$response['data'] = 'User has been Created Successfully..';
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

		function forgotPassword($str = NULL,$deviceId) {
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

		public function updateUserPassword($data,$userId,$deviceId)
		{
			$passwrd 		= array('userPass'=>md5($data));
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
			$this->db->select('bac.bkId,bac.userId,bac.bookId,bac.quantity,bc.bookCost,bc.bookDiscount,bc.bookName,bc.bookAuthorId');
			$this->db->from('bookstore_addtocart as bac');
			$this->db->join('book as bc', 'bc.bookId = bac.bookId', 'left');
			$this->db->where('bac.userId',$userId);
			$this->db->order_by('bac.bkId','DESC');
			$tempdb = clone $this->db;
			$num_results = $tempdb->count_all_results();
			$query = $this->db->get();
			//echo $this->db->last_query();die;
			$data  = array();
			if ($query->num_rows() > 0)
			{
					$data = $query->result();
					$orderItemPrice = 0;
					$orderNewItemPrice = 0;
					foreach($data as $key=>$d)
					{
							$totalQty = $d->quantity;
							$bookCost = $d->bookCost;
							$orderBookPrice = ($totalQty * $bookCost);

							$discountAmount = $d->bookCost * $d->bookDiscount/100;
							$newBookPrice = $d->bookCost - $discountAmount;
							$orderNewBookPrice = ($totalQty * $newBookPrice);

							$bookCoverIamge = $this->getBookCoverImage($d->bookId);
							$data[$key]->bookCoveImage = $bookCoverIamge;
							$data[$key]->orderBookPrice = $orderBookPrice;
							$data[$key]->orderNewBookPrice = $orderNewBookPrice;
							//$data[$key]->orderBookPrice = number_format($orderBookPrice,2);
							//$data[$key]->orderNewBookPrice = number_format($orderNewBookPrice,2);
							$orderItemPrice += $orderBookPrice;
							$orderNewItemPrice += $orderNewBookPrice;
					}
					$db_error = $this->db->error();
					if ($db_error['code'] != 0) {
							$response['success'] = false;
							$response['error_message'] = $db_error['message'];
					} else {
							$response['success'] 		 		= true;
							$response['data'] 					= $data;
							$response['num_results'] 		= $num_results;
							//$response['totalItemPrice'] = number_format($orderItemPrice,2);
							//$response['totalNewItemPrice'] = number_format($orderNewItemPrice,2);
							$response['totalItemPrice'] = $orderItemPrice;
							$response['totalNewItemPrice'] = $orderNewItemPrice;
					}
					return $response;
			}
			else
			{
					$response['success']		  = false;
					return $response;
			}
	}

	public function saveAddTocartMyOrders($userId,$bookid,$qty)
	{
		$orderDatas = array(
				'userId'=>$userId,
				'bookId'=>$bookid,
				'quantity'=>$qty,
				'addedOn'=>date('Y-m-d H:i:s')
		);
		$this->db->select('userId,bookId,quantity');
		$this->db->from('bookstore_addtocart');
		$this->db->where('bookId',$bookid);
		$this->db->where('userId',$userId);
		$query = $this->db->get();

		if ($query->num_rows() > 0)
		{
			$quantity = $query->row()->quantity;
				$totalQty = ($quantity + $qty);
				$this->db->set('quantity',$totalQty);
				$this->db->where('bookId',$bookid);
				$this->db->where('userId',$userId);
				$this->db->update('bookstore_addtocart');
				$db_error = $this->db->error();
				if ($db_error['code'] != 0)
				{
						$response['success'] = false;
						$response['error_message'] = $db_error['message'];
				}
				else
				{
						$response['success'] 		 		= true;
						$response['data'] 					= 'Updated succesfully to cart.';
				}
				return $response;
		}
		else
		{
			$this->db->insert('bookstore_addtocart', $orderDatas);
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
		$this->db->select('userId,bookId,quantity');
		$this->db->from('bookstore_addtocart');
		$this->db->where('bookId',$bookid);
		$this->db->where('userId',$userId);
		$query = $this->db->get();
		if ($query->num_rows() > 0)
		{
			$this->db->set('quantity',$qty);
			$this->db->where('bookId',$bookid);
			$this->db->where('userId',$userId);
			$this->db->where('bkId',$bkId);
			$this->db->update('bookstore_addtocart');
			$db_error = $this->db->error();
			if ($db_error['code'] != 0) {
					$response['success'] = false;
					$response['error_message'] = $db_error['message'];
			} else {
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

	public function deleteBookfromAddTocart($bkId)
	{
		$this->db->where('bkId', $bkId);
		$this->db->delete('bookstore_addtocart');
		if ($this->db->affected_rows() > 0) {
				$response['success'] = true;
		}
		else
		{
				$response['success'] = false;
		}
		return $response;
	}

	/*public function saveMyOrders($data)
	{
		//echo "<pre>"; print_r($data); echo "</pre>"; die;
		if(!empty($data))
		{
				$rand 					= rand(0,9999);
				$orderNumber		=	date('Ymd').$rand;
				$userId 				= $data['userId'];
				$bookStoreId 	 	= $data['bookStoreId'];
				$orderData		 	= $data['data'];

				$arr = array(
					'orderBookStoreId'=>$bookStoreId,
					'orderBookStoreuserId'=>$userId,
				);
				$orderDataMerge = array();
				if(!empty($orderData))
				{
					$orderItemPrice = 0;
					foreach($orderData as $key=>$val)
					{
						//$acutalPrice = getAcutalPriceAndQuanityofBook($val['orderItemBookid']);
						//$actual
						$orderItemPrice += $val['orderItemPrice'];
						$orderDataMerge[] = array_merge($orderData[$key],$arr);
					}
					//echo "<pre>"; print_r($orderDataMerge); echo "</pre>"; die;
					$orderDatas = array(
							'orderNumber'=>$orderNumber,
							'orderTotal'=>$orderItemPrice,
							'orderUserId'=>$userId,
							'orderBookStoreId'=>$bookStoreId,
							'orderActive'=>5,
							'orderAddedOn'=>date('Y-m-d H:i:s'),
							'orderAddedBy'=>$bookStoreId
					);
					$this->db->insert('orders', $orderDatas);
					if ($this->db->affected_rows() > 0) {
							$orderId 	= $this->db->insert_id();
							$return 	= $this->addOrderItems($orderId,$orderDataMerge);
							$this->removeAddtoCartMyOrdersAfterPurchase($userId);
							$response['success'] = true;
							$response['data'] 	 = $orderNumber;
							return $response;
					}

				}
		}
		else
		{
				$response['success'] = false;
				return $response;
		}

	}*/

	public function saveMyOrders($userId,$bookStoreId)
	{
		$rand 					= rand(0,9999);
		$orderNumber		=	date('Ymd').$rand;
		if(!empty($userId))
		{
			$resultData = $this->getAllAddedProductsFromAddtoCartByUserId($userId);
		//	echo "<pre>"; print_r($resultData['data']); echo "</pre>"; die;
			if(!empty($resultData['data']))
			{
				$orderItemPrice = 0;
				foreach($resultData['data'] as $key=>$val)
				{
					$orderItemPrice += $val->orderNewBookPrice;
					//$orderDataMerge[] = array_merge($resultData['data'][$key],$arr);
				}
				//echo "<pre>"; print_r($resultData); echo "</pre>"; die;
				$orderDatas = array(
						'orderNumber'=>$orderNumber,
						'orderTotal'=>$orderItemPrice,
						'orderUserId'=>$userId,
						'orderBookStoreId'=>$bookStoreId,
						'orderActive'=>5,
						'orderAddedOn'=>date('Y-m-d H:i:s'),
						'orderAddedBy'=>$bookStoreId
				);
				$this->db->insert('orders', $orderDatas);
				if ($this->db->affected_rows() > 0)
				{
						$orderId 	= $this->db->insert_id();
						$return 	= $this->addOrderItems($orderId,$resultData['data'],$bookStoreId);
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


	public function addOrderItems($orderId, $orderItems,$bookStoreId)
	{
	//	echo "<pre>"; print_r($orderItems); echo "</pre>"; die;
		if(!empty($orderItems))
		{
			foreach($orderItems as $key=>$val)
			{
				$orderItemPrice			 =	 $val->orderNewBookPrice;
				$orderItemBookid 		 =	 $val->bookId;
				$orderItemAuthorid	 =	 $val->bookAuthorId;
				$orderItemQty				 = 	 $val->quantity;
				$orderBookStoreuserId= 	 $val->userId;

				$orderItemData = array(
							'orderItemOrderId'=>$orderId,
							'orderItemBookid'=>$orderItemBookid,
							'orderItemQty'=>$orderItemQty,
							'orderItemPrice'=>$orderItemPrice,
							'orderItemStoreid'=>$bookStoreId,
							'orderItemAuthorid'=>$orderItemAuthorid,
							'orderItemActive'=>5,
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
		$this->db->delete('bookstore_addtocart');
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
		$this->db->from('bookstore_addtocart');
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


}
