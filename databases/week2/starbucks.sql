USE starbucks;

CREATE table `customer` (
  `id` int(10) AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(20) NOT NULL,
  `order_id` int(10) NOT NULL,
  
  FOREIGN KEY (order_id) REFERENCES drink_order(id) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;


CREATE table `barista` (
  `id` int(10)  AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `name` varchar(40) NOT NULL,
  `shift_start_time` datetime NOT NULL,
  `shift_end_time` datetime NOT NULL,
);

CREATE table `drink_order` (
  `id` int(10)  AUTO_INCREMENT PRIMARY KEY  NOT NULL,
  `barista_id` int(10)  NOT NULL,
  `drink_id` int(10) NOT NULL,
  `order_date` int(10) NOT NULL,
  
  FOREIGN KEY (barista_id) REFERENCES barista(id) ON DELETE CASCADE,
  FOREIGN KEY (drink_id) REFERENCES drink(id) ON DELETE CASCADE
);

CREATE table  `drink` (
  `id` int(10)  AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` varchar(20) NOT NULL,
  `drink_size_id` int(10) NOT NULL,
  `customize_id` int(10),
  
  FOREIGN KEY (drink_size_id) REFERENCES size(id)ON DELETE CASCADE,
  FOREIGN KEY (customize_id) REFERENCES customize(id)ON DELETE CASCADE
);

CREATE table `size`(
  `id` int(10)  AUTO_INCREMENT PRIMARY KEY  NOT NULL,
  `drink_size` varchar (10)
);


CREATE table `customize` (
  `drink_order` int(10) NOT NULL,
  `milk_option` varchar(10) NULL,
  `syrup_option` varchar(10) NULL
);


INSERT INTO size (id, drink_size)
VALUES (1, 'small');

INSERT INTO size (id, drink_size)
VALUES (2, 'Tall');

INSERT INTO size (id, drink_size)
VALUES (3, 'Grande');

INSERT INTO size (id, drink_size)
VALUES (4, 'Venti');