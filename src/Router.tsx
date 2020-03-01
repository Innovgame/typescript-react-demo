import * as React from "react";
import { HashRouter } from "react-router-dom";

import { App } from "./App";

export default () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
};
