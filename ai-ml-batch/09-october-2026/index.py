# # import pandas as pd

# # df = pd.DataFrame({
# #     "Age":[22,25,None,28,30],
# #     "Salary":[30000,45000,35000,None,60000],
# # })

# # print(df)

# # df["Age"] = df["Age"].fillna(df["Age"].median())
# # df["Salary"] = df["Salary"].fillna(df["Salary"].median())

# # print(df)

# # df = df.drop_duplicates()

# # data = pd.DataFrame({"City":["New York","Los Angeles","Chicago","Houston","Miami"]})
# # encoded_data = pd.get_dummies(data)

# # print(encoded_data)
# # print(df)

# from sklearn.model_selection import KFold,cross_val_score
# from sklearn.linear_model import LinearRegression
# import numpy as np

# X = np.array([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])

# Y = np.array([10,15,20,25,30,35,40,45,50,55])

# model = LinearRegression()

# cv = KFold(
#     n_splits=5,
#     shuffle=True,
#     random_state=42
# )

# scores = cross_val_score(model, X, Y, cv=cv, scoring="neg_mean_absolute_error")

# mae_scores = -scores

# print("MAE For each fold: ", mae_scores)
# print("Mean MAE: ", mae_scores.mean())
# print("Standard Deviation of MAE: ", mae_scores.std())

from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import GridSearchCV,KFold
import numpy as np

model = DecisionTreeRegressor(random_state=42)

param_grid = {
    "max_depth":[3,4,5,6,7,8,9,10],
    "min_samples_split":[2,3,4,5,6,7,8,9,10], 
}

X_train = np.array([[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]])
Y_train = np.array([10,15,20,25,30,35,40,45,50,55])

cv = KFold(
    n_splits=5,
    shuffle=True,
    random_state=42
)

grid_search = GridSearchCV(
    estimator = model,
    param_grid = param_grid,
    cv = cv,
    scoring = "neg_mean_absolute_error",
    n_jobs = -1
)

grid_search.fit(X_train, Y_train)

print("Best Parameters: ", grid_search.best_params_)
print("Best Score: ", grid_search.best_score_)
print("Best MAE: ", -grid_search.best_score_)
print("Best MAE: ", grid_search.best_score_)
print("Best MAE: ", grid_search.best_score_)