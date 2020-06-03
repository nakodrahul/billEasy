// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React, { Component } from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: []
      };
   }

   async componentDidMount() {
      // GET request using fetch with async/await
      const response = await fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0');
      const data = await response.json();
      this.setState({ data: data })
      console.log(this.state);
   }

   render() {
      return (
         <div className="gallery">
            {this.state.data.map((item) => <Image data={item.urls} />)}
         </div>
      );
   }
}
class Image extends React.Component {
   render() {
      return (
         <img key={this.props.data.full} src={this.props.data.full} srcSet={`${this.props.data.small} 300w, ${this.props.data.full} 768w, ${this.props.data.regular} 1280w, ${this.props.data.thumb} 3200w`}
            alt="flex-gallery" className="flex-gallery" />
      );
   }
}

export default App;
