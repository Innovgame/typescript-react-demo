import * as React from "react";
import { Link } from "react-router-dom";

export default () => (
    <h1>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/edit">edit</Link>
            </li>
            <li>
                <Link to="/hello">hello</Link>
            </li>
        </ul>
    </h1>
);
