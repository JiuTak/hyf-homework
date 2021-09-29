SELECT
  COUNT(*)
FROM
  task;
SELECT
  *
FROM
  task
WHERE
  title like "%SQL%"
  OR description LIKE "%SQL%";
SELECT
  name,
  phone
FROM
  user
WHERE
  id = 10;
SELECT
  count(name)
FROM
  user;
SELECT
  *
FROM
  user
WHERE
  id < 6;
SELECT
  *
FROM
  user
WHERE
  id BETWEEN 1
  AND 5;
SELECT
  *
FROM
  user
ORDER BY
  id DESC
LIMIT
  3;
SELECT
  SUM(id) as sumofID
FROM
  user;
SELECT
  *
FROM
  user
ORDER BY
  name ASC;
SELECT
  *
FROM
  task
WHERE
  title LIKE "%SQL%"
  OR description LIKE "%SQL%";
SELECT
  *
FROM
  user
WHERE
  name LIKE "%Maryrose%";
SELECT
  title,
  description user_id
FROM
  task
WHERE
  user_id = 6;
-- not working
SELECT
  title,
  user_id,
  (
    SELET name
    FROM
      user
    WHERE
      id = task.user_id
  ) as name
FROM
  task
WHERE
  user_id IN (
    SELECT
      id
    FROM
      user
    WHERE
      name LIKE "%Maryrose%"
      OR name LIKE "%ro%"
  );
SELECT
  title,
  user_id,
  COUNT(user_id)
FROM
  task
GROUP BY
  user_id;
-- Find how many tasks with a status= Done each user is responsible for
SELECT
  status_id,
  user_id,
  COUNT(title)
FROM
  task
WHERE
  status_id IN (
    SELECT
      id
    From
      status
    WHERE
      name = "Done"
  )
GROUP BY
  user_id;