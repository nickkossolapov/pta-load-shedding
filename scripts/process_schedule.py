import csv
import json

with open('raw_data.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    data = {}
    current_start_time = ''

    for index, row in enumerate(reader):
        split_row_index = index % 9
        if split_row_index == 0:
            current_start_time = row[0]
            data[current_start_time] = {}

        else:
            groups = [int(val) for val in row[1:]]
            data[current_start_time][str(split_row_index)] = groups

    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)
