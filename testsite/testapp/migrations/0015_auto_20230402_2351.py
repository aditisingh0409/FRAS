# Generated by Django 3.2.18 on 2023-04-02 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0014_auto_20230305_1116'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(default='abc@example.com', max_length=50),
        ),
        migrations.AddField(
            model_name='student',
            name='mobile',
            field=models.CharField(default='+910123456789', max_length=15),
        ),
    ]
