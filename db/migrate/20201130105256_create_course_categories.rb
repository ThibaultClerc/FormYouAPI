class CreateCourseCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :course_categories do |t|
      t.belongs_to :course, foreign_key: true
      t.belongs_to :category, foreign_key: true
      t.timestamps
    end
  end
end
