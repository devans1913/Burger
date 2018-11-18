DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE Burgers(
  ID INT AUTO_INCREMENT NOT NULL,
  BurgerName VARCHAR(100) NOT NULL,
  Devoured BOOLEAN NOT NULL,
  BurgerDate TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);