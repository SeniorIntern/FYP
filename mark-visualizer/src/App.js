import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddEdit } from "./AddEdit";
import { View } from "./View";
import Header from "./Header";
import Login from "./Login";
import Page from "./Page";
import Register from "./Register";
// import Sidebar from "./Sidebar";
import { Programmes } from "./Programmes";
import Results from "./Results";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";

function App() {
    // setup state for userContext
    const [user, setUser] = useState(null);
    const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <div className="App">
                <Switch>
                    {/* <Route path="/dashboard">
                        <Dashboard />
                    </Route> */}
                    <Route path="/addContact">
                        <Header />
                        <AddEdit />
                    </Route>

                    <Route path="/Register">
                        <Register />
                    </Route>

                    {/* <Route path="/">
                        <Login />
                    </Route> */}

                    <Route path="/Login">
                        <Login />
                    </Route>

                    {/* <Route path="/Profile">
                        <Header />
                        <Profile />
                    </Route> */}

                    {/* wrap pages with context provider */}
                    <UserContext.Provider value={providerValue}>
                        <Route path="/Page">
                            <Header />
                            <Page />
                        </Route>

                        <Route path="/Programmes">
                            <Header />
                            <Programmes />
                        </Route>
                    </UserContext.Provider>

                    <Route path="/Results">
                        <Header />
                        <Results />
                    </Route>

                    {/* path-Analytics not working properly */}
                    <Route
                        path="/Analytics"
                        component={() => {
                            window.location.href =
                                "http://127.0.0.1:5500/visualization/lineChart.html";
                            return null;
                        }}
                    />

                    {/* <Route exact path="/" component={} /> */}
                    <Route path="/update/:id" component={AddEdit} />
                    <Route path="/view/:id" component={View} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
