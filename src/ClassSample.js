import { Component } from "react";

class ClassSample extends Component {
    render() {
        return (
            <div>
                Testing Class Sample
            </div>
        );
    }
}
// export default ClassSample;


function FunctionSample (props) {
    return (
        <FunctionSample2 name={props.name}/>
    );
}

function FunctionSample2 (props) {
    return (
        <div>
            <h3>{props.name}</h3>
            Testing Function Sample
        </div>
    );
}
// export default FunctionSample;

export {ClassSample, FunctionSample};


