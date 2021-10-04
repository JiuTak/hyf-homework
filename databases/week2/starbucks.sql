CREATE table 'customer' (
    id int PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL,
    order_id int(10) NOT NULL
    
    FOREIGN KEY (order_id) REFERENCES drink_order(id) ON DELETE CASCADE
)


CREATE table 'barista' (
  id int(10) NOT NULL PRIMARY KEY,
  name varchar(40) NOT NULL,
  shift_start_time datetime NOT NULL,
  shift_end_time datetime NOT NULL
)

CREATE table 'drink_order' (
  id int(10) PRIMARY KEY  NOT NULL ,
  barista_id int(10)  NOT NULL ,
  drink_id int(10) NOT NULL ,
  
  FOREIGN KEY (barista_id) REFERENCES barista(id) ON DELETE CASCADE
  FOREIGN KEY (drink_id) REFERENCES drink(id) ON DELETE CASCADE
)

CREATE table  'drink' (
  id int(10) PRIMARY KEY NOT NULL ,
  name varchar(20) NOT NULL,
  drink_size_id int(10) NOT NULL
  customize_id int(10),
  
  FOREIGN KEY (drink_size_id) REFERENCES size(id)ON DELETE CASCADE
  FOREIGN KEY (customize_id) REFERENCES customize(id)ON DELETE CASCADE
)

CREATE table 'size'(
  id int(10) PRIMARY KEY  NOT NULL ,
  small varchar (10),
  tall varchar (10),
  grande varchar(10),
  venti varchar(10)
)


CREATE table 'customize' (
  drink_order int(10) NOT NULL,
  milk_option varchar(10) NULL,
  syrup_option varchar(10) NULL
)