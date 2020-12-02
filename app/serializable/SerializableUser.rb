class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :user_category, :id

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end