class CreateCourseTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :course_teachers do |t|
      t.belongs_to :course, foreign_key: true
      t.belongs_to :teacher, index: true
      t.timestamps
    end
  end
end
