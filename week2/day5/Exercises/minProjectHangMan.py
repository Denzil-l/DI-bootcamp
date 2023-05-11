import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 
new_word_list = list(word)
secret_word = list('*'*len(word))
used_list = []
effort = 6
bool = True
used_letters = set()


while True:
    print(''.join(secret_word))
    char = input('Enter your letter: ')
    if char in used_letters:
        print("You already used this letter")
        continue
    else:
        if word.count(char) > 0:
            for i in range(new_word_list.count(char)):
                secret_word[new_word_list.index(char)] = char
                new_word_list[new_word_list.index(char)] = '*'
                used_list.append(char)
                used_letters.add(char)
            if ('*' in secret_word) == False:
                print("You win")
                break
        else:
            used_letters.add(char)

            effort-=1
        if effort == 0:
            print('You lose')
            break
    print(f'Used letters: {used_letters}')
    print(f'effort = {effort}')
    print(f'count : {word.count(char)}')
        
