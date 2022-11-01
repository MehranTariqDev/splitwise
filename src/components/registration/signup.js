import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../fireBaseConfig';
import './styles.css'


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="form">

          <div className="input-div">
            <label className="label"></label>
            <input type="text" className="input-field" placeholder="Name"
            onChange={(event) => {

            }} />
          </div>
          <div className="input-div">
            <label className="label"></label>
            <input type="email" className="input-field" placeholder="Email Address"
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
          <div className="input-div">
            <label className="label"></label>
            <input type="password" className="input-field" placeholder="Confirm Password"
            onChange={(event) => {

            }} />
          </div>
          <button className="Button Button__Danger__18hYt" onClick={register}>SIGNUP</button>
          <div>
            <Link className="link" to={'/login'}> Go to LogIn page</Link>
        </div>
      </div>
      {/* <h2>User is login</h2>
      {auth.currentUser.email} */}
    </>
  )
}
export default SignUp;
