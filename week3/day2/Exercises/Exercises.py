#Exercises XP

# #Exercise 1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Siamese (Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# cat_one = Bengal('cat1',10) 
# cat_two = Chartreux('cat2',20) 
# cat_three = Siamese('cat3',30) 

# all_cats = [cat_one,cat_two, cat_three]

# sara_pets = Pets(all_cats)
# sara_pets.walk()


# #Exercise 2

class Dog():
    def __init__(self,name,age,weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return(f"{self.name} is barking")
    def run_speed(self):
        return(self.weight/self.age*10)
    def fight(self,other_dog):
        if other_dog.weight * other_dog.run_speed() > self.weight * self.run_speed():
            return(f'{other_dog.name} won the fight')
        else: 
            return(f'{self.name} won the fight')


# dog1 = Dog('dog1',10,30)
# dog2 = Dog('dog2',15,20)
# dog3 = Dog('dog3',30,10)

# print(dog1.run_speed())
# print(dog2.run_speed())
# print(dog3.run_speed())
# print(dog1.fight(dog2))
# print(dog2.fight(dog3))
# print(dog3.fight(dog1))



#Exercise 3 in another file which called new_fule.py

# #EXERCISE XP +:

# #Exercise 1

# class Family:
#     def __init__(self, members, last_name):
#         self.members = members
#         self.last_name = last_name

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print("New child was born...")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 if member['age'] >= 18:
#                     return True
#                 else:
#                     return False
#     def family_presentation(self):
#         print("Family Name:", self.last_name)
#         for member in self.members:
#             print("First Name:", member['name'])

# members = [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False}
# ]
# family = Family(members, "Smith")

# family.born(name='XXX', age=0, gender='XXX', is_child=True)
# print(family.is_18('Michael'))
# print(family.is_18('Sarah'))
# print(family.is_18('XXX'))
# family.family_presentation()

# #Exercise 2
# print('---------------------------------')
# class TheIncredibles(Family):
#     def use_power(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 if member['age'] >= 18:
#                     print(f"{member['name']} can use their power: {member['power']}")
#                 else:
#                     raise Exception(f"{member['name']} is not over 18 years old.")
#         print(f"{name} is not a member of TheIncredibles family.")

#     def incredible_presentation(self):
#         super().family_presentation()
#         print("Incredible names and powers:")
#         for member in self.members:
#             print("Incredible Name: ", member['incredible_name'])
#             print("Power: ", member['power'])

# members = [
#     {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#     {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
# ]

# new_family2 = TheIncredibles(members, "XXXX")
# new_family2.incredible_presentation()
# new_family2.born(name='XXXXXX', age=0, gender='Male', is_child=True, power='YYYYYYY', incredible_name='ZZZZZZ')
# new_family2.incredible_presentation()



# EXERCISE XP GOLD

# Exercise 1

# class BankAccount():
#     def __init__(self, balance,username,password,authenticated = False):
#         self.username = username
#         self.password = password
#         self.authenticated = authenticated
#         self.balance = balance

#     def deposit(self, money):
#         if money <=0:
#             raise Exception("Money must be > 0")
#         if self.authenticate == True:
#             self.balance += money
#         else:
#             raise Exception('You are not authenticated')
#     def withdraw(self, money):
#         if money <=0:
#             raise Exception("Money must be > 0")
#         if self.authenticate == True:
#             self.balance -= money
#         else:
#             raise Exception('You are not authenticated')
#     def authenticate(self,username,password):
#         if self.username == username and self.password == password:
#             self.authenticate = True
#     def show_balance(self):
#         print(f'Your balance is {self.balance}')
# class MinimumBalanceAccount(BankAccount):
#     def __init__(self,balance,username,password,authenticated = False,minimum_balance = 0):
#         super().__init__(balance,username,password,authenticated)
    
#     def withdraw(self, money):
#         if self.balance <= 0 :
#             raise Exception("You don't have enough money")
#         else: 
#             self.balance -= money

# class ATM():
#     def __init__(self, account_list,try_limit):
#         for i in account_list:
#             if isinstance(i,BankAccount) == False and isinstance(i,MinimumBalanceAccount) == False:
#                 raise Exception("ERROR 40404")
#             elif try_limit <= 0:
#                 raise Exception("ERROR 40404")
#         self.current_tries = 0
#         self.account_list = account_list
#         self.try_limit = try_limit
#     def show_main_menu(self):
#         while True:
#             choice = input('Your options:\nlogin\nexti\n:')
#             if choice == 'login':
#                 username = input("Enter your login: ")
#                 password = input("Enter your password: ")
#                 self.log_in(username,password)
#             elif choice == 'exit':
#                 break
#     def log_in(self,username,password):
#             for i in self.account_list:
#                 if username == i.username and password == i.password:
#                     print('Welcome')
#                     self.show_account_menu(i)

#     def show_account_menu(self,account):
#         while True:
#             choice = input('Your options are:\nadd deposit\nwithdraw money\nshow balance\nexit\n:')
#             if choice == 'add deposit':
#                 money = int(input('add amount of your money: '))
#                 account.deposit(money)
#             elif choice == 'withdraw money':
#                 money = int(input('add amount of your money: '))
#                 account.withdraw(money)
#             elif choice == 'show balance':
#                 account.show_balance()
#             elif choice == 'exit':
#                 break



# bank_one = BankAccount(1000,'Denis','xxxx')
# bank_one.authenticate('Denis','xxxx')
# bank_one.deposit(100)
# bank_one.withdraw(50)
# bank_two = BankAccount(1000,'Veronika','xxxx')
# bank_two.authenticate('Veronika','xxxx')
# bank_two.deposit(130)
# bank_two.withdraw(150)
# bank_three = MinimumBalanceAccount(500,'Anton','xxxx')
# bank_three.authenticate('Anton','xxxx')
# bank_three.deposit(130)
# bank_three.withdraw(150)


# new_atm = ATM([bank_one,bank_two,bank_three],3)
# new_atm.show_main_menu()
