import React from 'react';
import './ValidateError.css'

export default function ValidateError(props) {
  if(props.message) {
    return (
      <div className='error-message'>
        {props.message}
      </div>
    )
  }
  return <></>
}
