class CreateStudentSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :student_sessions do |t|

      t.timestamps
    end
  end
end
