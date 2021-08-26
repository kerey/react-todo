import {FC} from "react";
import {useRouteMatch} from "react-router-dom";
import {
    Switch,
    Route,
} from "react-router-dom";

export const FormTemplate: FC = () => {
    const match = useRouteMatch();
    return (
        <>
            Form template
            <Switch>
                <Route path={`${match.path}/payment`}>
                    Here form payment
                </Route>
                <Route path={`${match.path}/shipping`}>
                    Here form shipping
                </Route>
                <Route path={match.path}>
                    <h3>Here form details</h3>
                </Route>
            </Switch>
        </>
    )
}
