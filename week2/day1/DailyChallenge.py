import random

user_var = input("Enter your text. It must be 10 characters long: ")
if len(user_var) > 10:
    print('your text too long')
elif len(user_var) < 10:
    print("you text not enough long")
else:
    print(user_var[0])
    print(user_var[9])
    for i in range(10):
        str = ''
        for j in range(i+1):
            str += user_var[j]
        print(str)
