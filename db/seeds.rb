# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all

u1 = User.create(username: "demo-chan", email: "demo@uwu.com", password: "passwod")
u2 = User.create(username: "pwesident wagyu", email: "ryan@aa.io", password: "password")
u3 = User.create(username: "eggie mcmuffie", email: "vic@uwu.com", password: "password")
u4 = User.create(username: "nerdlover", email: "oli@uwu.com", password: "password")
u5 = User.create(username: "sailboi", email: "jon@uwu.com", password: "password")
u5 = User.create(username: "nwate mwendes", email: "nate@uwu.com", password: "password")


s1 = Server.create(name: "wyan dweams of suwushi", private: false, owner_id: u2.id)
s2 = Server.create(name: "memes and dweams", private: false, owner_id: u3.id)
s3 = Server.create(name: "boats and sails", private: false, owner_id: u4.id)
s4 = Server.create(name: "animes & weeabaes", private: false, owner_id: u5.id)
