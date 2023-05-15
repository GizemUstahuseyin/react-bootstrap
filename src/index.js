import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Header';
import arkaplan from './images/arkaplan.jpg';
import Router from './sayfalar/Router';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${arkaplan})`, height: "100vh", backgroundSize: "cover" }}>
      
      <div>
        <Router />
      </div>  
      
      </div>
  </React.StrictMode>
);

reportWebVitals();
