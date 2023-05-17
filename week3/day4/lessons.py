# f = open('nameslist.txt','r')
# print(f.readlines())
# print(f.readlines(5))
# print(f.readline(5))
# print(f.readlines())
# import json

# json_file = 'my_file.json'
# with open(json_file, 'r') as file_obj:
#     my_family = json.load(file_obj)

# print(my_family)

# import requests
# parameters = {"lat": 31.771959, "lon": 35.217018}
# response = requests.get('https://api.chucknorris.io/jokes/random')
# # print(response.status_code)
# # print(type(response.text))
# # print(type(response.json())) 
# # print(response.headers)
# print(response.json()['value'])

def colorize(text,color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    if not isinstance(text, str):
        raise TypeError("Text must be a string.")

    if color not in colors:
        raise ValueError("Color not found in the available colors.")

    print(colors)
colorize("hello", "cyan")
# colorize(123, "red")
# colorize("hello", "red")