class Farm():
    def __init__(self,name):
        self.name = name
        self.animals = []
    def add_animal(self,name,amount = 1):
        if len(self.animals) > 0:
            check = False 
            for i in self.animals:
                if i['name'] == name:
                    i['amount'] += amount
                    check = True
            if check == False:
                self.animals.append({
                'name' : name,
                'amount': amount        
                })
        else:
            self.animals.append({
                        'name' : name,
                        'amount': amount
                    })
    def get_info(self):
        new_list = []
        for i in self.animals:
             new_name = i['name']
             new_amount = i['amount']
             new_list.append(f'{new_name} : {new_amount} \n')
        string = ''.join(new_list) + 'E-I-E-I-0!'            
        return string




macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.animals)
print(macdonald.get_info())