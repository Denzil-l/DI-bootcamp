alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ']

def Decrypt(message,level):
    usuall_text = ''
    for letter in message:
        usuall_text += chr(ord(letter) - level)
    print(usuall_text)
    return usuall_text

def Encrypt(message,level):
    cypher_text = ''
    for letter in message:
        cypher_text += chr(ord(letter) + level)
    print(cypher_text)
    return cypher_text

answer = input("Do u want to encrypt or decrypt a text? ")
while answer != 'encrypt' and answer != 'decrypt':
    answer = input("Spmthing war wrong. Try again: ")
message = input('Enter your text: ')
level = int(input('Enter level of cryptography: '))
if answer == 'decrypt':
    Decrypt(message,level)
elif answer == 'encrypt':
    Encrypt(message,level)
