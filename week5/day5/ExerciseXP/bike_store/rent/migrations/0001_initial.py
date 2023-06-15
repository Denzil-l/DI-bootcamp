# Generated by Django 4.2.1 on 2023-06-01 11:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=50)),
                ('address2', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('postal_code', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=30)),
                ('city', models.CharField(max_length=30)),
                ('country', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle_size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle_type',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateField(auto_now_add=True)),
                ('real_cost', models.IntegerField()),
                ('size', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehicle_size')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehicle_type')),
            ],
        ),
        migrations.CreateModel(
            name='RentalStation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('capacity', models.IntegerField()),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.address')),
            ],
        ),
        migrations.CreateModel(
            name='Rental_Rate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('daily_rate', models.IntegerField(blank=True, null=True)),
                ('vehicle_size', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='rent.vehicle_size')),
                ('vehicle_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehicle_type')),
            ],
        ),
        migrations.CreateModel(
            name='Rental',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rental_date', models.DateField(blank=True, null=True)),
                ('return_date', models.DateField(blank=True, null=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.customer')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='rent.vehicle')),
            ],
        ),
    ]