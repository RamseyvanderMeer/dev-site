import './App.scss';
import {useEffect} from 'react'
import WebFont from 'webfontloader';
import {Header, Footer, About, Projects} from './components/index'


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mr Eaves Sans', 'Handlee']
      }
    });
   }, []);

  return (
    <div className="App">
      <Header />
        <About />
        <Projects />
      <Footer />
    </div>
  );
}

export default App;
