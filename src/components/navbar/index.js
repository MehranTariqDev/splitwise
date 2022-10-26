import './styles.css';
import { Link } from "react-router-dom";
import image from '../../assets/images/splitwise.png'

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span><img className="Logo" src={image} alt="logo" /></span>
          <span>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="navbar-nav">
                <Link className="link" to={'/signup'} >SignUp</Link>
              </li>
              <li className="navbar-nav">
                <Link className="link" to={'/login'}> Login</Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
