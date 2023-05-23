--1,2
CREATE TABLE product_orders 
(
	id SERIAL PRIMARY KEY
)
CREATE TABLE items 
(
	id SERIAL PRIMARY KEY,
	price INT,
	fk_id INT REFERENCES product_orders(id)
)

--3
CREATE FUNCTION Amount(id INT) RETURNS DECIMAL(10,2) AS $$
DECLARE
    total DECIMAL(10,2);
BEGIN
    SELECT SUM(price) INTO total
    FROM items
    WHERE order_id = Amount.order_id;

    RETURN total;
END;
$$ LANGUAGE plpgsql;

--4
CREATE TABLE users
(
	id SERIAL PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	fk_id INT REFERENCES product_orders(id) 
)

ALTER TABLE product_orders
ADD COLUMN fk_id INT REFERENCES users(id)

SELECT * FROM product_orders 

-- FUNCTION HERE TO DIFFICULT FOR ME RIGHT NOW))))