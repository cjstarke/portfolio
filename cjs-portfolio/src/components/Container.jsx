import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Projects from './Projects'
import Header from './Header'

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div>
        <Header />
        <Home />
        <Projects />
        <About />
      </div>
    )
  }
}
export default Container