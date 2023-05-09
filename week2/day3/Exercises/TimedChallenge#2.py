number = int(input("Enter your number: "))
total = 0
i = 1
while total < number:
    total += i
    i+=1
    print(f'total = {total} i= {i}')
if total == number:
    print(True)
else:
    print(False)