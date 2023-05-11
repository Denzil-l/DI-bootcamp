
matrix = [[' ',' ',' '],
          [' ',' ',' '],
          [' ',' ',' ']]
moves = 1
the_end = False
def print_board():

    print('\n'+' '*12 + f'MOVES: {moves}')

    print(' ' + '_'*10 +'_'*10 +'_'*9)
    print('|' + ' '*9 + '|' + ' '*9 + '|' + ' '*9 + '|')
    print('|' + ' '*4 + f'{matrix[0][0]}' + ' '*4 + '|' + ' '*4 + f'{matrix[0][1]}' + ' '*4 + '|' + ' '*4 + f'{matrix[0][2]}' + ' '*4 + '|')
    print('|' + '_'*9 + '|' + '_'*9 + '|' + '_'*9 + '|')

    print('|' + ' '*9 + '|' + ' '*9 + '|' + ' '*9 + '|')
    print('|' + ' '*4 + f'{matrix[1][0]}' + ' '*4 + '|' + ' '*4 + f'{matrix[1][1]}' + ' '*4 + '|' + ' '*4 + f'{matrix[1][2]}' + ' '*4 + '|')
    print('|' + '_'*9 + '|' + '_'*9 + '|' + '_'*9 + '|')
    
    print('|' + ' '*9 + '|' + ' '*9 + '|' + ' '*9 + '|')
    print('|' + ' '*4 + f'{matrix[2][0]}' + ' '*4 + '|' + ' '*4 + f'{matrix[2][1]}' + ' '*4 + '|' + ' '*4 + f'{matrix[2][2]}' + ' '*4 + '|')
    print('|' + '_'*9 + '|' + '_'*9 + '|' + '_'*9 + '|')

def check_correct(row,col,move):
    if matrix[row][col] != ' ':
        print("This cell is already closed")
        return False
    else:
        matrix[row][col] = move
        return True

def make_move():
    row = -1
    col = -1
    check = False
    global moves
    global the_end
    if moves % 2 != 0:
        while check != True:
            print("First user move:")
            row = int(input('Enter your row (1,2,3): ')) - 1
            col = int(input('Enter your col (1,2,3): ')) - 1
            check = check_correct(row,col,'X')
        moves+=1
        the_end = check_win('User One','X')
    else:
        while check != True:
            print("Second user move:")
            row = int(input('Enter your row (1,2,3): ')) - 1
            col = int(input('Enter your col (1,2,3): ')) - 1
            check = check_correct(row,col,'O')
        moves+=1
        the_end = check_win('User Two','O')

def check_win(user,move):
    if moves == 10:
        print('------------------TIE---------------')
        return True
    for i in range(3):
        if matrix[i][0] == matrix[i][1] == matrix[i][2] == move or matrix[0][i] == matrix[1][i] == matrix[2][i] == move or matrix[0][0] == matrix[1][1] == matrix[2][2] == move or matrix[0][2] == matrix[1][1] == matrix[0][2] == move: 
            print(f"-----------------------------{user} is winner------------------------------")
            print_board()
            return True
        
        

    

def play():
    global the_end
    while the_end != True:
        print_board()
        make_move()
    


play()
input('')