class SerializableCourse < JSONAPI::Serializable::Resource
  type 'course'

  attribute :title
  
end