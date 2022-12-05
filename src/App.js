import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Side from './Side';
import Main from './Main';
import './app.css';

const App = () => {
    return (
       
            <div className='wrapper'>
                <header className='header'><Header /></header>
                <div className='side'><Main /></div>
                <div className='content'><Side /></div>
                <footer className='footer'><Footer /></footer>
            </div>
    
        
    );
}

export default App;
