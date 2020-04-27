import React from "react"

function Projects(props) {
  return (
    <section id="projects-section">
      <div className="section-title">Projects</div>
      <div className="projects">
        <div className="project odd">
          <div className="project-img" >
            <img src="https://i.imgur.com/N6S7Ftg.png" alt="" />
          </div>
          <div className="project-text">
            <h2>Desk Jockey</h2>
            <div>Desk Jockey is a React App with full CRUD functionality. Users can create their own Samples with a BeatMaker that only uses sounds found at the office.</div>
            <div>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-react-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
            </div>
            <div className="links">
              <a href="http://deskjockey.surge.sh/" target="_blank">App</a>
              <a href="https://github.com/cjstarke/desk-jockey" target="_blank">Repo</a>
            </div>
          </div>
        </div>
        <div className="project even">
          <div className="project-text">
            <h2>Screen Test</h2>
            <div>Screen Test is a movie trivia game. Users anwser 5 questions after choosing a difficulty and are given a final score. It is a React App.</div>
            <div>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-react-plain-wordmark"></i>
            </div>
            <div className="links">
              <a href="https://screentest.netlify.app/" target="_blank">App</a>
              <a href="https://github.com/cjstarke/screentest" target="_blank">Repo</a>
            </div>
          </div>
          <div className="project-img">
            <img src="https://i.imgur.com/vXu4nAZ.png" alt="" />
          </div>
        </div>
        <div className="project odd">
          <div className="project-img">
            <img src="https://i.imgur.com/XJNAtjA.png" alt="webpage" />
          </div>
          <div className="project-text">
            <h2>Müd</h2>
            <div>Müd is a vanilla javascript app that takes the users location, the current weather, and time of day and returns a specific mood (like a mood ring).</div>
            <div>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
            </div>
            <div className="links">
              <a href="http://muud.surge.sh/" target="_blank">App</a>
              <a href="https://github.com/cjstarke/muud" target="_blank">Repo</a>
            </div>
          </div>
        </div>
        <div className="project even">
          <div className="project-text">
            <h2>Wheels Deals</h2>
            <div>Wheels Deals is a React App with full CRUD functionality. It is a marketplace for users to buy and sell used Bikes. This was a group project, and I developed the front end funcionality for users to create, update and delete bikes.</div>
            <div>
              <i className="devicon-react-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-express-original-wordmark"></i>
            </div>
            <div className="links">
              <a href="http://wheel-deals.surge.sh/" target="_blank">App</a>
              <a href="https://github.com/the-bike-app/web-app" target="_blank">Repo</a>
            </div>
          </div>
          <div className="project-img">
            <img src="https://i.imgur.com/JHkBa4X.png" alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects;