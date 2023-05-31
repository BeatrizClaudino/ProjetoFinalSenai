import decimal
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
    permission_classes = (IsAuthenticated,)
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer
    
    # def get_queryset(self):
    #     querryset = Conta.objects.all()
    #     id_Cliente = self.request.query_params.get('user_id')
    #     if id_Cliente is not None:
    #         querryset= querryset.filter(user_id=id_Cliente)
    #         return querryset
    #     return super().get_queryset()
 
class EnderecoView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer
    
    def create(self, request, *args, **kwargs):
        numCartao = []
        cvv = []
        
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)
        usuario = dados['user_id']
        conta_atual = Conta.objects.get(id_user=usuario)
        novo_endereco = Endereco.objects.all()
        novo_endereco.logradouro = request.data['logradouro']
        novo_endereco.numero = request.data['numero']
        novo_endereco.cliente = usuario
        
        for i in range(0, 3):
            numCvv =(randint(0,9))
            cvv.append(numCvv)
            
        for i in range(0, 12):
            num = (randint(0,9))
            numCartao.append(num)
    
        Cartao.objects.create(fk_conta_cartao=conta_atual, numero=numCartao, validade="2023-05-23", codigoSeguranca=123, bandeira="Visa", nome_titular=conta_atual.fk_cliente__nome)
    
        request.POST._mutable = True
        return super().create(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)
        cartao = dados['id_cartao']
        print(cartao)
        return super().list(request, *args, **kwargs)
    
class CartaoViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,) #todos em um só
    queryset = Cartao.objects.all()
    serializer_class = CartaoSerializer
    
#FAZER DEPOIS 
class MovimentacaoView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Movimentacao.objects.all()
    serializer_class = MovimentacaoSerializer

    def create(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)

        #Acessar os dados do cliente
        cliente = dados['user_id']
        conta_cliente = Conta.objects.get(id=cliente)

        request.data['fk_movimentacao'] = conta_cliente
        request.POST._mutable = True

        nome = request.data['destinatario']
        nomeVerificado = Cliente.objects.filter(nome = nome).exists()

        cpf = request.data['destinatario']
        cpfVerificado = Cliente.objects.filter(cpf = cpf ).exists()

        conta = request.data['destinatario']
        contaVerificado = Cliente.objects.filter(conta = conta).exists()

        #uma das opções, pega o saldo da pessoa e depois faz o calculo

        if nomeVerificado:
            valorTransferencia = request.data['valor']
            nomeDestinatario = Cliente.objects.get(nome=nomeVerificado).id
            contaDestinatario = Conta.objects.get(id=nomeDestinatario)


            conta_cliente.limite -= valorTransferencia
            conta_cliente.save()

            contaDestinatario.limite += valorTransferencia
            contaDestinatario.save()

            print(contaDestinatario)
            print(conta_cliente)
            return super().create(request, *args, **kwargs)

        else:
            print("Deu ruim")
        


class EmprestimoView(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer
    
    def create(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
        dados = AccessToken(token)
        usuario = dados['user_id']
        conta_atual = Conta.objects.get(id=usuario)

        request.data['fk_conta_emprestimo'] = usuario
        request.POST._mutable = True
        valor_solicitado = decimal.Decimal(request.data['valorSolicitado'])
        novo_saldo = decimal.Decimal(conta_atual.limite) + valor_solicitado

        print(novo_saldo)
        conta_atual.limite = novo_saldo
        conta_atual.save()

        # pegar_saldo
        return super().create(request, *args, **kwargs)

    
        
        
        

    
    

        
    

    
    