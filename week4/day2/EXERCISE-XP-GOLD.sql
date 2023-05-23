select rating, count(rating)
from film
group by rating
order by count(rating)

select title from film
where rating = 'G' or rating = 'PG-13'
and length > 120 and rental rate < 3.00
order by title asc

update customer
set store_id = 999, first_name = 'Denis',
last_name = 'Shukhat', email = 'Denzil.l@yandex.ru',
create_date = '22-05-2023'
where customer_id = 1

update address
set address = 'XXXXXXXXXXXXXXX'
where address_id = 5