--EXERCISE XP


--EXERICE 1

--1
SELECT DISTINCT language.name FROM film
JOIN language 
ON film.language_id = language.language_id
-- IT GIVE US JSUT ENGLISH BECAUSE ALL FLIMS HAVE ENGLUISH LANGUAGE

--2
SELECT film.title,film.description,language.name FROM film
JOIN language 
ON film.language_id = language.language_id

SELECT film.title,film.description,language.name FROM film
LEFT JOIN language 
ON film.language_id = language.language_id
--IT GIVE US THE SAME RESULT LIKE PREVIOUS QUERY, BECAUSE WE DON'T HAVE FILM WITH NULL OR ANOTHER LANGUAGE
SELECT film.title,film.description,language.name FROM film
RIGHT JOIN language 
ON film.language_id = language.language_id

--3
CREATE TABLE new_film 
(
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
)

--4 
CREATE TABLE customer_review
(
	review_id SERIAL NOT NULL PRIMARY KEY,
	film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
	language_id INT REFERENCES language(language_id),
	title VARCHAR(50),
	score SMALLINT,
	review_text TEXT,
	last_update date
)
--5
INSERT INTO customer_review (film_id,language_id,title,score,review_text,last_update)
VALUES
(1,4,'It is review about attact of the Titans',5,'Some very big and ipmortant text which explain us why we should or not should watch to this movie','2023-05-23'),
(2,2,'It is review about attact of the Titans',8,'Some very big and ipmortant text which explain us why we should or not should watch to this movie','2023-05-23')

--6
DELETE FROM new_film WHERE id = 1


--EXERCISE 2
--IN THIS MOMENT MY PGADMIN CRASHED AND DELETED ALL  Y QUERIES WHICH I DIDN'T SAVE
--SO I RESTORED IT BUT MAYBE SOMETHID IS DIFFERENT
--REALLY SAD THAT PGADMIN DOESN'T HAVE AUTO SAVE
--1
UPDATE film 
SET language_id = 5
WHERE film_id between 20 and 100

--2
-- SO we have two tables which references to customer table
-- IT is rental and payment tables
-- All of them use customer_id like a foreign key
-- The only difference which I can see when I INSERT a new row is
-- customer_id must be unique and depends on condition of delete it may affect for
-- two other tables(I mean delete row from them or forbid delete it)
select * from new_film
--3
drop table customer_review
-- Customer_review had a references to new_film table
-- But after droping the table, rows from new_film wich had relations with row from customer_review
-- Didn't delete.

--4
SELECT * FROM rental 
WHERE return_date IS null

--5 
SELECT film.title,film.replacement_cost from film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date is null
ORDER BY film.replacement_cost DESC
LIMIT 30

--6
SELECT (actor.first_name,actor.last_name), film.title,film.description FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' and last_name = 'Monroe'
AND film.description ILIKE '%restler%'

--
SELECT * FROM film 
WHERE length < 60 and 
rating = 'R' and 
film.description ILIKE 
'%documentary%'

--
SELECT film.title
FROM film JOIN
inventory ON film.film_id
= inventory.film_id JOIN
rental ON inventory.inventory_id
= rental.inventory_id JOIN
customer ON rental.customer_id
= customer.customer_id JOIN
payment ON rental.rental_id = payment.rental_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND payment.amount > 4.00
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01' 

--
SELECT film.title
FROM film JOIN
inventory ON film.film_id
= inventory.film_id JOIN
rental ON inventory.inventory_id
= rental.inventory_id JOIN
customer ON rental.customer_id
= customer.customer_id JOIN
payment ON rental.rental_id = payment.rental_id
WHERE customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan' AND
(film.description ILIKE '%boat%' or
film.title ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1