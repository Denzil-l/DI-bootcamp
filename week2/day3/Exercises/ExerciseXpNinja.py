#Exercise 1
string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"
new_list = string.split(", ")
print(len(new_list))
new_list.sort()
new_list.reverse()
print(new_list)
amount_i = 0
amount_o = 0
for i in new_list:
    if ('i' in i) == False:
        amount_i+=1
    if ('o' in i) == True:
        amount_o+=1
print(amount_o)
print(amount_i)
new_list2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
new_list2 = list(set(new_list2))
print(*new_list2, sep=', ')
print(len(new_list2))
new_list2.sort()
new_list3 = []
for i in new_list2:
    new_list3.append(i[0])
new_list3.reverse()
for i,j in enumerate(new_list2):
    new_list2[i] = new_list3[i] + j[1:]
print(new_list2)