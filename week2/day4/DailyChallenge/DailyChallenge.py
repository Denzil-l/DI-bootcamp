matrix_str = '7i3Tsih%xi #sM $a #t%^r!'
col_1 = []
col_2 = []
col_3 = []
new_list = []

def create_col(string):
    for i in range(0,len(string),3):
        col_1.append(string[i])
        col_2.append(string[i+1])
        col_3.append(string[i+2])
        i+=3

def decrypt(col):
    for i in col:
        if i.isalpha():
            new_list.append(i)
        else:
            new_list.append(' ')

def del_space(a_list):
    for i in range(len(a_list)-1):
        if a_list[i] == ' ' and a_list[i+1] == ' ':
            a_list[i] = ''
    decrypt_string = ''.join(a_list)
    return decrypt_string 
create_col(matrix_str)
decrypt(col_1)
decrypt(col_2)
decrypt(col_3)
print(del_space(new_list))
