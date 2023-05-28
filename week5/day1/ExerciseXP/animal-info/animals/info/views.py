from django.shortcuts import render
from django.http import HttpResponse
import json

def family(request, family_id):
    with open(r'C:\Users\den-s\OneDrive\Desktop\DI-bootcamp\week5\day1\ExerciseXP\animal-info\animals\info\animals.json') as json_file:
        data = json.load(json_file)
        family = None
        animals = []

        for i in data['families']:
            if i['id'] == family_id:
                family = i
                break

        if family:
            for animal in data['animals']:
                if animal['family'] == family_id:
                    animals.append(animal)

        context = {
            'family': family,
            'animals': animals
        }
        return render(request, 'info/family.html', context)

def animal(request, animal_id):
    with open(r'C:\Users\den-s\OneDrive\Desktop\DI-bootcamp\week5\day1\ExerciseXP\animal-info\animals\info\animals.json') as json_file:
        data = json.load(json_file)
        animal = None

        for i in data['animals']:
            if i['id'] == animal_id:
                animal = i
                break

        context = {
            'animal': animal
        }
        return render(request, 'info/animal.html', context)