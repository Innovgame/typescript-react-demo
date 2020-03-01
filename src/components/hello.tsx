import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = () => {
    return <p>Hello</p>;
};
