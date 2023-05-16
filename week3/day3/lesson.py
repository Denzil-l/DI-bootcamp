class Employee :
    def __init__(self, emp_fn, emp_ln, emp_age, emp_job, emp_salary) :
        self.firstname = emp_fn
        self.lastname = emp_ln
        self.age = emp_age
        self.job = emp_job
        self.salary = emp_salary

    def get_fullname(self) :
        fullname = self.firstname + " " + self.lastname
        return fullname
    
    def happy_birthday(self) : 
        self.age += 1
    
    def get_promotion(self, promotion_amount) :
        self.salary += promotion_amount

    def __gt__(empl1,empl2):
        if empl1.salary > empl2.salary :
            return(empl1.firstname)
        else:
            return(empl2.firstname)
    def __add__(empl1,empl2):
        return empl1.salary + empl2.salary
    def __str__(self,):
        sentence  = f"{self.firstname}\n{self.lastname}\nThe age is:{self.age}\nThe Job is:{self.job}\nThe salary is:{self.salary} "
        return sentence
    def show_employee(self) :
        print(f"{self.firstname} {self.lastname} {self.age} {self.job} {self.salary}")

new_employee1 = Employee('Lea','Smith',30,"developer",30000)
new_employee2 = Employee('David','Schartz',20,"teacher",15000)
    
print('The biggest salary is: ',new_employee1>new_employee2)
print('Common salary is', new_employee1 + new_employee2)
print('-----------------')
print(new_employee1)
print('-----------------')
print(new_employee2)