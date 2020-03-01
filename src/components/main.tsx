import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import { Hello } from "./hello";
import Edit from "./edit";

export default () => (
    <main>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/hello" component={Hello} />
            <Route path="/edit" component={Edit} />
        </Switch>
    </main>
);
