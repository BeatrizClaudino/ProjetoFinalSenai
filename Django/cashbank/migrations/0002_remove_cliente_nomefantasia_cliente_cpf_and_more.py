# Generated by Django 4.2 on 2023-05-05 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cashbank', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='nomeFantasia',
        ),
        migrations.AddField(
            model_name='cliente',
            name='cpf',
            field=models.CharField(default=1, max_length=11, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='cliente',
            name='email',
            field=models.EmailField(default=1, max_length=254),
            preserve_default=False,
        ),
    ]
