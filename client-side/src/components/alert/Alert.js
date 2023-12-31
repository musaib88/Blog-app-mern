import React, { useState } from 'react';
import { useEffect } from 'react';
import './alert.css'


export default function Alert({message}) {
    const [isVisible,setIsvisible]=useState(true)
   

    useEffect(() => {
        // Hide the alert after a certain duration (e.g., 3 seconds)
        const timeout = setTimeout(() => {
          setIsvisible(false)
        }, 10000);
    
        // Cleanup the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
      }, [message]);


  return  isVisible?<div className="styled-alert">{message}</div>:null;
}
