import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Student from "./Student";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/header">
                        <Header />
                    </Route>

                    <Route path="/student">
                        <Student />
                    </Route>

                    <Route path="/sidebar">
                        <Sidebar />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
