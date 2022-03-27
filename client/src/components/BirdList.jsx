import React from 'react';

// Create a list in the `BirdList` component that dynamically renders images
// that have been tested. (Use the data from sampleData.js for now)

class BirdList extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    {var renderBirds = this.props.sampleData.map(bird => {
      return <div className="bird-list" key={bird.name}>
      <div className="entry">
      <div className="entry-image-wrapper">
          <img className="entry-image" src={bird.url} alt="bird(?)"/>
        </div>
        <div className="entry-text">
          <div className="entry-name">
            <h3>{bird.name}</h3>
          </div>
          <div className="entry-category">
            <h4>Is Pidgeon {bird.isPideon}</h4>
          </div>
        </div>
      </div>
    </div>
    })}
    console.log(renderBirds);
    return (
      <div>
        <h1>Pidgeon Tests</h1>
        {renderBirds}
      </div>
    )
  }
}

export default BirdList;