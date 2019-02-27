from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    list_display_links = (
      'location',
      'caption',
    )

    search_fields = (
      'location',
      'caption',
      'creator',
    )

    list_filter = (
      'location',
      'caption',
    )
    
    list_display = (
      'file',
      'creator',
      'caption',
      'location',
      'created_at',
      'updated_at',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    
    list_display = (
      'creator',
      'image',
      'created_at',
      'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    
    list_display = (
      'message',
      'creator',
      'image',
      'created_at',
      'updated_at',
    )

