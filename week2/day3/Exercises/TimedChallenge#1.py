string = input("Enter your sentence: ")
new_list = string.split(' ')
new_list2 = []
for i in range(-1,-len(new_list) -1,-1):
    print(i)
    new_list2.append(str(new_list[i]))
reverse_string = ' '.join(new_list2)
print(reverse_string)