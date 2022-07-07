import React, { useEffect, useState } from 'react'
import styles from "./Timer.module.css"
const Stopwatch = () => {
    const [min, setmin]= useState(0)
    const [sec,setsec]= useState(0)
    const [milisec,setmilisec]= useState(0)
    const [starttime,setstarttime]= useState(false)

    useEffect(()=>{
        let id=null
        if(starttime)
        {
           id= setInterval(()=>{
               if(milisec<100)
               {
                   setmilisec((prevmilisec)=>prevmilisec+1)
               }
               if(milisec===99)
               {
                setmilisec(0);
                if (sec < 59) {
                  setsec((prevsec) => prevsec + 1);
                } else {
                  setmin((prevmin) => prevmin + 1);
                  setsec(0);
                }
               }

           },10)
        }
        else {
            clearInterval(id);
          }
      
          return () => {
            clearInterval(id);
          };

    },[starttime,sec,milisec])
  return (
    
        <>
      <div className={styles.time}>
        <span>{min < 10 ? `0${min}` : min}</span>m:
        <span>{sec < 10 ? `0${sec}` : sec}</span>s:
        <span>{milisec < 10 ? `0${milisec}` : milisec}</span>ms
      </div>
      <div className={styles.btn}>
        {starttime ? (
          <button onClick={() => setstarttime(false)}>Stop</button>
        ) : (
          <button onClick={() => setstarttime(true)}>Start</button>
        )}

        <button
          onClick={() => {
            setmin(0);
            setsec(0);
            setmilisec(0);
            setstarttime(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
       
   
  )
}

export default Stopwatch
