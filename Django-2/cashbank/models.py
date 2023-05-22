from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from random import randint


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        num = ''
        lista=[]
        
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        
        for i in range(0, 5):
            num = (randint(0,9))
            lista.append(num) 
        numero = ("".join(map(str, lista)))
        user.set_password(password)
        user.save()
        Conta.objects.create(fk_cliente=user,agencia='200',numero=numero, tipo='Corrente', limite=2000, ativa=True)
        #pegar o token e obter o id do usuário a partir do token
        token = token.objects.get(user=user)
        
        
        return user
       
    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)

class Cliente(AbstractUser):
    username = None
    nome = models.CharField(max_length=255)
    celular = models.CharField(max_length=20, default='')
    cpf = models.CharField(max_length=11, unique=True)
    email = models.EmailField(null=False, unique=True)
    data_nascimento = models.DateField()
    # imagem = models.ImageField(upload_to="foto_users")
    
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    USERNAME_FIELD = 'cpf'
    REQUIRED_FIELDS = ['nome', 'celular', 'email', 'data_nascimento']
    
    objects = CustomUserManager()

class Conta(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    agencia = models.CharField(max_length=10)
    numero = models.CharField(max_length=25)
    tipo = models.CharField(max_length=20)
    limite = models.DecimalField(decimal_places=4, max_digits=8)
    ativa = models.BooleanField(default=True)   
    

class Endereco(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.PROTECT)
    logradouro = models.CharField(max_length=100)
    bairro = models.CharField(max_length=75)
    cidade = models.CharField(max_length=75)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.cep
    
    class Meta:
        verbose_name_plural = "Endereço"

class Cartao(models.Model):
    conta_cartao = models.ForeignKey(Conta, on_delete=models.DO_NOTHING)
    numero_cartao = models.CharField(max_length=20)
    cvv = models.IntegerField()
    data_vencimento = models.DateField()
    bandeira = models.CharField(max_length=20)
    nome_titular_cartao = models.CharField(max_length=100)
    cartao_ativo = models.BooleanField()
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["numero_cartao"],
                name="unique_numero_cartao",
            )
        ]
        verbose_name_plural = "Cartao"