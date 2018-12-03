import csv
import json

with open('raw_data.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    data = {i: {} for i in range(1, 9)}
    current_start_time = ''

    for index, row in enumerate(reader):
        load_shedding_level = index % 9
        if load_shedding_level == 0:
            current_start_time = row[0]

        else:
            days = [int(val) for val in row[1:]]
            for i, val in enumerate(days):
                if not (val in data[load_shedding_level]):
                    data[load_shedding_level][val] = {}
                
                if not (str(i+1) in data[load_shedding_level][val]):
                    data[load_shedding_level][val][str(i+1)] = []

                data[load_shedding_level][val][str(i+1)].append(current_start_time)

    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)
