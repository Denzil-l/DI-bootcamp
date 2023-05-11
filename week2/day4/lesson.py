# def fun_1 ():
#     print('xxx')
# def fun_2 ():
#     print('yyy')
# def fun_3 ():
#     print('zzz')
# new_list = [fun_1,fun_2,fun_3]

# for i in new_list:
#     i()

# def new_fun(n):
#     if n % 2 == 0:
#         print("Even")
#     else:
#         print('Odd')

# new_fun(2)

VOWELS = ['a','e','i','o','u']
def change(string):
    new_list = list(string)
    for i in range(len(new_list)):
        if new_list[i] in VOWELS:
            new_list[i] = new_list[i].upper()
        else:
            new_list[i] = new_list[i].lower()
    new_string = " ".join(new_list)
    return new_string
print(change('Some big text about something Interesting'))

