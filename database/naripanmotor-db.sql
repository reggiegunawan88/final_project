-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: naripan_motor
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `gambar_mobil`
--

DROP TABLE IF EXISTS `gambar_mobil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gambar_mobil` (
  `id_img` int NOT NULL AUTO_INCREMENT,
  `idmobil` int DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_img`),
  UNIQUE KEY `id_img_UNIQUE` (`id_img`),
  KEY `idmobil_idx` (`idmobil`),
  CONSTRAINT `idmobil` FOREIGN KEY (`idmobil`) REFERENCES `mobil` (`idmobil`)
) ENGINE=InnoDB AUTO_INCREMENT=385 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gambar_mobil`
--

LOCK TABLES `gambar_mobil` WRITE;
/*!40000 ALTER TABLE `gambar_mobil` DISABLE KEYS */;
INSERT INTO `gambar_mobil` VALUES (1,1,'1/1.jpeg'),(2,1,'1/2.jpeg'),(3,1,'1/3.jpeg'),(4,1,'1/4.jpeg'),(5,1,'1/5.jpeg'),(6,1,'1/6.jpeg'),(7,1,'1/7.jpeg'),(8,1,'1/8.jpeg'),(9,13,'13/1.jpeg'),(10,13,'13/2.jpeg'),(11,13,'13/3.jpeg'),(12,13,'13/4.jpeg'),(13,13,'13/5.jpeg'),(14,13,'13/6.jpeg'),(15,13,'13/7.jpeg'),(16,13,'13/8.jpeg'),(17,14,'14/1.jpeg'),(18,14,'14/2.jpeg'),(19,14,'14/3.jpeg'),(20,14,'14/4.jpeg'),(21,14,'14/5.jpeg'),(22,14,'14/6.jpeg'),(23,14,'14/7.jpeg'),(24,15,'15/1.jpeg'),(25,15,'15/2.jpeg'),(26,15,'15/3.jpeg'),(27,15,'15/4.jpeg'),(28,15,'15/5.jpeg'),(29,15,'15/6.jpeg'),(30,15,'15/7.jpeg'),(31,15,'15/8.jpeg'),(32,16,'16/1.jpeg'),(33,16,'16/2.jpeg'),(34,16,'16/3.jpeg'),(35,16,'16/4.jpeg'),(36,16,'16/5.jpeg'),(37,16,'16/6.jpeg'),(38,16,'16/7.jpeg'),(39,16,'16/8.jpeg'),(40,17,'17/1.jpeg'),(41,17,'17/2.jpeg'),(42,17,'17/3.jpeg'),(43,17,'17/4.jpeg'),(44,17,'17/5.jpeg'),(45,17,'17/6.jpeg'),(46,17,'17/7.jpeg'),(47,17,'17/8.jpeg'),(48,17,'17/9.jpeg'),(49,18,'18/1.jpeg'),(50,18,'18/2.jpeg'),(51,18,'18/3.jpeg'),(52,18,'18/4.jpeg'),(53,18,'18/5.jpeg'),(54,18,'18/6.jpeg'),(55,18,'18/7.jpeg'),(56,18,'18/8.jpeg'),(57,19,'19/1.jpeg'),(58,19,'19/2.jpeg'),(59,19,'19/3.jpeg'),(60,19,'19/4.jpeg'),(61,19,'19/5.jpeg'),(62,19,'19/6.jpeg'),(63,19,'19/7.jpeg'),(64,19,'19/8.jpeg'),(65,20,'20/1.jpeg'),(66,20,'20/2.jpeg'),(67,20,'20/3.jpeg'),(68,20,'20/4.jpeg'),(69,20,'20/5.jpeg'),(70,20,'20/6.jpeg'),(71,20,'20/7.jpeg'),(72,20,'20/8.jpeg'),(73,21,'21/1.jpeg'),(74,21,'21/2.jpeg'),(75,21,'21/3.jpeg'),(76,21,'21/4.jpeg'),(77,21,'21/5.jpeg'),(78,21,'21/6.jpeg'),(79,21,'21/7.jpeg'),(80,21,'21/8.jpeg'),(81,22,'22/1.jpeg'),(82,22,'22/2.jpeg'),(83,22,'22/3.jpeg'),(84,22,'22/4.jpeg'),(85,22,'22/5.jpeg'),(86,22,'22/6.jpeg'),(87,22,'22/7.jpeg'),(88,23,'23/1.jpeg'),(89,23,'23/2.jpeg'),(90,23,'23/3.jpeg'),(91,23,'23/4.jpeg'),(92,23,'23/5.jpeg'),(93,23,'23/6.jpeg'),(94,23,'23/7.jpeg'),(95,23,'23/8.jpeg'),(96,24,'24/1.jpeg'),(97,24,'24/2.jpeg'),(98,24,'24/3.jpeg'),(99,24,'24/4.jpeg'),(100,24,'24/5.jpeg'),(101,24,'24/6.jpeg'),(102,24,'24/7.jpeg'),(103,24,'24/8.jpeg'),(104,24,'24/9.jpeg'),(105,24,'24/10.jpeg'),(106,2,'2/1.jpeg'),(107,2,'2/2.jpeg'),(108,2,'2/3.jpeg'),(109,2,'2/4.jpeg'),(110,2,'2/5.jpeg'),(111,2,'2/6.jpeg'),(112,2,'2/7.jpeg'),(113,2,'2/8.jpeg'),(114,3,'3/1.jpeg'),(115,3,'3/2.jpeg'),(116,3,'3/3.jpeg'),(117,3,'3/4.jpeg'),(118,3,'3/5.jpeg'),(119,3,'3/6.jpeg'),(120,3,'3/7.jpeg'),(121,3,'3/8.jpeg'),(122,4,'4/1.jpeg'),(123,4,'4/2.jpeg'),(124,4,'4/3.jpeg'),(125,4,'4/4.jpeg'),(126,4,'4/5.jpeg'),(127,4,'4/6.jpeg'),(128,4,'4/7.jpeg'),(129,4,'4/8.jpeg'),(130,5,'5/1.jpeg'),(131,5,'5/2.jpeg'),(132,5,'5/3.jpeg'),(133,5,'5/4.jpeg'),(134,5,'5/5.jpeg'),(135,5,'5/6.jpeg'),(136,5,'5/7.jpeg'),(137,6,'6/1.jpeg'),(138,6,'6/2.jpeg'),(139,6,'6/3.jpeg'),(140,6,'6/4.jpeg'),(141,6,'6/5.jpeg'),(142,6,'6/6.jpeg'),(143,6,'6/7.jpeg'),(144,6,'6/8.jpeg'),(145,7,'7/1.jpeg'),(146,7,'7/2.jpeg'),(147,7,'7/3.jpeg'),(148,7,'7/4.jpeg'),(149,7,'7/5.jpeg'),(150,7,'7/6.jpeg'),(151,7,'7/7.jpeg'),(152,7,'7/8.jpeg'),(153,8,'8/1.jpeg'),(154,8,'8/2.jpeg'),(155,8,'8/3.jpeg'),(156,8,'8/4.jpeg'),(157,8,'8/5.jpeg'),(158,8,'8/6.jpeg'),(159,8,'8/7.jpeg'),(160,8,'8/8.jpeg'),(161,9,'9/1.jpeg'),(162,9,'9/2.jpeg'),(163,9,'9/3.jpeg'),(164,9,'9/4.jpeg'),(165,9,'9/5.jpeg'),(166,9,'9/6.jpeg'),(167,9,'9/7.jpeg'),(168,9,'9/8.jpeg'),(169,10,'10/1.jpeg'),(170,10,'10/2.jpeg'),(171,10,'10/3.jpeg'),(172,10,'10/4.jpeg'),(173,10,'10/5.jpeg'),(174,10,'10/6.jpeg'),(175,10,'10/7.jpeg'),(176,10,'10/8.jpeg'),(177,11,'11/1.jpeg'),(178,11,'11/2.jpeg'),(179,11,'11/3.jpeg'),(180,11,'11/4.jpeg'),(181,11,'11/5.jpeg'),(182,11,'11/6.jpeg'),(183,11,'11/7.jpeg'),(184,11,'11/8.jpeg'),(185,12,'12/1.jpeg'),(186,12,'12/2.jpeg'),(187,12,'12/3.jpeg'),(188,12,'12/4.jpeg'),(189,12,'12/5.jpeg'),(190,12,'12/6.jpeg'),(191,12,'12/7.jpeg'),(192,12,'12/8.jpeg'),(193,25,'25/1.jpeg'),(194,25,'25/2.jpeg'),(195,25,'25/3.jpeg'),(196,25,'25/4.jpeg'),(197,25,'25/5.jpeg'),(198,25,'25/6.jpeg'),(199,25,'25/7.jpeg'),(200,25,'25/8.jpeg'),(201,26,'26/1.jpeg'),(202,26,'26/2.jpeg'),(203,26,'26/3.jpeg'),(204,26,'26/4.jpeg'),(205,26,'26/5.jpeg'),(206,26,'26/6.jpeg'),(207,26,'26/7.jpeg'),(208,26,'26/8.jpeg'),(209,27,'27/1.jpeg'),(210,27,'27/2.jpeg'),(211,27,'27/3.jpeg'),(212,27,'27/4.jpeg'),(213,27,'27/5.jpeg'),(214,27,'27/6.jpeg'),(215,27,'27/7.jpeg'),(216,27,'27/8.jpeg'),(217,28,'28/1.jpeg'),(218,28,'28/2.jpeg'),(219,28,'28/3.jpeg'),(220,28,'28/4.jpeg'),(221,28,'28/5.jpeg'),(222,28,'28/6.jpeg'),(223,28,'28/7.jpeg'),(224,28,'28/8.jpeg'),(225,29,'29/1.jpeg'),(226,29,'29/2.jpeg'),(227,29,'29/3.jpeg'),(228,29,'29/4.jpeg'),(229,29,'29/5.jpeg'),(230,29,'29/6.jpeg'),(231,29,'29/7.jpeg'),(232,29,'29/8.jpeg'),(233,30,'30/1.jpeg'),(234,30,'30/2.jpeg'),(235,30,'30/3.jpeg'),(236,30,'30/4.jpeg'),(237,30,'30/5.jpeg'),(238,30,'30/6.jpeg'),(239,30,'30/7.jpeg'),(240,30,'30/8.jpeg'),(241,31,'31/1.jpeg'),(242,31,'31/2.jpeg'),(243,31,'31/3.jpeg'),(244,31,'31/4.jpeg'),(245,31,'31/5.jpeg'),(246,31,'31/6.jpeg'),(247,31,'31/7.jpeg'),(248,31,'31/8.jpeg'),(249,32,'32/1.jpeg'),(250,32,'32/2.jpeg'),(251,32,'32/3.jpeg'),(252,32,'32/4.jpeg'),(253,32,'32/5.jpeg'),(254,32,'32/6.jpeg'),(255,32,'32/7.jpeg'),(256,32,'32/8.jpeg'),(257,33,'33/1.jpeg'),(258,33,'33/2.jpeg'),(259,33,'33/3.jpeg'),(260,33,'33/4.jpeg'),(261,33,'33/5.jpeg'),(262,33,'33/6.jpeg'),(263,33,'33/7.jpeg'),(264,33,'33/8.jpeg'),(265,34,'34/1.jpeg'),(266,34,'34/2.jpeg'),(267,34,'34/3.jpeg'),(268,34,'34/4.jpeg'),(269,34,'34/5.jpeg'),(270,34,'34/6.jpeg'),(271,34,'34/7.jpeg'),(272,34,'34/8.jpeg'),(273,35,'35/1.jpeg'),(274,35,'35/2.jpeg'),(275,35,'35/3.jpeg'),(276,35,'35/4.jpeg'),(277,35,'35/5.jpeg'),(278,35,'35/6.jpeg'),(279,35,'35/7.jpeg'),(280,35,'35/8.jpeg'),(281,36,'36/1.jpeg'),(282,36,'36/2.jpeg'),(283,36,'36/3.jpeg'),(284,36,'36/4.jpeg'),(285,36,'36/5.jpeg'),(286,36,'36/6.jpeg'),(287,36,'36/7.jpeg'),(288,36,'36/8.jpeg'),(289,37,'37/1.jpeg'),(290,37,'37/2.jpeg'),(291,37,'37/3.jpeg'),(292,37,'37/4.jpeg'),(293,37,'37/5.jpeg'),(294,37,'37/6.jpeg'),(295,37,'37/7.jpeg'),(296,37,'37/8.jpeg'),(297,38,'38/1.jpeg'),(298,38,'38/2.jpeg'),(299,38,'38/3.jpeg'),(300,38,'38/4.jpeg'),(301,38,'38/5.jpeg'),(302,38,'38/6.jpeg'),(303,38,'38/7.jpeg'),(304,38,'38/8.jpeg'),(305,39,'39/1.jpeg'),(306,39,'39/2.jpeg'),(307,39,'39/3.jpeg'),(308,39,'39/4.jpeg'),(309,39,'39/5.jpeg'),(310,39,'39/6.jpeg'),(311,39,'39/7.jpeg'),(312,39,'39/8.jpeg'),(313,40,'40/1.jpeg'),(314,40,'40/2.jpeg'),(315,40,'40/3.jpeg'),(316,40,'40/4.jpeg'),(317,40,'40/5.jpeg'),(318,40,'40/6.jpeg'),(319,40,'40/7.jpeg'),(320,40,'40/8.jpeg'),(321,41,'41/1.jpeg'),(322,41,'41/2.jpeg'),(323,41,'41/3.jpeg'),(324,41,'41/4.jpeg'),(325,41,'41/5.jpeg'),(326,41,'41/6.jpeg'),(327,41,'41/7.jpeg'),(328,41,'41/8.jpeg'),(329,42,'42/1.jpeg'),(330,42,'42/2.jpeg'),(331,42,'42/3.jpeg'),(332,42,'42/4.jpeg'),(333,42,'42/5.jpeg'),(334,42,'42/6.jpeg'),(335,42,'42/7.jpeg'),(336,42,'42/8.jpeg'),(337,43,'43/1.jpeg'),(338,43,'43/2.jpeg'),(339,43,'43/3.jpeg'),(340,43,'43/4.jpeg'),(341,43,'43/5.jpeg'),(342,43,'43/6.jpeg'),(343,43,'43/7.jpeg'),(344,43,'43/8.jpeg'),(345,44,'44/1.jpeg'),(346,44,'44/2.jpeg'),(347,44,'44/3.jpeg'),(348,44,'44/4.jpeg'),(349,44,'44/5.jpeg'),(350,44,'44/6.jpeg'),(351,44,'44/7.jpeg'),(352,44,'44/8.jpeg'),(353,45,'45/1.jpeg'),(354,45,'45/2.jpeg'),(355,45,'45/3.jpeg'),(356,45,'45/4.jpeg'),(357,45,'45/5.jpeg'),(358,45,'45/6.jpeg'),(359,45,'45/7.jpeg'),(360,45,'45/8.jpeg'),(361,46,'46/1.jpeg'),(362,46,'46/2.jpeg'),(363,46,'46/3.jpeg'),(364,46,'46/4.jpeg'),(365,46,'46/5.jpeg'),(366,46,'46/6.jpeg'),(367,46,'46/7.jpeg'),(368,46,'46/8.jpeg'),(369,47,'47/1.jpeg'),(370,47,'47/2.jpeg'),(371,47,'47/3.jpeg'),(372,47,'47/4.jpeg'),(373,47,'47/5.jpeg'),(374,47,'47/6.jpeg'),(375,47,'47/7.jpeg'),(376,47,'47/8.jpeg'),(377,48,'48/1.jpeg'),(378,48,'48/2.jpeg'),(379,48,'48/3.jpeg'),(380,48,'48/4.jpeg'),(381,48,'48/5.jpeg'),(382,48,'48/6.jpeg'),(383,48,'48/7.jpeg'),(384,48,'48/8.jpeg');
/*!40000 ALTER TABLE `gambar_mobil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merk_mobil`
--

DROP TABLE IF EXISTS `merk_mobil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `merk_mobil` (
  `idmerk` int NOT NULL AUTO_INCREMENT,
  `merk` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idmerk`),
  UNIQUE KEY `idmobil_UNIQUE` (`idmerk`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merk_mobil`
--

LOCK TABLES `merk_mobil` WRITE;
/*!40000 ALTER TABLE `merk_mobil` DISABLE KEYS */;
INSERT INTO `merk_mobil` VALUES (1,'HONDA'),(2,'TOYOTA'),(3,'NISSAN'),(4,'DAIHATSU'),(5,'CHEVROLET'),(6,'KIA'),(7,'MITSUBISHI'),(8,'MAZDA'),(9,'BMW'),(10,'WULING'),(11,'DATSUN'),(12,'SUBARU'),(13,'HYUNDAI'),(14,'SUZUKI'),(16,'===SEMUA===');
/*!40000 ALTER TABLE `merk_mobil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mobil`
--

DROP TABLE IF EXISTS `mobil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mobil` (
  `idmobil` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(30) DEFAULT NULL,
  `harga` int DEFAULT '0',
  `tahun` year DEFAULT NULL,
  `kilometer` int DEFAULT NULL,
  `kapasitas_mesin` int DEFAULT NULL,
  `bahan_bakar` varchar(10) DEFAULT NULL,
  `jenis_rem` varchar(10) DEFAULT NULL,
  `transmisi` varchar(20) DEFAULT NULL,
  `idmerk` int DEFAULT NULL,
  `idtipe` int DEFAULT NULL,
  `powersteering` varchar(7) DEFAULT NULL,
  `gps` varchar(5) DEFAULT NULL,
  `smart_key` varchar(5) DEFAULT NULL,
  `airbag` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`idmobil`),
  UNIQUE KEY `idmobil_UNIQUE` (`idmobil`),
  KEY `idmerk_idx` (`idmerk`),
  KEY `idtipe_idx` (`idtipe`),
  CONSTRAINT `idmerk` FOREIGN KEY (`idmerk`) REFERENCES `merk_mobil` (`idmerk`),
  CONSTRAINT `idtipe` FOREIGN KEY (`idtipe`) REFERENCES `tipe_mobil` (`idtipe`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mobil`
--

LOCK TABLES `mobil` WRITE;
/*!40000 ALTER TABLE `mobil` DISABLE KEYS */;
INSERT INTO `mobil` VALUES (1,'BRIO 1.2 E SATYA CVT',120000000,2017,21000,1200,'BENSIN','ABS','AUTOMATIC',1,5,'YA','TIDAK','YA','YA'),(2,'NEW INNOVA 2.0 Q REBORN',320000000,2018,15000,2400,'DIESEL','ABS','AUTOMATIC',2,6,'YA','YA','TIDAK','YA'),(3,'YARIS 1.5 E',105000000,2010,78000,1500,'BENSIN','NON ABS','AUTOMATIC',2,5,'YA','TIDAK','TIDAK','TIDAK'),(4,'NEW FORTUNER VRZ 2.4',350000000,2017,54000,2500,'DIESEL','ABS','AUTOMATIC',2,3,'YA','YA','YA','YA'),(5,'NEW CRV 1.5 TURBO PRESTIGE',450000000,2018,63000,1500,'BENSIN','ABS','AUTOMATIC',1,3,'YA','YA','YA','YA'),(6,'HRV 1.5 E MUGEN CVT',250000000,2017,46000,1500,'BENSIN','ABS','AUTOMATIC',1,3,'YA','TIDAK','TIDAK','YA'),(7,'ALL NEW SERENA 2.0 HWS',465000000,2015,68000,2000,'BENSIN','ABS','AUTOMATIC',3,6,'YA','TIDAK','YA','YA'),(8,'ALL NEW YARIS TRD SPORTIVO',187000000,2015,62000,1500,'BENSIN','ABS','AUTOMATIC',2,5,'YA','TIDAK','TIDAK','YA'),(9,'ALL NEW ACCORD 2.4 VTI',170000000,2012,62000,2300,'BENSIN','ABS','AUTOMATIC',1,1,'YA','TIDAK','TIDAK','YA'),(10,'NEW BRIO 1.2 RS',135000000,2018,9000,1200,'BENSIN','ABS','AUTOMATIC',1,1,'YA','TIDAK','TIDAK','YA'),(11,'HRV 1.8 E JBL',135000000,2016,28000,1500,'BENSIN','ABS','AUTOMATIC',1,3,'YA','TIDAK','TIDAK','YA'),(12,'TRAX 1.4 TURBO',295000000,2016,37000,1300,'BENSIN','ABS','AUTOMATIC',5,3,'YA','TIDAK','YA','YA'),(13,'PAJERO SPORT DAKAR',265000000,2012,53000,2500,'DIESEL','ABS','AUTOMATIC',7,3,'YA','TIDAK','TIDAK','YA'),(14,'ALL NEW VIOS G',97000000,2012,65000,1500,'BENSIN','ABS','MANUAL',2,1,'YA','TIDAK','TIDAK','YA'),(15,'MARCH 1.2 MED',95000000,2016,23000,1500,'BENSIN','ABS','MANUAL',3,5,'YA','TIDAK','YA','YA'),(16,'FREED E PSD',125000000,2009,23000,1500,'BENSIN','ABS','AUTOMATIC',1,6,'YA','TIDAK','YA','YA'),(17,'KIJANG NEW INNOVA 2.4 V',295000000,2019,42000,2000,'DIESEL','ABS','AUTOMATIC',2,6,'YA','YA','TIDAK','YA'),(18,'MOBILIO E',120000000,2015,38000,1500,'BENSIN','ABS','MANUAL',1,6,'YA','TIDAK','TIDAK','YA'),(19,'ALL NEW CRV 2.4 SUNROOF',270000000,2015,58000,2500,'BENSIN','ABS','AUTOMATIC',1,3,'YA','YA','YA','YA'),(20,'ALL NEW GRAND LIVINA XGEAR',135000000,2013,34000,1800,'BENSIN','ABS','AUTOMATIC',3,5,'YA','TIDAK','TIDAK','YA'),(21,'NEW RUSH 1.5 G',155000000,2016,42000,1500,'BENSIN','ABS','AUTOMATIC',2,3,'YA','TIDAK','TIDAK','YA'),(22,'ALL NEW YARIS S TRD',175000000,2017,22000,1500,'BENSIN','ABS','AUTOMATIC',2,5,'YA','YA','YA','YA'),(23,'MAZDA 2 1.5 HB SPORT',105000000,2012,65000,1500,'BENSIN','ABS','AUTOMATIC',8,5,'YA','TIDAK','YA','YA'),(24,'530i LUXURY LINE',965000000,2018,1600,2000,'BENSIN','ABS','AUTOMATIC',9,8,'YA','YA','YA','YA'),(25,'VOXY 2.0',475000000,2019,5000,2000,'BENSIN','ABS','AUTOMATIC',2,6,'YA','TIDAK','YA','YA'),(26,'NEW RUSH G',210000000,2016,36000,1500,'BENSIN','ABS','AUTOMATIC',2,3,'YA','TIDAK','TIDAK','YA'),(27,'NEW CIVIC 1.5 TURBO',525000000,2016,31000,1500,'BENSIN','ABS','AUTOMATIC',1,1,'YA','YA','YA','YA'),(28,'NEW CAPTIVA 2.0',380000000,2013,86000,2000,'DIESEL','ABS','AUTOMATIC',5,3,'YA','YA','YA','YA'),(29,'ALL NEW AVANZA 1.3 G',107000000,2014,52000,1300,'BENSIN','NON ABS','MANUAL',2,6,'TIDAK','TIDAK','TIDAK','YA'),(30,'AVEGA 1.5 GL',52500000,2008,102000,1500,'BENSIN','NON ABS','MANUAL',13,1,'TIDAK','TIDAK','TIDAK','TIDAK'),(31,'GO+ PANCA T 1.2',132000000,2017,52000,1200,'BENSIN','NON ABS','MANUAL',11,5,'YA','TIDAK','TIDAK','TIDAK'),(32,'NEW PICANTO SE',72000000,2010,73000,1100,'BENSIN','NON ABS','AUTOMATIC',6,5,'TIDAK','TIDAK','TIDAK','YA'),(33,'CONFERO S 1.5 LUX+',185000000,2018,16000,1400,'BENSIN','ABS','AUTOMATIC',10,6,'YA','TIDAK','YA','YA'),(34,'NEW ERTIGA HYBRID GX',237000000,2017,37000,1450,'BENSIN','ABS','MANUAL',14,3,'YA','TIDAK','TIDAK','YA'),(35,'CALYA 1.2 G',157000000,2017,64000,1450,'BENSIN','NON ABS','AUTOMATIC',2,6,'YA','TIDAK','TIDAK','YA'),(36,'BRV E PRESTIGE',176000000,2016,46000,1500,'BENSIN','ABS','AUTOMATIC',1,6,'YA','TIDAK','YA','YA'),(37,'XV 2.0 AWD',235000000,2014,32000,2000,'BENSIN','ABS','AUTOMATIC',12,3,'YA','TIDAK','YA','YA'),(38,'JUKE RX',125000000,2011,76000,1500,'BENSIN','NON ABS','AUTOMATIC',3,3,'TIDAK','TIDAK','YA','YA'),(39,'ALPHARD 2.4 G ATPM',420000000,2013,84000,2300,'BENSIN','ABS','AUTOMATIC',2,6,'YA','TIDAK','TIDAK','YA'),(40,'XPANDER 1.5 ULTIMATE',255000000,2019,27000,1500,'BENSIN','ABS','AUTOMATIC',7,6,'YA','TIDAK','YA','YA'),(41,'NEW BALENO AT',176000000,2017,23000,1300,'BENSIN','ABS','AUTOMATIC',14,5,'YA','TIDAK','TIDAK','YA'),(42,'NEW AYLA 1.2 R',117000000,2019,11000,1200,'BENSIN','ABS','AUTOMATIC',4,5,'YA','TIDAK','TIDAK','YA'),(43,'OUTLANDER SPORT PX',176000000,2014,58000,2000,'BENSIN','ABS','AUTOMATIC',7,3,'YA','TIDAK','TIDAK','YA'),(44,'RUSH S',130000000,2013,73000,1500,'BENSIN','NON ABS','MANUAL',4,3,'TIDAK','TIDAK','TIDAK','YA'),(45,'NEW JAZZ S CVT',223500000,2017,15000,1500,'BENSIN','ABS','AUTOMATIC',1,5,'YA','TIDAK','YA','YA'),(46,'KIJANG GRAND INNOVA 2.0',153000000,2012,96000,2000,'DIESEL','NON ABS','AUTOMATIC',2,6,'TIDAK','YA','TIDAK','YA'),(47,'NEW AVANZA G',73000000,2007,127000,1500,'BENSIN','NON ABS','AUTOMATIC',2,6,'TIDAK','TIDAK','TIDAK','TIDAK'),(48,'ALL NEW CRV 2.0',113500000,2009,137000,2000,'BENSIN','NON ABS','AUTOMATIC',1,3,'YA','TIDAK','TIDAK','TIDAK');
/*!40000 ALTER TABLE `mobil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipe_mobil`
--

DROP TABLE IF EXISTS `tipe_mobil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipe_mobil` (
  `idtipe` int NOT NULL AUTO_INCREMENT,
  `tipe_mobil` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idtipe`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipe_mobil`
--

LOCK TABLES `tipe_mobil` WRITE;
/*!40000 ALTER TABLE `tipe_mobil` DISABLE KEYS */;
INSERT INTO `tipe_mobil` VALUES (1,'SEDAN'),(2,'COUPE'),(3,'SUV'),(4,'CONVERTIBLE'),(5,'HATCHBACK'),(6,'MPV'),(8,'SPORT'),(9,'DOUBLE CABIN'),(10,'OFFROAD'),(11,'===SEMUA===');
/*!40000 ALTER TABLE `tipe_mobil` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-15 22:44:10
