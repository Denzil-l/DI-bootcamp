
from django.contrib import admin
from django.urls import include, path
from posts.views import PostView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/posts/', PostView.as_view())
]
