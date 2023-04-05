CREATE DATABASE IF NOT EXISTS `lanzelotti_beauty`;
USE `lanzelotti_beauty`;

CREATE TABLE IF NOT EXISTS `admin` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(60) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(60) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  PRIMARY KEY(`id`),
  UNIQUE INDEX `userName_unique` (`userName`),
  UNIQUE INDEX `password_unique` (`password`)
);

CREATE TABLE IF NOT EXISTS `service` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  PRIMARY KEY(`id`),
  UNIQUE INDEX `type_unique` (`type`)
);

CREATE TABLE IF NOT EXISTS `product_oil` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `bergamota` BOOLEAN DEFAULT FALSE,
  `lavanda` BOOLEAN DEFAULT FALSE,
  `limao` BOOLEAN DEFAULT FALSE,
  `hortela` BOOLEAN DEFAULT FALSE,
  `capim_limao` BOOLEAN DEFAULT FALSE,
  `camomila` BOOLEAN DEFAULT FALSE,
  `eucalipto` BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `request` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `clientName` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientEmail` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientCpf` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientPhone` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientCep` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientStreet` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientNumber` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientDistrict` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientComplement` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `clientState` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
  `status` INT(10) NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_oil_id` INT(10),
  `service_id` INT(10),
  PRIMARY KEY(`id`),
  FOREIGN KEY (`product_oil_id`) REFERENCES `product_oil`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (`service_id`) REFERENCES `service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  UNIQUE INDEX `email_unique` (`clientEmail`)
);