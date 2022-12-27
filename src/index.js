import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './header/App';
import About from './aboutUs/About'
import Service from './service/service';
import Info from './Info/Info';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
        <App />
        <About />
        <Service />
        <Info />
    </div>
);
