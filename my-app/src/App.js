import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
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
          <Link to='/' className='link'><FontAwesomeIcon className='icon' icon={faApple}/></Link>
          <Link to='/mac' className='link'>Mac</Link>
          <Link to='/ipad' className='link'>iPad</Link>
          <Link to='/iphone' className='link'>iPhone</Link>
          <Link to='/watch' className='link'>Watch</Link>
          <Link to='/tv' className='link'>TV</Link>
          <Link to='/music' className='link'>Music</Link>
          <Link to='/support' className='link'>Support</Link>
          <Link to='/search' className='link'><img className='symbol' alt='search' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg'/></Link>
          <Link to='/bag' className='link'><img className='symbol' alt='bag' src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg'/></Link>
      </nav>
      <Route exact path='/' component={home}/>
      <Route path='/mac' render={() => {return <Mac items={items.mac}/>}} />
      <Route path='/ipad' render={() => {return <Ipad items={items.ipad}/>}} />
      <Route path='/iphone' render={() => {return <Iphone items={items.iphone} name='iphone'/>}} />
      <Route path='/watch' render={() => {return <Watch items={items.watch} name='watch'/>}}/>
      <Route path='/tv' render={() => {return <Tv items={items.tv}/>}}/>
      <Route path='/music' render={() => {return <Music items={items.music}/>}}/>
      <Route path='/support' component={Support}/>
      <Route path='/search' component={Search}/>
      <Route path='/bag' component={Bag}/>
    </div>
  );
}

export default App;
