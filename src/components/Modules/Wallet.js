import React, { useState } from 'react'
const styles = {
    detailsPopup: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '324px',
        background: 'white',
    }
};
const Wallet = ({handleGoBack, setIsWalletVisible}) => {
    const [initialBalance, setInitialBalance] = useState();
    const storedUser = sessionStorage.getItem('user');
    const user = storedUser ? JSON.parse(storedUser) : null;
    const [error, setError] = useState('');
    const handleSetup = () => {
        if (initialBalance < 1000 || isNaN(initialBalance) || initialBalance.includes('.')) {
            setError('Invalid amount');
            return;
        }
        const updatedUser = {
            ...user,
            availableAmount: parseFloat(user.availableAmount) + parseFloat(initialBalance),
        };
        sessionStorage.setItem('user', JSON.stringify(updatedUser));
        setIsWalletVisible(false);
    }

    return (
        <div className="details-popup" style={styles.detailsPopup}>
            <div className='card' style={{ width: "324px", padding: "30px", height: "565px", position: 'relative' }}>
            <div className='d-flex justify-content-between'>
                <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} onClick={handleGoBack} ></i>
                <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} ></i>
            </div>
                <h4 className="mt-3" style={{ textAlign: 'left' }}>Add Money to your Wallet</h4>
                <div>
                    <p style={{ textAlign: 'left', fontSize: '11px', color: '#414345' }}>Enter the amount to add (minimum: 1000)</p>
                    <input required onChange={(e) => setInitialBalance(e.target.value)} type="text" className="form-control mt-1" name="username" />
                    {error && <p style={{fontSize: '13px'}} className="mt-1 text-danger">{error}</p>}
                </div>
                <div className="bot" style={{ position: 'absolute', bottom: '13px' }}>
                    <button className="btn mb-3" style={{ background: 'rgb(37, 37, 161)', width: '263px', color: 'white', fontSize: '11px', borderRadius: '25px' }} type='submit' onClick={handleSetup}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Wallet