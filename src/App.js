import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import DetectInput from './components/DetectInput/DetectInput.jsx';
import FacialRecognition from './components/FacialRecognition/FacialRecognition.jsx';
import Clarifai, { COLOR_MODEL } from 'clarifai';

const app = new Clarifai.App({
  apiKey: '3350039e51c64bf68ce0bae5a88d911b'
 });
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
      }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value})
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
       this.state.input)
    .then(
    function(response) {
     console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
    
    }
  );
  }
  
  render() { 
    return ( 
      <div>
      <NavBar />
      <DetectInput 
        onInputChange={this.onInputChange} 
        onSubmit={this.onSubmit}
      />
      <FacialRecognition 
        imageUrl={this.state.imageUrl}
        />
      </div>
     );
  }
}
 
export default App;

