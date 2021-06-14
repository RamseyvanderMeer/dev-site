import './App.scss';
import {useEffect} from 'react'
import WebFont from 'webfontloader';


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
      <p>test for font</p>
    </div>
  );
}

export default App;
