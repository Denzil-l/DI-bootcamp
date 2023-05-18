from anagram_checker import AnagramChecker


def create_list():
    new_list = []
    with open('sowpods.txt','r') as xxx:
        new_list = list(xxx)
    return(new_list)

def main():
    new_file = AnagramChecker(create_list())
    check = False
    while check == False:
        print('--------------')
        menu = input('Shalom, Here is your options:\n  Check word(c)\n  Exit(e)\n: ')
        if menu == 'c':
            your_word = input('Enter your word: ')
            if new_file.is_valid_word(your_word) != False:
                print(new_file.get_anagrams(your_word))
        elif menu == 'e':
            check = True
    
    if new_file.is_valid_word('your_word') != False:
        print(new_file.get_anagrams('your_word'))

main()