from django.shortcuts import render

people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]

def peoples(request):
  context = {'people': people}
  return render(request,'info/people.html',context)
def person(request,id):
  id = id - 1 
  person = {
    'id': (people[id]['id']),
    'name': people[id]['name'],
    'age': people[id]['age'],
    'country': people[id]['country']
    }
  context = {'person' : person}
  return render(request,'info/person.html',context)
