import React from "react";

class TestComp2 extends React.Component {
    render() {
        return (
            <div className="paddingBig">
                <h1>Hello World!</h1>
                <img
                    src={require("../res/images/Capture.JPG")}
                    alt="Lithuanian Castle"
                />
                <img
                    height="200px"
                    width="200px"
                    src={require("../res/svgs/lithuania.svg")}
                    alt="random svg"
                />
            </div>
        );
    }
}

export default TestComp2;
