import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Women from './Components/Women/Women';
import Men from './Components/Men/Men'
import Shop from './Components/Shop/Shop';
import AboutUs from './Components/AboutUs/AboutUs';
import MouseCurser from './Components/Home/MouseCurser';
import { ScaleLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setcart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className="App">
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center', height: '100vh', backgroundColor: 'black' }}>
          <ScaleLoader  height={70} color="#ffffff"  width={10} />
          </div>
          ):(
          <Router>
            <Header />
            <MouseCurser />
            <Switch>

              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/women'>
                <Women />
              </Route>

              <Route exact path='/men'>
                <Men />
              </Route>

              <Route exact path='/shop'>
                <Shop />
              </Route>

              <Route exact path='/aboutus'>
                <AboutUs />
              </Route>
            </Switch>
            <Footer />
          </Router>
      )}
        </div>
      );
}
      export default App;