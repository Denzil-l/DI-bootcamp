# import os


# # print('Current directory: ',os.getcwd())
# if not os.path.isdir('new_folder'):
#     os.mkdir('new_folder')
# os.chdir('new_folder')
# # print(os.getcwd())
# # os.chdir('..')
# # print(os.getcwd())
# # os.chdir('new_folder')
# # print(os.getcwd())


# os.chdir('new_folder')

# # file = open('text.txt', 'w')
# # file.write('New file')
# # os.rename('text.txt','text2.txt')

# os.replace('text2.txt','..')

# print("Current Directory:", os.getcwd())
# if not os.path.isdir('new_folder'):
#     os.mkdir("new_folder")
# # file = open('text.txt','w')
# # file.write('SOme new text')
# # os.rename('text.txt','text2.txt')
# os.replace('text2.txt','new_folder/text2.txt')

# print(os.listdir())

# for dirpach, dirnames, filenames in os.walk('.'):
#     for dirname in dirnames:
#         print('Dirname: ',dirname)
#     for filename in filenames:
#         print('Filename: ',filename)
#     print('DirPach', dirpach)
# for dirpach, dirnames, filenames in os.walk('.'):
#     for dirname in dirnames:
#         print('Catalog: ', os.path.join(dirpach,dirname))
#     for filename in filenames:
#         print('File: ',os.path.join(dirpach, filename))

# os.remove('new_folder/text2.txt')
# os.rmdir('new_folder')
# print(os.getcwd())
# os.chdir('..')
# print(os.getcwd())

# # os.makedirs('one/two/three')
# os.removedirs('new_folder/one/two/three')


# for i in range(1,6):
#     if not os.path.isdir(f'week{i}'):
#         os.makedirs(f"week{i}\day1\day2\day3\day4\day5")
#         for j in range(1,6):
#             os.chdir(f'week{i}/day{j}')
#             os.makedirs('lesson,homework')


import time

before = time.time()
long_number = 1000**1000
after = time.time()

print(f"It took {after - before} seconds to execute 1000**1000")
