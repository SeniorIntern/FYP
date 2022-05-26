import { AddEdit } from "./AddEdit";
import { View } from "./View";
import Header from "./Header";
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";
// import Sidebar from "./Sidebar";
import { Programmes } from "./Programmes";
import Results from "./Results";
import AddResult from "./AddResult";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    // added for useContext
    // setup state for userContext
    // const [user, setUser] = useState(null);
    // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <div className="App">
                {/* Manage routes for dealing with paths */}
                <Switch>
                    {/* <UserContext.Provider value={providerValue}> */}

                    <Route path="/students">
                        <Header />
                        <Page />
                    </Route>

                    <Route path="/programmes">
                        <Header />
                        <Programmes />
                    </Route>

                    <Route path="/smr/update/:id" component={AddResult} />

                    <Route path="/results">
                        <Header />
                        <Results />
                    </Route>

                    <Route path="/addResult">
                        <Header />
                        <AddResult />
                    </Route>

                    <Route path="/addStudent">
                        <Header />
                        <AddEdit />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/">
                        <Login />
                    </Route>
                    {/* </UserContext.Provider> */}

                    {/* <Route exact path="/" component={} /> */}
                    <Route path="/update/:id" component={AddEdit} />
                    <Route path="/view/:id" component={View} />

                    {/* path-Analytics not working properly */}
                    <Route
                        path="/analytics"
                        component={() => {
                            window.location.href =
                                "http://127.0.0.1:5500/visualization/visualize.html";
                            return null;
                        }}
                    />

                    <Route
                        path="/prediction"
                        component={() => {
                            window.location.href = "http://127.0.0.1:5000/";
                            return null;
                        }}
                    />

                    <Route
                        path="/dashboard"
                        component={() => {
                            window.location.href =
                                "http://127.0.0.1:5500/visualization/dashboard.html";
                            return null;
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
