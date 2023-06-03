import './App.css';
import { useRef } from 'react';
import Header from './components/Header';
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animIntroduc from './assets/animations/introduc-animation.json';

function App() {
  const introRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="container">
      <Header />
      <main>
        <div className='introduction'>
        <Lottie className='animat' lottieRef={introRef} animationData={animIntroduc} />
          <div>
            <h1>
              Portfólio de <br/>
              <span>
                Enzo Santana
              </span>
            </h1>
            <Lottie className='animat' lottieRef={introRef} animationData={animIntroduc} />
          </div>
        </div>
        <div className='certificates'>

        </div>
      </main>
    </div>
  );
}

export default App;
