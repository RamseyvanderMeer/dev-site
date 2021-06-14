import './App.scss';
import {useEffect} from 'react'
import WebFont from 'webfontloader';
import {Header, Footer, About} from './components/index'


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);

  return (
    <div className="App">
      <Header />
        <About />
      <Footer />
    </div>
  );
}

export default App;
