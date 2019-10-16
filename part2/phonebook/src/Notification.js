import React from 'react';

const Notification = (props) => {
    console.log(props)
    if (props.message === null) {
      return null
    }
  
    // setTimeout(props.setErrorMessage(''), 3000);

    return (
      <div className='error'>
        {props.message}
      </div>
      
    )
  }

export default Notification;