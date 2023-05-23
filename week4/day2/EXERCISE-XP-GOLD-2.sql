--Exercise 2
select * from students
update students
set birth_date = '1998-11-02'
where first_name = 'Lea' or first_name = 'Marc'

DELETE FROM students
WHERE first_name = 'Lea';

select count(*) from students

select count(*) from students
where birth_date > '2000-01-01'

alter table students
add math_grade int

update students
set math_grade = 80
where id =1

update students
set math_grade = 90
where id = 2 or id =4

select count(*) from students
where math_grade > 83

-- update students
-- set first_name = 'Omer', last_name = 'Simpson',
-- birth_date = '1980-10-03', math_grade = 70

-- And at that moment I realized what I had done)))))
-- I created this table again. Fortunatelly I have all requests from last home work

INSERT INTO students (first_name, last_name, birth_date,math_grade)
VALUES ('Omer ', 'Simpson', '1980-10-03',70);
