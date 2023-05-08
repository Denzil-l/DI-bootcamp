user_birth = input("Enter your birthday in format DD/MM/YYYY: ").split('/')
def To_Int(list1):
    for i in range(len(list1)):
        list1[i] = int(list1[i])
    return list1

user_birth = To_Int(user_birth)
check = False
while check != True:
    if (user_birth[0] > 31 or user_birth[0] < 1 ) or (user_birth[1] > 12 or user_birth[1] < 1 ) or (user_birth[2] < 0):
        user_birth = input("Error. Try again and remember the format DD/MM/YYYY: ").split('/')
        user_birth = To_Int(user_birth)
    else:
        check = True       
is_leap = False
min_size = 19
amount_candles = user_birth[2]%10 # And now I understood that if the year is for example 1990 the last number is 0 and user will not get candles :(
if user_birth[2] % 4 == 0:
    is_leap = True

# if is_leap != True:
#     if len('___' + 'i'*amount_candles + '___') <
#     print('___' + 'i'*amount_candles + '___')
#     print("|" + '_'*int(amount_candles/2) + ':H:a:p:p:y:' + '_'*int(amount_candles/2))



#Didn't finish