import React, { useState, useEffect } from 'react';
import {db} from '../../firebaseConfig';
import RequestItem from './requestItem';

const RequestList = () => {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    db.collection('requests').get().then((res) => {
      const resList = [];
      res.forEach(doc => {
        resList.push(doc.data());
      });
      setRequests(resList);
    });
  }, []);

  return(
    <div id='requests-list'>
      <h1 id='requests-title'>Prayer Requests</h1>
      <div id='requests-card'>
        {requests.map((item) => {
          return <><RequestItem data={item}/><div className='divider'></div></>
        })}
      </div>
    </div>
  );
}

export default RequestList;