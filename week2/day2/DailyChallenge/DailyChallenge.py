#challenge1-2
def challenge1(num,len):
    new_list = []
    for i in range(len):
        new_list.append(num*(i+1))
    print(new_list)

def challenge2(str1):
    new_str = ''
    for i in range(len(str1) - 1):
        print(i)
        if str1[i] != str1[i+1]:
            new_str += str1[i]
    new_str+= str1[-1]
    print(new_str)
    return new_str

user_num = int(input('Enter your number: '))
user_len = int(input('Enter your length: '))
user_str = input("Enter your string with duplicates: ")
challenge1(user_num,user_len)
challenge2(user_str)





