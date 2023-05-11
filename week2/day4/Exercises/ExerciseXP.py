import random

# #Exercise 1
# display_message = lambda : print("I am studing Python")
# display_message()
# #Exercise 2
# favorite_book = lambda title: print(f'One of my favorite books is {title}')
# favorite_book('Harry Potter')
# #Exercise 3
# def describe_city(city, country = 'The middle of nowhere'):
#     print(f'The city {city} is in {country}')
# describe_city('Chelabinsk')
# #Exercise 4
# def Random(num):
#     if 0 < num < 100:
#         new_random = random.randint(0,100)
#         if new_random == num:
#             print("a success message")
#         else:
#             print(f"a fail message {num}!= {new_random}")
# Random(10)
# #Exercise 5
# def make_shirts(size = 'L',text="I love Python"):
#     print(f"Your size is {size} and text is {text}")
# make_shirts('L')
# make_shirts('M')
# make_shirts('S','XXXX')
# make_shirts(text='Some Text', size="XXL")
# #Exercise 6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# def show_magicians(list):
#     for i in list:
#         print(i)
# def make_great(list):
#     for i in range(len(list)):
#         list[i] = 'The Great ' + list[i]
# make_great(magician_names)
# show_magicians(magician_names)

# #Exercise 7
# def get_random_temp(season):
#     if  0< season < 4:
#         return random.uniform(-300,0)
#     elif 3 < season < 7 :
#         return random.uniform(1,16)
#     elif 6 < season < 10:
#         return random.uniform(17,23)
#     elif 9 < season < 13:
#         return random.uniform(24,40)

# def main():
#     season = int(input('Enter your month like a number: '))
#     var = get_random_temp(season)
#     if var < 0:
#         print(f"{var}t")
#         print("Brrr, that's freezing! Wear some extra layers today")
#     elif 0 < var < 17:
#         print("Quite chilly! Don’t forget your coat")
#     elif 16 < var < 24:
#         print("It's a good day, you don't need your coat")
#     elif 23 < var < 33:
#         print("Be careful and drink more water")
#     elif 32 < var < 41:
#         print("I guess you don't need your clothes")
    
# main()