import React from 'react';
import axios from 'axios';

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

    /* How to use a promise without axios */
    // const promise = new Promise((resolve, reject) => {
    //   setInterval(() => { resolve({
    //     time: new Date().toISOString()
    //   }) }, 3000)
    // });

    // return promise;


    var promise = axios.get('http://localhost:5000/speakers').
      then(response => {
        return {
          hasErrored: false,
          speakerData: response.data
        }
      }).catch(error => {
        return {
          hasErrored: true,
          message: error.message
        };
      });

    return promise;

  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      message: props.message,
      speakerData: props.speakerData
    }
  }


  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <ul>
        {this.state.speakerData.map((speaker) => 
            <li key={speaker.id}>
              {speaker.firstName} {speaker.lastName}
            </li>
        )}
      </ul>
    )
  }

}

export default Index;