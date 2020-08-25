import React, {Component, lazy, Suspense} from 'react';
import './App.css';
// import SoMeNav from './Components/SocialMediaNavigation'
// import Projects from './Projects/Projects'

const SoMeNav = lazy(() => import('./Components/SocialMediaNavigation'));
const Projects = lazy(() => import('./Projects/Projects'));



class App extends Component {
  render() {
    return (
      <div className="app">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Projects/>
          <SoMeNav/>
        </Suspense>
        <a href="https://www.linkedin.com/in/thomasbjorksund" target="_blank" className="copyright-link" rel="noopener noreferrer" >
                © Thomas Björksund 2020
            </a>
      </div>
    );
  };
};

export default App;
