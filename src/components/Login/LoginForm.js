import React, { useState } from 'react';
import Logo from '../../img/logo.png';

const LoginForm = ({ onLogin }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [validationError, setValidationError] = useState('');
    const handleLoginClick = () => {
        if (validatePhoneNumber(phoneNumber)) {
            onLogin(phoneNumber);
            setValidationError('');
        } else {
            setValidationError('Please enter a valid 9-digit phone number.');
        }
    };
    const validatePhoneNumber = (number) => {
        const phoneNumberRegex = /^[0-9]{10}$/;
        return phoneNumberRegex.test(number);
    };
    return (
        <div className='d-flex justify-content-center align-items-center' >
            <form className='card' action="" style={{ width: "324px", padding: "30px", height: "565px",position: 'relative' }}>
                <div className="country d-flex justify-content-end me-2">
                    <div className="lang d-flex align-items-center me-1">
                        <i className="fa-solid fa-globe ms-2 me-2"></i>
                        <p className='me-2'>English</p>
                        <i className="fa-solid fa-caret-down me-2"></i>
                    </div>
                    <div className="nationality d-flex align-items-center me-2">
                        <p className='ms-2 me-2'>IN</p>
                        <i className="fa-solid fa-caret-down me-2"></i>
                    </div>
                    <div className='menu' style={{ color: '#414345' }}>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className="logo mt-4">
                    <img style={{ height: '24px' }} src={Logo} alt="" />
                </div>
                <h4 className='mt-3 mb-0'>Welcome to Google Pay</h4>
                <div className="mb-2">
                    <label htmlFor="username" className="form-label" style={{ fontSize: '11px', color: '#414345' }}>Enter your phone number</label>
                    <input required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control mt-1" name="username" placeholder="00000 00000" pattern="^[0-9]{10}$" />
                </div>
                <div className="bot">
                    <button className="btn mb-3" style={{ background: 'rgb(37, 37, 161)', color: 'white', fontSize: '11px', borderRadius: '25px' }} type='submit' onClick={handleLoginClick}>Continue</button>
                </div>
            </form>
        </div>
    );
};
export default LoginForm;