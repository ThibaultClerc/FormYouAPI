class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :first_name, :last_name

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end