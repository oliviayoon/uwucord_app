# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
ServerUser.destroy_all

u1 = User.create(username: "demo-chan", email: "demo@uwu.com", password: "passwod")
u2 = User.create(username: "pwesident wagyu", email: "ryan@aa.io", password: "password")
u3 = User.create(username: "eggie mcmuffie", email: "vic@uwu.com", password: "password")
u4 = User.create(username: "nerdlover", email: "oli@uwu.com", password: "password")
u5 = User.create(username: "sailboi", email: "jon@uwu.com", password: "password")
u6 = User.create(username: "nwate mwendes", email: "nate@uwu.com", password: "password")

s1 = Server.create(name: "wyan dweams of suwushi", private: false, owner_id: u2.id)
ServerUser.create(server_id: s1.id, user_id: u2.id)
s2 = Server.create(name: "memes and dweams", private: false, owner_id: u3.id)
ServerUser.create(server_id: s2.id, user_id: u3.id)
s3 = Server.create(name: "boats and sails", private: false, owner_id: u4.id)
ServerUser.create(server_id: s3.id, user_id: u4.id)
s4 = Server.create(name: "animes & weeabaes", private: false, owner_id: u5.id)
ServerUser.create(server_id: s4.id, user_id: u5.id)

su1 = ServerUser.create(server_id: s1.id, user_id: u3.id)
su2 = ServerUser.create(server_id: s1.id, user_id: u4.id)
su3 = ServerUser.create(server_id: s1.id, user_id: u5.id)
su3 = ServerUser.create(server_id: s1.id, user_id: u6.id)

su4 = ServerUser.create(server_id: s2.id, user_id: u1.id)
su5 = ServerUser.create(server_id: s2.id, user_id: u2.id)
su6 = ServerUser.create(server_id: s2.id, user_id: u4.id)

su7 = ServerUser.create(server_id: s4.id, user_id: u4.id)
su8 = ServerUser.create(server_id: s4.id, user_id: u2.id)
su9 = ServerUser.create(server_id: s4.id, user_id: u3.id)
