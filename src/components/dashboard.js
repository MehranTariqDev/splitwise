import { auth } from '../fireBaseConfig';
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from 'react';
import './styles.css'
import Popup from './popup/index';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const logout = async () => {
    await signOut(auth);
  }
  const platesPage = () => {
    window.location.href = 'https://apps.apple.com/us/app/plates-by-splitwise-split/id669801762?ign-mpt=uo%3D4';
  }
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <>
      <div className='row'>
        <div className='col-3'>
        </div>
        <div className='center-div col-6'>
          <div className='top-div'>
            <h3>
              Dashboard
            </h3>
            <input type="button" value="Add expense" className='orange-button' onClick={togglePopup}/>
            {isOpen && <Popup
              handleClose={togglePopup}
              content={<>
                <h4>Add a expense</h4>
                <p>With <b>you</b> and: </p>
                <div className="form">
                  <div className="input-div">
                    <label className="label"></label>
                    <input type="email" className="input-field" placeholder="Enter a description"
                      onChange={(event) => {

                      }} />
                  </div>
                  <div className="input-div">

                    <input type="email" className="input-field" placeholder="0.00"
                      onChange={(event) => {

                      }} />
                  </div>
                  <p>Paid by </p>
                </div>
                <button className='btn btn-danger m-1'>cancel</button>
                <button className='btn btn-success'>save</button>
              </>}
            />}
          </div>
          <div className='bottom-div'>
            <div className='row'>
              <div className='col-4'>
                <img className='dashboard-img'
                src='https://assets.splitwise.com/assets/fat_rabbit/empty-table-effed2a2e610373b6407d746cb95858f5d47329c8610bb70f1fd2040dfa35165.png'
                alt='dashboard img'
                />
              </div>
              <div className='col-8'>
                <h2>User login is: {user?.email}</h2>
                <h2 className='p-2'><b>You’re all settled up. Awesome!</b></h2>
                <p className='instruction-text'>To add a new expense, click the orange “Add an expense” button.</p>
              </div>
            </div>
            <button onClick={logout}>SignOut</button>
          </div>
        </div>
        <div className='col-3'>
          <p className='rightside-heading'>SPLIT THE DINNER BILL</p>
          <img
            src='https://assets.splitwise.com/assets/fat_rabbit/sidebar/plates-01a8a1ced1d926765746e2638c42d5d829416fb14326e1a1be5cd34440d4ba76.png'
            alt='fork-img' />
          <p className='p-2'>Check out Plates, our free iOS app to quickly and easily split dinner bills with friends.</p>
          <button className='orange-button' onClick={platesPage}>Download Plates</button>
        </div>
      </div>
    </>
  )
}
export default Dashboard;
