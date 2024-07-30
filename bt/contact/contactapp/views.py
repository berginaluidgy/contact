from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import contact,many

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def welcome(request):
    data=request.data
    contactall=contact.objects.create(name=data['name'],num=data['num'],nameid=data['num'])
    return Response({'satuts':status.HTTP_200_OK})
# @api_view(['POST'])
# def share(request):
#     nameidp=many.objects.get(nameid='')
    
@api_view(['get','post'])
def myshare(request,nameid):
    print(request.get_host()+'/share/'+str(nameid))
    if request.method=='POST':
        body=many.objects.get(nameid=87)
        return Response({'nbr':body.nbr,'lk':request.get_host()+'/share/'+str(nameid)})
    else:
        body2=many.objects.get(nameid=87)
        body2.nbr+=1
        body2.save()
        # return Response({'satuts':status.HTTP_200_OK})
        return redirect('http://localhost:5173/')
        # return Response({'satuts':status.HTTP_200_OK})