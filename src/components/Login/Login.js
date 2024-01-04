import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.js';
import WalletSetup from './WalletSetup.js';
import DashBoard from '../Dashboard/DashBoard';
import Background from '../Animation/background.js';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (phoneNumber) => {
    let newUser;
    const existingUser = null;
    if (existingUser) {
      setUser(existingUser);
    } else {
      newUser = {
        phoneNum: phoneNumber,
        availableAmount: 0,
        totalCashback: 0,
        transactions: [],
      };
      setUser(newUser);
    }

    sessionStorage.setItem('user', JSON.stringify(newUser));
    setSetupComplete(false); // Reset setup status
  };

  const handleSetupComplete = () => {
    setSetupComplete(true);
  };

  return (
    <div className="bg">
      <div className="intro">
        <h3>This is a Simple Google Play Demo</h3>
        <p className='ms-5 text-white'>- by ZoroTheCoder (Chewang)</p>
      </div>
      <div className="desc d-flex justify-content-between align-items-center">
        <i className="fa-solid fa-arrow-left" style={{ fontSize: '32px', cursor: 'pointer', color: 'white' }}></i>
        <div className="d-flex justify-content-center align-items-center " style={{ height: '100%', width: '90%', margin: 'auto' }}>
          <h5 className=' text-white'>This application uses temporary data storage(session)</h5>
        </div>
      </div>
      <div className="descr d-flex justify-content-between align-items-center">
        <i className="fa-solid fa-arrow-left" style={{ fontSize: '32px', cursor: 'pointer', color: 'white' }}></i>
        <div className="d-flex justify-content-center align-items-center " style={{ height: '100%', width: '90%', margin: 'auto' }}>
          <h5 className=' text-white'>This is for demonstration only</h5>
        </div>
      </div>
      <Background></Background>
      <div>
        {!user ? (
          <LoginForm onLogin={handleLogin} />
        ) : !setupComplete ? (
          <div className='d-flex justify-content-center align-items-center'>
            <WalletSetup user={user} onComplete={handleSetupComplete} />
          </div>
        ) : (
          <DashBoard />
        )}
      </div>
    </div>
  );
};

export default Auth;
