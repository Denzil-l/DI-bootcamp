class Game():
    def __init__(self):
        self.total_result = {
            'win' : 0,
            'loss' : 0,
            'draw' : 0
        }
    def get_user_item():
        check = False
        while check == False:
            user_choice = input('Enter rock(r)/paper(p)/scissors(s): ')
            if user_choice != 'r' and user_choice != 'p' and user_choice != 's':
                print('Try agaim')
            else:
                check = True
                return user_choice # Its not nessecary but it is in instruction on the platform

    def get_computer_item():
        import random
        options = ['r','p','s']
        randomium = random.choice(options)
        return randomium # Its not nessecary but it is in instruction on the platform
    
    def get_game_result(self,user,comp):
        r = 'rock'
        p = 'paper'
        s = 'scissors'
        if user == 'r' and comp == 's':
            print(f'You choose {r}. Computer choose {s}. You won')
            self.total_result['win']+=1
        elif user == 'r' and comp == 'p':
            print(f'You choose {r}. Computer choose {p}. You lose')
            self.total_result['loss']+=1
        elif user == 'p' and comp == 's':
            print(f'You choose {p}. Computer choose {s}. You lose')
            self.total_result['loss']+=1
        elif user == 'p' and comp == 'r':
            print(f'You choose {p}. Computer choose {r}. You won')
            self.total_result['win']+=1
        elif user == 's' and comp == 'p':
            print(f'You choose {s}. Computer choose {p}. You won')
            self.total_result['win']+=1
        elif user == 's' and comp == 'r':
            print(f'You choose {s}. Computer choose {r}. You lose')
            self.total_result['loss']+=1
        elif user == comp:
            print(f'You choose {user}. Computer choose {comp}. You drew')
            self.total_result['draw']+=1
            

    def play(self):
        user = Game.get_user_item()
        comp = Game.get_computer_item()
        Game.get_game_result(self,user,comp)


