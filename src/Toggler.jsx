import React from 'react';

import './toggler.scss';

const Toggler = (props) => {
  if (props.visible) {
     return (
        <button 
          className='btn btn__hide' 
          onClick={props.toggleVisible}
        >
          Hide
        </button>
      )
  } 
  
  return (
    <button 
      className='btn btn__show' 
      onClick={props.toggleVisible}
    >
      Show world time
    </button>
  );
};

export default Toggler;