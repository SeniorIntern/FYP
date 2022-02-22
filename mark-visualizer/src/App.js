import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddEdit } from "./AddEdit";
import { View } from "./View";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Page from "./Page";
import Profile from "./Profile";
import Register from "./Register";
import Sidebar from "./Sidebar";
import StudentAdd from "./StudentAdd";
import Table from "./Table";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/profile">
                        <Header />
                        <Profile />
                    </Route>

                    <Route path="/student">
                        <Header />
                        <Home />
                    </Route>

                    <Route path="/studentadd">
                        <Header />
                        <StudentAdd />
                        <Sidebar />
                    </Route>

                    <Route path="/table">
                        <Table />
                    </Route>

                    <Route exact path="/" component={Page} />
                    <Route path="/addContact" component={AddEdit} />
                    <Route path="/update/:id" component={AddEdit} />
                    <Route path="/view/:id" component={View} />

                    {/* 
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route> 
                    */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
