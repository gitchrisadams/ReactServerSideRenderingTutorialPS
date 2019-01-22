const rootElement = document.getElementById('app');


/*
 * React Functional component 
 */
// const Hello = function(props) {
//   return React.createElement(
//       "h1", 
//       {
//         className: "orange"
//       }, 
//       "Hello world! " + props.time
//     );
// };

/*
 * Class based component
 */
// class Hello extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleString()
//     }
//   }

//   tick() {
//     this.setState(() => {
//       return({
//         time: new Date().toLocaleString()
//       });
//     });
//   }

//   componentDidMount() {
//     this.internval = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return React.createElement(
//         "h1", 
//         {
//           className: "orange"
//         }, 
//         "Date/Time: " + this.state.time
//     );
//   }
// };

// ReactDOM.render(
//   React.createElement(Hello, {time: new Date()}, null),
//   document.getElementById('app')
// );