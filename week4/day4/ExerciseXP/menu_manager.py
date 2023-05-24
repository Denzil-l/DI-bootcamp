import DataBaseConnect
import menu_item
class MenuManager:
    def get_by_name(name):
        query = f"""
        SELECT * FROM Menu_Items WHERE item_name = '{name}'
        """
        result = DataBaseConnect.select(query)
        if len(result) == 0:
            print("This item doesn't exist")
            return None
        else:
            print(f"Name: {result[0][1]} Price: {result[0][2]}")
            return menu_item.MenuItem(result[0][1],result[0][2])
    def all_items():
        query = f"SELECT * FROM Menu_Items"
        result = DataBaseConnect.select(query)
        new_list = []
        
        for i in result:
            new_list.append(menu_item.MenuItem(i[1],i[2]))
            print(f'Name: {i[1]} Price: {i[2]}')
        return new_list