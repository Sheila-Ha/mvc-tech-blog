-- DROP DATABASE
DROP DATABASE IF EXISTS techblog_db;

-- CREATE DATABASE
CREATE DATABASE techblog_db;

-- -- CREATE TABLE
-- CREATE TABLE post (
--   name VARCHAR(255) NOT NULL,
--   description VARCHAR (255),
--   date_created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE `user` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `title` VARCHAR(255),
--   `contents` VARCHAR(255),
--   `needed_funding` DECIMAL(5,2) NOT NULL
--   `email` VARCHAR(255) NOT NULL UNIQUE,
--   `password` VARCHAR(255) NOT NULL,
--   PRIMARY KEY (`id`)
-- );