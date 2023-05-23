CREATE TABLE Book
(
	book_id SERIAL PRIMARY KEY, 
	title TEXT NOT NULL, 
	author TEXT NOT NULL
)
INSERT INTO book(title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')

CREATE TABLE Student
(
	student_id SERIAL PRIMARY KEY, 
	name TEXT NOT NULL UNIQUE, 
	age INT CHECK (age <= 15)
)

INSERT INTO Student(name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)




CREATE TABLE Library
(
	book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date DATE,
	PRIMARY KEY (book_fk_id, student_id)
)
drop table library
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'John'), 
        '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), 
        '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), 
        (SELECT student_id FROM Student WHERE name = 'Lera'), 
        '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), 
        (SELECT student_id FROM Student WHERE name = 'Bob'), 
        '2021-08-12');

SELECT * FROM LIBRARY

SELECT student.name, book.title FROM library
JOIN book ON  library.book_fk_id = book.book_id
JOIN student ON  library.student_id = student.student_id

SELECT AVG(student.age) FROM library
JOIN student ON  library.student_id = student.student_id
WHERE book_fk_id = 1 
