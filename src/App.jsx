import React from 'react';

import './index.scss';

import Clock from './Clock.jsx';
import Toggler from './Toggler.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true
    }
  }
 
  toggleVisible = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  
  render() {
    return (
      <>
        <div className='clocks'>
          {
            this.state.visible && <Clock location="New York" offset={-4} />
          }
          {
            this.state.visible && <Clock location="Kyiv" offset={3} />
          }
          {
            this.state.visible && <Clock location="London" offset={0} />
          }
        </div>

        <Toggler 
          toggleVisible={this.toggleVisible} 
          visible={this.state.visible}
        />
      </>
    );
  }
}


export default App;