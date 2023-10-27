import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const toggleImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const font = isDarkTheme ? 'white' : 'dark'
      return (
        <nav>
          <ul>
            <li>
              <img src={imgUrl} alt="website logo" />
            </li>
            <li>
              <Link to="/">
                <p className={font}>Home</p>
              </Link>
              <Link to="/about">
                <p className={font}>About</p>
              </Link>
            </li>
            <button onClick={changeTheme}>
              <li>
                <img src={toggleImageUrl} alt="theme" />
              </li>
            </button>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
