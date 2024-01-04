import React from 'react';
import ProfilePic from '../../img/profile_pic.png';
import wallet from '../../img/wallet.png'

const styles = {
  detailsPopup: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '324px',
    background: 'white'
  },
  upi: {
    fontSize: '11px',
    background: 'rgb(107 107 233 / 81%)',
    padding: '4px 12px',
    borderRadius: '25px'
  }
}

const Profile = ({ handleGoBack }) => {
  const storedUser = sessionStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="details-popup" style={styles.detailsPopup}>
      <div className="profile_background" style={{ padding: '30px' }}>
        <div className='d-flex justify-content-between'>
          <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} onClick={handleGoBack}></i>
          <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} ></i>
        </div>
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className='mt-5' style={{ fontWeight: '600' }}>+91 {user.phoneNum}</h5>
            <span style={styles.upi}>
              <i className="fa-solid fa-circle-check"></i> UPI number
            </span>
          </div>
          <span className='icon mt-5'>
            <img src={ProfilePic} style={{ height: '66px' }} alt="" />
          </span>
        </div>
      </div>
      <div className='d-flex justify-content-between' style={{ padding: '30px' }}>
        <div className='d-flex align-items-center'>
          <img src={wallet} alt="" style={{ height: '28px' }} />
          <p className='ms-3 mb-0' style={{ fontSize: '13px' }}>Wallet balance</p>
        </div>
        <p className='mb-0'> <i className="fa-solid fa-indian-rupee-sign"></i> {typeof user.availableAmount === 'number' ? user.availableAmount.toFixed(2) : 'N/A'}</p>
      </div>
      <div className='d-flex justify-content-between' style={{ padding: '0 30px' }}>
        <p className='ms-3 mb-0' style={{ fontSize: '11px' }}>Cashback earned</p>
        <p className='mb-0' style={{ fontSize: '11px' }}> <i className="fa-solid fa-indian-rupee-sign"></i> {typeof user.totalCashback === 'number' ? user.totalCashback.toFixed(2) : 'N/A'}</p>
      </div>
    </div>
  )
}
export default Profile