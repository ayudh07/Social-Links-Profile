import { useState } from 'react'
import Card from './components/card';
import data from './data/socials.json'
import Button from './components/button';
import profileImage from './assets/images/logo.png';
function App() {


  return (
    <div className='container'> 
      <Card predefinedStyleTags='profile-card'>
        <img src={profileImage} alt='Profile Photo' className='profile-photo'/>
        <div className='introduction-details'>
          <h2 className='text-white profile-name'>Ayudh Sarkar</h2>
          <p className='text-white profile-location'>Hyderabad, India</p>
        </div>
        <span className='text-white profile-quote'>&quot;Front-end developer and Product Designer.&quot;</span>
        <div className='button-group'>
          {data.map((data, index) =>{
            return <Button title={data.title} key={index} predefinedStyleTags='social-button text-white'/>
          })}
        </div>
      </Card>
      
    </div>
  )
}

export default App
