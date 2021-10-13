-- CREATE DATABASE db_w2;
USE db_w2;
CREATE TABLE `article` (
  `id` int(10) AUTO_INCREMENT PRIMARY,
  `author_id` int(10),
  `title` VARCHAR(300),
  `content` LONGTEXT,
  `tag_id` int(10)
);
CREATE TABLE `tags` (`id` int(10), `name` VARCHAR(100));
CREATE TABLE `authors` (`id` int(10), `name` VARCHAR(100));

ALTER TABLE 'article' modify COLUMN 'id' INT(10) AUTO_INCREMENT PRIMARY;


UPDATE article
SET title = "Jiu", tag_id = 2
WHERE author_id = 3;


insert into
  article (id, author_id, title, content, tag_id)
values
  (
    1,
    1,
    "BREAKING NEWS: Water is wet!",
    "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    3
  );
INSERT INTO
  tags (id, name)
VALUES
  (1, "breaking");
