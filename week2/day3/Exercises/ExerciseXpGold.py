# # #Exercise 1
# birthday = {
#     'XXX':'1991/1/11',
#     'YYY':'1992/2/12',
#     'ZZZ':'1993/3/13',
#     'AAA':'1994/4/14',
#     'BBB':'1995/5/15'
# }
# print('You can look up the birthdays of the people in the list!')
# new_name = input("Enter the person's name: ")
# print(f'{new_name}, your birthday is {birthday[new_name]} ')

# # #Exercise 2
# birthday = {
#     'XXX':'1991/1/11',
#     'YYY':'1992/2/12',
#     'ZZZ':'1993/3/13',
#     'AAA':'1994/4/14',
#     'BBB':'1995/5/15'
# }
# print('You can look up the birthdays of the people in the list!')
# print(f"{list(birthday.keys())} here is the list of our people")
# new_name = input("Enter the person's name: ")
# if (new_name in birthday) == False:
#     print(f'Sorry, we don’t have the birthday information for {new_name}')
# else:
#     print(f'{new_name}, your birthday is {birthday[new_name]} ')


# #Exercise 3
# birthday = {
#     'XXX':'1991/1/11',
#     'YYY':'1992/2/12',
#     'ZZZ':'1993/3/13',
#     'AAA':'1994/4/14',
#     'BBB':'1995/5/15'
# }
# print('You can look up the birthdays of the people in the list!')
# print(f"{list(birthday.keys())} here is the list of our people")
# new_person = input("You must add a new person: ")
# new_birth = input("You must add a birthday of this person: ")
# birthday[new_person] = new_birth
# print(f"{list(birthday.keys())} here is the list of our people")
# new_name = input("Enter the person's name: ")
# if (new_name in birthday) == False:
#     print(f'Sorry, we don’t have the birthday information for {new_name}')
# else:
#     print(f'{new_name}, your birthday is {birthday[new_name]} ')


# #Exercise 4
# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# new_str = ''
# for i,j in items.items():
#     new_str+= i + ' ' + str(j) + ', '
# print(new_str)

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total_amount = 0
for i in items:
    total_amount += items[i]['price'] * items[i]['stock']
print(total_amount)