import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Something was wrong and maybe in the future I will understand it better than now ...</h2>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary