import React from "react";

class Navbar extends React.Component  {
  render(){
  return (
     <div>
       <h1>Pet Me<span role="img" aria-label="emoji">❤️</span></h1>
         <ul>
         <h5> __________________</h5>
           <li>
            <a href="/">Home</a>
           </li>
            <h5> __________________</h5>
         </ul>
       </div>
      )
    }
  }

export default Navbar
