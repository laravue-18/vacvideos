-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 104.225.140.128    Database: facerecog_modify
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `body`
--

DROP TABLE IF EXISTS `body`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `body` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int DEFAULT NULL,
  `Client_ID` int DEFAULT NULL,
  `camera` int DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `body`
--

LOCK TABLES `body` WRITE;
/*!40000 ALTER TABLE `body` DISABLE KEYS */;
INSERT INTO `body` VALUES (1,1,1,4,'E:\\FaceRec\\1880 Town\\Jerry.A.Durgin\\low_resolution.mp4','2022-05-19 04:07:06');
/*!40000 ALTER TABLE `body` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int NOT NULL,
  `Client_Name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Client_Avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Mood_File` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `Show_Video` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `History_Option` int DEFAULT '0',
  `History_data` varchar(255) DEFAULT NULL,
  `Script_Option` int DEFAULT '0',
  `Script` text CHARACTER SET utf8mb3 COLLATE utf8_general_ci,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `No_UNIQUE` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (3,1,'Moris','123456','','-1','N',0,NULL,0,'client history transcription','2022-05-22 15:59:45'),(4,2,'Harry','123456','testimonial-4.png','-1','Y',0,NULL,0,'client history transcription','2022-05-22 16:00:03'),(5,2,'Tom','123456','testimonial-5.jpg','-1','N',0,NULL,0,'client history transcription','2022-05-22 16:16:32'),(6,1,'Jackson','123456',NULL,'-1','N',0,NULL,0,'Jackson will modify his history here','2022-07-15 18:39:48'),(7,1,'Emma','123456',NULL,'-1','Y',0,NULL,NULL,'client history transcription','2022-07-15 18:41:01');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom`
--

DROP TABLE IF EXISTS `custom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custom` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_Name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Customer_Short_Name` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Contract_Person` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Email_Address` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Phone_Number` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Customer_Avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci DEFAULT NULL,
  `City_State_Zip` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Sound` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Background_Music` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `VoiceOver` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Facial` varchar(1) NOT NULL,
  `Camera1` int NOT NULL,
  `Camera2` int NOT NULL,
  `Camera3` int NOT NULL,
  `Camera4` int NOT NULL,
  `Camera5` int NOT NULL,
  `Camera6` int NOT NULL,
  `Camera7` int NOT NULL,
  `Camera8` int NOT NULL,
  `Camera9` int NOT NULL,
  `Camera10` int NOT NULL,
  `Cost` int NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom`
--

LOCK TABLES `custom` WRITE;
/*!40000 ALTER TABLE `custom` DISABLE KEYS */;
INSERT INTO `custom` VALUES (1,'1880 Town','1880 Town','Jerry.A.Durgin','Jerry.A.Durgin@gmail.com','+1-202-555-0174','20220513191530.jpg','57005','Y','Y','Y','Y',0,0,0,0,0,0,0,0,0,0,50,'2022-05-19 20:49:18'),(2,'1890 Town','1890 Town','Jerr.D.Darry','Jerr.A.Darry','+1-202-555-0181','testimonial-3.jpg','57007','Y','Y','Y','Y',10,10,10,10,10,10,10,10,10,10,109,'2022-05-19 20:49:22');
/*!40000 ALTER TABLE `custom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `final`
--

DROP TABLE IF EXISTS `final`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `final` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int NOT NULL,
  `Client_ID` int NOT NULL,
  `Thumbnail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `final`
--

LOCK TABLES `final` WRITE;
/*!40000 ALTER TABLE `final` DISABLE KEYS */;
INSERT INTO `final` VALUES (1,1,5,'tn-01.jpg','1880 Town/Final/a.mp4','2022-05-22 16:20:07'),(2,1,5,'tn-02.jpg','1880 Town/Final/b.mp4','2022-05-22 16:20:07'),(3,1,5,'tn-03.jpg','1880 Town/Final/b.mp4','2022-05-22 16:20:07'),(4,1,3,'tn-04.jpg','1880 Town/Final/a.mp4','2022-05-22 16:20:07'),(5,2,7,'tn-05.jpg','1880 Town/Final/a.mp4','2022-05-22 16:20:07'),(6,2,7,'tn-06.jpg','1880 Town/Final/b.mp4','2022-05-22 16:20:07'),(7,2,7,'tn-07.jpg','1880 Town/Final/c.mp4','2022-05-22 16:20:07'),(8,2,7,'tn-08.jpg','1880 Town/Final/d.mp4','2022-05-22 16:20:07');
/*!40000 ALTER TABLE `final` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `footer`
--

DROP TABLE IF EXISTS `footer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `footer` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `footer`
--

LOCK TABLES `footer` WRITE;
/*!40000 ALTER TABLE `footer` DISABLE KEYS */;
INSERT INTO `footer` VALUES (1,1,'E:/FaceRec/1880 Town/Footers/footer.mp4','2022-05-20 21:40:28');
/*!40000 ALTER TABLE `footer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `header`
--

DROP TABLE IF EXISTS `header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `header` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int NOT NULL,
  `Location` varchar(45) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `header`
--

LOCK TABLES `header` WRITE;
/*!40000 ALTER TABLE `header` DISABLE KEYS */;
INSERT INTO `header` VALUES (1,1,'E:\\FaceRec\\1880 Town\\Headers\\header.mp4','2022-05-19 20:49:20');
/*!40000 ALTER TABLE `header` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `history_name` varchar(45) NOT NULL,
  `history_video` longtext CHARACTER SET utf8mb3 COLLATE utf8_general_ci,
  `history_text` longtext,
  `modified` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,1,'corrals','E:/FaceRec/1880 Town/History/sample-20220831023847.avi','','Y'),(2,1,'barn','E:/FaceRec/1880 Town/History/sample-20220831023919.avi','','Y'),(3,1,'house ','E:/FaceRec/1880 Town/History/sample-20220831023959.avi','This history of the 1880 TOWN is just a snap shot of what you’ll see and experience while visiting our attraction. We are constantly updating and adding items and buildings to the collection so make sure and plan to visit us soon!','Y'),(4,1,'caw','E:/FaceRec/1880 Town/History/3_ - Copy-20220901021950.avi','','Y');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2021_04_26_093603_create_jobs_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User',3,'auth-token','fd571b19974c0daacb2fd88ba9dbe0a0bae96a2084291dda5a6bf56d7f55a04e','[\"*\"]',NULL,'2022-08-26 04:47:56','2022-08-26 04:47:56'),(2,'App\\Models\\User',3,'auth-token','8387adab5d7506d774e8caa99a5b3da36b5a6941c1911d5c6427f6042f0980d6','[\"*\"]',NULL,'2022-08-26 04:48:32','2022-08-26 04:48:32'),(3,'App\\Models\\User',3,'auth-token','dfce3c8c516e7d5c15fe03a9be8fec11f2131ba7986ac6ff543ba07d243e91a1','[\"*\"]',NULL,'2022-08-26 04:49:08','2022-08-26 04:49:08'),(4,'App\\Models\\User',3,'auth-token','ddfc54fd9337708af0a9f2f8f3e268856575a68a6a8459ca72854ea762b8d289','[\"*\"]',NULL,'2022-08-26 06:01:11','2022-08-26 06:01:11'),(5,'App\\Models\\User',3,'auth-token','4546bb0def65548ac620a2a923d757391e94bffac46ab3dc776d112233f7fdb6','[\"*\"]',NULL,'2022-08-26 06:04:19','2022-08-26 06:04:19');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Client_ID` int NOT NULL,
  `Customer_ID` int NOT NULL,
  `Picture_Location` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
INSERT INTO `picture` VALUES (2,1,2,'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_27.jpg','2022-05-17 01:35:44'),(4,1,2,'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_37.jpg','2022-07-06 19:20:31'),(5,1,2,'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_45.jpg','2022-07-06 19:20:49'),(6,1,2,'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_56.jpg','2022-07-06 19:21:03'),(7,6,1,'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h27_02.png','2022-07-15 18:42:31'),(8,6,1,'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h27_54.png','2022-07-15 18:42:46'),(9,6,1,'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h28_05.png','2022-07-15 18:42:46'),(10,7,1,'E:\\FaceRec\\1880 Town\\Pictures\\Emma\\2022-07-14_18h28_32.png','2022-07-15 18:45:11'),(11,7,1,'E:\\FaceRec\\1880 Town\\Pictures\\Emma\\2022-07-14_18h28_46.png','2022-07-15 18:45:11');
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `script`
--

DROP TABLE IF EXISTS `script`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `script` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `cam_id` int NOT NULL,
  `brief_description` varchar(45) NOT NULL,
  `script_video` varchar(1024) NOT NULL,
  `modified` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `script`
--

LOCK TABLES `script` WRITE;
/*!40000 ALTER TABLE `script` DISABLE KEYS */;
INSERT INTO `script` VALUES (1,1,1,'outhouse','E:/FaceRec/1880 Town/Script/sample-20220831024045.avi','Y'),(2,1,2,'horse buggy','E:/FaceRec/1880 Town/Script/sample-20220831024118.avi','Y'),(3,1,3,'outer horse','E:/FaceRec/1880 Town/Script/sample-20220831024158.avi','Y');
/*!40000 ALTER TABLE `script` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voiceover`
--

DROP TABLE IF EXISTS `voiceover`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voiceover` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Customer_ID` int NOT NULL,
  `Camera` int NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voiceover`
--

LOCK TABLES `voiceover` WRITE;
/*!40000 ALTER TABLE `voiceover` DISABLE KEYS */;
INSERT INTO `voiceover` VALUES (1,1,1,'E:/FaceRec/1880 Town/VoiceOvers/1880Town5-3Marks.mp3','2022-05-21 00:11:56'),(2,1,2,'E:/FaceRec/1880 Town/VoiceOvers/1880Town5-18Eric.mp3','2022-05-21 00:12:23'),(3,1,3,'E:/FaceRec/1880 Town/VoiceOvers/3.mp3','2022-05-21 00:13:31'),(4,1,4,'E:/FaceRec/1880 Town/VoiceOvers/4.mp3','2022-05-21 00:13:31'),(5,1,5,'E:/FaceRec/1880 Town/VoiceOvers/5.wav','2022-05-21 00:11:56'),(6,1,6,'E:/FaceRec/1880 Town/VoiceOvers/6.mp3','2022-05-21 00:11:56'),(7,1,7,'E:/FaceRec/1880 Town/VoiceOvers/7.mp3','2022-05-21 00:11:56'),(8,1,8,'E:/FaceRec/1880 Town/VoiceOvers/8.mp3','2022-05-21 00:11:56'),(9,1,9,'E:/FaceRec/1880 Town/VoiceOvers/9.mp3','2022-05-21 00:11:56'),(10,1,10,'E:/FaceRec/1880 Town/VoiceOvers/10.wav','2022-05-21 00:11:56');
/*!40000 ALTER TABLE `voiceover` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-13 23:16:13
