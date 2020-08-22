import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import DetectInput from './components/DetectInput/DetectInput.jsx';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3350039e51c64bf68ce0bae5a88d911b'
 });
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onSubmit = () => {
    console.log('clicked');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
     console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }
  
  render() { 
    return ( 
      <div>
      <NavBar />
      <DetectInput 
        onInputChange={this.onInputChange} 
        onSubmit={this.onSubmit}/>
      </div>
     );
  }
}
 
export default App;

