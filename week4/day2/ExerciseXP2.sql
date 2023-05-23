--1
select * from customer
--2
select  (first_name, last_name) as full_name from customer
--3
select distinct create_date from customer
--4
select * from customer
order by first_name desc

--5
select film_id, title, description, release_year rental_duration
from film
order by rental_rate asc

--6
select address, phone from address
where district = 'Texas'
--7
select * from film
where film_id = 15 or film_id = 150
--8
select film_id, title, description,
rental_duration, rental_rate
from film
where title = 'Titanic Boondock'
--9
select film_id, title, description,
rental_duration, rental_rate
from film
where title ilike 'ac%'
--10
select * from film
order by replacement_cost desc
limit 10

--11
select * from film
where replacement_cost > 4.99
order by replacement_cost desc
limit 10

--12
select first_name, last_name, amount, payment_date
FROM customer
INNER JOIN payment
on customer.customer_id = payment.customer_id

--13
SELECT
    film.film_id
FROM
    film
EXCEPT
SELECT
    inventory.film_id
FROM
    inventory;

--14
select city,country
from city
inner join country
on city.country_id = country.country_id
order by country

--15
select cus.customer_id, cus.first_name, 
cus.last_name, pay.amount, pay.payment_date
from customer as cus
join payment as pay on cus.customer_id = pay.customer_id
join staff as sta on sta.staff_id = pay.staff_id


