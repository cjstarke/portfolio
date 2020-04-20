import React from 'react'

class Header extends React.Component {
  state = {}
  render() {
    return (
      <header>
        <a href="#home-section">Home</a>
        <a href="#projects-section">Projects</a>
        <a href="#about-section">About</a>
      </header>

    )
  }
}
export default Header