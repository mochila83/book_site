# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
Author.destroy_all

salinger = Author.new
salinger.name = "J.D. Salinger"
salinger.save

catcher = Book.new
catcher.title = "Catcher in the Rye"
catcher.author_id = salinger.id
catcher.save

klosterman = Author.new
klosterman.name = "Chuck Klosterman"
klosterman.save

killing = Book.new
killing.title = "Killing Yourself to Live"
killing.author_id = klosterman.id
killing.save

eugenides = Author.new
eugenides.name = "Jefferey Eugenides"
eugenides.save

middlesex = Book.new
middlesex.title = "Middlesex"
middlesex.author_id = eugenides.id
middlesex.save

fitzgerald = Author.new
fitzgerald.name = "F. Scott Fitzgerald"
fitzgerald.save

gatsby = Book.new
gatsby.title = "The Great Gatsby"
gatsby.author_id = fitzgerald.id
gatsby.save


wecker = Author.new
wecker.name = "Helene Wecker"
wecker.save

golem = Book.new
golem.title = "The Golem and the Jinni"
golem.author_id = wecker.id
golem.save 


toole = Author.new
toole.name = "John Kennedy Toole"
toole.save

confederacy = Book.new
confederacy.title = "A Confederacy of Dunces"
confederacy.author_id = toole.id
confederacy.save

gibson = Author.new
gibson.name = "William Gibson"
gibson.save

neuromancer = Book.new
neuromancer.title = "Neuromancer"
neuromancer.author_id = gibson.id
neuromancer.save

castaneda = Author.new
castaneda.name = "Carlos Castaneda"
castaneda.save

teachings = Book.new
teachings.title = "The Teachings of Don Juan"
teachings.author_id = castaneda.id
teachings.save


coelho = Author.new
coelho.name = "Paulo Coelho"
coelho.save

alchemist = Book.new
alchemist.title = "The Alchemist"
alchemist.author_id = coelho.id
alchemist.save






