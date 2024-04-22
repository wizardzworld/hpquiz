const questions = [

    {
        question: "What is the name of Harry Potter's pet owl?",
        options: ["Scabbers", "Hedwig", "Crookshanks", "Fang"],
        answer: "Hedwig"
    },
    {
        question: "What is the name of the train station where students catch the Hogwarts Express?",
        options: ["Paddington Station", "King's Cross Station", "Victoria Station", "Waterloo Station"],
        answer: "King's Cross Station"
    },
    {
        question: "Who is the headmaster of Hogwarts School of Witchcraft and Wizardry in the first book/movie?",
        options: ["Professor Snape", "Professor McGonagall", "Professor Dumbledore", "Professor Sprout"],
        answer: "Professor Dumbledore"
    },
    {
        question: "What is the name of Hermione Granger's cat?",
        options: ["Mrs. Norris", "Fang", "Crookshanks", "Norbert"],
        answer: "Crookshanks"
    },
    {
        question: "Which house does Harry Potter belong to at Hogwarts?",
        options: ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"],
        answer: "Gryffindor"
    },
    {
        question: "What is the name of the Weasley family's flying car?",
        options: ["Knight Bus", "Ford Anglia", "Thestral", "Hogwarts Express"],
        answer: "Ford Anglia"
    },
    {
        question: "Who is known as the Half-Blood Prince?",
        options: ["Albus Dumbledore", "Sirius Black", "Severus Snape", "Tom Riddle"],
        answer: "Severus Snape"
    },
    {
        question: "What is the name of Harry's father?",
        options: ["Remus Lupin", "Sirius Black", "Peter Pettigrew", "James Potter"],
        answer: "James Potter"
    },
    {
        question: "What is the name of the magical object that shows the location of its owner?",
        options: ["Time Turner", "Pensieve", "Invisibility Cloak", "Marauder's Map"],
        answer: "Marauder's Map"
    },
    {
        question: "Who teaches Defense Against the Dark Arts in Harry's second year at Hogwarts?",
        options: ["Professor Snape", "Professor Quirrell", "Professor Lupin", "Professor Lockhart"],
        answer: "Professor Lockhart"
    },
    {
        question: "What is the name of Harry's broomstick?",
        options: ["Nimbus 2000", "Firebolt", "Comet 260", "Thunderbolt VII"],
        answer: "Nimbus 2000"
    },
    {
        question: "What is the name of the three-headed dog guarding the Philosopher's Stone?",
        options: ["Fang", "Fluffy", "Norbert", "Aragog"],
        answer: "Fluffy"
    },
    {
        question: "What creature does Professor Lupin turn into?",
        options: ["Boggart", "Vampire", "Werewolf", "Hippogriff"],
        answer: "Werewolf"
    },
    {
        question: "What does the acronym O.W.L. stand for?",
        options: ["Outstanding Wizard Learning", "Ordinary Wizarding Level", "Official Wizard License", "Overwhelming Wizard Lore"],
        answer: "Ordinary Wizarding Level"
    },
    {
        question: "What is the name of the wizarding prison guarded by Dementors?",
        options: ["Nurmengard", "Gringotts", "Hogwarts", "Azkaban"],
        answer: "Azkaban"
    },
    {
        question: "Who is the founder of Gryffindor House?",
        options: ["Salazar Slytherin", "Rowena Ravenclaw", "Godric Gryffindor", "Helga Hufflepuff"],
        answer: "Godric Gryffindor"
    },
    {
        question: "What is the core of Harry's wand?",
        options: ["Dragon Heartstring", "Phoenix Feather", "Unicorn Hair", "Veela Hair"],
        answer: "Phoenix Feather"
    },
    {
        question: "Who is Harry's godfather?",
        options: ["Remus Lupin", "Sirius Black", "Albus Dumbledore", "Rubeus Hagrid"],
        answer: "Sirius Black"
    },
    {
        question: "What is the name of Hagrid's pet dragon?",
        options: ["Norbert", "Smaug", "Toothless", "Falkor"],
        answer: "Norbert"
    },
    {
        question: "What is the name of the house-elf who serves the Malfoy family?",
        options: ["Winky", "Dobby", "Kreacher", "Hokey"],
        answer: "Dobby"
    },
    {
        question: "What is the name of the mermaid village near Hogwarts?",
        options: ["Black Lake", "Lake Mirkwood", "Merpeople's Cove", "Siren's Cove"],
        answer: "Black Lake"
    },
    {
        question: "What type of creature is Buckbeak?",
        options: ["Hippogriff", "Thestral", "Phoenix", "Griffin"],
        answer: "Hippogriff"
    },
    {
        question: "What is the name of the village where Harry's parents lived?",
        options: ["Hogsmeade", "Diagon Alley", "Little Whinging", "Godric's Hollow"],
        answer: "Godric's Hollow"
    },
    {
        question: "What is the name of the tournament held in Harry's fourth year at Hogwarts?",
        options: ["Quidditch World Cup", "Wizarding Games", "Triwizard Tournament", "Magical Olympics"],
        answer: "Triwizard Tournament"
    },
    {
        question: "What magical object allows communication between members of the Order of the Phoenix?",
        options: ["Two-way mirror", "Deluminator", "Extendable Ears", "Portkey"],
        answer: "Extendable Ears"
    },
    {
        question: "What is the name of the ghost who haunts the girls' bathroom at Hogwarts?",
        options: ["The Bloody Baron", "The Grey Lady", "Moaning Myrtle", "Nearly Headless Nick"],
        answer: "Moaning Myrtle"
    },
    {
        question: "What is the name of the Weasley twins' joke shop?",
        options: ["Zonko's Joke Shop", "Weasley Wizard Wheezes", "Fred and George's Pranks Emporium", "Whimsical Wizardry"],
        answer: "Weasley Wizard Wheezes"
    },
    {
        question: "What magical device is used to erase memories?",
        options: ["Memory Charm", "Pensieve", "Obliviate", "Forgetfulness Potion"],
        answer: "Obliviate"
    },
    {
        question: "What is the name of the giant spider that lives in the Forbidden Forest?",
        options: ["Aragog", "Norbert", "Fang", "Fluffy"],
        answer: "Aragog"
    },
    {
        question: "Who is the Potions Master at Hogwarts during Harry's first year?",
        options: ["Horace Slughorn", "Severus Snape", "Gilderoy Lockhart", "Quirinus Quirrell"],
        answer: "Severus Snape"
    },
    {
        question: "What is the name of the magical device used to travel through time?",
        options: ["Time-Turner", "Apparition", "Portkey", "Floo Powder"],
        answer: "Time-Turner"
    },
    {
        question: "What is the name of the street where the Leaky Cauldron is located?",
        options: ["Diagon Alley", "Knockturn Alley", "Grimmauld Place", "Privet Drive"],
        answer: "Diagon Alley"
    },
    {
        question: "What is the name of the giant serpent that resides in the Chamber of Secrets?",
        options: ["Nagini", "Aragog", "Basilisk", "Norberta"],
        answer: "Basilisk"
    },
    {
        question: "What type of dragon did Harry face in the Triwizard Tournament's first task?",
        options: ["Hungarian Horntail", "Swedish Short-Snout", "Chinese Fireball", "Common Welsh Green"],
        answer: "Hungarian Horntail"
    },
    {
        question: "What is the name of the pub in Hogsmeade frequented by Hogwarts students?",
        options: ["The Hog's Head", "The Leaky Cauldron", "The Three Broomsticks", "The Hogsmeade Inn"],
        answer: "The Three Broomsticks"
    },
    {
        question: "What magical object allows communication between members of the DA (Dumbledore's Army)?",
        options: ["Extendable Ears", "Two-way Mirror", "Galleon Coin", "DA Coin"],
        answer: "Galleon Coin"
    },
    {
        question: "What type of creature is Dobby?",
        options: ["House-elf", "Goblin", "Giant", "Pixie"],
        answer: "House-elf"
    },
    {
        question: "What is the name of the pub in London that serves as the entrance to Diagon Alley?",
        options: ["The Cauldron Inn", "The Leaky Cauldron", "The Three Broomsticks", "The Hopping Pot"],
        answer: "The Leaky Cauldron"
    },
    {
        question: "What is the name of the spell used to conjure a Patronus?",
        options: ["Alohomora", "Accio", "Lumos", "Expecto Patronum"],
        answer: "Expecto Patronum"
    },
    {
        question: "What is the name of Ron Weasley's pet rat?",
        options: ["Scabbers", "Wormtail", "Crookshanks", "Pigwidgeon"],
        answer: "Scabbers"
    },
    {
        question: "What is the name of the wizarding bank in Diagon Alley?",
        options: ["Goblin's Gold", "Merlin's Vault", "Gringotts", "Wizarding Wealth"],
        answer: "Gringotts"
    },
    {
        question: "What position does Harry play on the Gryffindor Quidditch team?",
        options: ["Chaser", "Seeker", "Keeper", "Beater"],
        answer: "Seeker"
    },
    {
        question: "What type of creature is Buckbeak?",
        options: ["Thestral", "Griffin", "Phoenix", "Hippogriff"],
        answer: "Hippogriff"
    },
    {
        question: "What is the name of the magical plant that cries like a baby when it's about to be uprooted?",
        options: ["Mandrake", "Dirigible Plum", "Whomping Willow", "Devil's Snare"],
        answer: "Mandrake"
    },
    {
        question: "What is the name of the ghost who is the Gryffindor House's resident ghost?",
        options: ["The Fat Friar", "Moaning Myrtle", "The Grey Lady", "Nearly Headless Nick"],
        answer: "Nearly Headless Nick"
    },
    {
        question: "What is the name of the device that records and plays memories?",
        options: ["Rememberall", "Pensieve", "Deluminator", "Time-Turner"],
        answer: "Pensieve"
    },
    {
        question: "What does S.P.E.W. stand for?",
        options: ["Society for the Protection of Elfish Welfare", "Society for the Promotion of Elfish Welfare", "Society of Potions and Elf Work", "Society of Protective Elf Warriors"],
        answer: "Society for the Promotion of Elfish Welfare"
    },
    {
        question: "What is the name of the magical creature that resembles a horse with a single horn on its forehead?",
        options: ["Thestral", "Griffin", "Hippogriff", "Unicorn"],
        answer: "Unicorn"
    },
    {
        question: "What is the name of the spell used to disarm an opponent?",
        options: ["Expelliarmus", "Stupefy", "Alohomora", "Imperio"],
        answer: "Expelliarmus"
    },
    {
        question: "What is the name of the dark magical prison guarded by Dementors?",
        options: ["Nurmengard", "Gringotts", "Azkaban", "Hogwarts"],
        answer: "Azkaban"
    },
    {
        question: "What is the name of the wizarding school located in France?",
        options: ["Beauxbatons Academy of Magic", "Durmstrang Institute", "Ilvermorny School of Witchcraft and Wizardry", "Castelobruxo"],
        answer: "Beauxbatons Academy of Magic"
    },
    {
        question: "What is the name of the house-elf who served the Malfoy family?",
        options: ["Winky", "Kreacher", "Dobby", "Hokey"],
        answer: "Dobby"
    },
    {
        question: "What is the name of the spell used to create light at the tip of the wand?",
        options: ["Lumos", "Nox", "Alohomora", "Accio"],
        answer: "Lumos"
    },
    {
        question: "What is the name of the broomstick that Hermione Granger uses in the Quidditch World Cup?",
        options: ["Firebolt", "Nimbus 2000", "Cleansweep Eleven", "Comet 260"],
        answer: "Cleansweep Eleven"
    },
    {
        question: "What is the name of the potion that allows a person to transform into someone else?",
        options: ["Felix Felicis", "Veritaserum", "Amortentia", "Polyjuice Potion"],
        answer: "Polyjuice Potion"
    },
    {
        question: "What is the name of the house-elf who serves the Black family?",
        options: ["Dobby", "Kreacher", "Winky", "Hokey"],
        answer: "Kreacher"
    },
    {
        question: "What is the name of the phoenix that belongs to Albus Dumbledore?",
        options: ["Fawkes", "Aragog", "Norbert", "Buckbeak"],
        answer: "Fawkes"
    },
    {
        question: "What is the name of the plant that resembles a cactus and can be used in potion-making?",
        options: ["Mandrake", "Dirigible Plum", "Devil's Snare", "Squill Bulb"],
        answer: "Dirigible Plum"
    },
    {
        question: "What is the name of the spell used to unlock doors?",
        options: ["Alohomora", "Expelliarmus", "Expecto Patronum", "Accio"],
        answer: "Alohomora"
    },
    {
        question: "What is the name of the spell used to summon objects to the caster?",
        options: ["Accio", "Lumos", "Expelliarmus", "Stupefy"],
        answer: "Accio"
    },
    {
        question: "What is the name of the magical creature that can turn invisible and is visible only to those who have witnessed death?",
        options: ["Hippogriff", "Basilisk", "Thestral", "Grindylow"],
        answer: "Thestral"
    },
    {
        question: "What is the name of the magical creature that is a hybrid of a lion and an eagle?",
        options: ["Hippogriff", "Thestral", "Griffin", "Phoenix"],
        answer: "Griffin"
    },
    {
        question: "What is the name of the ghost who is the Ravenclaw House's resident ghost?",
        options: ["Nearly Headless Nick", "The Grey Lady", "Moaning Myrtle", "The Fat Friar"],
        answer: "The Grey Lady"
    },
    {
        question: "What is the name of the object used to store and view memories?",
        options: ["Pensieve", "Mirror of Erised", "Time-Turner", "Deluminator"],
        answer: "Pensieve"
    },
    {
        question: "What is the name of the dark wizard who killed Harry Potter's parents?",
        options: ["Grindelwald", "Bellatrix Lestrange", "Voldemort", "Lucius Malfoy"],
        answer: "Voldemort"
    },
    {
        question: "What is the name of the magical plant that screams when touched?",
        options: ["Mimbulus Mimbletonia", "Whomping Willow", "Mandrake", "Devil's Snare"],
        answer: "Mimbulus Mimbletonia"
    },
    {
        question: "What is the name of the spell used to create a protective shield around the caster?",
        options: ["Expelliarmus", "Stupefy", "Crucio", "Protego"],
        answer: "Protego"
    },
    {
        question: "What is the name of the village where the Weasley family lives?",
        options: ["Ottery St. Catchpole", "Little Hangleton", "Godric's Hollow", "Tinworth"],
        answer: "Ottery St. Catchpole"
    },
    {
        question: "What is the name of the ghost who is the Slytherin House's resident ghost?",
        options: ["The Bloody Baron", "Nearly Headless Nick", "Moaning Myrtle", "The Grey Lady"],
        answer: "The Bloody Baron"
    },
    {
        question: "What is the name of the tournament held between Hogwarts, Beauxbatons, and Durmstrang?",
        options: ["Quidditch World Cup", "Triwizard Tournament", "Wizarding Cup", "Goblet of Fire"],
        answer: "Triwizard Tournament"
    },
    {
        question: "What is the name of the magical creature that guards Gringotts bank?",
        options: ["Dragon", "Basilisk", "Hippogriff", "Acromantula"],
        answer: "Dragon"
    },
    {
        question: "What is the name of the spell used to disarm an opponent?",
        options: ["Stupefy", "Avada Kedavra", "Imperio", "Expelliarmus"],
        answer: "Expelliarmus"
    },
    {
        question: "What is the name of the ghost who is the Hufflepuff House's resident ghost?",
        options: ["Nearly Headless Nick", "The Fat Friar", "Moaning Myrtle", "The Grey Lady"],
        answer: "The Fat Friar"
    },
    {
        question: "What is the name of the magical creature that resembles a large, snake-like fish?",
        options: ["Mermaid", "Kelpie", "Grindylow", "Niffler"],
        answer: "Grindylow"
    },
    {
        question: "What is the name of the spell used to summon a particular memory?",
        options: ["Expecto Patronum", "Obliviate", "Legilimens", "Riddikulus"],
        answer: "Legilimens"
    },
    {
        question: "What is the name of the village near Hogwarts where students can visit on certain weekends?",
        options: ["Hogsmeade", "Godric's Hollow", "Diagon Alley", "Ottery St. Catchpole"],
        answer: "Hogsmeade"
    },
    {
        question: "What is the name of the charm used to repair broken objects?",
        options: ["Reparo", "Accio", "Lumos", "Diffindo"],
        answer: "Reparo"
    },
    {
        question: "What is the name of the potion that allows the drinker to see the thoughts and memories of others?",
        options: ["Veritaserum", "Amortentia", "Felix Felicis", "Polyjuice Potion"],
        answer: "Veritaserum"
    },
    {
        question: "What is the name of the magical object that reveals hidden messages written with invisible ink?",
        options: ["Decoy Detonator", "Sneakoscope", "Revealer", "Remembrall"],
        answer: "Revealer"
    },
    {
        question: "What is the name of the spell used to summon fire?",
        options: ["Alohomora", "Incendio", "Expecto Patronum", "Wingardium Leviosa"],
        answer: "Incendio"
    },
    {
        question: "What is the name of the spell used to detect the presence of dark magic?",
        options: ["Lumos", "Priori Incantatem", "Riddikulus", "Prior Incantato"],
        answer: "Prior Incantato"
    },
    {
        question: "What is the name of the spell used to conceal a memory in an object?",
        options: ["Memory Charm", "Obliviate", "Confundus Charm", "Taboo"],
        answer: "Memory Charm"
    },
    {
        question: "What is the name of the spell used to bind an opponent's body?",
        options: ["Expelliarmus", "Incarcerous", "Stupefy", "Crucio"],
        answer: "Incarcerous"
    },
    {
        question: "What is the name of the dark wizard who was defeated by Dumbledore in 1945?",
        options: ["Grindelwald", "Voldemort", "Bellatrix Lestrange", "Lucius Malfoy"],
        answer: "Grindelwald"
    },
    {
        question: "What is the name of the spell used to create a blinding flash of light?",
        options: ["Lumos", "Nox", "Expecto Patronum", "Dazzling Lumos"],
        answer: "Dazzling Lumos"
    },
    {
        question: "What is the name of the magical creature that is a hybrid of a horse and a bird?",
        options: ["Hippogriff", "Thestral", "Griffin", "Phoenix"],
        answer: "Hippogriff"
    },
    {
        question: "What is the name of the spell used to vanish objects?",
        options: ["Expelliarmus", "Accio", "Evanesco", "Locomotor"],
        answer: "Evanesco"
    },
    {
        question: "What is the name of the spell used to levitate objects?",
        options: ["Wingardium Leviosa", "Alohomora", "Lumos", "Reparo"],
        answer: "Wingardium Leviosa"
    },
    {
        question: "What is the name of the spell used to immobilize an opponent?",
        options: ["Stupefy", "Expelliarmus", "Petrificus Totalus", "Crucio"],
        answer: "Petrificus Totalus"
    },
    {
        question: "What is the name of the magical plant that has tentacle-like vines and restrains its victims?",
        options: ["Devil's Snare", "Mandrake", "Whomping Willow", "Venomous Tentacula"],
        answer: "Devil's Snare"
    },
    {
        question: "What is the name of the wizarding newspaper in the Harry Potter series?",
        options: ["The Quibbler", "The Daily Prophet", "The Witching Hour", "The Daily Wizard"],
        answer: "The Daily Prophet"
    },
    {
        question: "What is the name of the magical device used to store and listen to memories?",
        options: ["Thought Keeper", "Memory Vault", "Pensieve", "Recall Stone"],
        answer: "Pensieve"
    },
    {
        question: "What is the name of the ghost who haunts the Ravenclaw common room?",
        options: ["Moaning Myrtle", "The Bloody Baron", "The Grey Lady", "The Fat Friar"],
        answer: "The Grey Lady"
    },
    {
        question: "What is the name of the magical object that can reveal hidden passages?",
        options: ["Invisibility Cloak", "Sneakoscope", "Marauder's Map", "Foe-Glass"],
        answer: "Marauder's Map"
    },
    {
        question: "What is the name of the magical plant that allows one to breathe underwater for an hour?",
        options: ["Bubblefruit", "Gillyweed", "Aquafern", "Mermistle"],
        answer: "Gillyweed"
    },
    {
        question: "What is the name of the Weasley family's clock that shows the location of each family member?",
        options: ["Muggle-Watch", "Family Tracker", "Clock of Destiny", "Weasley Clock"],
        answer: "Weasley Clock"
    },
    {
        question: "What is the name of the spell used to create light?",
        options: ["Expecto Patronum", "Lumos", "Nox", "Incendio"],
        answer: "Lumos"
    },
    {
        question: "What is the name of the spell used to repel a Dementor?",
        options: ["Stupefy", "Expelliarmus", "Riddikulus", "Expecto Patronum"],
        answer: "Expecto Patronum"
    },
    {
        question: "What is the name of the magical creature that serves as the emblem of Slytherin House?",
        options: ["Dragon", "Sphinx", "Serpent", "Basilisk"],
        answer: "Serpent"
    },
    {
        question: "What is the name of the spell used to summon a Patronus?",
        options: ["Patronus Summonus", "Accio Patronus", "Expecto Patronum", "Patronum Leviosa"],
        answer: "Expecto Patronum"
    },
    {
        question: "What is the name of the ghost who haunts the girls' bathroom on the second floor?",
        options: ["The Bloody Baron", "Moaning Myrtle", "The Fat Friar", "The Grey Lady"],
        answer: "Moaning Myrtle"
    },
    {
        question: "What is the name of the magical object that allows one to transform into another person?",
        options: ["Metamorphmagus Elixir", "Animagus Brew", "Transfiguration Tonic", "Polyjuice Potion"],
        answer: "Polyjuice Potion"
    },
    {
        question: "What is the name of the charm used to conceal a secret?",
        options: ["Concealment Charm", "Invisibility Spell", "Secretus Spell", "Fidelius Charm"],
        answer: "Fidelius Charm"
    },
    {
        question: "What is the name of the magical object used to create and enter memories?",
        options: ["Thought Pool", "Memory Basin", "Recollection Well", "Pensieve"],
        answer: "Pensieve"
    },
    {
        question: "What is the name of the magical creature that is a horse with a single horn on its forehead?",
        options: ["Pegasus", "Hippogriff", "Unicorn", "Thestral"],
        answer: "Unicorn"
    },
    {
        question: "What is the name of the spell used to produce a jet of water from the caster's wand?",
        options: ["Aquamaxima", "Aquafontis", "Aquasplash", "Aguamenti"],
        answer: "Aguamenti"
    },
    {
        question: "What is the name of the spell used to disarm an opponent?",
        options: ["Petrificus Totalus", "Stupefy", "Expelliarmus", "Imperio"],
        answer: "Expelliarmus"
    },
    {
        question: "What is the name of the creature that guards the entrance to the Gryffindor common room?",
        options: ["The Bloody Baron", "Grey Lady", "Sir Cadogan", "Fat Lady"],
        answer: "Fat Lady"
    },
    {
        question: "What is the name of the spell used to mend broken objects?",
        options: ["Restorium", "Mendus", "Reparo", "Fixit Spell"],
        answer: "Reparo"
    },
    {
        question: "What is the name of the spell used to unlock doors?",
        options: ["Unlockus", "Colloportus", "Alohomora", "Open Sesame"],
        answer: "Alohomora"
    },
    {
        question: "What is the name of the spell used to summon objects to the caster?",
        options: ["Fetchius", "Accio", "Bringit", "Summonus"],
        answer: "Accio"
    },
    {
        question: "What is the name of the magical plant that screams when disturbed?",
        options: ["Yelling Ivy", "Howling Thorn", "Screaming Willow", "Mandrake"],
        answer: "Mandrake"
    },
    {
        question: "What is the name of the magical object used to see the innermost desires of the viewer?",
        options: ["Wish Reflection", "Desire Glass", "Dream Mirror", "Mirror of Erised"],
        answer: "Mirror of Erised"
    },
    {
        question: "What is the name of the spell used to repel Boggarts?",
        options: ["Boggart Banish", "Frightaway", "Riddikulus", "Scareaway"],
        answer: "Riddikulus"
    },
    {
        question: "What is the name of the magical object used to detect the presence of Dark Arts?",
        options: ["Dark Arts Finder", "Darkness Gauge", "Darkness Sensor", "Dark Detector"],
        answer: "Dark Detector"
    },
    {
        question: "What is the name of the ghost who is the Hufflepuff House's resident ghost?",
        options: ["Moaning Myrtle", "The Grey Lady", "The Fat Friar", "The Bloody Baron"],
        answer: "The Fat Friar"
    },
    {
        question: "What is the name of the spell used to put out fires?",
        options: ["Aquafy", "Waterus Extinguishus", "Aguamenti", "Incendio"],
        answer: "Aguamenti"
    },
    {
        question: "What is the name of the spell used to mend bones?",
        options: ["Bonerestore", "Fracturefix", "Osteo-Reparo", "Boneheal"],
        answer: "Osteo-Reparo"
    },
    {
        question: "What is the name of the magical plant that strangles its victims?",
        options: ["Chokevine", "Suffocating Ivy", "Strangleweed", "Devil's Snare"],
        answer: "Devil's Snare"
    },
    {
        question: "What is the name of the spell used to make objects fly?",
        options: ["Expelliarmus", "Lumos", "Wingardium Leviosa", "Alohomora"],
        answer: "Wingardium Leviosa"
    },
    {
        question: "What is the name of Harry Potter's best friend?",
        options: ["Neville Longbottom", "Draco Malfoy", "Ron Weasley", "Hermione Granger"],
        answer: "Ron Weasley"
    },
    {
        question: "Who is the author of 'Fantastic Beasts and Where to Find Them'?",
        options: ["Albus Dumbledore", "Gilderoy Lockhart", "Newt Scamander", "Rubeus Hagrid"],
        answer: "Newt Scamander"
    },
    {
        question: "What is the name of Harry Potter's father?",
        options: ["Remus Lupin", "Severus Snape", "James Potter", "Sirius Black"],
        answer: "James Potter"
    },
    {
        question: "What is the name of the wizard who is famous for defeating the dark wizard Grindelwald?",
        options: ["Gellert Grindelwald", "Tom Riddle", "Sirius Black", "Albus Dumbledore"],
        answer: "Albus Dumbledore"
    },
    {
        question: "What is the name of Hagrid's giant half-brother?",
        options: ["Buckbeak", "Grawp", "Norbert", "Aragog"],
        answer: "Grawp"
    },
    {
        question: "What is the name of the protective charm placed on Harry when he was a baby?",
        options: ["Expelliarmus", "Fidelius Charm", "Avada Kedavra", "Alohomora"],
        answer: "Fidelius Charm"
    },
    {
        question: "What is the name of the Weasley family's owl?",
        options: ["Hedwig", "Pigwidgeon", "Scabbers", "Errol"],
        answer: "Errol"
    },
    {
        question: "What is the name of the magical creature that can turn into anyone's worst fear?",
        options: ["Dementor", "Acromantula", "Thestral", "Boggart"],
        answer: "Boggart"
    },
    {
        question: "What is the name of the Defense Against the Dark Arts teacher in Harry's second year at Hogwarts?",
        options: ["Severus Snape", "Remus Lupin", "Gilderoy Lockhart", "Quirinus Quirrell"],
        answer: "Gilderoy Lockhart"
    },
    {
        question: "What is the name of the house-elf who is loyal to the Malfoy family?",
        options: ["Dobby", "Kreacher", "Winky", "Hokey"],
        answer: "Dobby"
    },
    {
        question: "What is the name of the founder of Slytherin House?",
        options: ["Rowena Ravenclaw", "Godric Gryffindor", "Helga Hufflepuff", "Salazar Slytherin"],
        answer: "Salazar Slytherin"
    },
    {
        question: "What is the name of the Quidditch team Harry plays for at Hogwarts?",
        options: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        answer: "Gryffindor"
    },
    {
        question: "What is the name of Harry Potter's owl?",
        options: ["Hedwig", "Errol", "Pigwidgeon", "Scabbers"],
        answer: "Hedwig"
    },
    {
        question: "What is the name of the dark wizard who killed Harry Potter's parents?",
        options: ["Bellatrix Lestrange", "Lucius Malfoy", "Voldemort", "Grindelwald"],
        answer: "Voldemort"
    },
    {
        question: "What is the name of the ghost who haunts the Hogwarts dungeons?",
        options: ["Moaning Myrtle", "The Bloody Baron", "The Grey Lady", "The Fat Friar"],
        answer: "The Bloody Baron"
    },
    {
        question: "What is the name of the train that transports students to Hogwarts?",
        options: ["Knight Bus", "Hogwarts Express", "Thestral Carriage", "Magic Express"],
        answer: "Hogwarts Express"
    },
    {
        question: "What is the name of Hermione's cat?",
        options: ["Crookshanks", "Mrs. Norris", "Fang", "Arnold"],
        answer: "Crookshanks"
    },
    {
        question: "What is the name of the spell used to produce light?",
        options: ["Nox", "Expelliarmus", "Lumos", "Expecto Patronum"],
        answer: "Lumos"
    },
    {
        question: "What is the name of the gamekeeper at Hogwarts?",
        options: ["Rubeus Hagrid", "Severus Snape", "Remus Lupin", "Sirius Black"],
        answer: "Rubeus Hagrid"
    },
    {
        question: "What is the name of the magical creature that serves as the messenger of Hogwarts?",
        options: ["Thestral", "Hippogriff", "Phoenix", "Flobberworm"],
        answer: "Phoenix"
    },
    {
        question: "What is the name of the sport played on broomsticks in the wizarding world?",
        options: ["Broom Ball", "Broom Racing", "Quidditch", "Flying Soccer"],
        answer: "Quidditch"
    },
    {
        question: "What is the name of the Triwizard Tournament held in 'Harry Potter and the Goblet of Fire'?",
        options: ["Triwizard Championship", "Triwizard Cup", "Triwizard Quest", "Triwizard Tournament"],
        answer: "Triwizard Tournament"
    },
    {
        question: "What is the name of the pub in Hogsmeade frequented by Hogwarts students?",
        options: ["The Leaky Cauldron", "The Three Broomsticks", "The Hog's Head", "The Phoenix Feather"],
        answer: "The Three Broomsticks"
    },
    {
        question: "What is the name of the spell used to bind the target's legs together?",
        options: ["Leg-Locker Curse", "Stinging Hex", "Tickling Charm", "Full Body-Bind"],
        answer: "Leg-Locker Curse"
    },
    {
        question: "What is the name of the giant spider living in the Forbidden Forest?",
        options: ["Norbert", "Aragog", "Buckbeak", "Fluffy"],
        answer: "Aragog"
    },
    {
        question: "What is the name of the potion that allows the drinker to transform into someone else?",
        options: ["Polyjuice Potion", "Felix Felicis", "Veritaserum", "Amortentia"],
        answer: "Polyjuice Potion"
    },
    {
        question: "What is the name of the magical plant that screams when touched?",
        options: ["Mimbulus Mimbletonia", "Screaming Venom", "Screaming Mandrake", "Mandrake"],
        answer: "Mandrake"
    },
    {
        "question": "What was the name of the Black family's house elf who served the family for generations?",
        "options": ["Kreacher", "Winky", "Dobby", "Hokey"],
        "answer": "Kreacher"
    },
    {
        "question": "What spell did Hermione use to fix Harry's glasses in the first book?",
        "options": ["Obliviate", "Episkey", "Revelio", "Reparo"],
        "answer": "Obliviate"
    },
    {
        "question": "In 'Harry Potter and the Goblet of Fire', which team did Ireland play against in the Quidditch World Cup finals?",
        "options": ["England", "Scotland", "Wales", "Bulgaria"],
        "answer": "Bulgaria"
    },
    {
        "question": "What is the name of the centaur who saves Harry in the Forbidden Forest in 'Harry Potter and the Sorcerer's Stone'?",
        "options": ["Magorian", "Ronan", "Firenze", "Bane"],
        "answer": "Firenze"
    },
    {
        "question": "Who was the first known owner of the Invisibility Cloak that eventually came into Harry's possession?",
        "options": ["Antioch Peverell", "Cadmus Peverell", "Ignotus Peverell", "Egbert the Egregious"],
        "answer": "Ignotus Peverell"
    },
    {
        "question": "What was the name of the author of 'The Tales of Beedle the Bard'?",
        "options": ["Bathilda Bagshot", "Albus Dumbledore", "Beedle the Bard", "Hermione Granger"],
        "answer": "Beedle the Bard"
    },
    {
        "question": "In 'Harry Potter and the Order of the Phoenix', what is the name of the spell that Hermione uses to create fake Galleons for communication with Dumbledore's Army?",
        "options": ["Flagrate", "Langlock", "Protean Charm", "Impervius"],
        "answer": "Protean Charm"
    },
    {
        "question": "What is the name of the plant that chews through almost everything in 'Harry Potter and the Chamber of Secrets'?",
        "options": ["Venomous Tentacula", "Whomping Willow", "Devil's Snare", "Mandrake"],
        "answer": "Devil's Snare"
    },
    {
        "question": "In 'Harry Potter and the Half-Blood Prince', who was the original owner of the locket Horcrux that Dumbledore and Harry search for?",
        "options": ["Tom Riddle Sr.", "Marvolo Gaunt", "Salazar Slytherin", "Merope Gaunt"],
        "answer": "Marvolo Gaunt"
    },
    {
        "question": "What was the name of the potion that saved Ron Weasley's life after he was poisoned in 'Harry Potter and the Half-Blood Prince'?",
        "options": ["Amortentia", "Draught of Living Death", "Felix Felicis", "Polyjuice Potion"],
        "answer": "Felix Felicis"
    }

];

export { questions }