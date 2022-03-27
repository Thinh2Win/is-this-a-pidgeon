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
      showView: 'Pidgeon Tester',
      testedBirds: [],
      birdHolder: [],
    };
    this.imgRef = React.createRef();
    this.handleTestedBirds = this.handleTestedBirds.bind(this);
    this.handleViewClick = this.handleViewClick.bind(this);
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
        this.state.birdHolder.push(bird);
      }
    })
    this.setState({testedBirds: this.state.birdHolder});
  }

  handleViewClick(viewName) {
    this.setState({showView: viewName})
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
            <span className="nav-button" onClick={()=> this.handleViewClick('Pidgeon Tester')}>
              Pidgeon Tester
            </span>
            <span className="nav-button" onClick={()=> this.handleViewClick('Show Birds')}>
              Show me my Birds
            </span>
          </span>
          </div>
        </div>
        <div className="content">
          {this.state.showView === 'Pidgeon Tester' ? (
            <IsPidgeon model={this.state.model}
            sampleData={this.state.sampleData}
            handleTestedBirds={this.handleTestedBirds}
            />
            ) : (
              <BirdList testedBirds={this.state.testedBirds}/>
          )
          }
        </div>
      </div>

    );
  }
}

export default App;