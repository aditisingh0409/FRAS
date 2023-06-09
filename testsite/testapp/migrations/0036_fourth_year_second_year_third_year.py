# Generated by Django 3.2.18 on 2023-04-27 01:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0035_subject_class_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Third_Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub1', models.IntegerField(default=0)),
                ('sub2', models.IntegerField(default=0)),
                ('sub3', models.IntegerField(default=0)),
                ('sub4', models.IntegerField(default=0)),
                ('sub5', models.IntegerField(default=0)),
                ('sub6', models.IntegerField(default=0)),
                ('sub7', models.IntegerField(default=0)),
                ('sub8', models.IntegerField(default=0)),
                ('sub9', models.IntegerField(default=0)),
                ('sub10', models.IntegerField(default=0)),
                ('enroll_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='testapp.student')),
            ],
        ),
        migrations.CreateModel(
            name='Second_Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub1', models.IntegerField(default=0)),
                ('sub2', models.IntegerField(default=0)),
                ('sub3', models.IntegerField(default=0)),
                ('sub4', models.IntegerField(default=0)),
                ('sub5', models.IntegerField(default=0)),
                ('sub6', models.IntegerField(default=0)),
                ('sub7', models.IntegerField(default=0)),
                ('sub8', models.IntegerField(default=0)),
                ('sub9', models.IntegerField(default=0)),
                ('sub10', models.IntegerField(default=0)),
                ('enroll_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='testapp.student')),
            ],
        ),
        migrations.CreateModel(
            name='Fourth_Year',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub1', models.IntegerField(default=0)),
                ('sub2', models.IntegerField(default=0)),
                ('sub3', models.IntegerField(default=0)),
                ('sub4', models.IntegerField(default=0)),
                ('sub5', models.IntegerField(default=0)),
                ('sub6', models.IntegerField(default=0)),
                ('sub7', models.IntegerField(default=0)),
                ('sub8', models.IntegerField(default=0)),
                ('sub9', models.IntegerField(default=0)),
                ('sub10', models.IntegerField(default=0)),
                ('enroll_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='testapp.student')),
            ],
        ),
    ]
