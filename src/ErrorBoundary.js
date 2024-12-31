import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ""
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.toString()
        }
    }

    componentDidCatch(error, info) {
        console.log("Error Occured: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Some Errors!</h2>
                    <p>{this.state.errorMessage}</p>
                    {this.props.fallback}
                </div>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;