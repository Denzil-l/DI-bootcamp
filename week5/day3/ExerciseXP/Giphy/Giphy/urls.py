
from django.contrib import admin
from django.urls import path
from gif.views import add_category_view
urlpatterns = [
    path('admin/', admin.site.urls),
    path('add-category',add_category_view),
]

