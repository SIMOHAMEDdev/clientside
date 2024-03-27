import pandas

data = pandas.read_csv("questions.csv")
data_dicts = data.to_dict(orient="records")

numbers_data = pandas.read_csv("numbers.csv")
numbers_dicts = numbers_data.to_dict(orient="records")

print(numbers_dicts)