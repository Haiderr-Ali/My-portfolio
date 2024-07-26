import React from 'react'
import "./Project.css"
function Project() {
  return (
    <div id='projects' className='mywork'>
      <div className="myworktitle">
        <h1>Projects</h1>
      </div>
      <div className="myworkcontainer">
        
        <div className="imagebox">
            <img src="EBazar.png" alt="EBazar-Project" />
            <div className="linkbutton">
            <p>E-Bazar: <a href="https://e-bazaronlineshop.netlify.app/" target='_blank'>Click to visit</a> </p>
        </div>
        </div> 
        
        <div className="imagebox">
            <img src="blog.png" alt="Blog-Project" />
            <div className="linkbutton">
            <p>Blog-Website: <a href="https://your-blog-wheat.vercel.app/" target='_blank'>Click to visit</a> </p>
        </div>
        </div>
        
        <div className="imagebox">
            <img src="amazon.png" alt="Amazon-Project" />
            <div className="linkbutton">
            <p>Amazon Clone: <a href="https://haiderr-ali.github.io/Amazon-Clone/" target='_blank'>Click to visit</a> </p>
        </div>
        </div>
        
        
        
        <div className="imagebox">
            <img src="age.png" alt="Age calculator-Project" />
            <div className="linkbutton">
            <p>Age Calculator: <a href="https://haiderr-ali.github.io/Age-Calculator/" target='_blank'>Click to visit</a> </p>
        </div>
        </div>
        
        <div className="imagebox">
            <img src="weather.png" alt="Age calculator-Project" />
            <div className="linkbutton">
            <p>Weather App: <a href="https://haiderr-ali.github.io/weather-app/" target='_blank'>Click to visit</a> </p>
        </div>
        </div>
        
        <div className="imagebox">
            <img src="currency.png" alt="Age calculator-Project" />
            <div className="linkbutton">
            <p>Currency converter: <a href="https://05currency-converter.netlify.app/" target='_blank'>Click to visit</a> </p>
        </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Project
