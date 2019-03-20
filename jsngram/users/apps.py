from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "jsngram.users"
    verbose_name = "Users"

    def ready(self):
        try:
            import users.signals  # noqa F401
        except ImportError:
            pass

       #from .signals import user_signed_up

       