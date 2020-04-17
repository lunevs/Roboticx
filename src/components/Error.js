import React from "react";

class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return 'Oooops! Something is wrong!';
        }
        return this.props.children;

    }
}

export default ErrorBoundry;