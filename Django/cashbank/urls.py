from rest_framework import routers
from django.urls import path, include
from .views import *

router = routers.SimpleRouter()
router.register('usuario', ListarClientes)

urlpatterns = [] + router.urls



