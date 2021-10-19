-- CREATE DATABASE testDB;
USE testDB;
CREATE TABLE `article` (
  `id` int(10) AUTO_INCREMENT PRIMARY,
  `author_id` int(10),
  `title` VARCHAR(300),
  `content` LONGTEXT,
  `tag_id` int(10)
);
CREATE TABLE `tags` (`id` int(10), `name` VARCHAR(100));
ALTER TABLE
  `tags`
modify
  COLUMN `id` int(10) AUTO_INCREMENT PRIMARY KEY;
CREATE TABLE `authors` (`id` int(10), `name` VARCHAR(100));
ALTER TABLE
  article
ADD
  email VARCHAR(25);
ALTER TABLE
  `article`
modify
  COLUMN `id` int(10) AUTO_INCREMENT PRIMARY KEY;
drop TABLE article;
CREATE TABLE `article` (
    `id` int(10) AUTO_INCREMENT PRIMARY KEY,
    `author_id` int(10) NOT NULL,
    `title` VARCHAR(300) NOT NULL,
    `content` LONGTEXT,
    `tag_id` int(10) NOT NULL,
    FOREIGN KEY (tag_id) REFERENCES Tags(id)
  );
ALTER TABLE
  article
ADD
  FOREIGN KEY (tag_id) REFERENCES tags(id);
insert into
  article (id, author_id, title, content, tag_id)
values
  (1, 1, "Santhosh", "Its about Web development", 2);
insert into
  article (id, author_id, title, content, tag_id)
values
  (
    2,
    1,
    'Darya Stepanova',
    'Hack Your Future student',
    3
  );
insert into
  article (author_id, title, content, tag_id)
values
  (3, "Sunil", "Its about Front end development", 3);
insert into
  article(author_id, title, content, tag_id)
values
  (1, "James Smith", " Water is wet!", 1);
insert into
  article(author_id, title, content, tag_id)
values
  (1, "Foreign key constrains", " verify", 4);
insert into
  article(author_id, title, tag_id)
values
  (1, "James Smith", 999);
Select
  *
from
  article;
SELECT
  title,
  (
    select
      name
    from
      tags
    where
      id = tag_id
  ) as tag_name
from
  article;
SELECT
  title,
  name as author_name
FROM
  article
  INNER JOIN authors ON article.author_id = authors.id;
SELECT
  title,
  name as author_name
FROM
  article FULL
  OUTER JOIN authors ON article.author_id = authors.id;
Select
  *
from
  article;
select
  *
from
  tags;
SELECT
  *
from
  authors;
UPDATE
  authors
SET
  name = 'sunil'
WHERE
  id = 1;
UPDATE
  article
SET
  author_id = 9
WHERE
  id = 2;
INSERT INTO
  authors
VALUES(2, "Divia");
INSERT INTO
  authors
VALUES(3, "Floritina");
UPDATE
  authors
SET
  name = "Floritina"
WHERE
  id = 3;
DELETE FROM
  authors
WHERE
  name = "breaking";
UPDATE
  article
SET
  content = "something nothing"
WHERE
  id = 5;
UPDATE
  article
SET
  tag_id = 9
WHERE
  id = 5;
DELETE FROM
  article
WHERE
  id = "5";
INSERT INTO
  tags
VALUES(1, "science");
INSERT INTO
  tags
VALUES(2, "breakings");
INSERT INTO
  tags
VALUES(3, "class19");
select
  *
FROM
  tags;
DELETE FROM
  tags
WHERE
  id = 1;
INSERT INTO
  authors
VALUES(1, "breaking");
INSERT INTO
  article (id, title, content)
VALUES(1, "one", "test-content");