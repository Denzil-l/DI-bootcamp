from django.shortcuts import render
from .serializers import StudentSerializer
from .models import Student
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework import mixins
from rest_framework import generics
from django.utils.dateparse import parse_date

class StudentListView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Student.objects.all() 
    serializer_class = StudentSerializer
    def get_queryset(self):
        queryset = super().get_queryset()
        date_joined_param = self.request.query_params.get('date_joined')
        if date_joined_param:
            date_joined = parse_date(date_joined_param)
            queryset = queryset.filter(date_joined=date_joined)
        return queryset

    def get(self, request,*args,**kwargs):
        return self.list(request,*args,**kwargs)
    def post(self, request,*args,**kwargs):
        return self.create(request,*args,**kwargs)

class StudentDetailView(APIView):
    def get(self,request,*arg,**kwargs):
        queryset = Student.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)
    permission_classes = (AllowAny,)
    def put(self,request,pk,*arg,**kwargs):
        article = Student.objects.get(pk=pk)
        serializer = StudentSerializer(article, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

    def delete(self,request,pk,*arg,**kwargs):
        article = Student.objects.get(pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class student_list(APIView):
    permission_classes = (AllowAny,)


    print('x')

    def get(self, request, *args, **kwargs):
        students = Student.objects.all()
        date_joined_param = self.request.GET.get('date_joined')
        print('y')
        print(date_joined_param)

        if date_joined_param:
            print('z')
            students = students.filter(date_joined=date_joined_param)
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, *args, **kwargs):
        student = Student.objects.get(pk=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        student = Student.objects.get(pk=pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)