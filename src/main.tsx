import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';

ReactDOM.render(
<React.StrictMode>
<Navbar/>
    <Home />
    <Footer/>
</React.StrictMode>,
document.getElementById('root') as HTMLElement
);
