class CreateCourseSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :course_sessions do |t|

      t.timestamps
    end
  end
end
