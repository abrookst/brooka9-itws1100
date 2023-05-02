-- create the tables for our actors
CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `last_name` varchar(100) NOT NULL,
   `first_names` varchar(100) NOT NULL,
   `dob` varchar(10) NOT NULL,
   PRIMARY KEY (`actorid`)
);
-- insert data into the tables
INSERT INTO actors
VALUES 
   (1, "Brooks", "Mel", "1930-12-03"),
   (2, "Cera", "Michael", "1988-06-07"),
   (3, "Day", "Charlie", "1976-02-09"),
   (4, "Huy Quan", "Ke", "1971-08-20"),
   (5, "Moore", "Shameik", "1995-05-04");