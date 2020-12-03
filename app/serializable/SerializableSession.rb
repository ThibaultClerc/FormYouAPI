class SerializableSession < JSONAPI::Serializable::Resource

  type 'session'

  meta do
    {
      course: @object.course_teacher.course.title,
      classroom: @object.classroom.title,
      date: @object.date,
      sessions: @object.student_sessions
    }
  end


end