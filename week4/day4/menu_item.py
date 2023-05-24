import DataBaseConnect

class MenuItem:
    def __init__(self,name,price = 0):
        self.name = name
        self.price = price
    def save(self):
        query = f"""
        INSERT INTO Menu_Items(item_name,item_price)
        VALUES
        ('{self.name}',{self.price})
        """
        DataBaseConnect.change(query)
    def delete(self):
        query = f"""
        DELETE FROM Menu_Items
        WHERE item_name = '{self.name}';
        """
        DataBaseConnect.change(query)
    def update(self,new_name,new_price):
        query = f"""
        UPDATE Menu_Items
        SET item_name = {new_name}, item_price = {new_price}, ...
        WHERE item_name = '{self.name}';
        """
        DataBaseConnect.change(query)