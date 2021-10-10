-- PART2: SCHOOL DATABASE
--CREATE DATABASE school_db;
USE school_db;
CREATE TABLE `class` (
  `id` int(10) AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(30) NOT NULL,
  `begins` DATE NOT NULL,
  `ends` DATE NOT NULL
);
CREATE TABLE `student` (
  `id` int(10) AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(25) NOT NULL,
  `phone` int(8) NOT NULL,
  `class_id` int(10) NOT NULL,
  FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
);
-- Create an index on the name column of the student table.
CREATE UNIQUE INDEX name_index ON student(name);
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE
  class
ADD
  status ENUM ('not-started', 'ongoing', 'finished')