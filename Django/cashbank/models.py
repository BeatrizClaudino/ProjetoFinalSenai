from django.db import models

class Cliente(models.Model):
    nome = models.CharField(max_length=255)
    celular = models.CharField(max_length=20, default='')
    cpf = models.CharField(max_length=11, unique=True)
    email = models.EmailField(null=False)
    data_nascimento = models.DateField()
    usuario = models.CharField(max_length=20)
    senha = models.CharField(max_length=8)

    def __str__(self) -> str:
        return self.nome
    
    class Meta:
        verbose_name_plural = "Cliente"

class Endereco(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    logradouro = models.CharField(max_length=100)
    bairro = models.CharField(max_length=75)
    cidade = models.CharField(max_length=75)
    uf = models.CharField(max_length=2)
    cep = models.CharField(max_length=10)

    def __str__(self) -> str:
        return self.cep
    
    class Meta:
        verbose_name_plural = "Endereço"

class Conta(models.Model):
    fk_cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    agencia = models.CharField(max_length=10)
    numero = models.CharField(max_length=25)
    tipo = models.CharField(max_length=20)
    # limite = models.DecimalField()
    ativa = models.BooleanField(default=True)   