import React, { useState } from 'react';
import FormItem from './formItem';
import axios from 'axios';
import { Redirect } from 'react-router';

const PrayerForm = () => {

  const submitForm = () => {
    setLoading(true);
    axios.post('https://us-central1-sixftaprt-f02e0.cloudfunctions.net/addRequest', state).then(() => {
      setRedirect(true);
    })
  }

  const [state, setState] = useState({
    name: 'Anonymous',
    number: 'No Number',
    need: 'No Response',
  });
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEvent = (e) => {
    const {name, value} = e.target;
    console.log(name);
    setState({
      ...state,
      [name]: value
    });
  }

  return(
    redirect ? 
    <Redirect push to='/thanks'/>
    : loading ? 
    <div id='loading'>
      <h1 id='sending-text'>Sending...</h1>
    </div>
    :
    <div id='prayer-form'>
      <h1 id='form-title'>Request Prayer</h1>
      <div id='questions-card'>
        <FormItem onChange={(e) => {handleEvent(e)}} name='name' title='Name' type='name'/>
        <FormItem onChange={(e) => {handleEvent(e)}} name='number' title='Phone Number' type='number'/>
        <FormItem onChange={(e) => {handleEvent(e)}} name='need' title='Request (Optional)' large={true}/>
        <button onClick={submitForm} id='submit-form'>Submit</button>
      </div>
    </div>
  );
}

export default PrayerForm;