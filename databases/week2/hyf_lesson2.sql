-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT
  user.id,
  task.title,
  user.email
FROM
  user,
  task,
  user_task
WHERE
  user.email LIKE "%@spotify.com"
  AND user.id = user_task.user_id
  AND user_task.task_id = task.id;


select task.id,task.title,user.email ,user.id as UI,user.name from task
join user on task.id=user.id
where user.email like "%@spotify.com%";
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT
  user.name AS user_name,
  task.title AS task_name,
  status.name as status_name
FROM
  user,
  task,
  status,
  user_task
WHERE
  user.id = user_task.user_id
  AND user_task.task_id = task.id
  AND task.status_id = status.id
  AND user.name LIKE "Donald Duck"
  AND status.name LIKE "Not started";
SELECT
  user.name AS user_name,
  task.title AS task_name,
  status.name as status_name
FROM
  user_task
  JOIN user ON user_id = user.id
  JOIN task ON task.id = user_task.task_id
  JOIN status ON status.id = status_id
WHERE
  user.name = "Donald Duck"
  AND status.name = "Not started";
--  Get all the tasks for 'Maryrose Meadows' that were created in september
  --  (hint: month(created)=month_number)
SELECT
  task.title as task_title,
  task.id as task_id,
  user.name as user_name,
  task.created
FROM
  task,
  user_task,
  user
WHERE
  user.name LIKE "Maryrose Meadows"
  AND user.id = user_task.user_id
  AND user_task.task_id = task.id
  AND month(created) = 09;



  SELECT title, month(created), user.name Created_by
FROM task
  JOIN user
  ON task.id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);

-- Find how many tasks where created in each month,
  -- e.g. how many tasks were created in october, how many tasks were created in november,
  -- etc. (hint: use group by)
SELECT
  COUNT(task.id) AS Count_Tasks,
  month(created) AS Created_Month
FROM
  task
GROUP BY
  monthname(created);