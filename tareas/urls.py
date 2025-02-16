from django.urls import path,include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from .views import TareasView

router = routers.DefaultRouter()
router.register(r'tareas-api',TareasView)

urlpatterns = [
    path('api/v1/',include(router.urls)),
    # path('docs/', include_docs_urls(title="API de tareas")),
]