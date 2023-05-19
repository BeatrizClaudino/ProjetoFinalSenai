from rest_framework import serializers
from .models import *
from rest_framework.permissions import IsAuthenticated


#O serializaer serve para converter o obj do banco para json e obj json para obj do banco
class CadastroclienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cliente
        #tudo que tá aqui dentro do fields é pra ser convertido e enviado para o banco de dados
        fields=['id', 'nome', 'cpf', 'email', 'data_nascimento', 'celular', 'senha']


class EnderecoSerializer(serializers.ModelSerializer):
    numCartao = []

    for i in range(0, 12):
        num = (randint(0,9))
        numCartao.append(num)
        

    class Meta: 
        model = Endereco
        fields = ['id', 'logradouro', 'bairro', 'cidade', 'uf', 'cep']
        permission_classes = (IsAuthenticated, )
        queryset = Cliente.objects.get.all()
        serializer_class = CadastroclienteSerializer

        Cartao.objects.create(fkCliente=Cliente, numero='212')


#user_id
        #AccessToken(token)
        # cliente = Cliente.objects.get(id=user_id)
        #blz encontrei o cliente, agora vou criar o cartão
        
        # Cartao.objects.create(fkCliente=cliente, numero=gerar random, validade=11/25, codigoSeguranca=123)
        
        #cria um objeto de conta 
