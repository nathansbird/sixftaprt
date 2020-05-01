import React, { useState } from 'react';

const RequestItem = (props) => {

  const [expanded, setExpanded] = useState(false);

  return(
    <div className={'req-item '+(expanded ? 'expanded' : '')}>
      <div className='req-top'>
        <div className='req-left'>
          <h2>{props.data.name}</h2>
          <p>Phone Number: {props.data.number}</p>
        </div>
        <div className='req-right'>
          <i className='material-icons' onClick={() => {setExpanded(!expanded)}}>{expanded ? 'expand_less' : 'expand_more'}</i>
        </div>
      </div>
      <div className='req-bottom'>
        <h2>Request:</h2>
        <p>{props.data.need}</p>
      </div>
    </div>
  );
}

export default RequestItem;