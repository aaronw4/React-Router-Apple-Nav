import React from 'react';
import {Link, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import home from './Components/home';
import mac from './Components/mac';
import ipad from './Components/ipad';
import iphone from './Components/iphone';
import watch from './Components/watch';
import tv from './Components/tv';
import music from './Components/music';
import support from './Components/support';
import search from './Components/search';
import bag from './Components/bag';

function App() {
  return (
    <div>nav
            <nav>
                <Link to='/'><FontAwesomeIcon icon={faApple}/></Link>
                <Link to='/mac'>Mac</Link>
                <Link to='/ipad'>iPad</Link>
                <Link to='/iphone'>iPhone</Link>
                <Link to='/watch'>Watch</Link>
                <Link to='/tv'>TV</Link>
                <Link to='/music'>Music</Link>
                <Link to='/support'>Support</Link>
                <Link to='/search'>Search</Link>
                <Link to='/bag'>Bag</Link>
            </nav>
            <Route exact path='/' component={home}/>
            <Route path='/mac' component={mac}/>
            <Route path='/ipad' component={ipad}/>
            <Route path='/iphone' component={iphone}/>
            <Route path='/watch' component={watch}/>
            <Route path='/tv' component={tv}/>
            <Route path='/music' component={music}/>
            <Route path='/support' component={support}/>
            <Route path='/search' component={search}/>
            <Route path='/bag' component={bag}/>
        </div>
  );
}

export default App;
