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

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/Register">
                        <Register />
                    </Route>

                    <Route path="/Login">
                        <Login />
                    </Route>

                    {/* <Route path="/Profile">
                        <Header />
                        <Profile />
                    </Route> */}

                    <Route path="/Page">
                        <Header />
                        <Page />
                    </Route>

                    <Route path="/Programmes">
                        <Header />
                        <Programmes />
                    </Route>

                    <Route path="/Results">
                        <Header />
                        <Results />
                    </Route>

                    <Route
                        path="/Analytics"
                        component={() => {
                            window.location.href =
                                "http://127.0.0.1:5500/visualization/lineChart.html";
                            return null;
                        }}
                    />

                    <Route path="/addContact">
                        <Header />
                        <AddEdit />
                    </Route>

                    {/* <Route exact path="/" component={} /> */}
                    <Route path="/update/:id" component={AddEdit} />
                    <Route path="/view/:id" component={View} />

                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
