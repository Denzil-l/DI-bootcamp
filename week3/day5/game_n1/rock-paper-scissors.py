from game import Game


def get_user_menu_choice():
    check = False
    while check == False:
        choice = input('Menu:\nNew game(n)\nResults(r)\n: ')
        if choice == 'r' or choice == 'n':
                check = True
                return choice
    
def print_results(results):
    win = results['win']
    lose = results['loss']
    draw = results['draw']
    print(f'You won {win} times\nYou lost {lose} times\nYou drew {draw}\n\n Thank you for playing')

def main():
    game = Game()
    while True:
        choice = get_user_menu_choice()
        if choice == 'n':
            game.play()
        elif choice == 'r':
            print_results(game.total_result)
            break

main()
