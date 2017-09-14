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
salinger.preview_url = "https://upload.wikimedia.org/wikipedia/en/8/8c/JD_Salinger.jpg"
salinger.save

catcher = Book.new
catcher.title = "Catcher in the Rye"
catcher.author_id = salinger.id
catcher.preview_url = "https://upload.wikimedia.org/wikipedia/en/3/32/Rye_catcher.jpg"
catcher.save

klosterman = Author.new
klosterman.name = "Chuck Klosterman"
klosterman.preview_url = "https://glidemagazine.com/wp-content/uploads/legacy/chuck_klosterman.jpg"
klosterman.save

killing = Book.new
killing.title = "Killing Yourself to Live"
killing.author_id = klosterman.id
killing.preview_url = "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Killijgasdhgsd.jpg/220px-Killijgasdhgsd.jpg"
killing.save

eugenides = Author.new
eugenides.name = "Jefferey Eugenides"
eugenides.preview_url = "https://www.famousbirthdays.com/faces/eugenides-jeffrey-image.jpg"
eugenides.save

middlesex = Book.new
middlesex.title = "Middlesex"
middlesex.author_id = eugenides.id
middlesex.preview_url = "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7475/9780747561620.jpg"
middlesex.save

fitzgerald = Author.new
fitzgerald.name = "F. Scott Fitzgerald"
fitzgerald.preview_url = "https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg"
fitzgerald.save

gatsby = Book.new
gatsby.title = "The Great Gatsby"
gatsby.author_id = fitzgerald.id
gatsby.preview_url = "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg"
gatsby.save


wecker = Author.new
wecker.name = "Helene Wecker"
wecker.preview_url = "https://s3.amazonaws.com/fanlit/images/2013/09/HeleneWecker.jpg"
wecker.save

golem = Book.new
golem.title = "The Golem and the Jinni"
golem.author_id = wecker.id
golem.preview_url = "https://images-na.ssl-images-amazon.com/images/I/51-OHKGrrtL._SX330_BO1,204,203,200_.jpg"
golem.save 


toole = Author.new
toole.name = "John Kennedy Toole"
toole.preview_url = "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/John_Kennedy_Toole.jpg/220px-John_Kennedy_Toole.jpg"
toole.save

confederacy = Book.new
confederacy.title = "A Confederacy of Dunces"
confederacy.author_id = toole.id
confederacy.preview_url = "https://images-na.ssl-images-amazon.com/images/I/51zP2kOP%2BCL._SX313_BO1,204,203,200_.jpg"
confederacy.save

gibson = Author.new
gibson.name = "William Gibson"
gibson.preview_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/William_Ford_Gibson.jpg/220px-William_Ford_Gibson.jpg"
gibson.save

neuromancer = Book.new
neuromancer.title = "Neuromancer"
neuromancer.author_id = gibson.id
neuromancer.preview_url = "https://upload.wikimedia.org/wikipedia/en/4/4b/Neuromancer_%28Book%29.jpg"
neuromancer.save

castaneda = Author.new
castaneda.name = "Carlos Castaneda"
castaneda.preview_url = "https://upload.wikimedia.org/wikipedia/en/3/32/Cc1962.JPG"
castaneda.save

teachings = Book.new
teachings.title = "The Teachings of Don Juan"
teachings.author_id = castaneda.id
teachings.preview_url = "https://images.gr-assets.com/books/1388266931l/78250.jpg"
teachings.save


coelho = Author.new
coelho.name = "Paulo Coelho"
coelho.preview_url = "https://pbs.twimg.com/profile_images/791423363797377024/svEXr6X8.jpg"
coelho.save

alchemist = Book.new
alchemist.title = "The Alchemist"
alchemist.author_id = coelho.id
alchemist.preview_url = "https://www.parhlo.com/wp-content/uploads/2016/08/01-20.jpg"
alchemist.save






