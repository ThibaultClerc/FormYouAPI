class SerializableCourseTeacher < JSONAPI::Serializable::Resource

  type 'course_teacher'

  attribute :course do 
    {title:  @object.course.title} 
  end

  attributes :sessions
  
end