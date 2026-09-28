from sklearn.model_selection import train_test_split
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error

# print("scikit-learn installed successfully!")

# print(train_test_split)

# X_data = [1, 2, 3, 4, 5]
# Y_data = [10, 20, 30, 40, 50]

# x_train, x_test, y_train, y_test = train_test_split(X_data, Y_data, test_size=0.2, random_state=42)
# print(x_train)
# print(x_test)
# print(y_train)
# print(y_test)

X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
])

Y = np.array([
 50,55,60,68,72,80,85,90
])

# X -> Study Hours
# Y -> Marks

x_train, x_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
# print(x_train)
# print(x_test)
# print(y_train)
# print(y_test)

# print(X)
# print(Y)

model = LinearRegression()
model.fit(x_train, y_train)

predictions = model.predict(x_test)

print(predictions)
print("Actual Marks:", y_test)

newStudent = model.predict([[10]])
print("Predicted Marks for 9 hours:", newStudent)

mae = mean_absolute_error(y_test, predictions)

print("Mean Absolute Error:", mae)

# CReate a dataset with Study marks, Attendance, and GPA and Final Marks (Target) - Train a model and find the MAE?