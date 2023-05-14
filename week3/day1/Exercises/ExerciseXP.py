# EXERCISES XP:



# #Exercise 1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# new_cat1 = Cat('Mr Cat', 1)
# new_cat2 = Cat('Shizi', 2.5)
# new_cat3 = Cat('Stanislav Koteechkin', 9)

# def search_old_cat(new_list):
#     old_cat = new_list[0]
#     for i in new_list:
#         if old_cat.age < i.age:
#             old_cat = i
#     return old_cat

# old_cat = search_old_cat([new_cat1,new_cat2,new_cat3])
# print("The oldest cat is {}, and is {} years old".format(old_cat.name,old_cat.age))

# #Exercise 2

# class Dog():
#     def __init__(self,name,height):
#         self.name = name
#         self.height = height
#     def bark(self):
#         print('{} goes woof!'.format(self.name))
#     def jump(self):
#         print('{} jumps {} cm high!'.format(self.name,self.height*2))

# davids_dog = Dog('Rex',50)
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog('Teacup',20)
# print(f'{sarahs_dog.name} {sarahs_dog.height}')

# if davids_dog.height > sarahs_dog.height:
#     print(f"The highest dog is {davids_dog.name}")
# else:
#     print(f"The highest dog is {sarahs_dog.name}")


# #Exercise 3

# class Song():
#     def __init__(self,lyrics ):
#         self.lyrics = lyrics
#     def sing_me_a_song(self):
#         for i in self.lyrics:
#             print(i)






# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


# #Exercise 4

# class Zoo():
#     def __init__(self, zoo_name):
#         self.name = zoo_name
#         self.animals = []
#     def add_animals(self,new_animal):
#         if self.animals.count(new_animal) == 0:
#             self.animals.append(new_animal)
#     def get_animals(self):
#         for i in self.animals:
#             print(i)
#     def sell_animal(self,animal_sold):
#         if self.animals.count(animal_sold) != 0:
#             self.animals.remove(animal_sold)
#     def sort_animals(self):
#         self.dict = []
#         self.animals.sort()
#         self.dict.append([self.animals[0]])
#         index = 0
#         for i in range(1,len(self.animals)):
#             if self.animals[i][0] == self.animals[i-1][0]:
#                 self.dict[index].append(self.animals[i])
#             else:
#                 index += 1
#                 self.dict.append([])
#                 self.dict[index].append(self.animals[i])
#         print(self.dict)
#     def get_groups(self):
#         for i in self.dict:
#             for j in i:
#                 print(j)


# ramat_gan_safari = Zoo('RamatGan ZOO')
# ramat_gan_safari.add_animals("Lion")
# ramat_gan_safari.add_animals("Lemur")
# ramat_gan_safari.add_animals("Liker")
# ramat_gan_safari.add_animals("Tortoises")
# ramat_gan_safari.add_animals("Tttt")
# ramat_gan_safari.add_animals("Aplle")
# ramat_gan_safari.add_animals("Cat")
# ramat_gan_safari.add_animals("Cow")
# ramat_gan_safari.add_animals("Dog")
# ramat_gan_safari.add_animals("Dog")
# ramat_gan_safari.add_animals("Dog")
# ramat_gan_safari.add_animals("Dog")
# ramat_gan_safari.add_animals("Horse")
# ramat_gan_safari.add_animals("Mouse")
# ramat_gan_safari.add_animals("Rabbit")
# ramat_gan_safari.add_animals("Sheep")
# ramat_gan_safari.add_animals("Hamster")
# ramat_gan_safari.add_animals("Goose")
# ramat_gan_safari.add_animals("Goat")
# ramat_gan_safari.add_animals("Donkey")
# ramat_gan_safari.add_animals("Donkey")

# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal('Dog')
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()


# EXERCISES XP GOLD:

# #Exercise 1
# import math
# class Circle():
#     def __init__(self, radius = 1):
#         self.radius = radius
#     def get_perimeter(self):
#         self.perimetr = 2 * math.pi * self.radius
#         print(f'Perimeter = {self.perimetr}')
#     def get_area(self):
#         self.area =math.pi * self.radius ** 2
#         print(f'Area = {self.area}')
#     def get_definition(self):
#         print("A circle is a geometric shape that is defined as the set of all points in a plane that are a fixed distance ", end="")
#         print("away from a given point called the center. The fixed distance is called the radius.")
#         print("For example, a circle with radius", self.radius, "has all the points that are", self.radius, "units away from its center.")

# new_circle = Circle(5)
# new_circle.get_perimeter()
# new_circle.get_area()
# new_circle.get_definition()

# #Exercise 2
# import random

# class MyList():
#     def __init__(self,some_list):
#         self.list = some_list
#     def get_reverse(self):
#         new_list = list(reversed(self.list))
#         return new_list
#     def get_sort(self):
#         new_list = sorted(self.list)
#         return new_list
#     def get_random_list(self):
#         self.random_list = []
#         for i in range(len(self.list)):
#             new_random = random.randint(-100,100)
#             self.random_list.append(new_random)
#         return self.random_list

# new_list = MyList(['a','q','z','t','s','r','o','a','s','d','f'])
# print(new_list.get_reverse())
# print(new_list.get_sort())
# print(new_list.get_random_list())


#Exercise 3

#In according with terms of exercise, I created a new file which called  menu_manager.py




#EXERCISE XP NINJA:


#Exercise 1

class Phone():
    def __init__(self,phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    def call(self, other_phone):
        string = f'{self.phone_number} called {other_phone.phone_number}'
        self.call_history.append(string)
        print(string)
    def show_call_history(self):
        for i in self.call_history:
            print(i)
    def send_message(self,other_phone,text):
        string = text
        new_dict = {
            'to' : other_phone.phone_number,
            'from': self.phone_number,
            'content' : text
        }
        self.messages.append(new_dict)
        
    def show_outgoing_messages(self):
        print('x')
        for i in self.messages:
            if i['from'] == self.phone_number:
                to = i['to']
                text = i['content']
                print(f'Outgoing message from me to {to}:  {text}')
    def show_incoming_messages(self):
        for i in self.messages:
            if i['from'] != self.phone_number:
                other_number = i['from']
                text = i['content']
                print(f'Incoming message from {other_number} to me:  {text}')
    def show_messages_from(self, other_phone):
        print('x')
        for i in self.messages:
            if i['from'] == other_phone.phone_number:
                print(i['content'])

my_phone = Phone('0552876955')
another_phone = Phone('0552876966')

my_phone.call(another_phone)
another_phone.call(my_phone)
my_phone.call(another_phone)
another_phone.call(my_phone)
my_phone.call(another_phone)
another_phone.call(my_phone)
print('-------------------')
my_phone.show_call_history()
another_phone.show_call_history()
my_phone.send_message(another_phone,'Hello mr Cat!!')
another_phone.send_message(my_phone,'Hello Neo')
print('-------------------')
my_phone.show_incoming_messages()
print('-------------------')
my_phone.show_outgoing_messages()
print('-------------------')
my_phone.show_messages_from(another_phone)

#I cant realize methods incoming_messages() and messages_from() because I cant change(Or I don't now how) a messgae list in another phone. I mean if I sen a message to another phone and put information about it to my message list, I also must put this information to another phone's message list, otherwise wouldn't know that I send message to it. So if you have advise or hint, I will be I'll be happy