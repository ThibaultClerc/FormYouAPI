class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :id, :email, :is_validated, :user_category
  
end