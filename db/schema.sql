CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(75) NOT NULL,
  devoured BOOLEAN DEFAULT false  
);