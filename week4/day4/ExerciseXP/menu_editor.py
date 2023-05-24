import menu_item
import menu_manager
def show_user_menu():
    while True:
        choice = input("""
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
EXIT (E)
    """)
        if choice.lower() == 'v':
            show_one_item()
        elif choice.lower() == 'a':
            add_item_to_menu()
        elif choice.lower() == 'd':
            remove_item_from_menu()
        elif choice.lower() == 'u':
            update_item_from_menu()
        elif choice.lower() == 's':
            show_restaurant_menu()
        elif choice.lower() == 'e':
            show_restaurant_menu()
            print("GOODBY")
            break
            

def add_item_to_menu():
    name = input('Please add name of item: ')
    price = int(input('Please add price: '))
    new_item = menu_item.MenuItem(name,price)
    try:
        new_item.save()
        print('item was added successfully')
    except:
        pass

def remove_item_from_menu():
    name = input('Please add name of item: ')
    try:
        new_item = menu_item.MenuItem(name)
        new_item.delete()
        print('This item was deleted')

    except:
        print('Somethin was wrong')

def update_item_from_menu():
    old_name = input('Please add name of item which you want to change: ')
    new_name = input('Please add new name of item: ')
    price = int(input('Please add new price: '))

    try:
        new_item = menu_item.MenuItem(old_name,price)
        new_item.update(new_name,price)
        print('This item was updated')

    except:
        print('Somethin was wrong')

def show_one_item():
    name = input('Please add name of item: ')
    menu_manager.MenuManager.get_by_name(name)
def show_restaurant_menu():
    print('-----------------OUR___MENU--------------\n')
    menu_manager.MenuManager.all_items()