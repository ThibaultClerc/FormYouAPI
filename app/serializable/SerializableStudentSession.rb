class SerializableStudentSession < JSONAPI::Serializable::Resource

  type 'student_session'

  attributes :session_id
  
  meta do
    {
      session_date: @object.session.date,
      classroom: @object.session.classroom.title,
      course: @object.session.course_teacher.course.title,
      teacher: @object.session.course_teacher.teacher.last_name 
    }
  end
  
end