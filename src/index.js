import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Router  from './Screens/Router';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);

reportWebVitals();
