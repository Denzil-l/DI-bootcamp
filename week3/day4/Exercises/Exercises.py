#EXERCISE XP:

# #Exercise 1
# import random
# def main():
#     try:
#         print('This programm generates a random sentence. You just have to enter the number of words between 2 and 20 and see the result')
#         length = int(input('Enter the length of your sentence: '))
#     except:
#         print("Inccorect data. You length has to be integer")
#     else:
#         if length < 2 or length > 20:
#              raise ValueError('length must be between 2 and 20') 
#         return get_random_sentence(length)

# def get_words_from_file():
#     with open('Exercises/sowpods.txt', 'r') as f:
#         return f.readlines()

# def get_random_sentence(length):
#     new_list = get_words_from_file()
#     resp_list = []
#     for i in range(length):
#         randomium = random.randint(0,len(new_list) - 1)
#         resp_list.append(new_list[randomium].lower())
#     resp_list2 = [word.replace('\n','') for word in resp_list] 
#     resp_list2[0] = resp_list2[0].capitalize()
#     return ' '.join(resp_list2) + ' !!!!'

# print(main())

# # Exercise 2

# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""
# new_dict = json.loads(sampleJson)
# print(new_dict['company']['employee']['payable']['salary'])
# new_dict['company']['employee']['birth_date'] = 30
# print(new_dict)

# with open('Exercises/new_json.json', 'w') as file:
#     json.dump(new_dict,file)