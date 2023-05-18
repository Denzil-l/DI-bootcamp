class AnagramChecker():
    def __init__(self,vocabulary):
        self.vocabulary = vocabulary
        for i,e in enumerate(vocabulary):
            self.vocabulary[i] = e.replace('\n','')
    def is_valid_word(self,word):
        word = word.upper()
        if word not in self.vocabulary:
            print('Your word is not exist or maybe you made a msitake')
            return False
        # It must be enough because if word is not in vocabulare, it means that it's not a real word or this word has mistakes(more one word or contain numbers or spaces or something else)
    def get_anagrams(self,word):
        word = word.upper()
        word_list = list(word)
        return_list = []
        for i in self.vocabulary:
            check = True
            if len(word_list) == len(i):
                for j in word_list:
                    if j not in i:
                        check = False
                if check == True:
                    return_list.append(i)
        return_list.remove(word)
        if len(return_list) == 0:
            return "Unfortunately your word doesn't have anagrams"
        else:
            return return_list

                



