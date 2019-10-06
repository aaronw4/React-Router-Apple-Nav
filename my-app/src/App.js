import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple} from '@fortawesome/free-brands-svg-icons';
import {data} from './Components/data';
import './App.css';
import home from './Components/home';
import Mac from './Components/mac';
import Ipad from './Components/ipad';
import Iphone from './Components/iphone';
import Watch from './Components/watch';
import Tv from './Components/tv';
import Music from './Components/music';
import Support from './Components/support';
import Search from './Components/search';
import Bag from './Components/bag';


function App() {
  const [items, setItems] = useState(data);
  
  return (
    <div>
      <nav className='navBar' id={window.location.pathname}>
          <NavLink to='/' className='link'><FontAwesomeIcon className='icon' icon={faApple}/></NavLink>
          <NavLink to='/mac' className='link'>Mac</NavLink>
          <NavLink to='/ipad' className='link'>iPad</NavLink>
          <NavLink to='/iphone' className='link'>iPhone</NavLink>
          <NavLink to='/watch' className='link'>Watch</NavLink>
          <NavLink to='/tv' className='link'>TV</NavLink>
          <NavLink to='/music' className='link'>Music</NavLink>
          <NavLink to='/support' className='link'>Support</NavLink>
          <NavLink to='/search' className='link'><img className='symbol' alt='search' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg'/></NavLink>
          <NavLink to='/bag' className='link'><img className='symbol' alt='bag' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg'/></NavLink>
      </nav>
      <Route exact path='/' component={home}/>
      <Route path='/mac' render={() => {return <Mac items={items.mac}/>}} />
      <Route path='/ipad' render={() => {return <Ipad items={items.ipad} name='ipad'/>}} />
      <Route path='/iphone' render={() => {return <Iphone items={items.iphone} name='iphone'/>}} />
      <Route path='/watch' render={() => {return <Watch items={items.watch} name='watch'/>}}/>
      <Route path='/tv' render={() => {return <Tv items={items.tv} name='tv'/>}}/>
      <Route path='/music' render={() => {return <Music items={items.music} name='music'/>}}/>
      <Route path='/support' component={Support}/>
      <Route path='/search' component={Search}/>
      <Route path='/bag' component={Bag}/>
    </div>
  );
}

export default App;
