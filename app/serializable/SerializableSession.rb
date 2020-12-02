class SerializableSession < JSONAPI::Serializable::Resource

  type 'session'

  attribute :session do
    {
      classroom: @object.classroom.title,
      date: @object.date,
    }
  end

end