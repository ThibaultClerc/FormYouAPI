class Course < ApplicationRecord
  has_many :course_categories
  has_many :categories, through: :course_categories
  has_many :course_teachers
  has_many :teachers, through: :course_teachers
end