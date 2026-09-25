import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from statistics import mode

print("NumPy:", np.__version__)
print("Pandas:", pd.__version__)
print("Seaborn:", sns.__version__)

# x = [1, 2, 3, 4, 5]
# y = [10,20,30,40,50]

# plt.plot(x, y)
# plt.xlabel("X-axis")
# plt.ylabel("Y-axis")
# plt.title("Line Plot")
# plt.show()

# days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
# sales = [100, 200, 50, 400, 500]

# plt.plot(days, sales, marker="o")
# plt.title("Sales Data")
# plt.xlabel("Days")
# plt.ylabel("Sales")
# plt.show()

# subjects = ["Math", "Science", "English", "Hindi", "Social Studies"]
# marks = [80, 90, 70, 85, 95]

# plt.barh(subjects, marks)
# plt.title("Marks in Subjects")
# plt.xlabel("Subjects")
# plt.ylabel("Marks")
# plt.show()

# Histogram
# marks = [80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75]
# plt.hist(marks, bins=5)
# plt.title("Marks Distribution")
# plt.xlabel("Marks")
# plt.ylabel("Frequency")
# plt.show()

# Bar Chart vs histogram

# # Scatter Plot
# hours = [1, 2, 3, 4, 5]
# marks = [10, 20, 30, 40, 50]
# plt.scatter(hours, marks)
# plt.title("Study hours vs marks")
# plt.xlabel("Study hours")
# plt.ylabel("Marks")
# plt.show()

# Pie Chart
# subjects = ["Math", "Science", "English", "Hindi", "Social Studies"]
# marks = [80, 90, 70, 85, 95]

# # Box Plot 
# marks = [80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75]
# plt.boxplot(marks)
# plt.title("Marks Distribution")
# plt.xlabel("Marks")
# plt.ylabel("Frequency")
# plt.show()

# Pie Chart

# categories = ["Math", "Science", "English", "Hindi", "Social Studies"]
# values = [80, 90, 70, 85, 95]
# plt.pie(values, labels=categories, autopct="%1.1f%%")
# plt.title("Marks in Categories")
# plt.show()

df  = sns.load_dataset("tips")
# print(df.head())

# sns.scatterplot(x="total_bill", y="tip", data=df)
# plt.title("Total Bill vs Tip")
# plt.xlabel("Total Bill")
# plt.ylabel("Tip")
# plt.show()

# sns.barplot(
#     data = df,
#     x = "day",
#     y = "total_bill",
# )

# plt.title("Total Bill vs Day")
# plt.show()

# sns.scatterplot(
#     data = df,
#     x = "total_bill",
#     y = "tip",
#     hue = "day",
# )

# print(df.head())
# plt.title("Total Bill vs Tip")
# plt.xlabel("Total Bill")
# plt.ylabel("Tip")
# plt.show()

# sns.histplot(
#     data=df,
#     x="total_bill",
#     bins=20
# )

# plt.title("Total Bill Distribution")
# plt.show()

# values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print(np.mean(values))
# print(np.median(values))
# print(mode(values))
# print(min(values))
# print(max(values))
# print(max(values) - min(values))
# print(np.var(values))
# print(np.std(values))


# dataDf = pd.DataFrame({"Marks":[80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75, 80, 90, 70, 85, 95, 75]})
# print(dataDf["Marks"].describe())


# 1. Probability
# 2. Correlation 
# 3. No Correlation
# 4. Visualize Marks Distribution
# 5. Visualize Total Bill Distribution
# 6. Visualize Tip Distribution
# 7. Visualize Total Bill vs Tip
# 8. Visualize Total Bill vs Day
# 9. Visualize Tip vs Day
# 10. Visualize Total Bill vs Tip vs Day
# 11. Study Hours vs Marks
# 12. Suggested teaching flow
