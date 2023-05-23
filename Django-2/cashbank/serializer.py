from rest_framework import serializers
from .models import *
from rest_framework.permissions import IsAuthenticated


#O serializaer serve para converter o obj do banco para json e obj json para obj do banco
class CadastroclienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Cliente
        #tudo que tá aqui dentro do fields é pra ser convertido e enviado para o banco de dados
        fields=['user_id', 'username', 'cpf', 'email', 'data_nascimento', 'celular', 'password']

class EnderecoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Endereco
        fields = ['id_endereco', 'logradouro', 'bairro', 'cidade', 'uf', 'cep']

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = ['id_conta','agencia', 'numero', 'tipo', 'limite', 'ativa', 'data_criacao']

class CartaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartao
        fields = ['id_cartao', 'numero_cartao', 'cvv', 'data_vencimento', 'bandeira', 'cartao_ativo']
