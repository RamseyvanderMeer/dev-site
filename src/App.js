import './App.scss';
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Header, Footer, About, Projects, Contact, Photography } from './components/index'

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
    <div className="container">
          <section className="one">
            <h1>First</h1>
          </section>
          <section className="two">
            <h1>second</h1>
          </section>
          <section class="three">
            <h1>third</h1>
          </section>
          <section className="four">
            <h1>fourth</h1>
          </section>
    </div>
    </div>
  );
}

export default App;
