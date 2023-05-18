import menu_manager

def load_manager():
    with open('week3/day4/Exercises/restaurant_menu.json','r') as new_menu:
        return menu_manager.MenuManager(new_menu)


def show_user_menu(menu):
    new_list = dir(menu)
    new_list_without_magic = [method for method in new_list if ('__' in method) == False]
    for i,j in enumerate(new_list_without_magic):
        print(f'You have this option number {i}:   {j}')
    choice = int(input("Please, enter the number of nessecary tool: "))
    for i,j in enumerate(new_list_without_magic):
        if i == choice:
            print(j)

new_menu = load_manager()
show_user_menu(new_menu)