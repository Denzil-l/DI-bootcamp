import string
import collections
class Text:
    def __init__(self, text):
        self.text = text.lower()
        self.listX = text.split(' ')
        self.list = [word.replace('\n','') for word in self.listX] 
    def how_often(self, word):
        amount = self.list.count(word)
        return amount
    def most(self):
        word_counts = collections.Counter(self.list)
        return word_counts.most_common(1)[0][0]
    def uniq(self):
        return set(self.list)

    @classmethod
    def from_file(cls, path):
        with open(path, 'r') as file:
            text = file.read()
        return cls(text)

text = Text("A good book would sometimes cost as much as a good house.")
print(text.how_often("book"))
print(text.most())
print(text.uniq())
new_file = Text.from_file('DailyChallenge/the_stranger.txt')
# print(new_file.list)
print(new_file.how_often("mother"))  
print(new_file.most())  
# print(new_file.uniq()) 

