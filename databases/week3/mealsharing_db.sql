USE mealsharing_db;
--==========================================================================================
-- Making Tables [MEAL TABLE]
--==========================================================================================
CREATE Table `Meal` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `location` VARCHAR(255),
  `when_date` DATETIME NOT NULL,
  `max_reservations` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `created_date` DATE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--==========================================================================================
-- Making Tables [RESERVATION TABLE]
--==========================================================================================
CREATE Table `Reservation` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` INT NOT NULL,
  `meal_id` INT NOT NULL,
  `created_date` DATE,
  `contact_phonenumber` VARCHAR(255),
  `contact_name` VARCHAR(255),
  `contact_email` VARCHAR(255),
  CONSTRAINT fk_reserve FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--==========================================================================================
-- Making Tables [REVIEW TABLE]
--==========================================================================================
CREATE Table `Review` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255),
  `description` TEXT,
  `meal_id` INT,
  `stars` INT,
  `created_date` DATE,
  CONSTRAINT fk_review FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
--==========================================================================================
-- Insert data [ MEAL TABLE ]
--==========================================================================================
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Asian-vegetarian",
    "vegitarian food with Asian style",
    "Valby",
    "2021-11-11",
    8,
    200,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Tteockbokki",
    "sticky rice cake with spicy sauce",
    "Norrebro",
    "2021-10-11",
    20,
    100,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Bulgogi",
    "Korean marinated beef",
    "Vesterbro",
    "2021-12-15",
    20,
    150,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Japchae",
    "Korean party food, glass noodle with veggies",
    "Vesterbro",
    "2021-10-25",
    20,
    150,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Ttock-guk",
    "Korean new years food",
    "Lyngby",
    "2021-12-28",
    5,
    200,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Dak-galbi",
    "Spicy chicken",
    "Høje Taastrup",
    "2021-10-28",
    8,
    200,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Dak-kalguksu",
    "Chicken soup noodle",
    "Copenhagen",
    "2021-10-31",
    5,
    180,
    "2021-10-06"
  );
INSERT INTO
  meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Vegetarian Bibimbab",
    "Mixed veggie bowl with rice",
    "Amager East",
    "2021-11-28",
    15,
    150,
    "2021-10-06"
  );
--==========================================================================================
  -- Insert data [ RESERVATION TABLE ]
  --==========================================================================================
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    2,
    1,
    "2021-10-04",
    "+45-12 34 56 78",
    "Jiu",
    "jiu@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    5,
    8,
    "2021-10-06",
    "+45 02 04 06 08",
    "JTheis",
    "theis@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    2,
    1,
    "2021-10-02",
    "+45 01 03 05 07",
    "Flori",
    "flori@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    2,
    4,
    "2021-10-07",
    "+45 78 45 45 65",
    "Jesper",
    "jesper@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    10,
    2,
    "2021-10-01",
    "+45 12 87 54 32",
    "Henrik",
    "henrik@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    15,
    3,
    "2021-10-05",
    "+45 98 45 32 65",
    "Adam",
    "damdam@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    15,
    3,
    "2021-10-05",
    "+45 98 45 32 65",
    "Adam",
    "damdam@email.com"
  );
INSERT INTO
  reservation (
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES
  (
    5,
    5,
    "2021-10-25",
    "+45 98 45 32 65",
    "Adam",
    "damdam@email.com"
  );
--==========================================================================================
  -- Insert data [ REVIEW TABLE ]
  --==========================================================================================
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  (
    "super nice",
    "it was terrific that I can have more recipe of vegetarian food",
    1,
    4,
    "2021-09-30"
  );
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  (
    "lovely",
    "good experience to try and make new food",
    1,
    5,
    "2021-10-01"
  );
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  ("awesome", "wonderful time", 6, 4, "2021-09-11");
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  (
    "always great",
    "It's always fun to try and learn many food",
    8,
    4,
    "2021-10-11"
  );
INSERT INTO
  review (title, description, meal_id, stars, created_date)
VALUES
  (
    "good",
    "everything was good but too spicy to me",
    2,
    3,
    "2021-10-13"
  );