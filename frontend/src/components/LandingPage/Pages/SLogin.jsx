import React, { useState } from 'react';
import axios from 'axios';
import styles from './SLogin.module.css'
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup'
export default function SLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenF, setIsOpenF] = useState(false);
  function handleEvent(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login',{username,password})
      .then(res => {
        console.log(res);
        if(res.data === "Login Succes...") {
          setIsOpenS(true); // Open the popup
        } else {
          setIsOpenF(true);
        }
      })
      .catch(err => {
        console.log(err);
        alert('Failed');
      });
  }

  return(
<>

<div className={styles.body}>
  <section className={styles.sec}>

<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
          <div className={styles.signin}>
            <div className={styles.content}>
              <h2 className='font-bold'>Student Login</h2>
              <form className={styles.form} onSubmit={handleEvent}>
                <div className={styles.inputBox} >
                  <input type="text" id='username' name='username' required onChange={e => setUsername(e.target.value)} />
                  <i>Username</i>
                </div>
                <div className={styles.inputBox}>
                  <input type="password" id='password' name='password' required onChange={e => setPassword(e.target.value)} />
                  <i>Password</i>
                </div>
                <div className={styles.inputBox}>
                  <button type='submit'>Login</button>
                </div>
              </form>
            </div>
          </div>

  </section>
</div><Popup open={isOpenS} closeOnDocumentClick onClose={() => setIsOpenS(false)}>
        <div className='z-50 bg-lime-500 h-30 flex flex-col p-10 rounded-xl px-20'>
          <p className='font-bold text-xl m-4'> Login Successful</p>
          <button className='bg-red-500 px-4 py-3 font-bold my-16 rounded-xl' onClick={() => {navigate('/hms'); setIsOpenS(false);}}>Okay</button>
        </div>
      </Popup>
      <Popup open={isOpenF} closeOnDocumentClick onClose={() => setIsOpenF(false)}>
        <div className='z-50 bg-lime-500 h-30 flex flex-col p-10 rounded-xl px-20'>
          <p className='font-bold text-xl m-4'> Login Failed</p>
          <button className='bg-red-500 px-4 py-3 font-bold my-16 rounded-xl' onClick={() => {navigate('/login'); setIsOpenF(false);}}>Okay</button>
        </div>
      </Popup>
</>
  );
}
