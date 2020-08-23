import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import DetectInput from './components/DetectInput/DetectInput.jsx';
import FacialRecognition from './components/FacialRecognition/FacialRecognition.jsx';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '3350039e51c64bf68ce0bae5a88d911b'
});
class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: [],
        }
    }
    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions.map(region => region.region_info.bounding_box);
        const image = document.getElementById('inputimage');
        const height = Number(image.height);
        const width = Number(image.width);
        console.log(clarifaiFace, width, height)
        return clarifaiFace.map(face => {
            return {
                leftCol: face.left_col * width,
                topRow: face.top_row * height,
                rightCol: width - face.right_col * width,
                bottomRow: height - face.bottom_row * height
            }
        });
    }

    displayFaceBox = (box) => {
        console.log(box)
        this.setState({ box })
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ input: event.target.value })
    }

    onSubmit = () => {
        this.setState({ imageUrl: this.state.input });

        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL,
                this.state.input)
            .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));

    }

    render() {
        return ( 
            <div >
            <NavBar />
            <DetectInput 
            onInputChange = { this.onInputChange }
            onSubmit = { this.onSubmit }
            /> 
            <FacialRecognition 
            imageUrl = { this.state.imageUrl }
            box = { this.state.box }
            /> 
            </div >
        );
    }
}

export default App;