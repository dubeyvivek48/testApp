import {Route, Switch} from "react-router-dom";
import LiveConsultation from "../components/LIveConsulation";
import React from "react";
import {route} from "../constant/Routes";
import LandingComponent from "../components/LandingComponent";

const routes = (
        <Switch>
            <Route path={route.LANDING} exact>
                <LandingComponent/>
            </Route>
            <Route path={route.LIVE_CONSULTATION} exact>
                <LiveConsultation/>
            </Route>
            <Route path={route.BUY_PLANS} exact>
                <h1>BUY_PLANS</h1>
            </Route>
            <Route>
                404!
            </Route>
        </Switch>
);

export default routes;
