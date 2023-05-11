

# #Exercise 1
# import datetime
# current_date = str(datetime.date.today()).split('-')
# def get_age():
#     new_list = input('Enter your birthday with YYYY/MM/DD ').split('/')
#     new_year = int(current_date[0]) - int(new_list[0])
#     new_month = int(current_date[1]) - int(new_list[1])
#     new_day = int(current_date[1]) - int(new_list[2])
#     if new_day < 0:
#         new_month-=1
#         new_day = 30 + new_day
#     if new_month < 0:
#         new_month = 12 + new_month
#         new_year-=1
#     print(f'Your have neen living in this world already {new_year} years,{new_month} month and {new_day} days') 
#     return new_year
#     # It's almost correct answer, but probably it will different of real answer because I define each month like 30 days.
# def can_retire():
#     gender = input("Enter your gender Man/Woman: ")
#     age = get_age()
#     if gender == 'Man':
#         if age > 66:
#             print('You can relax')
#             return True
#         else:
#             print("You will be a slave till you die")
#             return False

#     elif gender == 'Woman':
#         if age > 61:
#             print('You can relax')
#             return True
#         else:
#             print("You will be a slave till you die")
#             return False
#     else:
#         print('Something was wrong. Restart the programm')
# can_retire()

# #Exercise 2 

# def new_fun(x):
#     new_list = []
#     for i in range(1,5):
#         new_list.append(str(x)*i)
#     return int(new_list[0]) + int(new_list[1]) + int(new_list[2]) + int(new_list[3])
# print(new_fun(3))

# #Exercise 3
# def throw_dice():
#     import random
#     return random.randint(1,6)
# def throw_until_doubles():
#     total = 0
#     first = True
#     second = False
#     while first != second:
#         first = throw_dice()
#         second = throw_dice()
#         total+=1
#     return total
# def main():
#     new_dict = {}
#     total_amount = 0
#     average_amount = 0
#     for i in range(1,101):
#         total_amount += throw_until_doubles()
#     average_amount = total_amount / 100
#     print(f'Total throws:{total_amount}, Average throws to reach doubles:{average_amount}')
    
# main()