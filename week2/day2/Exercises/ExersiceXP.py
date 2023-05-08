# #Exersice1

# my_fav_numbers = {1,2,3,4,5}
# print(my_fav_numbers)
# my_fav_numbers.add(4)
# my_fav_numbers.add(5)
# my_fav_numbers.add(6)
# my_fav_numbers.add(7)
# print(my_fav_numbers)
# my_fav_numbers.remove(max(my_fav_numbers))
# print(my_fav_numbers)
# friend_fav_numbers = {10,9,8,7,6,5,4,3,2,1}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# #Exercise2
# Some_tuple = (1,2,3,4,5,6,7)
# #It isn't possible becuase touple like a const in JavScript. We cant change it after creating

# #Exercise3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove('Banana')
# basket.remove('Blueberries')
# basket.insert(0,'Apples')
# basket.extend(['Kiwi']) #or .append('Kiwi)
# print(basket)
# num_apples = 0
# #option 1
# for i in basket:
#     if i == "Apples":
#         num_apples+=1
# print(num_apples)
# #option 2
# print(basket.count('Apples'))

# basket.clear()
# print(basket)

# #Exersice4
# # Integer is: 1,2,3,4,5. Float is 1.1, 2.432, 3.4524, 4.423425
# float_list = []
# i = 0
# for i in (range(8)):
#     float_list.append(1.5+0.5*i)
# print(float_list)

# #Exercise5
# list1 = []
# list2 = []
# for i in range(20):
#     list1.append(i+1)
# print(list1) # I created a list just because I want show this in one line
# for i in range(20):
#     if ((i+1) % 2) == 0:
#         list2.append(i+1)
# print(list2)

# #Exercise6 
# my_name = 'Denis'
# your_name = ''
# while True:
#     your_name = input("Enter your name ")
#     if my_name == your_name:
#         print('Hi Denis')
#         break
#     else:
#         print('try again')
#         continue

# #Exercise7
# favorite_fruits = input("Enter your favorite fruite(or fruits). Use single space to separate your list Like in this Example: Apple Banana Pear ... ").split(' ')
# your_fruit = input("Enter your fruit ")
# var_bol = 0
# for i in favorite_fruits:
#     if i == your_fruit:
#         var_bol = True
#         break
#     else:
#         var_bol = False
# if var_bol == True:
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')

# # I know it is a difficult way and probable exist something better...

# #Exercise8

# pizza = 'pizza'
# user_input = ''
# total_price = 10
# while True:
#     user_input = input('Enter your topping: ')
#     if user_input == 'quit':
#         break
#     else:
#         pizza = pizza + ' + ' + user_input
#         print('Your order is ' + pizza)
#         total_price += 2.5
# print("Your final order is " + pizza + ' And your total price is ' + str(total_price))

# #Exercise9

# amount_people = int(input("Enter how many people want to watch a movie "))
# total_cost = 0
# for i in range(amount_people):
#     age = int(input('Enter the age of person number ' + str(i+1) + ' '))
#     if age <= 3:
#         total_cost+=0
#     elif  3 < age <= 12:
#         total_cost+=10
#     else:
#         total_cost+=15
# print('Your family has to pay ' + str(total_cost) + '$') 

# name_list = ["Borislav","Blagoslav","Jitoslav","Crasnoslav","Svyatoslav",'Miroslav','Vladislav',"Yaroslav","Mstislav"]
# new_list = []
# for i in name_list:
#     age = int(input(str(i) + ', enter your age: '))
#     if age > 16 and age < 21:
#        new_list.append(i)
# print(new_list)

# #Exercise10-Exercise11
# I dont actially understand how i have to create sandwiches but if i just illustrate it so... 
# print("Dear customers, unfortunatelly the deli has run out of pastrami")
    
# sandwich_orders = ["Pastrami sandwich","Pastrami sandwich","Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich","Pastrami sandwich"]  
# list1 = [1,2,3,4,5]
# while "Pastrami sandwich" in sandwich_orders:
#     print(len(sandwich_orders))
#     sandwich_orders.remove('Pastrami sandwich')
# print(sandwich_orders)
# finished_sandwiches = []
# message = ''
# for i in sandwich_orders:
#     state = ''
#     while state != 'yes':
#         state = input('Have you made a ' + i + '? ')
#     finished_sandwiches.append(i)
#     message += 'I have made your ' + i + '\n'
# print(message)


