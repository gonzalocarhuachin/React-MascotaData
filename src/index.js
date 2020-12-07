import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainHeader from './common/MainHeader';
import MainNav from './common/MainNav';
import MainFooter from './common/MainFooter';
import Nosotros from './components/Nosotros/Nosotros';
import Testimonios from './components/Testimonios/Testimonios';
// import Recordatorios from './components/Recordatorios/Recordatorios';
// import Mascotas from './components/Mascotas/Mascotas';
import Login from './components/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainHeader />
      <MainNav />
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/nosotros" component={Nosotros}/>
        <Route exact path="/testimonios" component={Testimonios}/>
        {/* <Route exact path="/recordatorios" component={Recordatorios}/>
        <Route exact path="/mismascotas" component={Mascotas}/> */}
        <Route exact path="/iniciosesion" component={Login}/>
      </div>
      <MainFooter />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();