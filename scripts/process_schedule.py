import csv
import json

def ParseTime(time):
    return "0" + time if len(time) == 4 else time

with open('raw_data.csv', 'r') as csvfile:
    reader = csv.reader(csvfile)
    data = {}
    time_range = ''

    for index, row in enumerate(reader):
        load_shedding_level = index % 9
        if load_shedding_level == 0:
            time_range = ParseTime(row[0]) + " - " + ParseTime(row[1])

        else:
            groups = [int(val) for val in row[1:]]
            for day, group in enumerate(groups):
                if not group in data:
                    data[group] = {i: {} for i in range(1, 9)}

                if not str(day+1) in data[group][load_shedding_level]:
                    data[group][load_shedding_level][str(day+1)] = []

                data[group][load_shedding_level][str(day+1)].append(time_range)

    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)
