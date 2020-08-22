import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import DetectInput from './components/DetectInput/DetectInput.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
<NavBar />
<DetectInput />

      </div>
     );
  }
}
 
export default App;

