--###############################################################
--                         Queries
--###############################################################
--
--
---------------------------------------------------------------
--************************ MEAL QUERY ************************
---------------------------------------------------------------
-- Get all meals
SELECT  *
FROM  meal;


-- Add a new meal
INSERT INTO meal (title, description, location, when_date, max_reservations, price, created_date)
VALUES ("Korean breakfast", "typicall breakfast", "Vesterbro", "2021-10-15", 10, 150, "2021-10-07");


-- Get a meal with any id, fx 1
SELECT  *
FROM  meal
WHERE  id = 5;


-- Update a meal with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE  meal
SET  location = "Østerbro",  max_reservations = 10
WHERE  id = 4;


-- Delete a meal with any id, fx 1
DELETE FROM  meal
WHERE  id = 6;
---------------------------------------------------------------
---------------------------------------------------------------
--
--
--
--
---------------------------------------------------------------
--******************   RESERVATION QUERY **********************
---------------------------------------------------------------
-- Get all reservations
SELECT  *
FROM  reservation;


-- Add a new reservation
INSERT INTO  reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES  (1, 1, "2021-10-07", "+45 22 22 22 22", "Angela",  "angy@email.com");



-- Get a reservation with any id, fx 1
SELECT  *
FROM  reservation
WHERE  id = 1;


-- Update a reservation with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE  reservation
SET  number_of_guests = 8,  contact_name = 'Sunil',  contact_phonenumber = "+45 00 11 22 33"
WHERE  id = 7;


-- Delete a reservation with any id, fx 1
DELETE FROM  reservation
WHERE  id = 6;
---------------------------------------------------------------
---------------------------------------------------------------
--
--
--
---------------------------------------------------------------
--*********************  REVIEW QUERY ************************
---------------------------------------------------------------
-- Get all reviews
SELECT  *
FROM  review;


-- Add a new review
INSERT INTO  review (title, description, meal_id, stars, created_date)
VALUES  ("good", "was fun", 5, 4, "2021-10-17");


-- Get a review with any id, fx 1
SELECT  *
FROM  review
WHERE  id = 4;


-- Update a review with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE  review
SET  title = "nice",  stars = 4.5
WHERE  id = 4;



-- Delete a review with any id, fx 1
DELETE FROM  review
WHERE  id = 4;
---------------------------------------------------------------
---------------------------------------------------------------
--
--
--
--
--   ###############################################################
--                    Additional    Queries
--   ###############################################################
-- Get meals that has a price smaller than a specific price fx 90
SELECT  *
FROM  meal
WHERE  price < 150;


-- Get meals that still has available reservations
SELECT  meal.id,  meal.title,  meal.description,  meal.when_date,  meal.max_reservations,  SUM(reservation.number_of_guests)
FROM  meal
JOIN reservation ON reservation.meal_id = meal.id
GROUP BY  meal.id
ORDER BY  meal.id ASC;


-- Get meals that partially match a title.
-- (Rød grød med will match the meal with the title Rød grød med fløde)
SELECT  title,  description
FROM  meal
WHERE  title LIKE "%korean%"  OR description LIKE "%korean%";


-- Get meals that has been created between two dates
SELECT  *
FROM  meal
WHERE  created_date BETWEEN "2021-10-01"  AND "2021-10-06";


-- Get only specific number of meals fx return only 5 meals
SELECT  *
FROM  meal
LIMIT  2;


-- Get the meals that have good reviews
SELECT  *
FROM  meal
JOIN review ON review.meal_id = meal.id
WHERE  stars > 3;


-- Get reservations for a specific meal sorted by created_date
SELECT  meal.title,  meal.description,  meal.when_date,  meal.created_date
FROM  meal
JOIN reservation AS res ON res.id = meal.id
WHERE  meal.title LIKE "%vege%"
ORDER BY  meal.created_date;


-- Sort all meals by average number of stars in the reviews
SELECT  meal.title,  meal.description,  AVG(review.stars) as average_stars
FROM  meal
JOIN review ON meal.id = review.meal_id
GROUP BY  meal.id
ORDER BY  average_stars DESC;