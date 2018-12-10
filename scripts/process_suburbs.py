import csv
import json

with open('raw_suburbs.csv', 'r') as csvfile:
    suburb_data = []
    for index, row in enumerate(csv.reader(csvfile)):
        suburb = {}
        suburb["id"] = index
        suburb["label"] = (row[0]).title()
        suburb["group"] = row[1]
        suburb_data.append(suburb)

    with open('suburb_data.json', 'w') as outfile:
        json.dump(suburb_data, outfile)
