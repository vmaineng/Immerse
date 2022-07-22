# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Location name.."
l1 = Location.create(name: "Bahamas")
l2 = Location.create(name: "Bali")
l3 = Location.create(name: "California")
l4 = Location.create(name: "Wisconsin")

puts "Category name..."
c1 = Category.create(name: "Beach")
c2 = Category.create(name: "Camping")
c3 = Category.create(name: "Cruise")
c4 = Category.create(name: "Relax")


puts "Experience details.."
e1 = Experience.create(name: "Relax and Rest in Ubud", description: "Take a moment to relax and restore in this beautiful scenery", price: 50, category_id: c4.id, location_id: l2.id)
e2 = Experience.create(name: "Cruise the Carribean Islands", description: "Get enchanted by the beautiful islands. Book today!", price: 50, category_id: c3.id, location_id: l1.id)
e3 = Experience.create(name: "Camp outdoors in the midwest", description: "Roast some delicious smores and discuss nstories amongst each other here", price: 50, category_id: c2.id, location_id: l4.id)
e4 = Experience.create(name: "Glass Beach", description: "Check out Glass Beach in northern California", price: 50, category_id: c1.id, location_id: l3.id)

#need to insert back dates

puts "done seeding"