/*
 Navicat Premium Data Transfer

 Source Server         : Milind Face Recognition
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : facerecog_modify

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 02/08/2022 15:56:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for body
-- ----------------------------
DROP TABLE IF EXISTS `body`;
CREATE TABLE `body`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NULL DEFAULT NULL,
  `Client_ID` int(0) NULL DEFAULT NULL,
  `camera` int(0) NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of body
-- ----------------------------
INSERT INTO `body` VALUES (1, 1, 1, 4, 'E:\\FaceRec\\1880 Town\\Jerry.A.Durgin\\low_resolution.mp4', '2022-05-19 07:07:06');
INSERT INTO `body` VALUES (2, 2, 2, 6, 'E:\\FaceRec\\1880 Town\\Jerry.B.Durgin\\low_resolution.mp4', '2022-05-19 07:07:06');

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NOT NULL,
  `Client_Name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Client_Avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Mood_File` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `No_UNIQUE`(`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES (1, 1, 'Richad', 'asddfg', 'testimonial-1.png', '-1', '2022-05-22 18:59:05');
INSERT INTO `client` VALUES (2, 1, 'Liming', '11', 'testimonial-2.jpg', '-1', '2022-05-22 18:59:27');
INSERT INTO `client` VALUES (3, 1, 'Moris', '123456', '', '-1', '2022-05-22 18:59:45');
INSERT INTO `client` VALUES (4, 2, 'Harry', '', 'testimonial-4.png', '-1', '2022-05-22 19:00:03');
INSERT INTO `client` VALUES (5, 2, 'Tom', NULL, 'testimonial-5.jpg', '-1', '2022-05-22 19:16:32');
INSERT INTO `client` VALUES (6, 1, 'Jackson', '123456', NULL, '-1', '2022-07-15 21:39:48');
INSERT INTO `client` VALUES (7, 1, 'Emma', '123456', NULL, '-1', '2022-07-15 21:41:01');
INSERT INTO `client` VALUES (8, 1, 'Thomas', '123456', NULL, '-1', '2022-07-19 01:58:43');

-- ----------------------------
-- Table structure for custom
-- ----------------------------
DROP TABLE IF EXISTS `custom`;
CREATE TABLE `custom`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_Name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Customer_Short_Name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Contract_Person` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Email_Address` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Phone_Number` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Customer_Avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `City_State_Zip` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Sound` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Background_Music` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `VoiceOver` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Facial` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Camera1` int(0) NOT NULL,
  `Camera2` int(0) NOT NULL,
  `Camera3` int(0) NOT NULL,
  `Camera4` int(0) NOT NULL,
  `Camera5` int(0) NOT NULL,
  `Camera6` int(0) NOT NULL,
  `Camera7` int(0) NOT NULL,
  `Camera8` int(0) NOT NULL,
  `Camera9` int(0) NOT NULL,
  `Camera10` int(0) NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of custom
-- ----------------------------
INSERT INTO `custom` VALUES (1, '1880 Town', '1880 Town', 'Jerry.A.Durgin', 'Jerry.A.Durgin@gmail.com', '+1-202-555-0174', '20220513191530.jpg', '57005', 'Y', 'Y', 'Y', 'Y', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2022-05-19 23:49:18');
INSERT INTO `custom` VALUES (2, '1890 Town', '1890 Town', 'Jerr.D.Darry', 'Jerr.A.Darry', '+1-202-555-0181', 'testimonial-3.jpg', '57007', 'Y', 'Y', 'Y', 'Y', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, '2022-05-19 23:49:22');

-- ----------------------------
-- Table structure for final
-- ----------------------------
DROP TABLE IF EXISTS `final`;
CREATE TABLE `final`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NOT NULL,
  `Client_ID` int(0) NOT NULL,
  `Thumbnail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of final
-- ----------------------------
INSERT INTO `final` VALUES (1, 1, 1, 'tn-01.jpg', 'Header.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (2, 1, 2, 'tn-02.jpg', 'Header.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (3, 1, 2, 'tn-03.jpg', 'Header.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (4, 1, 3, 'tn-04.jpg', 'Header.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (5, 2, 4, 'tn-05.jpg', 'Family Portrait.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (6, 2, 5, 'tn-06.jpg', 'Family Portrait.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (7, 2, 5, 'tn-07.jpg', 'Family Portrait.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (8, 2, 4, 'tn-08.jpg', 'Family Portrait.mp4', '2022-05-22 19:20:07');
INSERT INTO `final` VALUES (9, 1, 7, '', 'E:\\FaceRec\\1880 Town\\Final\\Emma\\ClientID_7-FinalVideo.mp4', '2022-07-18 04:34:36');
INSERT INTO `final` VALUES (10, 1, 6, '', 'E:\\FaceRec\\1880 Town\\Final\\Jackson\\ClientID_6-FinalVideo.mp4', '2022-07-18 04:34:48');
INSERT INTO `final` VALUES (11, 1, 8, '', 'E:\\FaceRec\\1880 Town\\Final\\Thomas\\ClientID_8-FinalVideo.mp4', '2022-07-19 02:49:30');
INSERT INTO `final` VALUES (12, 1, 7, '', 'E:\\FaceRec\\1880 Town\\Final\\Emma\\ClientID_7-FinalVideo.mp4', '2022-07-19 02:49:43');
INSERT INTO `final` VALUES (13, 1, 6, '', 'E:\\FaceRec\\1880 Town\\Final\\Jackson\\ClientID_6-FinalVideo.mp4', '2022-07-19 02:49:54');
INSERT INTO `final` VALUES (14, 1, 8, '', 'E:\\FaceRec\\1880 Town\\Final\\Thomas\\ClientID_8-FinalVideo.mp4', '2022-07-26 14:52:28');
INSERT INTO `final` VALUES (15, 1, 7, '', 'E:\\FaceRec\\1880 Town\\Final\\Emma\\ClientID_7-FinalVideo.mp4', '2022-07-26 14:52:29');
INSERT INTO `final` VALUES (16, 1, 6, '', 'E:\\FaceRec\\1880 Town\\Final\\Jackson\\ClientID_6-FinalVideo.mp4', '2022-07-26 14:52:29');
INSERT INTO `final` VALUES (17, 1, 8, '', 'E:\\FaceRec\\1880 Town\\Final\\Thomas\\ClientID_8-FinalVideo.mp4', '2022-07-26 16:34:11');
INSERT INTO `final` VALUES (18, 1, 7, '', 'E:\\FaceRec\\1880 Town\\Final\\Emma\\ClientID_7-FinalVideo.mp4', '2022-07-26 16:34:11');
INSERT INTO `final` VALUES (19, 1, 6, '', 'E:\\FaceRec\\1880 Town\\Final\\Jackson\\ClientID_6-FinalVideo.mp4', '2022-07-26 16:34:12');
INSERT INTO `final` VALUES (20, 1, 7, '', 'E:\\FaceRec\\1880 Town\\Final\\Emma\\ClientID_7-FinalVideo.mp4', '2022-07-27 02:21:16');
INSERT INTO `final` VALUES (21, 1, 6, '', 'E:\\FaceRec\\1880 Town\\Final\\Jackson\\ClientID_6-FinalVideo.mp4', '2022-07-27 02:21:29');

-- ----------------------------
-- Table structure for footer
-- ----------------------------
DROP TABLE IF EXISTS `footer`;
CREATE TABLE `footer`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of footer
-- ----------------------------
INSERT INTO `footer` VALUES (1, 1, 'E:/FaceRec/1880 Town/Footers/footer.mp4', '2022-05-21 00:40:28');

-- ----------------------------
-- Table structure for header
-- ----------------------------
DROP TABLE IF EXISTS `header`;
CREATE TABLE `header`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NOT NULL,
  `Location` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of header
-- ----------------------------
INSERT INTO `header` VALUES (1, 1, 'E:\\FaceRec\\1880 Town\\Headers\\header.mp4', '2022-05-19 23:49:20');

-- ----------------------------
-- Table structure for picture
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Client_ID` int(0) NOT NULL,
  `Customer_ID` int(0) NOT NULL,
  `Picture_Location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of picture
-- ----------------------------
INSERT INTO `picture` VALUES (2, 1, 2, 'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_27.jpg', '2022-05-17 04:35:44');
INSERT INTO `picture` VALUES (4, 1, 2, 'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_37.jpg', '2022-07-06 22:20:31');
INSERT INTO `picture` VALUES (5, 1, 2, 'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_45.jpg', '2022-07-06 22:20:49');
INSERT INTO `picture` VALUES (6, 1, 2, 'E:\\FaceRec\\1880 Town\\Pictures\\Jerry.A.Durgin\\2022-06-24_15h50_56.jpg', '2022-07-06 22:21:03');
INSERT INTO `picture` VALUES (7, 6, 1, 'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h27_02.png', '2022-07-15 21:42:31');
INSERT INTO `picture` VALUES (8, 6, 1, 'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h27_54.png', '2022-07-15 21:42:46');
INSERT INTO `picture` VALUES (9, 6, 1, 'E:\\FaceRec\\1880 Town\\Pictures\\Jackson\\2022-07-14_18h28_05.png', '2022-07-15 21:42:46');
INSERT INTO `picture` VALUES (10, 7, 1, 'E:\\FaceRec\\1880 Town\\Pictures\\Emma\\2022-07-14_18h28_32.png', '2022-07-15 21:45:11');
INSERT INTO `picture` VALUES (11, 7, 1, 'E:\\FaceRec\\1880 Town\\Pictures\\Emma\\2022-07-14_18h28_46.png', '2022-07-15 21:45:11');

-- ----------------------------
-- Table structure for voiceover
-- ----------------------------
DROP TABLE IF EXISTS `voiceover`;
CREATE TABLE `voiceover`  (
  `ID` int(0) NOT NULL AUTO_INCREMENT,
  `Customer_ID` int(0) NOT NULL,
  `Camera` int(0) NOT NULL,
  `Location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Timestamp` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of voiceover
-- ----------------------------
INSERT INTO `voiceover` VALUES (1, 1, 1, 'E:/FaceRec/1880 Town/VoiceOvers/1880Town5-3Marks.mp3', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (2, 1, 2, 'E:/FaceRec/1880 Town/VoiceOvers/1880Town5-18Eric.mp3', '2022-05-21 03:12:23');
INSERT INTO `voiceover` VALUES (3, 1, 3, 'E:/FaceRec/1880 Town/VoiceOvers/3.mp3', '2022-05-21 03:13:31');
INSERT INTO `voiceover` VALUES (4, 1, 4, 'E:/FaceRec/1880 Town/VoiceOvers/4.mp3', '2022-05-21 03:13:31');
INSERT INTO `voiceover` VALUES (5, 1, 5, 'E:/FaceRec/1880 Town/VoiceOvers/5.wav', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (6, 1, 6, 'E:/FaceRec/1880 Town/VoiceOvers/6.mp3', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (7, 1, 7, 'E:/FaceRec/1880 Town/VoiceOvers/7.mp3', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (8, 1, 8, 'E:/FaceRec/1880 Town/VoiceOvers/8.mp3', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (9, 1, 9, 'E:/FaceRec/1880 Town/VoiceOvers/9.mp3', '2022-05-21 03:11:56');
INSERT INTO `voiceover` VALUES (10, 1, 10, 'E:/FaceRec/1880 Town/VoiceOvers/10.wav', '2022-05-21 03:11:56');

SET FOREIGN_KEY_CHECKS = 1;
