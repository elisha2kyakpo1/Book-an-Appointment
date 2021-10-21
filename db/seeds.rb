# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Desroying doctors'

Doctor.destroy_all

puts 'creating doctors'

Doctor.create(name:'Dan',email:"Dan@gmail.com",phone:"07932326088",about:'has 30 years experience')
Doctor.create(name:'Jhon',email:"jhon@gmail.com",phone:"07932326085",about:'loves kids and knows a lot about treating viruses')
Doctor.create(name:'Emma',email:"Emma@gmail.com",phone:"07932326082",about:'has 15 years experience,kind and caring')
Doctor.create(name:'Dima',email:"Dima@gmail.com",phone:"07932326083",about:'comes from Russia where he gained 25 years of experience')
Doctor.create(name:'Ben',email:"Ben@gmail.com",phone:"07932326023",about:'recent arrival oxford graduate highly praised by peers')

puts 'Desroying clients'

puts 'creating clients'

Client.destroy_all

Client.create(name:'Daniel',email:'daniel@gmail.com')
Client.create(name:'Melody',email:'melody@gmail.com')
Client.create(name:'Edward',email:'edward@gmail.com')
Client.create(name:'Semfia',email:'Semfia@gmail.com')
Client.create(name:'Jack',email:'Jack@gmail.com')

puts 'Desroying appointments'

Appointment.destroy_all

puts 'creating appointments'

Appointment.create(appointment_date:Date.strptime('20210110122356', '%Y%m%d%H%M%S'),hospital:'Queen Elizabeth',doctor_id:1,client_id:1)
Appointment.create(appointment_date:Date.strptime('20211110122356', '%Y%m%d%H%M%S'),hospital:'Queen Elizabeth',doctor_id:2,client_id:2)
Appointment.create(appointment_date:Date.strptime('20220110122356', '%Y%m%d%H%M%S'),hospital:'Birmingham City Hospital',doctor_id:3,client_id:3)
Appointment.create(appointment_date:Date.strptime('20220110122356', '%Y%m%d%H%M%S'),hospital:'Birmingham City Hospital',doctor_id:4,client_id:5)
Appointment.create(appointment_date:Date.strptime('20220110122356', '%Y%m%d%H%M%S'),hospital:'Birmingham City Hospital',doctor_id:3,client_id:4)










