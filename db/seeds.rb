require 'faker'
Faker::Config.locale = 'fr'

5.times do |i|
  User.create!(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: 'azerty',
    user_category: 1,
    is_validated: [true, false].sample
  )
  2.times do |j|
    Course.create!(
      title: Faker::Educator.unique.course_name
    )
    CourseTeacher.create!(
      teacher_id: i + 1,
      course_id: j + 1
    )
  end
  
end

puts "#{User.where(user_category: 1).all.count} profs créés"
puts "#{Course.all.count} cours générés"
puts "#{CourseTeacher.all.count} associations profs/cours créés"

50.times do |i|
  User.create!(
    email: Faker::Internet.email,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: 'azerty',
    user_category: 0,
    is_validated: [true, false].sample
  )
end

puts "#{User.where(user_category: 0).all.count} élèves créés"

User.create!(
  email: Faker::Internet.email,
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  password: 'azerty',
  user_category: 2,
  is_validated: true
)

puts "1 admin créé"


categories = ["PHP", "Javascript", "NodeJS", "Ruby", "Ruby on Rails", "MongoDB", "PostgreSQL", "Active Records", "React", "C", "Git", "Github", "C++", "C#", "Python"]
categories.each do |course|
  Category.create!(
    title: course
  )
end

puts "#{Category.all.count} categories créées"

10.times do |i|
  Classroom.create!(
    title: Faker::Creature::Dog.name
  )
end

puts "#{Classroom.all.count} classes créées"

30.times do |i|
  CourseCategory.create!(
    category_id: rand(1..15),
    course_id: rand(1..10)
  )
end

puts "#{CourseCategory.all.count} associations cours/catégories créées"

20.times do |i|
  Session.create!(
    course_teacher_id: rand(1..10),
    classroom_id: rand(1..10),
    date: Faker::Date.between(from: '2020-11-02', to: '2020-12-31')
  )
end

puts "#{Session.all.count} sessions créées"

40.times do |i|
  StudentSession.create!(
    result: rand(0..20),
    student_id: rand(1..10),
    session_id: rand(1..20)
  )
end 

puts "#{StudentSession.all.count} associations élèves/sessions créées"

puts "SEED DONE"
