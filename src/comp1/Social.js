import React from 'react'

const Social = (props) =>
{
  return (
    <div>

    <h1>fullName:{props.children}</h1>  

     <h1>bio:{props.bio}</h1>  
     <h1>profession:{props.profession}</h1> 
  
     {/* {props.src}  */}
    
     
    </div>
  )
}

export default Social;