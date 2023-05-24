import requests
import random
import DataBaseConnect
response = requests.get(f"https://restcountries.com/v2/all?fields=name,capital,flags,subregion,population").json()
new_list = []
for i in range(10):
    randomium = random.randint(0,len(response) - 1)
    country = {
       'name': response[randomium]['name'],
        'capital': response[randomium]['capital'],
        'flag': response[randomium]['flags']['svg'],
        'subregion': response[randomium]['subregion'],
        'population': response[randomium]['population'],
    }
    new_list.append(country)

for i in new_list:
    query = f"""
    INSERT INTO countries (name,capital,flag,subregion,population)
    VALUES
    ('{i['name']}','{i['capital']}','{i['flag']}','{i['subregion']}',{i['population']})
    """
    DataBaseConnect.change(query)

print(DataBaseConnect.select(query='SELECT * FROM countries'))