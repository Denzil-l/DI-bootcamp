# Exersice 1
print('Hello wolrd\n'*4 + 'I love python\n'*4)

# Exersice 2
month = int(input('Enter your minth like a number 1-12 '))
if month >= 3 and month <= 5:
    print('Spring')
elif month >= 6 and month <= 8:
    print('Summer')
elif month >= 9 and month <= 11:
    print('autumn')
elif month >= 12 and month <= 2:
    print("winter")
else:
    print("error")
