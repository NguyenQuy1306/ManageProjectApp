from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.http import url_has_allowed_host_and_scheme
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt


from rest_framework.decorators import api_view, authentication_classes, permission_classes, renderer_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

from .models import Project
from random import randrange
from .serializers import ProjectSerializer
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'

def homepage(request, *args, **kwargs):
    return render(request, 'pages/home.html', context = {}, status= 200)

@api_view(['GET'])
def ProjectList(request, *args, **kwargs):
    qs = Project.objects.all()
    serializer = ProjectSerializer(qs, many = True)
    return Response(serializer.data, status = 200 )

@api_view(['POST'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def ProjectCreateView(request, *args, **kwargs):
    projectObj = ProjectSerializer(data = request.data )    
    #title, description, budget, starts_at, ends_at
    #api/projects/add/
    # {
    #     "title":"Projecr #4",
    #     "description": "This is a test project.",
    #     "budget":150000,
    #     "starts_at" : "2023-07-08T09:00:00Z",
    #     "ends_at" : "2023-07-16T09:00:00Z"
    # }
    if projectObj.is_valid(raise_exception= True):
        projectObj.save(owner= request.user)
        return JsonResponse(projectObj.data, status = 201)
    return Response({}, status = 400)

# @api_view(['POST', 'DELETE'])
# @permission_classes([IsAuthenticated])
# @authentication_classes((SessionAuthentication,))
# def TweetActionView(request, *args , **kwargs):
#     #id action
#     serializer = ProjectActionSerializer(data = request.data)
#     if serializer.is_valid(raise_exception= True):
#         data = serializer.validated_data
#         tweet_id = data.get("id")
#         action = data.get("action")

#         qs = Project.objects.filter(id = tweet_id)
#         if not qs.exists():
#             return Response({}, status= 404) # not found
#         obj = qs.first()
#         if action == 'like':
#             obj.likes.add(request.user)
#         elif action =='unlike':
#             obj.likes.remove(request.user)
#             serializer = ProjectSerializer(obj)
#             return Response(serializer.data, status=200)
#         elif action =='retweet':
#             pass
#         else:
#             pass
#     return Response({"message":"nice"}, status = 200)
# @api_view(['DELETE', 'POST'])
# @permission_classes([IsAuthenticated])
# @authentication_classes((SessionAuthentication,))
# def TweetRemoveView(request,  *args, **kwargs):
#     projectObj = get_object_or_404(Project, pk =1)
#     projectObj.delete()
#     data = {
#         'message':"delete successfully"
#     }
#     return Response(data, status = 200)


# @api_view(['GET'])
# @authentication_classes([SessionAuthentication])
# @permission_classes([IsAuthenticated])
# def TweetList(request, *args, **kwargs):
#     qs = Project.objects.all()
#     serializer = ProjectSerializer(qs, many = True)
    
#     return Response(serializer.data, status = 200 )

# def TweetList_pure_django(request, *args, **kwargs):
#     qs = Project.objects.all()
#     tweet_list = [x.serialize() for x in qs]
#     data ={
#         "response": tweet_list
#     }
    
#     return JsonResponse(data)
