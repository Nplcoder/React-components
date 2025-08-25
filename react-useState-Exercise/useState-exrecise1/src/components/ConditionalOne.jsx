import React from 'react'

function ConditionalOne() {
    let message;
    const display = false;
    if(display){
        message = <h1>This is messaage One</h1>
    }else{
        message = <h1>This is message Two</h1>
    }
  return message
}

export default ConditionalOne
