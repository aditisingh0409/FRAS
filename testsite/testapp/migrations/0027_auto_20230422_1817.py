# Generated by Django 3.2.18 on 2023-04-22 12:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0026_schedule'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='camera',
            name='id',
        ),
        migrations.RemoveField(
            model_name='classroom',
            name='camera_ip',
        ),
        migrations.RemoveField(
            model_name='classroom',
            name='status',
        ),
        migrations.AddField(
            model_name='classroom',
            name='class_id',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='testapp.class'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='classroom',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='camera',
            name='camera_ip',
            field=models.CharField(max_length=15, primary_key=True, serialize=False),
        ),
    ]
