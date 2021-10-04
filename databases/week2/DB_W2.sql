--==============================================================
--**************************************************************
--                  PART1: WORKING WITH TASKS
--**************************************************************
--==============================================================
USE hyf_lesson1;
INSERT INTO
  task (
    title,
    description,
    created,
    updated,
    due_date,
    status_id,
    user_id
  )
VALUES
  (
    "HYF homework",
    "DataBase week2 homework",
    '2021-09-27',
    '2021-09-27',
    '2021-10-01',
    1,
    12
  );
SELECT
  *
FROM
  task;

--===============================
-- Change the title of a task
--===============================
UPDATE
  task
SET
  title = 'grocery shop from Nemlig'
WHERE
  status_id = 3 AND title LIKE "%dog%";

--===============================
--  Change a task due date
--===============================

UPDATE
  task
SET
  due_date = '2021-12-31'
WHERE
  due_date IS NULL;



--===============================
--  Change a task status
--===============================

UPDATE
  task
SET
  status_id = 2
WHERE
  title LIKE "%database%" AND description IS null;

--===============================
--  Make a task as complete
--===============================

UPDATE task
SET status_id = 3
WHERE title LIKE "%hyf%";

--===============================
--  Delete a task
--===============================

DELETE 
FROM task 
WHERE id = 7;
