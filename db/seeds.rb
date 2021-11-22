# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'deleting doctors'

Doctor.destroy_all

puts 'creating doctors'

Doctor.create(name:'David',email:'David@gmail.com',phone:'079',image:'https://res.cloudinary.com/erezfriemagor/image/upload/v1635428896/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg')

