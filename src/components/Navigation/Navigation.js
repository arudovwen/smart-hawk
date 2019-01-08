import React from 'react';
import './Navigation.css'


const Navigation =({onRouteChange, IsSignedin})=> {

  
         if (IsSignedin){
         return (<nav style={{display:'flex',justifyContent:'flex-end'}}> 
         
          <p onClick={()=>onRouteChange('signin')}
          className='f3 link dim black underline pa1 pointer mr'>Sign Out</p>
        </nav>
         )
        }else{
          
         return (<nav style={{display:'flex',justifyContent:'flex-end'}}> 
         
          <p 
          onClick={()=>onRouteChange('signin')}
          className='f3 link dim black underline pa1 pointer'>Sign In</p>
          
          <p  onClick={()=>onRouteChange('register')}
          className='f3 link dim black underline pa1 pointer mr'>Register</p>

          </nav>
         )
        }

      
            
        

}

export default Navigation;
