import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WalletSetup = ({ user, onComplete }) => {
    const [initialBalance, setInitialBalance] = useState();
    const navigate = useNavigate();

    const handleSetup = () => {
        const amountAsNumber = parseFloat(initialBalance);
        if (amountAsNumber < 1000 || isNaN(amountAsNumber) || initialBalance.includes('.')) {
            return;
        }
        const updatedUser = {
            ...user,
            availableAmount: amountAsNumber,
        };
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
        onComplete();
        navigate('/dashboard');
    };

    return (
        <div className='card' style={{ width: "324px", padding: "30px", height: "565px", position: 'relative' }}>
            <h4>Add Money to your Wallet</h4>
            <div>
                <p style={{ fontSize: '11px', color: '#414345' }}>Enter the amount (minimum: 1000)</p>
                <input required onChange={(e) => setInitialBalance(e.target.value)} type="text" className="form-control mt-1" name="username" />
            </div>
            <div className="bot" style={{ position: 'absolute', bottom: '13px' }}>
                <button className="btn mb-3" style={{ background: 'rgb(37, 37, 161)', width: '263px', color: 'white', fontSize: '11px', borderRadius: '25px' }} type='submit' onClick={handleSetup}>Add</button>
            </div>
        </div>
    );
};

export default WalletSetup;
