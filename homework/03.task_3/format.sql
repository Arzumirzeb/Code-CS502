
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    age INT,
    university VARCHAR(255),
    city VARCHAR(255)
)


INSERT INTO Students (StudentID, firstName,lastName,age,university,city
)
VALUES ('1', 'Arzu', 'Mirzabayova', '20', 'ASOIU', 'Baku'),
('2', 'Zehra', 'Huseynova', '19', 'Diller', 'Baku'),
('3', 'Farid', 'Faridli', '25', 'ADA', 'Baku'),
('4', 'Islam', 'Islamli', '18', 'ASOIU', 'Baku'),
('5', 'Fuad', 'Fuadli', '23', 'BDU', 'Baku'),
('6', 'Sabuhi', 'Sabuhili', '23', 'UNEC', 'Baku'),
('7', 'Hasan', 'Hasanli', '20', 'UNEC', 'Baku'),
('8', 'Aga', 'Agali', '22', 'ASOIU', 'Baku'),
('9', 'Tahmin', 'Tahminli', '20', 'AZMIU', 'Baku'),
('10', 'Furidin', 'Furiidinli', '20', 'ASOIU', 'Baku'),
('11', 'Arzu', 'Mirzabayova', '20', 'ASOIU', 'Baku')

SELECT age FROM Students;

SELECT firstname, lastname FROM Students;

SELECT * FROM Students WHERE `firstName` LIKE 'M%' OR `firstName` LIKE 'N%';

SELECT * FROM Students WHERE  NOT `firstName` = "Arzu";

SELECT * FROM Students WHERE `firstName` LIKE '_U%';

UPDATE Students SET city = 'Rome' WHERE `StudentID` IN (2, 3);