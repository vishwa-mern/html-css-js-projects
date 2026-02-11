 SHOW DATABASES;
CREATE DATABASE college;
USE college;

CREATE TABLE student (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  AGE INT
);
INSERT INTO student VALUES (1, 'Alice', 85);
INSERT INTO student VALUES (2, 'Bob', 90);
SELECT * FROM student;
