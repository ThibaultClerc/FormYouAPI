class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.belongs_to :course_teacher, foreign_key: true
      t.belongs_to :classroom, foreign_key: true
      t.datetime :date
      t.timestamps
    end
  end
end
