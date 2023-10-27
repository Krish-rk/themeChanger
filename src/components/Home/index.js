import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const font = isDarkTheme ? 'white' : 'dark'
      return (
        <div>
          <img src={imgUrl} alt="home" />
          <h1 className={font}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
