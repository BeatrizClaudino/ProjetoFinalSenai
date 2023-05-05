from rest_framework import serializers
from .models import *

#O serializaer serve para converter o obj do banco para json e obj json para obj do banco
class CadastroclienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cliente
        #tudo que tá aqui dentro do fields é pra ser convertido e enviado para o banco de dados
        fields=['id', 'nome', 'cpf', 'email', 'data_nascimento', 'celular', 'senha']

class CadastroSenhaEnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model: Endereco
        fields=['logradouro', 'bairro', 'cidade', 'uf', 'cep']

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Endereco
        fiels = ['id', 'logradouro', 'bairro', 'cidade', 'uf', 'cep']
