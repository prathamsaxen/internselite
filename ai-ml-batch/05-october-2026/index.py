import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
)
from sklearn.metrics import (ConfusionMatrixDisplay, classification_report)
import matplotlib.pyplot as plt


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



y = np.array([0,0,0,0,1,1,1,1])

# Spli data into training and testing sets
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# model = LogisticRegression()
# model2 = KNeighborsClassifier(n_neighbors=3)
# model3 = DecisionTreeClassifier(max_depth=2,random_state=42)
# model4 = RandomForestClassifier(n_estimators=100,random_state=42)


# model.fit(X, y)
# model2.fit(X, y)
# model3.fit(X, y)
# model4.fit(X, y)


# prediction = model.predict([[6]])
# prediction2 = model2.predict([[6]])
# prediction3 = model3.predict([[6]])
# prediction4 = model4.predict([[6]])
# probability = model.predict_proba([[6]])

# cm = confusion_matrix(y_test, prediction)
# cm2 = confusion_matrix(y_test, prediction2)
# cm3 = confusion_matrix(y_test, prediction3)
# cm4 = confusion_matrix(y_test, prediction4)

# print("Confusion Matrix: ", cm)
# print("Confusion Matrix: ", cm2)
# print("Confusion Matrix: ", cm3)
# print("Confusion Matrix: ", cm4)



# print("Prediction: ", prediction)
# print("Probability: ", probability)
# print("Prediction: ", prediction2)
# print("Prediction: ", prediction3)
# print("Prediction: ", prediction4)


# # TRUE POSITIVE
# # TRUE NEGATIVE
# # FALSE POSITIVE
# # FALSE NEGATIVE

# # Confusion Matrix
# # [
# # [TP, FP], 
# # [FN, TN]
# # ]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42, stratify=y
)

models = {
    "Logistic Regression": LogisticRegression(),
    "KNN": KNeighborsClassifier(n_neighbors=3),
    "Decision Tree": DecisionTreeClassifier(max_depth=2, random_state=42),
    "Random Forest": RandomForestClassifier(n_estimators=100, random_state=42),
}

for name, m in models.items():
    m.fit(X_train, y_train)
    y_pred = m.predict(X_test)
    print(f"{name}")
    print("  Confusion Matrix:\n", confusion_matrix(y_test, y_pred, labels=[0, 1]))
    print("  Prediction for 6:", m.predict([[6]]))

print("LR probability for 6:", models["Logistic Regression"].predict_proba([[6]]))

print("Accuracy: ", accuracy_score(y_test, y_pred))
print("Precision: ", precision_score(y_test, y_pred))
print("Recall: ", recall_score(y_test, y_pred))
print("F1 Score: ", f1_score(y_test, y_pred))

ConfusionMatrixDisplay.from_predictions(y_test, y_pred)
plt.title("Confusion Matrix")
plt.show()

# Confusion Matrix (sklearn layout, labels [0, 1])
# [[TN, FP],
#  [FN, TP]]


# Accura
# Precision = TP / (TP + FP)
# Recall = TP / (TP + FN)
# F1 Score = 2 * (Precision * Recall) / (Precision + Recall)


# Accuracy = (TP + TN) / (TP + TN + FP + FN)
# Precision = TP / (TP + FP)
# Recall = TP / (TP + FN)
# F1 Score = 2 * (Precision * Recall) / (Precision + Recall)

print("Classification Report: ", classification_report(y_test, y_pred))