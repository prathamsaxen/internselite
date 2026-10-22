import pandas as pd
import numpy as np

marks = pd.Series([75,88,92,64,81],
index=['Maths','Science','English','Hindi','Social Studies'])

data = {
    "Name":["John","Jane","Jim","Jill","Jack","Jill"],
    "Department":["Maths","Science","English","Hindi","Social Studies","Maths"],
    "Marks":[75,88,92,64,81,70],
    "Attendance":[90,85,95,80,92,85]
}

df = pd.DataFrame(data)

finalisedData = pd.DataFrame(data)

print(df)
print(df["Name"])
print(df["Department"])
print(df["Marks"])
print(df["Marks"].mean())
print(df["Marks"].min())
print(df["Marks"].max())
print(df["Marks"])

print("================================================")

print(finalisedData)
print("================================================")

print(finalisedData.head(3)) 
print("================================================")

print(finalisedData.shape)
print(finalisedData.columns)
print(finalisedData.dtypes)
print(finalisedData.info())
print(finalisedData.describe())

print("================================================")


high_scores = finalisedData[(finalisedData["Marks"] > 80)&(finalisedData["Attendance"] > 90)]
print(high_scores)
print("================================================")

print(finalisedData.sort_values("Marks"))
print("================================================")

print(finalisedData.sort_values("Marks", ascending=False))
print("================================================")


department_average = finalisedData.groupby("Department")["Marks"].mean()
print(department_average)
print("================================================")


# How to load a CSV file into a Data F
# rame?


newDataSet = pd.DataFrame({
    "Name":["John","Jane","Jim","Jill",None,"Jill"],
    "Marks":[75,88,92,64,np.nan,70],
    "Attendance":[90,85,95,80,np.nan,85]
})
print(newDataSet)
print("================================================")

print(newDataSet.isna())
print(newDataSet.isna().sum())

completeRows = newDataSet.dropna()
print(completeRows)
print("================================================")

# How to fill the missing values with mean or median in the given dataset?


# We will build a Student Data Analyser , WE will create a dataset, inspect it, clean missing vlaues, filter high scores, sort results, and calculate deparment averages.
