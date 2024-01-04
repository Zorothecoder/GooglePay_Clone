import React, { useState, useEffect } from 'react'
import Success from './Success';

const styles = {
    details: {
        position: 'absolute',
        top: '-524px',
        left: 0,
        height: '565px',
        width: '324px',
        background: 'white',
        padding: '30px'
    }
}

const Pay = ({ persons, goBack }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [sessionWalletBalance, setSessionWalletBalance] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [onSuccess, setSuccess] = useState(false);
    const [cashBack, setCashBack] = useState();

    const inputStyle = {
        width: `${32 + inputValue.length * 16}px`,
        fontSize: '32px',
        textAlign: 'center',
        outline: 'none',
        border: 'none',
        boxSizing: 'border-box',
        padding: '5px'
    };

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            setSessionWalletBalance(parseFloat(userObject.availableAmount));
        }
    }, []);
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        setInputValue(event.target.value);
        setError('');
    };
    const playSound = () => {
        const audio = new Audio('/audio/sound.mp3');
        audio.play();
      };
    const payment = () => {
        const parsedAmount = parseFloat(amount);
        const isValidAmount = /^[0-9]*\.?[0-9]+$/.test(amount);
        const walletBalanceAsNumber = parseFloat(sessionWalletBalance);
        if (!isValidAmount || isNaN(parsedAmount) || parsedAmount <= 0 || amount.includes('.')) {
            setError('Please enter a valid amount');
            return;
        }
        if (parsedAmount > walletBalanceAsNumber) {
            setError('Insufficient balance');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const cashbackAmount = parsedAmount * 0.1;
            setCashBack(cashbackAmount.toFixed(2))
            const updatedWalletBalance = walletBalanceAsNumber - parsedAmount + cashbackAmount;
            setSessionWalletBalance(updatedWalletBalance);

            const storedUser = sessionStorage.getItem('user');
            if (storedUser) {
                const userObject = JSON.parse(storedUser);
                userObject.availableAmount = updatedWalletBalance;
                userObject.totalCashback += cashbackAmount;
                sessionStorage.setItem('user', JSON.stringify(userObject));
            }
            setLoading(false);
            setSuccess(true);
            playSound();
        }, 5000)
    };

    return (
        <div className='d-flex flex-column' style={styles.details}>
            <i className="fa-solid fa-xmark" style={{ textAlign: 'left', cursor: 'pointer' }} onClick={goBack}></i>
            <div className="text-center mt-5">
                <div style={{ margin: '0 auto', background: persons.bg }} className="person text-center text-white">
                    {persons.name[0]}
                </div>
                <p className='mt-3' style={{ fontSize: '13px', fontWeight: '600' }}>Paying to {persons.name}</p>
                <div className="mt-1 d-flex justify-content-center align-items-center">
                    <i style={{ color: 'rgb(50 151 87)' }} className="fa-solid fa-circle-check me-2"></i>
                    <p className='' style={{ fontSize: '13px', fontWeight: '600' }}>Banking id: {persons.name.replace(/\s/g, '')}@oksbi.in</p>
                </div>
                <p className='mt-2' style={{ fontSize: '13px', fontWeight: '600' }}>+91 {persons.phoneNumber}</p>
                <div className='mt-3 d-flex justify-content-center align-items-center'>
                    <div className=''>
                        <i style={{ fontSize: '20px' }} className="fa-solid fa-indian-rupee-sign"></i>
                        <input type="text" style={inputStyle} value={amount} placeholder='0' onChange={handleAmountChange} />
                    </div>
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
            </div>
            {loading ? (
                <div className="text-center mt-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <span className="loader"></span>
                    </div>
                    <p className="mt-2">Processing...</p>
                </div>
            ) : (
                <div className='mt-auto d-flex justify-content-end'>
                    <i onClick={payment} className="fa-solid fa-arrow-right" style={{ cursor: 'pointer', padding: '15px', background: 'blue', color: 'white', borderRadius: '10px' }}></i>
                </div>
            )}
            {!loading && onSuccess && (
                <Success persons={persons} cashBack={cashBack} goBack={goBack}/>
            )}

        </div>
    );
};

export default Pay;