import './App.scss';
import { useRef } from 'react';
import Header from './components/Header/Header';

import Introduction from './components/Introduction/index';
import AboutMe from './components/AboutMe/index';
import Habilities from './components/Habilities/index';

import photo from './assets/images/photo.jpeg';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Introduction />
        <AboutMe />
        <Habilities />
      </main>
    </div>
  );
}

export default App;
