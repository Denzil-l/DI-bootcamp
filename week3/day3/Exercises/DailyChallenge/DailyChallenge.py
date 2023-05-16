#DailyChallenge - Circle

# import math

# class Circle:
#     def __init__(self, radius=None, diameter=None):
#         if radius is not None:
#             self.radius = radius
#             self.area = int(self.radius**2*math.pi)
#         elif diameter is not None:
#             self.radius = diameter / 2
#             self.area = int(self.radius**2*math.pi)
#     def __add__(self,other):
#         return Circle(radius=self.radius + other.radius)
#     def __str__(self):
#         return f"It is a nice circle with radius = {self.radius}"
#     def __repr__(self):
#         return f"Circle({self.radius})"
#     def get_area(self):
#         return self.area
#     def __eq__(self, other):
#         return self.radius == other.radius
#     def __lt__(self, other):
#         return self.radius < other.radius

# cir_one = Circle(radius=30)
# cir_two = Circle(radius=45)
# print(cir_one)
# print(cir_two)
# cir_three = cir_one + cir_two
# print(cir_three)
# print(cir_one == cir_two)
# print(cir_one > cir_two)
# print(cir_one.get_area())
# new_list = sorted([cir_one,cir_two,cir_three])
# print(new_list)

#Daily Challenge: Translator




# import translators as ts

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# new_dict = {}
# for i in french_words:
#     new_dict[f'{i}'] = ts.translate_text(i)
# print(new_dict)