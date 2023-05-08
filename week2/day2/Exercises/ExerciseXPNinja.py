import math


# #Exercise 1
# C = 50
# H = 30

# user_nums = input("enter your comma-separated numbers: ").split(',')
# for i in user_nums:
#     print(int(math.sqrt((2*C*int(i))/H)))

#Exercise 2


list_num1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
list_num2 = [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
list_num3 = [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
list_num4 = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

big_list = [list_num1,list_num2,list_num3,list_num4]
sum_n = 0
for i in range(len(big_list)):
    print(big_list[i])
    big_list[i].sort(reverse=True)
    print(big_list[i])
    sum_n += sum(big_list[i])
print(sum_n)
list_3 = []
list_3.append(big_list[0][0])
print(list_3)
list_3.append(big_list[-1][-1])
print(list_3)
greater_list4 = []
for i in big_list:
    for j in i:
        if j > 50:
            greater_list4.append(j)
print(greater_list4)
smaller_list5 = []
for i in big_list:
    for j in i:
        if j < 10:
            smaller_list5.append(j)
print(smaller_list5)
square_list6 = []
for i in big_list:
    for j in i:
        square_list6.append(j**2)
print(square_list6)
set_list7 = []
for i in big_list:
    for j in i:
        set_list7.append(j)
aver_sum8 = int(sum(set_list7)/len(set_list7))
min_num9 = min(set_list7)
max_num10 = max(set_list7)
set_list7 = set(set_list7)
print(set_list7)
print(len(set_list7))
print(aver_sum8)
print(min_num9)
print(max_num10)

all_big_list =[]
for i in big_list:
    for j in i:
        all_big_list.append(j)
sum_new = 0
aver_new = 0 
for i in all_big_list:
    sum_new+= i
# print sum_new