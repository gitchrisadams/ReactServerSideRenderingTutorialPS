import React from 'react';
import DigitalClock from '../src/DigitalClock';

/*
 * Class based component
 */
class Index extends React.Component {

  /*
   * This is from nextJS and allows us to render
   * the page server side.
   */
  static async getInitialProps() {
    // return({
    //   time: new Date().toISOString()
    // });

    const promise = new Promise((resolve, reject) => {
      setInterval(() => { resolve({
        time: new Date().toISOString()
      }) }, 3000)
    });

    return promise;

  }

  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    }
  }

  tick() {
    this.setState(() => {
      return({
        time: new Date().toLocaleString()
      });
    });
  }

  componentDidMount() {
    this.internval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1>
        <DigitalClock time={this.state.time}></DigitalClock>
      </h1>
    );
  }
};

export default Index;