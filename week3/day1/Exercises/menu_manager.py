# class MenuManager():
#     def __init__ (self, menu):
#         self.menu = menu
#     def add_item(self, name, price, spice, gluten):
#         self.menu.append({ 
#             'name' : name,
#             'price' : price,
#             'spice' : spice,
#             'gluten' : gluten
#         })
#     def update_item(self,name, price, spice, gluten):
#         check = False
#         for i in range(len(self.menu)):
#             if self.menu[i]['name'] == name:
#                 self.menu[i] = { 
#             'name' : name,
#             'price' : price,
#             'spice' : spice,
#             'gluten' : gluten
#         }
#                 check = True
#         if check == False:
#             print('The dish is not exist')
    
#     def remove_item(self,name):
#         for i in self.menu:
#             if i['name'] == name:
#                 self.menu.remove(i)
    
# new_menu = MenuManager([])
# new_menu.add_item('pizza',25,'B',False)
# new_menu.add_item('lazania',35,'A',True)
# new_menu.add_item('apples',10,'A',False)
# new_menu.add_item('icecream',10,'A',True)
# print(new_menu.menu)
# new_menu.update_item('pizza',44,'C',True)
# new_menu.update_item('aaa',44,'C',True)
# print(new_menu.menu)
# new_menu.remove_item('icecream')
# print(new_menu.menu)