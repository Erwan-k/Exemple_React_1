 SET NAMES utf8 ;
DROP TABLE IF EXISTS `Utilisateurs`;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Utilisateurs` (
  `user` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `Utilisateurs` WRITE;

UNLOCK TABLES;
