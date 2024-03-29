import pandas
import json

numbers_data = pandas.read_csv("numbers.csv")
numbers_dicts = numbers_data.to_dict(orient="records")

moves_data = pandas.read_csv("moves.csv")
moves_dicts = moves_data.to_dict(orient="records")

print(moves_dicts)

with open("numbers.json", "w") as json_file:
    json.dump(numbers_dicts, json_file)