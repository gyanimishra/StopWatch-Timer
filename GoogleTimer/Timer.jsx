import React, { useEffect, useState } from 'react'
import styles from "./Timer.module.css"
import TimerInput from './TimerInput'

const Timer = () => {
    const [min, setmin]= useState(15)
    const [sec,setsec]= useState(0)
    const [Input, setInput]=useState(false)
    const [starttime,setstarttime]= useState(false)


    useEffect(()=>{
        let id=null;
        if(starttime)
        {
            id=setInterval(()=>{
                if(sec>0)
                {
                    setsec((prevsec)=> prevsec-1);
                }
                if(sec===0)
                {
                    if(min===0)
                    {
                        clearInterval(id)
                    }
                    else{
                        setmin((prevmin)=>prevmin-1);
                        setsec(59)
                    }
                }
            },1000)  }
        else {
            clearInterval(id);
          }
      
          return () => {
            clearInterval(id);
          };
    })
  return (
    <>
    {Input ? (<TimerInput setmin={setmin}/>):(
<>

<div className={styles.time}
onClick={()=>{setInput(true)
    setstarttime(false)
    setsec(0)
}}>
      <span>{min}</span>m:
      <span>{sec<10? `0${sec}`:sec}</span>s:
    
    </div>


   
    </>

    )}
     <div className={styles.btn}>
       {starttime?(<button onClick={()=>setstarttime(false)}>Stop</button>):
       ( <button onClick={()=>{setstarttime(true) ;setInput(false)}}> Start </button> )  }
     
      <button   onClick={() => {
            setmin(15);
            setsec(0);
            setstarttime(false);
          }}>Reset</button>
    </div>
    
  </>
  )
}

export default Timer
