# Generated by Django 3.2.18 on 2023-04-28 06:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0038_auto_20230427_0738'),
    ]

    operations = [
        migrations.AddField(
            model_name='final_year',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='second_year',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='third_year',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='final_year',
            name='enroll_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='testapp.student'),
        ),
        migrations.AlterField(
            model_name='second_year',
            name='enroll_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='testapp.student'),
        ),
        migrations.AlterField(
            model_name='third_year',
            name='enroll_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='testapp.student'),
        ),
    ]