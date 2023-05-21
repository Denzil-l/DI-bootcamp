-- create table items
-- (
-- 	items_id int primary key,
-- 	item text,
-- 	price int 
-- );

-- create table customers
-- (
-- 	customers_id int primary key,
-- 	first_name char(50),
-- 	last_name char(50)
-- );

-- insert into items
-- values
-- (1,'Small desk',100),
-- (2,'Big desk',300),
-- (3,'Fan ',80);
-- insert into customers
-- values
-- (1,'Greg','Jones'),
-- (2,'Sandra','Jones'),
-- (3,'Scott','Scott'),
-- (4,'Trevor','Green'),
-- (5,'Melanie','Johnso');


-- select * from items
-- select * from items where price > 80
-- select * from items where price < 300
-- select * from items where price <= 300
-- select * from customers where last_name = 'Smith'
-- select * from customers where last_name = 'Jones'
select * from customers where first_name <> 'Scott'