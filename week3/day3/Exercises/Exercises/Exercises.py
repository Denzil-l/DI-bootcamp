#EXERCISE XP:

# #Exercise 1

# def Func():
#     """
#     abs() make this: abs(-5) = 5
#     int() make this: int('20') = 20
#     input() allows user enter some string  
#     """
#     num = -5
#     new_num = abs(num)
#     print(new_num)

#     str = "20"
#     num = int(str)
#     print(num)

#     str = input("Enter something: ")
#     print(str)

# print(Func.__doc__)
# Func()

# #Exercise 2
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         # print(f'{self.amount} {self.currency}') 
#         return f'{self.amount} {self.currency}'
#     def __int__(self):
#         print(self.amount) 
#         return self.amount
#     def __repr__(self):
#         print(f'{self.amount} {self.currency}') 
#         return f'{self.amount} {self.currency}'
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#             return Currency(self.currency, self.amount + other.amount)
#         elif isinstance(other, int):
#             return Currency(self.currency, self.amount + other)
     
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#             self.amount += other.amount
#         elif isinstance(other, int):
#             self.amount += other
#         return self
    
    
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# int(c1)
# repr(c1)
# c1 + 5
# c1 + c2
# print('x')
# print(c1) 
# c1 += 5
# print(c1) 
# c1 += c2
# print(c1) 
# c1 + c3


#EXERCISES XP+

#Exercise 1
#According the terms I created other files 
# #Exercise 2
# import random
# def Ran(num):
#     while num > 100 or num < 1:
#         num = int(input('Enter number between 1 and 100: '))
#     randomium =random.randint(1,100)
#     if randomium == num:
#         print('Success')
#     else:
#         print('Not Success')

# Ran(111)

# #Exercise 3

# import string
# import random

# letters = string.ascii_letters
# print(''.join(random.choice(letters) for _ in range(5)))

# #Exercise 4
# import datetime
# def currentdate():
#     print(datetime.date.today())

# currentdate()

# #Exercise 5

# import datetime

# def func():
#     now = datetime.datetime.now()
#     jan_first = datetime.datetime(now.year + 1, 1, 1)
#     time_left = jan_first - now
#     days = time_left.days
#     time = str(time_left).split(',')
#     accurate_time = str(time[1]).split('.')
#     print(f'the 1st of January is in {days} days and {accurate_time[0]} hours')

# func()

# #Exercise 6

# import datetime

# def func(birthday):
#     your_time = datetime.datetime.now() - birthday
#     current_hours = datetime.datetime.now().hour
#     current_minute = datetime.datetime.now().minute
#     your_minutes = your_time.days*24*60 + current_hours*60 + current_minute
#     print(f"You are exist in this world already :{your_minutes}")


# year = int(input('Enter your birth year: '))
# month = int(input('Enter your birth month: '))
# day = int(input('Enter your birth day: '))
# birthday = datetime.datetime(year,month,day)
# func(birthday)



# #Exercise 7

# import datetime

# new_list = [
#     ["grandmother's birthday",datetime.datetime(2023,6,2)],
#     ["mother's birthday" , datetime.datetime(2023,6,26)],
#     ["mother birthday" , datetime.datetime(2023,7,22)],
# ]

# def func(list):
#     print(datetime.datetime.now())
#     nearest_holiday = datetime.datetime.now()
#     for i in list:
#         if i[1] > nearest_holiday:
#             nearest_holiday = i[1]
#     print(f'Nearest holiday will {nearest_holiday - datetime.datetime.now()}')
# func(new_list)


# #Exercise 8
# import datetime 

# year = int(input('Enter your birth year: '))
# month = int(input('Enter your birth month: '))
# day = int(input('Enter your birth day: '))
# birthday = datetime.datetime(year,month,day)
# now = datetime.datetime.now()
# my_seconds = int((now - birthday).total_seconds())

# earth_year = 31557600
# mercury_year = 31557600*0.2408467
# venus_year = 31557600*0.61519726 
# mars_year = 31557600*1.8808158 
# jupiter_year = 31557600*11.862615 
# saturn_year = 31557600*29.447498
# uranus_year = 31557600*84.016846 
# neptune_year = 31557600*164.79132 
# new_list = [
#     earth_year,mercury_year,venus_year,mars_year,jupiter_year,saturn_year,uranus_year,neptune_year,
# ]
# for i in range(len(new_list)):
#     print(f'You have lived in planet number {i+1} already {int(my_seconds / new_list[i])}')


# #Exercise 9
# from faker import Faker
# fake = Faker()
# users = []
# def faker_fun(fake):
#     new_dict = {
#         'name' : fake.name(),
#         'address' : fake.address(),
#         'langage_code' : fake.language_code()
#     }
#     users.append(new_dict)
# faker_fun(fake)
# faker_fun(fake)
# faker_fun(fake)
# faker_fun(fake)
# for i in users:
#     print(i)
#     print('--------------------------')