#Dans api/serializers.py
from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

        def create(self, validated_data):
            password = validated_data.pop('password')
            user = User.objects.create_user(**validated_data)
            user.set_password(password)  # Hash the password
            user.save()
            return user