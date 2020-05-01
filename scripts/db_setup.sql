/*
This script is used to set up the database during development and testing.
It will not do anything once the database has been implemented for production.
*/

/*
Set earth_sci as current database.
*/
USE earth_sci;

/*
Create alumni table if it doesn't exist.
*/
CREATE TABLE IF NOT EXISTS alumnis (
    email               VARCHAR(50) NOT NULL,
    first_name          VARCHAR(25) NOT NULL,
    last_name           VARCHAR(25) NOT NULL,
    major               VARCHAR(25),
    graduation_year     INT UNSIGNED,
    occupation          VARCHAR(50),
    newletter_opt_in    BOOLEAN,
    bio                 BLOB,
    PRIMARY KEY(email)
);

/*
Insert test values into alumni table.
*/
INSERT INTO alumnis VALUES 
    ("test1@email.com", "aaa_first", "aaa_last", "major 1", 2000, "occupation 1", 1 ,"test1"),
    ("test2@email.com", "bbb_first", "bbb_last", "major 2", 2001, "occupation 2", 1, "test2"),
    ("test3@email.com", "ccc_first", "ccc_last", "major 1", 2001, "occupation 3", 0, "test3"),
    ("test4@email.com", "ddd_first", "ddd_last", "major 2", 2000, "occupation 1", 0, "test4"),
    ("test5@email.com", "eee_first", "eee_last", "major 3", 2004, "occupation 4", 1, "test5"),
    ("test6@email.com", "fff_first", "fff_last", "major 3", 2002, "occupation 1", 1, "test6"),
    ("test7@email.com", "ggg_first", "ggg_last", "major 2", 2000, "occupation 3", 0, "test7"),
    ("test8@email.com", "hhh_first", "hhh_last", "major 3", 2001, "occupation 4", 1, "test8"),
    ("test9@email.com", "iii_first", "iii_last", "major 2", 2004, "occupation 2", 1, "test9"),
    ("test10@email.com", "jjj_first", "jjj_last", "major 1", 2003, "occupation 4", 1 , "test10"); 


CREATE TABLE IF NOT EXISTS admins(
    userid      INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(25) NOT NULL,
    email       VARCHAR(25) NOT NULL,
    password    VARCHAR(500) NOT NULL
);


INSERT INTO admins VALUES
    (2000, "Main Admin", "main@email.com", "password");
