import React, { useEffect } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Home from './pages/Home';
import Menu from './pages/Menu';
import { useTransition } from 'react-spring';
import { animated } from 'react-spring/renderprops-universal';
import Error404 from './pages/Error404';
import Impressum from './pages/Impressum';
const theme = {
  textPrimary: "rgb(200, 145, 26)",
  button: "rgb(218, 165, 32)",
}
const StyledAnimatedSwitch = styled(AnimatedSwitch)`
  /* position: relative;
  & > div{
    position: absolute;
  } */
`
const ScrollToTop = props => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/speisekarte" component={Menu} />
          <Route path="/impressum" component={Impressum}/>
          <Route component={Error404}/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
export default App