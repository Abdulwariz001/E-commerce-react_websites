import {Link} from 'react-router-dom';
import Home from '../../Pages/Home';
import Login from '../../Pages/Login';
import Productpage from '../../Pages/Productpage';
import Registration from '../../Pages/Registration';

function Nav() {
    return (
       <header>
          <nav>
       <Link to="/" > Home</Link>
       <Link to="/products" > Products</Link>
       <Link to="register">Registration</Link>
       <Link to="login">Login</Link>
       <input type='search' placeholder='Search products' />
          </nav>
       </header>
    )
  }
  
  export default Nav