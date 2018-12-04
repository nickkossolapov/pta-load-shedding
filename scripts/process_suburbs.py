import csv
import json

with open('raw_suburbs.csv', 'r') as csvfile:
    data = {}
    for row in csv.reader(csvfile):
        data[(row[0]).title()] = row[1]

    with open('suburb_data.json', 'w') as outfile:
        json.dump(data, outfile)
