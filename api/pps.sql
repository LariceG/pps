-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 24, 2017 at 05:47 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pps`
--

-- --------------------------------------------------------

--
-- Table structure for table `pps_distributor`
--

CREATE TABLE `pps_distributor` (
  `apdmID` int(11) NOT NULL,
  `apdmUserId` int(11) NOT NULL,
  `apdmFirstName` varchar(255) NOT NULL,
  `apdmLastName` varchar(255) NOT NULL,
  `apdmCity` varchar(255) NOT NULL,
  `apdmState` varchar(255) NOT NULL,
  `apdmCountry` varchar(255) NOT NULL,
  `apdmEmail` varchar(255) NOT NULL,
  `apdmMobileNo` varchar(255) NOT NULL,
  `apdmAddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pps_store`
--

CREATE TABLE `pps_store` (
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

CREATE TABLE `pps_store_distributor_assign` (
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

CREATE TABLE `pps_users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userType` int(11) NOT NULL,
  `userStatus` int(11) NOT NULL,
  `userApiKey` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pps_distributor`
--
ALTER TABLE `pps_distributor`
  ADD PRIMARY KEY (`apdmID`);

--
-- Indexes for table `pps_store`
--
ALTER TABLE `pps_store`
  ADD PRIMARY KEY (`storeId`);

--
-- Indexes for table `pps_store_distributor_assign`
--
ALTER TABLE `pps_store_distributor_assign`
  ADD PRIMARY KEY (`distAssgId`);

--
-- Indexes for table `pps_users`
--
ALTER TABLE `pps_users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pps_distributor`
--
ALTER TABLE `pps_distributor`
  MODIFY `apdmID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pps_store`
--
ALTER TABLE `pps_store`
  MODIFY `storeId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pps_store_distributor_assign`
--
ALTER TABLE `pps_store_distributor_assign`
  MODIFY `distAssgId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pps_users`
--
ALTER TABLE `pps_users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
