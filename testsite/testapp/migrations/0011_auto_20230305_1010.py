# Generated by Django 3.2.18 on 2023-03-05 04:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0010_alter_student_img'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='media/team/')),
            ],
        ),
        migrations.AlterField(
            model_name='student',
            name='img',
            field=models.ImageField(upload_to='media/students/'),
        ),
    ]
