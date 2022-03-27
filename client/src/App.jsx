const mobilenet = require('@tensorflow-models/mobilenet');
import React, {useRef} from 'react';
import '@tensorflow/tfjs-backend-webgl';
import ModelLoadState from './components/ModelLoadState.jsx';
import IsPidgeon from './components/IsPidgeon.jsx';
import BirdList from './components/BirdList.jsx';
import sampleData from './sampleData.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      model: null,
      imgUrl: null,
      sampleData: [],
      testedBirds: [],
    };
    this.imgRef = React.createRef();
    this.handleTestedBirds = this.handleTestedBirds.bind(this);
  }

  componentDidMount() {
    //This loads the machine learning model.
    mobilenet.load()
      .then(model => {
        this.setState({model});
      })
  }

  pageRouter(){

  }

  handleTestedBirds(testedBirdsUrl) {
    sampleData.forEach(bird => {
      if (bird.url === testedBirdsUrl) {
        this.state.testedBirds.push(bird);
      }
    })
    this.setState({sampleData: this.state.testedBirds});
  }

  render () {
    return (
      <div>
        <div className="navBar">
          <div className="nav">
          <span className="title">
            <img src="https://i.imgur.com/eXPeS9m.gif" height='100px'/>
            <span className="title-text">
              <h3>Is this a Pidgeon?</h3>
              <ModelLoadState model={this.state.model}/>
            </span>
            <span className="nav-button">
              Pidgeon Tester
            </span>
            <span className="nav-button">
              Show me my Birds
            </span>
          </span>
          </div>
        </div>
        <div className="content">
          <IsPidgeon model={this.state.model}
          sampleData={this.state.sampleData}
          handleTestedBirds={this.handleTestedBirds}
          />
          <BirdList sampleData={this.state.sampleData}/>
        </div>
      </div>

    );
  }
}

export default App;