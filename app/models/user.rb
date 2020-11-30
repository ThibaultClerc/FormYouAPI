class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  enum user_category: [:student, :teacher, :admin]

  has_many :students, foreign_key: 'student_id', class_name: "StudentSession"
  has_many :teachers, foreign_key: 'teacher_id', class_name: "CourseTeacher"
end
