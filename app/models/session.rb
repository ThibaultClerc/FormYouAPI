class Session < ApplicationRecord
  belongs_to :classroom
  belongs_to :course_teacher
  has_many :student_sessions
end
