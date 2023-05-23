-- DailyChallenge

-- Part 1

-- CREATE TABLE customer
-- (
-- 	id INT NOT NULL PRIMARY KEY UNIQUE,
-- 	first_name VARCHAR(50) NOT NULL,
-- 	last_name VARCHAR(50) NOT NULL
-- );
-- CREATE TABLE customer_profile
-- (
-- 	id SERIAL NOT NULL PRIMARY KEY,
-- 	isLoggedIn BOOL DEFAULT false NOT NULL,
-- 	customer_id INT NOT NULL REFERENCES customer(id) UNIQUE
-- )

-- INSERT INTO customer
-- VALUES
-- (1,'Jonh','Doe'),
-- (2,'Jerome','Lalu'),
-- (3,'Lea','Rive');

-- INSERT INTO customer_profile
-- VALUES
-- (1,True,(SELECT id FROM customer where first_name = 'Jonh')),
-- (2,False,(SELECT id FROM customer where first_name = 'Jerome'))

-- SELECT first_name FROM customer JOIN customer_profile
-- ON customer.id = customer_profile.customer_id
-- WHERE customer_profile.isLoggedIn = True

-- SELECT first_name ,isLoggedIn FROM customer 
-- LEFT JOIN customer_profile
-- ON customer.id = customer_profile.customer_id

-- SELECT COUNT(*) FROM customer 
-- LEFT JOIN customer_profile
-- ON customer.id = customer_profile.customer_id
-- WHERE  isLoggedIn <> TRUE OR isLoggedIn IS NULL

-- PART 2
CREATE TABLE Book
(
	book_id SERIAL PRIMARY KEY, 
	title TEXT NOT NULL, 
	author TEXT NOT NULL
)
INSERT INTO Book (title, author)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)