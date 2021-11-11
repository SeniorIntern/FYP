import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import StudentAdd from "./StudentAdd";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Header />
                        <Login />
                    </Route>

                    <Route path="/profile">
                        <Header />
                        <Profile />
                    </Route>

                    <Route path="/studentadd">
                        <Header />
                        <StudentAdd />
                        <Sidebar />
                    </Route>

                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
