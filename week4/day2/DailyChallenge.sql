 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab WHERE id IS NULL )
-- It returns 0 because this condition is not met 

select * from FirstTab
  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab WHERE id = 5 )
-- It returns 2 because FirstTab contain 4 id and 2 of them are 5 or null

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab )
-- It returns 0 but i don't understand why))

 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN 
	( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- It returns 2 because of the reason from second example
