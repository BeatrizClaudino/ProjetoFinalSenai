from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import AccessToken
from datetime import datetime

#LISTANDO AS CONTAS EXISTENTES
class ListarClientes(viewsets.ModelViewSet):
    permission_classes=(IsAuthenticated, )
    queryset = Cliente.objects.all()
    serializer_class = CadastroclienteSerializer
    
    def list(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)
        usuario = dados['user_id']
        print(usuario)
        return super().list(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)
        
    #usar querystring para validar se CPF já está cadastrado
    def get_queryset(self):
        queryset = Cliente.objects.all()
        cpfCliente = self.request.query_params.get('cpf')
        
        if cpfCliente is not None:
            queryset = queryset.filter(cpf=cpfCliente)
            #lá no front, valida o lenght da resposta, se for == 0, não existe nenhum cadastro com o CPF
            return queryset
        return super().get_queryset()

class ContaCreateView(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer = ContaSerializer()
        
class CartaoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Cliente.objects.all()

    def list(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)
        usuario = dados['user_id']
        numCartao = []

        for i in range(0, 12):
            num = (randint(0,9))
            numCartao.append(num)
        
        Cartao.objects.create(fk_cliente=usuario, numero=numCartao, validade=11/25, codigoSeguranca=123)
        # Cartao = Conta.objects.get(id=usuario)
        return super().list(request, *args, **kwargs)
    

        
        
        

    
    

        
    

    
    