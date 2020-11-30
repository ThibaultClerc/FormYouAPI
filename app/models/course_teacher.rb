class CourseTeacher < ApplicationRecord
  belongs_to :teacher, class_name: "User"
  belongs_to :course
  has_many :sessions
end
