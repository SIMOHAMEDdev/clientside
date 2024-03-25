import pandas

data = pandas.read_csv("questions.csv")
data_dicts = data.to_dict(orient="records")

print(data_dicts)
