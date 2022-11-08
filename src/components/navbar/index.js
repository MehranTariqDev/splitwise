import './styles.css';
import { Link } from "react-router-dom";
import image from '../../assets/images/splitwise.png'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../fireBaseConfig';

const Navbar = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <span><img className="Logo" src={image} alt="logo" /></span>
          <span>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <div>
                {user ? (
                  <>
                    {user?.email}
                  </>
                ) : (
                  <>
                    <li className="navbar-nav">
                      <Link className="links" to={'/signup'} >SignUp</Link>
                    </li>
                    <li className="navbar-nav">
                      <Link className="links" to={'/login'}> Login</Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </span>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
