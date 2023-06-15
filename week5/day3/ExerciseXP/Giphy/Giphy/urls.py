
from django.contrib import admin
from django.urls import path
from gif.views import add_category_view, add_gif
urlpatterns = [
    path('admin/', admin.site.urls),
    path('add-category',add_category_view),
    path('add-gif',add_gif),
]

