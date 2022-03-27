import React from 'react';

class IsPidgeon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      model: null,
      imgUrl: '',
      enteredUrl: ''
    };
    this.imgRef = React.createRef();
    this.isPidgeonTest = this.isPidgeonTest.bind(this);
    this.handleUrlEntry = this.handleUrlEntry.bind(this);
    this.handleUrlClick = this.handleUrlClick.bind(this);
  }

  isPidgeonTest(image) {
    //This function tests an image to see if it is a pidgeon.
    this.props.model.classify(image.current)
      .then(predictions => {
        console.log( predictions[0].className === 'partridge' ? 'This is a Pidgeon' : 'This is not a Pidgeon');
        console.log(predictions[0].className === 'partridge' ? 'Pidgeon Confidence: ' + predictions[0].probability : '');
        //Yes I know a partridge is not a pidgeon,
        //but I keep feeding the model Pidgeons and they keep coming out as partridges???
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleUrlEntry(e) {
    this.setState({enteredUrl: e.target.value});
  }
  handleUrlClick() {
    this.setState({imgUrl: this.state.enteredUrl});
  }

  render(){

    return (
      <div>
          <h1>Is this a Pidgeon?</h1>
          <input type='text' placeholder='pic url' onChange={()=> {this.handleUrlEntry(event)}}/>
          <button type='submit' onClick={this.handleUrlClick}>check url</button>
          <div className="img-wrapper">
            <img
              src={this.state.imgUrl}
              ref={this.imgRef}
              alt="bird(?)"
              crossOrigin='anonymous'
              className="img"
            />
          </div>
          <button onClick={() => {this.isPidgeonTest(this.imgRef), this.props.handleTestedBirds(this.state.imgUrl)}}>
            Test
          </button>
      </div>
    );
  }

}

export default IsPidgeon;

// {var pidgeons = this.props.sampleData.map(bird => {
//   return
//       <div className="img-wrapper">
//         <h1>Is this a Pidgeon?</h1>
//         <img
//           src={bird.url}
//           ref={this.imgRef}
//           alt="bird(?)"
//           crossOrigin='anonymous'
//           className="img"
//         />
//         <button onClick={() => this.isPidgeonTest(this.imgRef)}>
//       Test
//     </button>
//       </div>
// })}