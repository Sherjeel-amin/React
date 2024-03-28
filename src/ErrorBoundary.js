import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate error
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info){
    console.log("Error")
    console.log("Info")
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong</h1>;
    }
    // Render children if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
