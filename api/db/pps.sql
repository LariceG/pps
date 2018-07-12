-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2017 at 06:45 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `pps`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookstore_addtocart`
--

CREATE TABLE IF NOT EXISTS `bookstore_addtocart` (
  `bkId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `addedOn` datetime NOT NULL,
  PRIMARY KEY (`bkId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `bookstore_addtocart`
--

INSERT INTO `bookstore_addtocart` (`bkId`, `userId`, `bookId`, `quantity`, `addedOn`) VALUES
(1, 244, 56, 2, '2017-09-07 14:05:17'),
(8, 210, 7, 12, '2017-09-18 17:43:38'),
(9, 210, 55, 12, '2017-09-18 17:43:58'),
(10, 210, 68, 12, '2017-09-18 17:44:13');

-- --------------------------------------------------------

--
-- Table structure for table `pps_api_keys`
--

CREATE TABLE IF NOT EXISTS `pps_api_keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `Email` varchar(300) NOT NULL,
  `Password` varchar(300) NOT NULL,
  `CompanyId` int(11) DEFAULT NULL,
  `UserType` varchar(30) NOT NULL,
  `key` varchar(40) NOT NULL,
  `DeviceId` text,
  `registerID` varchar(255) NOT NULL,
  `ip_addresses` text,
  `date_created` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `pps_api_keys`
--

INSERT INTO `pps_api_keys` (`id`, `UserId`, `Email`, `Password`, `CompanyId`, `UserType`, `key`, `DeviceId`, `registerID`, `ip_addresses`, `date_created`) VALUES
(2, 1, 'admin@gmail.com', 'admin', NULL, '1', 'g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8', 'testt', 'testt', '::1', 1511463976);

-- --------------------------------------------------------

--
-- Table structure for table `pps_api_logs`
--

CREATE TABLE IF NOT EXISTS `pps_api_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uri` varchar(255) NOT NULL,
  `method` varchar(6) NOT NULL,
  `params` text,
  `paramsresponse` text,
  `userId` int(11) DEFAULT NULL,
  `api_key` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `time` int(11) NOT NULL,
  `rtime` float DEFAULT NULL,
  `authorized` varchar(1) NOT NULL,
  `response_code` smallint(3) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `pps_api_logs`
--

INSERT INTO `pps_api_logs` (`id`, `uri`, `method`, `params`, `paramsresponse`, `userId`, `api_key`, `ip_address`, `time`, `rtime`, `authorized`, `response_code`) VALUES
(1, 'login', 'post', 'a:4:{s:9:"useremail";s:15:"admin@gmail.com";s:8:"password";s:5:"admin";s:8:"deviceId";s:5:"testt";s:10:"registerId";s:5:"testt";}', '{"status":200,"data":{"userId":"1","userName":"superadmin","userEmail":"admin@gmail.com","userPassword":"21232f297a57a5a743894a0e4a801fc3","userType":"1","userStatus":"1","apiKey":"c4o00o48ggosc040kw4o4c0os0848kk88w0wco8k"}}', 0, '', '::1', 1511542897, 0.200012, '1', 200),
(2, 'addStoreUser', 'post', 'a:5:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";}', NULL, 1, 'c4o00o48ggosc040kw4o4c0os0848kk88w0wco8k', '::1', 1511542914, 0.136007, '1', 0),
(3, 'addStoreUser', 'post', 'a:6:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";s:9:"tableName";s:9:"pps_users";}', NULL, 1, 'c4o00o48ggosc040kw4o4c0os0848kk88w0wco8k', '::1', 1511543003, 0.0840049, '1', 0),
(4, 'login', 'post', 'a:4:{s:9:"useremail";s:15:"admin@gmail.com";s:8:"password";s:5:"admin";s:8:"deviceId";s:5:"testt";s:10:"registerId";s:5:"testt";}', '{"status":200,"data":{"userId":"1","userName":"superadmin","userEmail":"admin@gmail.com","userPassword":"21232f297a57a5a743894a0e4a801fc3","userType":"1","userStatus":"1","apiKey":"g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8"}}', 0, '', '::1', 1511544725, 0.143008, '1', 200),
(5, 'addStoreUser', 'post', 'a:6:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";s:9:"tableName";s:9:"pps_users";}', NULL, 1, 'g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8', '::1', 1511544772, 0.0490019, '1', 0),
(6, 'addStoreUser', 'post', 'a:6:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";s:9:"tableName";s:9:"pps_users";}', NULL, 1, 'g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8', '::1', 1511544791, 0.0810051, '1', 0),
(7, 'addStoreUser', 'post', 'a:12:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";s:13:"usertableName";s:9:"pps_users";s:9:"storeName";s:9:"ramansons";s:10:"storeEmail";s:20:"ramanstore@gmail.com";s:11:"storeMobile";s:10:"9888888888";s:12:"storeAddress";s:20:"House No.100,Khnarar";s:9:"storeCity";s:6:"Mohali";s:14:"storetableName";s:9:"pps_store";}', NULL, 1, 'g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8', '::1', 1511545147, 0.048003, '1', 0),
(8, 'addStoreUser', 'post', 'a:12:{s:8:"userName";s:5:"Raman";s:9:"userEmail";s:15:"raman@gmail.com";s:12:"userPassword";s:5:"raman";s:8:"userType";s:1:"2";s:10:"userStatus";s:1:"1";s:13:"usertableName";s:9:"pps_users";s:9:"storeName";s:9:"ramansons";s:10:"storeEmail";s:20:"ramanstore@gmail.com";s:11:"storeMobile";s:10:"9888888888";s:12:"storeAddress";s:20:"House No.100,Khnarar";s:9:"storeCity";s:6:"Mohali";s:14:"storetableName";s:9:"pps_store";}', NULL, 1, 'g4c0cwgk080ww8woo0wgkw0owco4g8k8c4k8coc8', '::1', 1511545280, 0.0530031, '1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pps_distributor`
--

CREATE TABLE IF NOT EXISTS `pps_distributor` (
  `apdmID` int(11) NOT NULL AUTO_INCREMENT,
  `apdmUserId` int(11) NOT NULL,
  `apdmFirstName` varchar(255) NOT NULL,
  `apdmLastName` varchar(255) NOT NULL,
  `apdmCity` varchar(255) NOT NULL,
  `apdmState` varchar(255) NOT NULL,
  `apdmCountry` varchar(255) NOT NULL,
  `apdmEmail` varchar(255) NOT NULL,
  `apdmMobileNo` varchar(255) NOT NULL,
  `apdmAddress` varchar(255) NOT NULL,
  PRIMARY KEY (`apdmID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `pps_store`
--

CREATE TABLE IF NOT EXISTS `pps_store` (
  `storeId` int(11) NOT NULL,
  `storeUserId` int(11) NOT NULL,
  `storeName` varchar(255) NOT NULL,
  `storeEmail` varchar(255) NOT NULL,
  `storeMobile` varchar(255) NOT NULL,
  `storeAddress` varchar(255) NOT NULL,
  `storeCity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pps_store_distributor_assign`
--

CREATE TABLE IF NOT EXISTS `pps_store_distributor_assign` (
  `distAssgId` int(11) NOT NULL,
  `distAssgStoreId` int(11) NOT NULL,
  `distAssgDistId` int(11) NOT NULL,
  `distAssgAddedOn` date NOT NULL,
  `distAssgAddedBy` int(11) NOT NULL,
  `distAssgStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pps_users`
--

CREATE TABLE IF NOT EXISTS `pps_users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userType` int(11) NOT NULL,
  `userStatus` int(11) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `pps_users`
--

INSERT INTO `pps_users` (`userId`, `userName`, `userEmail`, `userPassword`, `userType`, `userStatus`) VALUES
(1, 'superadmin', 'admin@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 1, 1),
(2, 'Raman', 'raman@gmail.com', '3e8961306a7d9c49c15e97d4943b2529', 2, 1),
(3, 'Raman', 'raman@gmail.com', '3e8961306a7d9c49c15e97d4943b2529', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `userPass` varchar(100) NOT NULL,
  `userType` int(11) NOT NULL,
  `userActive` int(11) NOT NULL,
  `userAddedOn` datetime NOT NULL,
  `userAddedBy` int(11) NOT NULL,
  `userUniqueId` varchar(255) NOT NULL,
  `userIdActive` int(11) NOT NULL,
  PRIMARY KEY (`userId`),
  KEY `userType` (`userType`),
  KEY `userActive` (`userActive`),
  KEY `userAddedBy` (`userAddedBy`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=212 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `userEmail`, `userName`, `userPass`, `userType`, `userActive`, `userAddedOn`, `userAddedBy`, `userUniqueId`, `userIdActive`) VALUES
(1, 'gurpreet@1wayit.com', 'admin', '21232f297a57a5a743894a0e4a801fc3', 1, 5, '2016-08-24 17:27:32', 1, '', 0),
(55, 'info@battenkillbooks.com', 'info@battenkillbooks.com', 'cf98b1e3ebd7352e3d9cc7d503e604ad', 3, 5, '2017-01-31 21:50:35', 1, '58915b0bb796d', 2),
(70, 'dancrane@umich.edu', 'dancrane@umich.edu', 'ada4c10d1582d13518622624effd21a2', 2, 5, '2017-02-10 09:49:35', 1, '589de10f7bdbc', 2),
(72, 'npebma@yahoo.com', 'npebma@yahoo.com', '8f773e8b73b148665f646e2366cfa0ef', 2, 5, '2017-02-14 05:27:56', 1, '', 0),
(73, 'graegawre@dfgr.com', 'graegawre@dfgr.com', '0b5d9d92317d84cb0a27bfc1eb898be4', 2, 5, '2017-02-16 04:51:43', 1, '', 0),
(96, 'hello@dartfrogbooks.com', 'hello@dartfrogbooks.com', '2c9341ca4cf3d87b9e4eb905d6a3ec45', 3, 5, '2017-04-25 11:03:33', 1, '58ff7355862af', 2),
(99, 'gordonsmcclellan@gmail.com', 'gordonsmcclellan@gmail.com', '108d62cc9c71923f17b074ff00213178', 3, 5, '2017-04-26 09:39:56', 1, '5900b13d03775', 1),
(100, 'amel312@comcast.net', 'amel312@comcast.net', '2ac0c3ba1977874bf546be1a4b87c207', 2, 5, '2017-04-27 20:51:02', 1, '5902a006a3460', 1),
(102, 'gordon@fccmanchester.org', 'gordon@fccmanchester.org', '5028b4d8901d99e6dbeafac38c726cc4', 3, 5, '2017-04-28 08:04:21', 1, '59033dd5ccba1', 1),
(103, 'splashingcow@splashingcowbooks.com', 'splashingcow@splashingcowbooks.com', '3b4f4114a6bdbd10f4d03ef8a027bde6', 3, 5, '2017-05-02 09:31:39', 1, '5908984b42a00', 2),
(189, 'kapil@1wayit.comm', 'kapil@1wayit.comm', 'a5bb688e51c0f6245ae7a4aa5fd0d893', 3, 5, '2017-06-05 06:58:01', 1, '5935474976f5c', 1),
(190, 'kapil@1wayit.com.in', 'kapil@1wayit.com.in', 'ab3ba9cb48b41d7ef87b30d7e2b3f564', 3, 5, '2017-06-05 07:05:56', 1, '59354924e9c68', 1),
(191, 'gurdeep@1wayit.com', 'gurdeep@1wayit.com', '1646b3d5d358ecd104fefa758d03a4db', 3, 5, '2017-06-05 07:06:22', 1, '5935493ecc84a', 1),
(193, 'nannn21@yopmail.com', 'nannn21@yopmail.com', '202cb962ac59075b964b07152d234b70', 2, 5, '2017-06-09 03:59:20', 1, '593a6368e667a', 2),
(194, 'nannn22@yopmail.com', 'nannn22@yopmail.com', '680fbbe0b4967bbc025b269099c87469', 3, 5, '2017-06-09 04:09:52', 1, '593a65e02b20c', 2),
(195, 'nannn23@yopmail.com', 'nannn23@yopmail.com', '680fbbe0b4967bbc025b269099c87469', 3, 5, '2017-06-09 04:14:44', 1, '593a67043340e', 2),
(196, 'nannn60@yopmail.com', 'nannn60@yopmail.com', '0b05d2e3c8aaf5802012ea2d965535ef', 3, 5, '2017-06-14 04:21:23', 1, '59410013ee60b', 1),
(197, 'nannn61@yopmail.com', 'nannn61@yopmail.com', '62661a6e4d8ddcde751764d93034edda', 3, 5, '2017-06-14 04:22:14', 1, '5941004618e26', 1),
(198, 'nannn62@yopmail.com', 'nannn62@yopmail.com', '6e783b86c08ce9bf5a0da439cae2f2bd', 3, 5, '2017-06-14 04:23:37', 1, '59410099ca74c', 1),
(199, 'nannn63@yopmail.com', 'nannn63@yopmail.com', '3d0ee504dad710f92ec81223c323b078', 3, 5, '2017-06-14 04:24:39', 1, '594100d7f1b7b', 1),
(200, 'nannn64@yopmail.com', 'nannn64@yopmail.com', 'ba1ff83142c9e732409e9ae67726bf89', 2, 5, '2017-06-14 04:32:26', 1, '594102aa5e95a', 1),
(201, 'sarv3209@yopmail.com', 'sarv3209@yopmail.com', 'd0ba87dfc36242bc4871424fa1843fdf', 3, 5, '2017-06-14 04:40:20', 1, '5941048420664', 1),
(202, 'sarv@fmail.cim', 'sarv@fmail.cim', '6801cfe75c6c9fc165a80f09ca096e9a', 3, 5, '2017-08-03 02:06:10', 1, '', 0),
(203, 'sarv@fmail.cimss', 'sarv@fmail.cimss', '1c35018f49b9f1f01311b74637114b47', 3, 5, '2017-08-03 02:09:40', 1, '5982cc34819c4', 1),
(204, 'asasasa@gmail.coms', 'asasasa@gmail.coms', '4c8bf9c251b5bc819278927372dbaee6', 3, 5, '2017-08-03 02:15:06', 1, '5982cd7a2a34b', 1),
(205, 'asasasa@gmail.comsretert', 'asasasa@gmail.comsretert', '17dee4437685e0309f10c06b5480e71f', 3, 5, '2017-08-03 04:19:34', 1, '5982eaa6ba6cb', 1),
(206, 'sarv@fmail.cimwerew', 'sarv@fmail.cimwerew', 'b776eda8856ad9cd6bb1cbd3220882dd', 3, 5, '2017-08-03 04:26:00', 1, '5982ec286b8c4', 1),
(207, 'sasfdsfsdf@dfgdfhy.fgfg', 'sasfdsfsdf@dfgdfhy.fgfg', '1b774ff2d9a18b90dcb65d6bb01e1061', 3, 5, '2017-08-05 01:51:20', 1, '59856ae8afe31', 1),
(208, 'sarvjeet@1wayit.com', 'sarvjeet@1wayit.com', '54f0cadebb3bcea0617697bde18faf2c', 3, 5, '2017-08-17 05:21:57', 1, '59956e455be8a', 2),
(209, 'ajay@1wayit.com', 'ajay@1wayit.com', '0192023a7bbd73250516f069df18b500', 3, 5, '2017-08-29 02:16:58', 1, '', 0),
(210, 'pardeep@1wayit.com', 'pardeep@1wayit.com', '21232f297a57a5a743894a0e4a801fc3', 3, 5, '2017-08-29 02:18:45', 1, '59a5155579730', 2),
(211, 'ravinder1ffffway@gmail.com', 'ravinder1ffffway@gmail.com', '7ea743cffd43f161198ebaf740ac9888', 3, 5, '2017-09-11 12:55:56', 1, '59b63a848e204', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
