import json
class MenuManager():
    def __init__(self,menu):
        self.menu = menu
    def add_item(self,name,price):
        if name in self.menu:
            print('This item already exist')
        else:
            self.menu[name] = price
    def remove_item(self,name):
        if name in self.menu:
            del self.menu['name']
            return True
        else:
            return False
    def save_to_file(self):
        with open('week3/day4/Exercises/new_json.json', 'w') as new_file:
            json.dump(self.menu,new_file)
