use bedbootcamp;

DELETE FROM CUSTOMER;
DELETE FROM Address;

INSERT INTO CUSTOMER (TITLE, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, DOB) VALUES
("Ms", "Linda", "See", "LindaS@hotmail.com", "Abc123", NULL),
("Mr", "David", "Lee", "DavidL@gmail.com", "Da12lee", 13/09/1997),
("Ms", "Linda", "Soh", "LSoh@hotmail.com", "Abc123", 20/12/1998);

INSERT INTO Address (Address_ID, Address1, Address2, Email, Country, Pcode) VALUES
("My address 1", "Blk 145, Toa Payoh,", "Lorong 1, #07-12", "DavidL@gmail.com", "Singapore", "145112"),
("My address 2", "Blk 123, Ang Mo Kio", "Ave 6, #12-12", "DavidL@gmail.com", "Singapore", "123121"),
("Addr1", "123 Flora Road", "Garden Way", "LSoh@hotmail.com", "Malaysia", "503984"),
("A1", "22 Lin Hua Road", NULL, "LindaS@hotmail.com", "China", "345982");
