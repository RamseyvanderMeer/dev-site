import './App.scss';
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Header, Footer, About, Projects, Contact, Photography, Main } from './components/index'

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Molengo', 'Varela']
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

export default App;
