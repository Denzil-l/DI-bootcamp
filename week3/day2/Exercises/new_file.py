from Exercises import Dog
import random
class PetDog(Dog):
    def __init__(self,name,age,weight,trainde = False):
        super().__init__(name,age,weight)
        self.trained = trainde
    
    def train(self):
        print(self.bark())
        self.trained = True
    def play(self,*dogs):
        new_list = []
        for i in dogs:
            new_list.append(i.name)
        string = ','.join(new_list)
        print(f'{string}  are plaing together')
    def do_a_trick(self):
        new_list = [
            f'{self.name} does a barrel roll',
            f'{self.name} stands on his back legs',
            f'{self.name} shakes your hand',
            f'{self.name} plays dead'

        ]
        if self.trained:
            randomium = random.randint(0,3)
            print(new_list[randomium])

dog1 = PetDog('yyy',1,2,False)
dog2 = PetDog('yyy',1,2,False)
dog3 = PetDog('yyy',1,2,False)
new_train_dog = PetDog('xxx',1,2,False)
new_train_dog.train()
new_train_dog.play(dog1,dog2,dog3)
new_train_dog.do_a_trick()