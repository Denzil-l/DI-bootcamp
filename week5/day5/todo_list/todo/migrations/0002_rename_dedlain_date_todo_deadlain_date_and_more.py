# Generated by Django 4.2.1 on 2023-06-01 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='dedlain_date',
            new_name='deadlain_date',
        ),
        migrations.AlterField(
            model_name='todo',
            name='date_complition',
            field=models.DateField(blank=True, null=True),
        ),
    ]
