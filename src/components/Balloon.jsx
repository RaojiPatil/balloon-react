import React from 'react';
import './balloon.css';

import {useState} from "react";
function Bolloon() {

    const [input, setInput] = useState();
    const [cone, setcone] = useState(true);
    const [ctwo, setctwo] = useState(true);
    const [cthree, setcthree] = useState(true);
    const [cfour, setcfour] = useState(true);
    const [cfive, setcfive] = useState(true);

    const f1 = () => { setcone(false) }
      const fun1 = () => {  setcone(true) }
      const circle2 = () => { setctwo(false) }
      const f12 = () => {  setctwo(true) }
      const circle3 = () => { setcthree(false) }
      const f13 = () => { setcthree(true)  }
      const circle4 = () => { setcfour(false)  }
      const f14 = () => {setcfour(true)  }
      const circle5 = () => {  setcfive(false)  }
      const f15 = () => { setcfive(true) }
   
      const handleShoot = () => {
        
if(input==="1"){ f1()}

else if(input==="2"){
 circle2() 
}

else if(input==="3"){
    circle3()  
}

else if(input==="4"){
   
    circle4()  
}
else if(input==="5"){
    
    circle5() 
}
 }
    return (
      <div>

<div className="main-div-3">
           
            
           <input onChange={(el) => {
           setInput(el.target.value);
         }}
           id="outlined-number"  label="Enter Number"  type="number"
           InputLabelProps={{
             shrink: true,
           }}
         />
           <button   onClick={handleShoot} variant="outlined">Shoot</button>
       </div>
    
    <div className="shadow-box">
        <div className='main-empty-div'>
          
            {
              cone? null: <div className="div-1" onClick={fun1} ></div>
            }
              {
              ctwo? null: <div className="div-2" onClick={f12}></div>
            }
              {
              cthree? null: <div className="div-3" onClick={f13}></div>
            }
              {
              cfour?null:  <div className="div-4" onClick={f14}></div>
            }
              {
              cfive? null:  <div className="div-5" onClick={f15}></div>
            }
           
       

        </div>
        <div className="main-div-2">
            {
              cone? <div className="div-1"></div>:null
            }
              {
              ctwo? <div className="div-2"></div>:null
            }
              {
              cthree? <div className="div-3"></div>:null
            }
              {
              cfour? <div className="div-4"></div>:null
            }
              {
              cfive? <div className="div-5"></div>:null
            }
           
        </div>

       
    </div>
      </div>
    );
  }
  
  export default Bolloon;