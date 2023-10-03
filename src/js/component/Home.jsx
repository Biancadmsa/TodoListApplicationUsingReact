import React, { useState } from 'react';


const Home = () => {
  return(
<div className ="container"> 

<h1>My TodoList</h1>
    <ul>
      <li><input type="text" placeholder="What needs to be done?" ></input>
      </li>
        <li>Make the bed <i class="fa-solid fa-xmark"></i>
        </li>
        <li>Make the dog <i class="fa-solid fa-xmark"></i></li>
        <li>Pay taxes <i class="fa-solid fa-xmark"></i></li>
        <li>Go on Vacation <i class="fa-solid fa-xmark"></i></li>
        <div>item left</div>
        
    </ul>
</div>


  );
};

export default Home;