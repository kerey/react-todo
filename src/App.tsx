import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {About} from "./pages/Home";
import {Home} from "./pages/About";
import {MainTemplate} from "./templates/MainTemplate/component";
import {FormTemplate} from "./templates/FormTemplate/component";
import {Story} from "./pages/Story";
import './styles.scss';

export const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/form">
                    <FormTemplate/>
                </Route>
                <Route path="/story">
                    <MainTemplate>
                        <Story />
                    </MainTemplate>
                </Route>
                <Route path="/about">
                    <MainTemplate>
                        <About />
                    </MainTemplate>
                </Route>
                <Route path="/">
                    <MainTemplate>
                        <Home />
                    </MainTemplate>
                </Route>
            </Switch>
        </Router>)
}
