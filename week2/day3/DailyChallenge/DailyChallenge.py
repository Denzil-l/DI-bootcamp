# #Challenge 1
# word = input("Enter your word: ").lower()
# new_dict = {}
# new_set = set(word)
# for i in new_set:
#     new_dict[i] = []
#     indexes = []
# for i in new_dict:
#     for j in range(len(word)):
#         new_word = list(word)
#         if i == new_word[j]:
#             indexes.append(j)
#     new_dict[i] = indexes.copy()
#     indexes.clear()
# print(new_dict)
    
#Challenge 2


items_purchase = {
  "Water": 1,
  "Bread": 3,
  "TV": 1000,
  "Fertilizer": 20,
  "Masgan": 500
}
final_list = []
wallet = int(input("How much money do you have? "))
for item,money in items_purchase.items():
    if money <= wallet:
        final_list.append(item)
final_list.sort()
if final_list == []:
    print("Nothing")
else:
    print(f"You can buy this list of products: {final_list}")