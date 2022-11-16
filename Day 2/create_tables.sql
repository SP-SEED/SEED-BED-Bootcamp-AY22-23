use bedbootcamp;

CREATE TABLE CUSTOMER (
TITLE CHAR(2) NOT NULL,
FIRST_NAME VARCHAR(20) NOT NULL,
LAST_NAME VARCHAR(20) NOT NULL,
EMAIL VARCHAR(20) NOT NULL,
PASSWORD CHAR(8) NOT NULL,
DOB DATE NULL,
PRIMARY KEY (EMAIL)
);

CREATE TABLE Address (
Address_ID VARCHAR(20) NOT NULL,
Address1  VARCHAR(20) NOT NULL,
Address2 VARCHAR(20) NULL,
Email VARCHAR(20) NOT NULL,
Country VARCHAR(20) NOT NULL,
Pcode VARCHAR(20) NOT NULL,
PRIMARY KEY (Address_ID)
);