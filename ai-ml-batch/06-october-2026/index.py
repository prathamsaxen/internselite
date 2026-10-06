import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
from sklearn.decomposition import PCA

data = {
    "Customer":[
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"
    ],
    "Income":[
        20,22,25,27,30,
        75,80,85,90,95
    ],
    "Spending":[
        80,85,75,82,78,
        20,25,18,22,15
    ]
}

df = pd.DataFrame(data)


# Income is represented as thousnad
# Spending is a score between 0 and 100


plt.scatter(df["Income"], df["Spending"])
plt.xlabel("Income")
plt.ylabel("Spending")
plt.title("Customer Spending vs Income")
# plt.show()

X = df[["Income", "Spending"]].values

kmeans = KMeans(n_clusters=2,random_state=42)
clusters = kmeans.fit_predict(X)

df["Cluster"] = clusters

print(clusters)
print(df)

# plt.scatter(df["Income"], df["Spending"], c=df["Cluster"])
# plt.xlabel("Income")
# plt.ylabel("Spending")
# plt.title("Customer Spending vs Income")
# plt.show()

centers = kmeans.cluster_centers_

# plt.scatter(
#     centers[:,0],
#     centers[:,1],
#     marker="X",
#     s=100,
# )

# plt.xlabel("Income")
# plt.ylabel("Spending")
# plt.title("Cluster Centers")
# plt.show()

X2,y2 = make_blobs(
    n_samples=300,
    centers=4,
    n_features=5,
    random_state=42
)

print(X2.shape)

pca = PCA(n_components=2)
X2_pca = pca.fit_transform(X2)  

print(X2_pca.shape)

plt.scatter(
    X2_pca[:,0],
    X2_pca[:,1],
)

plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.title("Generated Blobs Dataset with PCA")
plt.show()

print(pca.explained_variance_ratio_)



# plt.scatter(
#     X2[:,0],
#     X2[:,1],
# )

# plt.xlabel("Feature 1")
# plt.ylabel("Feature 2")
# plt.title("Generated Blobs Dataset")
# plt.show()

# kmeans2 = KMeans(n_clusters=4, random_state=42)
# clusters2 = kmeans2.fit_predict(X2)


# labels = kmeans2.fit_predict(X2)

# plt.scatter(
#     X2[:,0],
#     X2[:,1],
#     c=labels,
# )



# plt.xlabel("Feature 1")
# plt.ylabel("Feature 2")
# plt.title("Generated Blobs Dataset with Clusters")
# plt.show()


# plt.scatter(
#     kmeans2.cluster_centers_[:,0],
#     kmeans2.cluster_centers_[:,1],
#     marker="X",
#     s=200,
# )
# plt.show()



# Assignment:
# What we have done so far: You have to change the clusters number from 2 to 4 and see the difference in the dataset.
