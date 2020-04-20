import React from "react"

function Home(props) {
  return (
    <div id="home-section">
      <img src="https://i.imgur.com/QHf1L26.jpg" alt="portrait" className="profilepic" />
      <div className="sideofpic">
        <div className="myname"><p>CJ Starke</p></div>
        <div className="homecard">
          <h1>Software Engineer</h1>
          <div>Hello there! I am a  fullstack developer with a focus on React, Javascript, Ruby, Ruby on Rails, and MongoDB. </div>
        </div>
      </div>


    </div>
  )
}

export default Home;