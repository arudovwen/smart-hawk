import React from 'react';
import Tilt from 'react-tilt'
import hawk from './hawk.png';
import './Logo.css'
 



const Logo =()=>{
    return(
        
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} 
            style={{ height: 150, width: 150 ,padding:'5px'}} >
            <div className="Tilt-inner">
             <img style={{paddingTop:'5px', paddingRight:'10px'}} alt='logo' src={hawk} /></div>
            </Tilt>
        </div>
       
    )
}


export default Logo;