import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../fireBaseConfig';
import './styles.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user['email']);
      navigate(`/dashboard`);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="form">
        <div className="input-div">
          <label className="label"></label>
          <input type="email" className="input-field" placeholder="E-mail Address"
            onChange={(event) => {
              setEmail(event.target.value);
            }} />
        </div>
        <div className="input-div">
          <label className="label"></label>
          <input type="password" className="input-field" placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }} />
        </div>
        <button className="Button Button__Danger__18hYt" onClick={login}>SIGNIN</button>
        <div>
          <Link className="link" to={'/signup'}> Go to SignUp page</Link>
        </div>
      </div>
    </>
  )
}
export default Login;
