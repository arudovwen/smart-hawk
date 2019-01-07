import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo';
import ImageForm from '../ImageForm/ImageForm';
import Rank from '../Rank/Rank';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import FaceRecognition from '../FaceRecognition/FaceRecognition';
import Clarifai from  'clarifai'

const particlesOpt={
  particles:{
    number:{
      value:150,
      density:{
        enable:true,
        value_area:900
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'fb1d5ea17bf5434a8eeac8b0cc0b3b97'
 });
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      ImageUrl:'',
      box:{},
      route:'signin',
      IsSignedin:false
    }
  }
  calculateFaceLocation =(data)=>{
    const clarifaiImage = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('InputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiImage.left_col * width,
      topRow: clarifaiImage.top_row * height,
      rightCol : width - (clarifaiImage.right_col * width),
      bottomRow : height - (clarifaiImage.bottom_row * height)
     }
    }
    displayFaceBox=(box)=>{
      console.log(box);
      
          this.setState({box:box})
    }
  onInputChange=(event)=>{
   
      this.setState(
       { input:event.target.value }
        )
  }

  onButtonSubmit=()=>{
    this.setState({
      imageUrl:this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response=> this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err)) 
      // there was an error
    
    }
    onRouteChange=(route)=>{
      
      if(route==='signin'){
        this.setState({IsSignedin:false});
      }else if (route==='home') {
        this.setState({IsSignedin:true});
      }
      this.setState({route:route})
    }
   
  

 
  render() {
    return (
      
     
     <div className='App'> 
      <p className='f1'>{'SmartHawk'}</p>   
        <Particles className='particles'
            params={ particlesOpt}
        />
        <Navigation onRouteChange={this.onRouteChange}
                    IsSignedin={this.state.IsSignedin}
        />
           {this.state.route==='home'?
          <div>
            <Logo/>
            <Rank/>
            <ImageForm  onInputchange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}
                />
            <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
          </div>  
          :(
              this.state.route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange}/>
            : <Register onRouteChange={this.onRouteChange}/>   
          )

          }     
     </div>
     
    );
  }
}

export default App;
