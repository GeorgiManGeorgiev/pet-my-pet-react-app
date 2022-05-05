/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

class CustomErrorBoundrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true
    };
  }

  componentDidCatch(error) {
    console.log('Error from componentDidCatch: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some Error Here</h1>;
    }
    return this.props.children;
  }
}

export default CustomErrorBoundrary;
