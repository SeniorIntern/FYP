
# Import necessary libraries
import numpy as np
import matplotlib.pyplot as mpt
import pandas as pd

def marks_prediction(school, sex, age, Medu, Fedu, Mjob, Fjob, studytime, failures, schoolsup, famsup, activities, higher, internet, famrel, freetime, Walc, absences, G1, G2):
    # load data and read through pandas library from csv file
    data = pd.read_csv('CSV_Data/student-mat.csv')
    data.head() # show head(top few row) of the dataframe

    # check the shape(rows and columns) of the dataframe
    data.shape

    # check the data type of each column if the values are numeric, string.
    num_columns = [name for name in data.columns if data[name].dtype in ['int64', 'float64']]
    str_columns = [name for name in data.columns if data[name].dtype == 'object']

    # encode the string values to numeric values
    from sklearn.preprocessing import LabelEncoder
    le=LabelEncoder()
    for i in list(str_columns):
        data[i]=le.fit_transform(data[i])

    # dropping columns from x, adding column g3(third year grade) on Y
    x = data.drop(columns=['G3','address','famsize','Pstatus','paid','romantic','health','reason','guardian','traveltime','goout','Dalc','health','nursery','traveltime','reason'],axis=1)
    y = data['G3']

    # split data into 4 arrays (x_train, x_test, y_train, y_test)
    # call the train_test_split from sklearn model & store 25% of data in test set
    from sklearn.model_selection import train_test_split
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state=0)

    # Fit our model on x_train & y_train for using linear regression
    from sklearn.linear_model import LinearRegression
    reg = LinearRegression()
    reg.fit(x_train,y_train)

    weights=reg.coef_ # give the coefficient of the features of dataset
    bais=reg.intercept_ # gives the point where the function crosses the y-axis.
    print(weights,bais)

    # call predict function and calculate accuracy percentage in per hundred 
    # using regression score(r2_score) to evaluate the performance of a linear regression model. 
    from sklearn.metrics import r2_score
    y_pred = reg.predict(x_test)
    print(r2_score(y_test, y_pred))

    # calculate model' accuracy
    acc = r2_score(y_test, y_pred)*100
    # print("This program has accuracy of: %f" % acc + " percentage")

    # using metrics from sklearn library to calculate the mean squared error 
    # calculating an error score helps to summarize the predictive skill of a model.
    from sklearn import metrics
    # print('The mean absolute error is:', metrics.mean_absolute_error(y_test, y_pred))
    # print('The mean Square error is:', metrics.mean_squared_error(y_test, y_pred))
    # print('The root mean square error is:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))
    # predict marks
    pred = reg.predict([[school,sex,age,Medu,Fedu,Mjob,Fjob,studytime,failures,schoolsup,famsup,activities,higher,internet,famrel,freetime,Walc,absences,G1,G2]])
    # print("The Final Grade will be:", pred)

marks_prediction(school, sex, age, Medu, Fedu, Mjob, Fjob, studytime, failures, schoolsup, famsup, activities, higher, internet, famrel, freetime, Walc, absences, G1, G2)