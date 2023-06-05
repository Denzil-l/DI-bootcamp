from django.shortcuts import render
from django.contrib import messages 
from .models import Vehicle,Vehicle_size,Vehicle_type,Address,Rental,Rental_Rate,RentalStation,Customer
from .forms import RentalForm


def rent_rental(request):
    vehicle_size = Vehicle_size.objects.all()
    vehicle_type = Vehicle_type.objects.all()
    rentals = Rental.objects.all()
    unreturned_rentals = []
    sorted_rentals = []
    for i in rentals:
        if i.return_date == None:
            unreturned_rentals.append(i)
        else:
            sorted_rentals.append(i)
    sorted_rentals.sort(key=lambda x: x.rental_date)
    context = {
        'unreturned_rentals' : unreturned_rentals,
        'sorted_rentals' : sorted_rentals,
        'vehicle_size' : vehicle_size,
        'vehicle_type' : vehicle_type
        }
    return render(request,'allrent.html',context)

def rent_rental_pk(request, pk):
    vehicle_size = Vehicle_size.objects.all()
    vehicle_type = Vehicle_type.objects.all()
    rentals = Rental.objects.all()
    rental = ''
    for i in rentals:
        if i.id == pk:
            rental = i
    customer = Customer.objects.all()
    
    context = {
        'rental': rental,
        'vehicle_size': vehicle_size,
        'vehicle_type': vehicle_type,
        'customer': customer
    }

    return render(request,'rental.html',context)

def rent_rental_add(request):
    if request.method == 'POST':
        form = RentalForm(request.POST)
        if form.is_valid():
            customer_id = form.cleaned_data['customer']
            vehicle_id = form.cleaned_data['vehicle']

            try:
                customer = Customer.objects.get(id=customer_id)
                vehicle = Vehicle.objects.get(id=vehicle_id)
            except Customer.DoesNotExist:
                messages.error(request, 'Invalid customer ID.')
            except Vehicle.DoesNotExist:
                messages.error(request, 'Invalid vehicle ID.')
            else:
                if Rental.objects.filter(vehicle=vehicle, return_date__isnull=True).exists():
                    messages.error(request, 'Vehicle is currently being rented.')
                else:
                    rental = Rental(customer=customer, vehicle=vehicle)
                    rental.save()
                    messages.success(request, 'Rental created successfully.')
        else:
            messages.error(request, 'Invalid form data.')
    else:
        form = RentalForm()

    context = {'form': form}
    return render(request,'addrental.html',context)
