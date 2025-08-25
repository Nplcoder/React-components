import React from 'react'
import Open from './Open';
import Close from './Close';

function ConditionalComponent() {
    const display = Boolean;
    if(display){
        return <Open/>
    }else{
        return <Close/>
    }
//   return (
//     <div>
//       <h3>This is a Conditional Component</h3>
//       <h3>Code everyday!</h3>
//     </div>
//   )
}

export default ConditionalComponent
