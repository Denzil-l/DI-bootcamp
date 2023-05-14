# #Exercise 1
# some_list = [1,2,3,4,5,6,7]
# index = int(input("Enter index your element: "))
# some_list.insert(index,'Element')
# print(some_list)

# #Exercise 2

# some_sting = 'It is a string with some spaces'
# print(some_sting.count(' '))

# #Exercise 3

# some_string = 'It is a String WITH SOme letters'
# new_list1 = [char for char in some_string if char.isupper()]
# new_list2 = [char for char in some_string if char.isupper() == False]
# print(f"Upper = {len(new_list1)} Lower = {len(new_list2)}")

# #Exercise 4
# def new_Func(items):
#     sum = 0
#     for i in items:
#         sum += i
#     print(sum)
#     return sum

# new_Func([1,2,3,4,5,6,7])


# #Exercise 5

# def new_func(item):
#     max = item[0]
#     for i in item:
#         if max < i:
#             max = i
#     print(max)
#     return(max)

# new_func([1,2,3,4,5,6])


# #Exercise 6
# def factorial(num):
#     sum = 1
#     for i in (range(1,num+1)):
#         sum*=i
#     print(sum)
# factorial(4)

# #Exercise 7

# def new_func(item,elem):
#     count = 0
#     for i in item:
#         if i == elem:
#             count+=1
#     print(count)

# new_func([1,2,3,3,3,6],3)

# #Exercise 8
# def new_func(item):
#     sum = 0
#     for i in item:
#         sum += i**2
#     print(sum**0.5) 

# new_func([1,2,3,4,5,6])


# #Exercise 9

# def ismono(item):
#     new_list1 = item.copy()
#     new_list1.sort()
#     new_list2 = new_list1.copy()
#     new_list2.reverse()
#     print(item)
#     print(new_list1)
#     print(new_list2)
#     if item == new_list1 or item == new_list2:
#         print(True)
#     else:
#         print(False)


# ismono([5,4,3,2,1])

# #Exercise 10
# def func(item):
#     string = ''
#     for i in item:
#         if string < i:
#             string = i
#     print(string)

# func(['aaa','bbbbb','ds','fdsgfsdgadsfgfa'])

#Exercise 11

new_list = [1,'dasdas',32,'fdsdsg','fsdfsdf','gdsgsdfdsf',32]
list_string = []
list_int = []
for i in new_list:
    if type(i) == :
        list_string.append(i)
    elif type(i) == 'int':
        list_int.append(i)

print(type('dfsdf'))