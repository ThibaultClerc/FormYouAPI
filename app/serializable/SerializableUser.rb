class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :last_name, :first_name, :email
  
end