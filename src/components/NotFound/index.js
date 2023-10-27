import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bg = isDarkTheme ? 'white-bg' : 'dark-bg'
      return (
        <div className={bg}>
          <img src="https://assets.ccbp.in/frontend/react-js/not-found-img.png" />
          <h1>Lost Your Way</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
