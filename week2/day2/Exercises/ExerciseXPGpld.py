import random


# #Exerciese 1
# list1 = [1,2,3,4]
# list2 = ['1','2','3','4']
# list1.extend(list2)
# print(list1)

# #Exercise 2
# for i in range(1500, 2501):
#     if i % 5 == 0 and i % 7 == 0:
#         print(i)

# #Exercise 3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# user_name = input('Enter your name ')
# if user_name in names:
#     print("Index of your name is: " + str(names.index(user_name)))

# #Exercise 4
# user_nums = []
# for i in range(3):
#     user_nums.append(int(input('Enter your number: ')))
# user_nums.sort()
# print('The greatest number is: ' + str(user_nums[-1]))

# #Exercise 5
# alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
# vowels = ['a', 'e', 'i', 'o', 'u']

# for i in alphabet:
#     if i in vowels:
#         print(i + ': vowel')
#     else:
#         print(i + ': consonant')

# # Exercise 6
# word_list = []
# for i in range(7):
#     word_list.append(input('Enter your word: '))
# letter = input('Enter one letter')
# for i in word_list:
#     if letter in i:
#         print(i.index(letter))
#     else:
#         print("Dont worry about "+ i + ' and ' + letter)

# #Exercise 7

# million_num = []
# for i in range(1000000):
#     million_num.append(i+1)
# print(len(million_num))
# print(min(million_num))
# print(max(million_num))
# print(sum(million_num))

# #Exercise 8

# list_num = input('Enter your comma-separated numbers ').split(',')
# tuple_num = tuple(list_num)
# print(list_num)
# print(tuple_num)

#Exercise 9

user_num = int(input('Enter number from 1 to 9: '))
comp_num = random.randint(1,9)
while user_num != comp_num:
    user_num = int(input('Try again: '))
print("Congratulation")

