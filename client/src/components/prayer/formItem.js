import React from 'react';

const FormItem = (props) => {
  return(
    <div className='form-item'>
      <h6 className='item-title'>{props.title}</h6>
      {props.large ? 
      <textarea onChange={(e) => {props.onChange(e)}} name={props.name} type={props.type} placeholder={props.title} className={props.classes+' item-body'}/>
      :
      <input onChange={(e) => {props.onChange(e)}} name={props.name} type={props.type} placeholder={props.title} className={props.classes+' item-body'}/>}
    </div>
  );
}

export default FormItem;