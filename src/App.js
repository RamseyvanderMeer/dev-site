import './App.scss';
import { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Header, Footer, About, Projects, Contact } from './components/index'


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
      <body>
        <div className="container">
          <section>
          <About />
          </section>
          <section>
          <Projects />
          </section>
          <section>
          <Contact />
          </section>
          <section>
          <Footer />
          </section>
        </div>
      </body>
    </div>
  );
}

export default App;
