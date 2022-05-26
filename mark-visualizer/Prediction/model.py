import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import pickle

df = pd.read_csv(
    r'D:\FYP\mark-visualizer\Prediction\student-mat.csv')

columns = ['G1', 'G2', 'G3']
df = df[columns]

X = df.iloc[:, 0:2]
y = df.iloc[:, 2:]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25)

lr = LinearRegression()
lr.fit(X_train, y_train)

pickle.dump(lr, open('predModel.pkl', 'wb'))
