class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attribute :user do {
    email: @object.email,
    first_name: @object.first_name,
    last_name: @object.last_name
  }
  end

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
  

end