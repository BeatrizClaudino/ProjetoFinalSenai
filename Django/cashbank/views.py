from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework import viewsets
# from django.contrib.auth.hashers import make_password
# from rest_framework.response import Response

class ListarClientes(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = CadastroclienteSerializer

    #usar querystring para validar se CPF já está cadastrado
    #
    def get_queryset(self):
        queryset = Cliente.objects.all()
        cpfCliente = self.request.query_params.get('cpf')
        
        if cpfCliente is not None:
            queryset = queryset.filter(cpf=cpfCliente)
            #lá no front, valida o lenght da resposta, se for == 0, não existe nenhum cadastro com o CPF
            return queryset
        return super().get_queryset()