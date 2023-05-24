import psycopg2


def select(query):

    try:
        connection = psycopg2.connect(
            database="Exercises_In_Class", 
            user='postgres',
            password='0206',
            host='127.0.0.1', 
            port='5432'
        )

        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
                result = cursor.fetchall()
                return result
    except:
        pass
    finally:
        connection.close()

def change(query):

    try:
        connection = psycopg2.connect(
            database="Exercises_In_Class", 
            user='postgres',
            password='0206',
            host='127.0.0.1', 
            port='5432'
        )

        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
                connection.commit()
    except:
        pass
    finally:
        connection.close()


