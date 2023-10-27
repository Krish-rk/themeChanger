import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const font = isDarkTheme ? 'white' : 'dark'
      return (
        <div>
          <img src={imgUrl} />
          <h1 className={font}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
