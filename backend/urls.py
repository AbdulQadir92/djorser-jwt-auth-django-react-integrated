from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),

    # for connecting with react
    path('', TemplateView.as_view(template_name='index.html')),

    # authentication
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]

# authentication
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
