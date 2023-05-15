# #Exercise 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# new_dict = dict(zip(keys,values))
# print(new_dict)

# #Exercise 2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'jerry':3}
# new_family = {}
# print('Add the list of your family in format Name:Age. When you finish, write quit')
# while True:
#     new_member = input('Enter a member of your family: ')
#     if new_member != 'quit':
#         new_member = new_member.split(":")
#         print(new_member)
#         new_family[new_member[0]] = int(new_member[1])     #review this line
#     else:
#         break
# print(f'the list of your family: {new_family}')

# def Family_Func(family):
#     total_cost = 0
#     for i,j in family.items():
#         if j <= 3:
#             print(f"{i} doesn't pay for ticket")
#         elif j > 3 and j < 12:
#             print(f"{i} has to pay 10$")
#             total_cost+=10
#         elif j > 12:
#             print(f"{i} has to pay 15$")
#             total_cost+=15
#     print(f'Total cost will: {total_cost}$')

# Family_Func(family)
# Family_Func(new_family)

# #Exercise 3
# brand = {
# "name": "Zara", 
# "creation_date": 1975, 
# "creator_name": "Amancio Ortega Gaona",
# "type_of_clothes": ['men', 'women', 'children', 'home'], 
# "international_competitors": ['Gap', "H&M", 'Benetton' ],
# "number_stores": 7000, 
# "major_color": {
#     "France": 'blue', 
#     "Spain": 'red', 
#     "US": ['pink', 'green']
#     }
# }
# brand["number_stores"] = 2
# print("Zara's clients are:",*brand['type_of_clothes'], sep=', ')
# brand['country_creation'] = 'Spain'
# if "international_competitors" in brand:
#     brand['international_competitors'].append('Desigual')
# del brand['creation_date']
# print(brand['international_competitors'][-1])
# print(*brand['major_color']['US'], sep=', ')
# print(len(brand.keys()))
# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000
# }
# brand.update(more_on_zara)
# print(brand['number_stores']) # This key was changed after updated from more_on_zara

#Exercise 4
#There is a more efficient way to do it. hint: use list and zip()
#Also you need to review step4.1 and 4.2
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}
disney_users_D = {}
for item in enumerate(users):
    disney_users_A[item[0]] = item[1]
    disney_users_B[item[1]] = item[0]
users.sort()
for item in enumerate(users):
    disney_users_C[item[0]] = item[1]

for item in enumerate(users):
    if 'i' in item[1] or 'm' == item[1][0] or 'p' == item[1][0] or 'M' == item[1][0] or 'P' == item[1][0]:
        disney_users_D[item[0]] = item[1]
print(disney_users_A)
print(disney_users_B)
print(disney_users_C)
print(disney_users_D)
