import './App.scss';
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Header, Footer, About, Projects, Contact, Photography } from './components/index'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto']
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
