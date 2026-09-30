# import numpy as np
# from sklearn.linear_model import LinearRegression 



# # One feature : study hours
# X = np.array([
#     [1],
#     [2],
#     [3],
#     [4],
#     [5],
# ])

# # Target: Exam Marks
# Y = np.array([
#     50,55,60,65,70
# ])

# model = LinearRegression()

# model.fit(X,Y)

# print("Intercept: ", model.intercept_)
# print("Coefficient: ", model.coef_)

# prediction = model.predict([[6]])
# print("Prediction: ", prediction)


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

df = pd.DataFrame({
    "Area":[
        600,700,800,850,900,
        1000,1100,1200,1300,1400,
        1500,1600,1700,1800,2000,
        2100,2200,2300,2400,2500,
    ],
    "Bedrooms":[
        1,1,2,2,2,
        2,2,3,3,3,
        3,3,3,4,4,
        4,4,4,4,5,
    ],
    "Age":[
        15,12,10,8,12,
        7,10,8,6,9,
        5,7,6,5,8,
        4,6,3,5,2,
    ],
    "Price":[
        1800000,2100000,2500000,2600000,2700000,
        3000000,3100000,3600000,3900000,4000000,
        4500000,4600000,4900000,5500000,5900000,
        6200000,6500000,6900000,7100000,7800000,
    ]
})

print("Data Preview")
print(df.head())


X = df[["Area","Bedrooms","Age"]]
Y = df["Price"]

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, Y_train)

predictions = model.predict(X_test)

# Evaluate the predictions
mae = mean_absolute_error(Y_test, predictions)
mse = mean_squared_error(Y_test, predictions)
r2 = r2_score(Y_test, predictions)
rmse = np.sqrt(mse)

print(f"Mean Absolute Error: {mae:.2f}")
print(f"Mean Squared Error: {mse:.2f}")
print(f"R2 Score: {r2:.2f}")
print(f"RMSE: {rmse:.2f}")
print("Predicted Price: ", model.predict([[1000,3,5]]))


print("\n Intercept: ", model.intercept_)

for feature, coef in zip(X.columns, model.coef_):
    print(f"{feature}: {coef:.2f}")

new_house = pd.DataFrame({
    "Area": [1500],
    "Bedrooms": [3],
    "Age": [5],
})

new_price = model.predict(new_house)
print(f"Predicted Price: {new_price[0]:.2f}")

plt.scatter(Y_test, predictions)
plt.xlabel("Actual Price")
plt.ylabel("Predicted Price")
plt.title("Actual vs Predicted Prices")
plt.show()


minimum = min(Y_test.min(),predictions.min())
maximum = max(Y_test.max(),predictions.max())

plt.plot(
    [minimum,maximum],
    [minimum,maximum],
    color="red",
    linewidth=2,
    label="Ideal Line",
    linestyle="--",
)

plt.tight_layout()
plt.show()

# Application 2 - Sales Forecasting System 
# Features = Advertising Spend, Social Media Spend, TV Spend, Prive, Historical Sales, Seasonality Indicators

# Application 3 - Energy Consumption Prediction System 
# Features = Time of Day, Weather Conditions, Temperature, Humidity, Wind Speed, Seasonal Indicators

# Application 4 - Customer Churn Prediction System 
# Features = Monthly Usage, Call Duration, Data Usage, SMS Usage, Customer Support Calls, Monthly Bill, Tenure

# Application 5 - Stock Price Prediction System 
# Features = Historical Stock Prices, Volume, Technical Indicators, Market Sentiment, Economic Indicators, Company News

# Application 6 - Product Demand Prediction System 
# Features = Historical Sales Data, Price, Promotion Spend, Marketing Campaigns, Seasonality Indicators