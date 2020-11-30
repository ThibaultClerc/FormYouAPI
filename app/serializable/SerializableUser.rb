class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :firstname, :lastname

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end