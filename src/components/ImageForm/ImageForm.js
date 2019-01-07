import React from 'react';
import './ImageForm.css';


const ImageForm=({onInputchange , onButtonSubmit})=>{
  return(
      <div>
        <p className='tc f3'>
            {'The Smart Hawk will detect faces in your Pictures....Git it a try'}
        </p>
       <div className='center'>
            <div className='form center pa4 br3 shadow-5 '>
            <input className=' f4 w-70 center  pa2  ' type='text' 
             onChange={onInputchange}
             />
            <button className='w-30 f4 p grow link pointer 
                                ph3 pv2 white bg-light-purple pa2'
                                onClick={onButtonSubmit}>Detect
            </button>
            </div>
        </div>
      </div>
  )
}


export default ImageForm;