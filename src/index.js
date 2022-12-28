import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './header/App';
import About from './aboutUs/About'
import Service from './service/service';
import Info from './Info/Info';
import Sample from './Sample/Sample';
import Plans from './Plans/Plans';
import Lorem from './Lorem/Lorem'
import Comment from './Comment/Comment'
import Cantact from './CantactUs/Cantact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
        <App />
        <About />
        <Service />
        <Info />
        <Sample />
        <Plans />
        <Lorem />
        <Comment />
        <Cantact />
    </div>
);
