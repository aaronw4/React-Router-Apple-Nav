import React from 'react';
import {Link, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple} from '@fortawesome/free-brands-svg-icons';
import {faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons';
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
    <div>
      <nav className='navBar'>
          <Link to='/' className='link'><FontAwesomeIcon className='icon' icon={faApple}/></Link>
          <Link to='/mac' className='link'>Mac</Link>
          <Link to='/ipad' className='link'>iPad</Link>
          <Link to='/iphone' className='link'>iPhone</Link>
          <Link to='/watch' className='link'>Watch</Link>
          <Link to='/tv' className='link'>TV</Link>
          <Link to='/music' className='link'>Music</Link>
          <Link to='/support' className='link'>Support</Link>
          <Link to='/search' className='link'><img className='symbol' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg'/></Link>
          <Link to='/bag' className='link'><img className='symbol' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg'/></Link>
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
