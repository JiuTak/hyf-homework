-- How many tasks are in the task table

SELECT COUNT(*)
FROM task;

-- How many tasks in the task table do not have a valid due date

SELECT COUNT(title)
FROM task
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done

SELECT *
FROM task
WHERE status_id IN (SELECT id FROM status WHERE name = "Done");

-- Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE status_id IN (SELECT id FROM status WHERE name != "Done");

-- Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY created DESC ;

-- Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title LIKE "%database%" or description LIKE "%database%";


-- Get the title and status (as text) of all tasks
SELECT task.id, task.title, task.description, s.name, s.id as status_id
FROM task
JOIN status s on s.id = task.status_id;

-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(*) as Status_total
FROM status
JOIN task t ON t.status_id = status.id GROUP BY t.status_id;


-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(*) as Status_total
FROM status
JOIN task t ON t.status_id = status.id GROUP BY t.status_id
ORDER BY Status_total DESC;