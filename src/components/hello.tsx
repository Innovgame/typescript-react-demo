import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (hello: HelloProps) => {
    return (
        <h1>
            Hello from {hello.compiler} and {hello.framework}!
        </h1>
    );
};
