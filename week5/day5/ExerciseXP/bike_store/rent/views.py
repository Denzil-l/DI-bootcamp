from django.shortcuts import render,redirect
from django.contrib import messages 
from .models import Vehicle,Vehicle_size,Vehicle_type,Address,Rental,Rental_Rate,RentalStation,Customer
from .forms import RentalForm, CustomerForm,VehicleForm


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
            customer = form.cleaned_data['customer']
            vehicle = form.cleaned_data['vehicle']
            customer_id = customer.id
            vehicle_id = vehicle.id

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

def rent_customer_pk(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        messages.error(request, 'Invalid customer ID.')
    context = {'customer' : customer}
    return render(request,'customer.html',context)

def rent_customer(request):
    customers = Customer.objects.order_by('last_name', 'first_name')
    context = {'customers': customers}
    return render(request, 'customer_list.html', context)

def rent_customer_add(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('customer-list')  # Перенаправление на список всех клиентов

    else:
        form = CustomerForm()
    
    context = {'form': form}
    return render(request, 'addcustomer.html', context)

def rent_vehicle(request):
    vehicle_types = Vehicle_type.objects.all()

    context = {
        'vehicle_types': vehicle_types,
    }
    return render(request, 'vehicle_list.html', context)

def rent_vehicle_pk(request, pk):
    try:
        vehicle = Vehicle.objects.get(pk=pk)
    except Customer.DoesNotExist:
        messages.error(request, 'Invalid vehicle ID.')
    context = {'vehicle' : vehicle}
    return render(request,'vehicle.html',context)


def rent_vehicle_add(request):
    if request.method == 'POST':
        form = VehicleForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('vehicle-list')  # Перенаправление на список всех клиентов

    else:
        form = VehicleForm()
    
    context = {'form': form}
    return render(request, 'addvehicle.html', context)

