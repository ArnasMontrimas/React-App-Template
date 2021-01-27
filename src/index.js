import React from "react";
import { render } from "react-dom";
import TestComp from "./components/TestComp";
import TestComp2 from "./components/TestComp2";

//Normalization
import "./main.css";

//Root div where the react App-Component will be rendered into
const root = document.querySelector("#root");

//Main Componenet
const App = () => {
    return (
        <React.StrictMode>
            <div>
                <TestComp />
                <TestComp2 />
            </div>
        </React.StrictMode>
    );
};

render(<App />, root);
