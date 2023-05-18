#Part 1 Quiz:
# 1. What is a class?
# Class is an instruction to create some object which contain inside ordered information and methods for work with this or any information 
# 2. What is an instance?
#Instance is an object which was creasted according with instruction from some class or classes
# 3. What is encapsulation?
# It provides privat/public/protected levels. This is nessecsry for more safety work with instances and clasess because it secure some data and don't let use them unccorect
# 4. What is abstraction?
# Abstraction in Python, as well as in programming in general, refers to the concept of hiding complex implementation detail.This allows users to interact with the abstraction without needing to know the internal workings or complexities.
# 5. What is inheritance?
# We can use it to create a new classes which contain inside methods and properties from parent class, and we aslo can change it
# 6. What is multiple inheritance?
#   It is not convinient thing, but it is exist) We can have two or more parrents for our class  
# 7. What is polymorphism?
# Polymorphism is a fundamental concept in object-oriented programming that allows objects of different types to be treated as objects of a common base type. It refers to the ability of a single interface or method to be used with different types of objects
# 8. What is method resolution order or MRO?
# Method Resolution Order (MRO) is the order in which a programming language determines the inheritance hierarchy and resolves method calls in the presence of multiple inheritance. It specifies the sequence in which the base classes are searched for a particular method or attribute.


# PART 2 Deck

import random
class DeckOfCards:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.card = []
        self.deck = [(suit, value) for suit in self.suits for value in self.values]      
    def shuffle(self):
        random.shuffle(self.deck)
    def deal(self):
        if len(self.deck) == 0:
            print("Deck is empty")
            return None
        self.card.append(self.deck.pop(0))
        
    def print_deck(self):
        for i in self.deck:
            print (i)
new_deck = DeckOfCards()
new_deck.print_deck()
new_deck.shuffle()
new_deck.print_deck()
new_deck.deal()
new_deck.deal()
new_deck.deal()
new_deck.deal()
print(new_deck.card)
print(len(new_deck.deck))

