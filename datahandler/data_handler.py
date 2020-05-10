import pandas as pd
import json

class Strain:
    def __init__(self, name, type, rating, effects, flavours, description):
        self.name = name
        self.type = type 
        self.rating = rating 
        self.effects = effects 
        self.flavours = flavours 
        self.description = description 
    
    def __str__(self):
        return_str = "{name}\n{type}\n{rating}\n{effects}\n{flavours}\n{description}\n".format(name=self.name, type=self.type, rating=self.rating, effects=self.effects, flavours=self.flavours, description=self.description)
        return return_str
    
    def __repr__(self):
        return_str = "{name}\n{type}\n{rating}\n{effects}\n{flavours}\n{description}\n".format(name=self.name, type=self.type, rating=self.rating, effects=self.effects, flavours=self.flavours, description=self.description)
        return return_str

CSV_FILE_NAME = 'cannabis.csv' 
JSON_FILE_NAME = 'cannabis.json'

strains_read = pd.read_csv(CSV_FILE_NAME)
strain_name = strains_read.Strain.to_list()
strain_type = strains_read.Type.to_list()
strain_rating = strains_read.Rating.to_list()
strain_description = strains_read.Description.to_list()

strain_effects = strains_read.Effects.to_list()
strain_effects = [str(effects).split(",") for effects in strain_effects]

strain_flavour = strains_read.Flavor.to_list()
strain_flavour = [str(flavour).split(",") for flavour in strain_flavour]

number_of_strains = len(strain_name)
strains = []

for i in range(number_of_strains):
    strain = Strain(strain_name[i], strain_type[i], strain_rating[i], strain_effects[i], strain_flavour[i], strain_description[i])
    strains.append(strain)

strains_dict = [ob.__dict__ for ob in strains]
json_string = json.dumps(strains_dict, indent=4)

with open(JSON_FILE_NAME, "w") as outfile: 
    outfile.write(json_string)

