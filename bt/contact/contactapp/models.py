from django.db import models

class contact (models.Model):
    name=models.CharField( unique=True,max_length=256)
    num=models.IntegerField()
    nameid=models.CharField(max_length=256,default=0)


class many (models.Model):
    name=models.CharField( unique=True,max_length=256)
    num=models.IntegerField()
    nameid=models.IntegerField()
    nbr=models.IntegerField(default=0)