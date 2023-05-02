-- create the tables for our actors
CREATE TABLE `movie_actors` (
   actorid int(10) unsigned NOT NULL,
   movieid int(10) unsigned NOT NULL,
   uid int(10) unsigned NOT NULL AUTO_INCREMENT,
   PRIMARY KEY (uid),
   FOREIGN KEY (actorid) REFERENCES  actors(actorid),
   FOREIGN KEY (movieid) REFERENCES  movies(movieid)
);
-- insert data into the tables
INSERT INTO movie_actors (actorid, movieid)
VALUES
   ("1","3"),
   ("2","4"),
   ("3","5"),
   ("4","11"),
   ("5","12");