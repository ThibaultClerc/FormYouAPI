class CreateStudentSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :student_sessions do |t|
      t.belongs_to :student, index: true
      t.belongs_to :session, foreign_key: true
      t.integer :result
      t.timestamps
    end
  end
end
