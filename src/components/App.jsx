import React, { Component } from 'react';
import Feedback from './feedback/feedback';
import Stats from './stats/stats';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  oneClick = evt => {
    evt.target.id === '1' &&
      this.setState(prev => ({
        good: prev.good + 1,
      }));
    evt.target.id === '2' &&
      this.setState(prev => ({
        neutral: prev.neutral + 1,
      }));
    evt.target.id === '3' &&
      this.setState(prev => ({
        bad: prev.bad + 1,
      }));
  };

  render() {
    return (
      <>
        <Feedback oneClick={this.oneClick} />
        <Stats data={this.state} />
      </>
    );
  }
}

export default App;
