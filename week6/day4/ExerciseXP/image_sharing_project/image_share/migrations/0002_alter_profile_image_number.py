# Generated by Django 4.2.2 on 2023-06-08 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('image_share', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image_number',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
