DROP DATABASE IF EXISTS webscraping ;
CREATE DATABASE IF NOT EXISTS webscraping;

USE webscraping;

CREATE TABLE IF NOT EXISTS approved_persons (
	id INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(20),
    name VARCHAR(100),
    score VARCHAR(100),
    PRIMARY KEY (id)
);
