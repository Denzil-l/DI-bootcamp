class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.page_size = int(pageSize)
        self.total_pages = len(self.items) // self.page_size
        if len(self.items) % self.page_size != 0:
            self.total_pages += 1
            self.current_page = 1
    def getVisibleItems(self):
        start = (self.current_page - 1) * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    def prevPage(self):
        self.current_page -= 1
        if self.current_page <= 0:
            self.current_page = 1
    def nextPage(self):
        self.current_page += 1
        if self.current_page > self.total_pages:
            self.current_page = self.total_pages
    def firstPage(self):
        self.current_page = 1
    def lastPage(self):
        self.current_page = self.total_pages
    def goToPage(self, num):
        self.current_page = num
        if self.current_page > self.total_pages:
            self.current_page = self.total_pages
        elif self.current_page <= 0:
            self.current_page = 1



alphabetList = list("abcdefghijklmnopqrstuvfsdfsdfsdfsdfsfdswxyz")
p = Pagination(alphabetList,4)

print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.lastPage()
print(p.getVisibleItems())
p.goToPage(20)
print(p.current_page)
p.goToPage(-2)
print(p.current_page)
