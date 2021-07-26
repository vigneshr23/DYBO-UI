/*
* Main component to render routes and route matched component.
*/
import React, { useState, useCallback, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import Home from "./components/Home";
import './App.scss';
import ButtonToggle from "./components/ButtonToggle";


export const Theme = React.createContext();

function App() {
  const [theme, setTheme] = useState('light')
  const [mainTheme, setMainTheme] = useState('')

  /**
   * callbacks to update Theme ctx 
   * updates either mainTheme or changes maintheme to dark/light
   */
  const toggleTheme = useCallback(
    (maintheme) => {
      if (maintheme)
        setMainTheme(() => maintheme ? maintheme : mainTheme)
      else
        setTheme(() => (theme === 'dark') ? 'light' : 'dark')
    },
    [theme, mainTheme],
  )

  const ctxValue = useMemo(() => ({
    theme,
    mainTheme,
    toggleTheme
  }),
    [theme, mainTheme, toggleTheme]
  )

  return (
    <div className="App">
      <div className="app-container">
        <Theme.Provider value={ctxValue}>
          <Router>
            <nav className={`navigation ${theme}`}>
              <ul className="navigation-navbar">
                <li className="navigation-nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="navigation-nav-item">
                  <Link to="/forest/register">Forest</Link>
                </li>
                <li className="navigation-nav-item">
                  <Link to="/ocean/register">Ocean</Link>
                </li>
                <li className="navigation-nav-item">
                  <Link to="/desert/register">Desert</Link>
                </li>
              </ul>
              <div className="btn-container">
                <ButtonToggle onToggle={() => toggleTheme()} checked={theme === 'dark'} />
              </div>
            </nav>

            {/* <div className="main-content"> */}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/forest/register" component={RegisterPage} />
              <Route exact path="/ocean/register" component={RegisterPage} />
              <Route exact path="/desert/register" component={RegisterPage} />
            </Switch>
            {/* </div> */}
          </Router>
          <footer className={`footer ${theme}`}>
            Dybo Assessment
            <span style={{
              fontsize: '70%', textdecoration: 'dashed'
            }}>
              <a href="https://www.notion.so/DYBO-Take-Home-React-Task-a416ed6878114941a251a6d03d28af6e" title="problem Statement">problem Statement</a>.
            </span>
          </footer>
        </Theme.Provider>
      </div>
    </div>
  );
}

export default App;
