import React from 'react';
import './Facerecog.css'

const FaceRecognition =({imageUrl, box})=>{
    return(
       <div className='center ma'>
            <div className='absolute mt2'>
            <img id='InputImage'alt='' src={imageUrl}
              width='400px'
              height='auto' />
              <div className='bounding-box'style={{bottom:box.bottomRow,left:box.leftCol,right:box.rightCol,top:box.topRow}}></div>
        </div>
       </div>
    )
}


export default FaceRecognition;

// https://www.tugraz.at/uploads/pics/Alexander_by_Kanizaj_02.jpg