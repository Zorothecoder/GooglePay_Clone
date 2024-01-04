import React from 'react'
const styles = {
    detailsPopup: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '324px',
        background: 'white',
    },
}
const Offers = ({ handleGoBack }) => {
    return (
        <div style={styles.detailsPopup} >
            <div className="offers_background" style={{ padding: '30px', height: '25%' }}>
                <div className='d-flex justify-content-between'>
                    <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} onClick={handleGoBack}></i>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} ></i>
                </div>
            </div>
            <div style={{ padding: '15px 30px 0 30px' }}>
                <div className="card" style={{borderRadius: '20px' }}>
                    <div className="card-body">
                        <p style={{ fontSize: '13px', fontWeight: '600' }}> Don't miss out on extra rewards</p>
                        <p style={{ fontSize: '11px', fontWeight: '600' }}> See personalized offers for you based on your spending and acitvity </p>
                        <p className="mt-1" style={{ fontSize: '13px', fontWeight: '600',color: 'rgb(37, 37, 161)' }}>Opt in now</p>
                    </div>
                </div>
                <h5 className='mt-2'>Exclusive offers</h5>
                <div className="card" style={{ borderRadius: '20px', height: '95px' }}>
                    <div className="card-body">
                        <p style={{ fontSize: '13px', fontWeight: '600' }}> Snack Time</p>
                        <p style={{ fontSize: '11px', fontWeight: '600' }}> Get up to ₹30 cashback offer </p>
                        <p className="mt-1" style={{ fontSize: '13px', fontWeight: '600',color: 'rgb(37, 37, 161)' }}>Get offer</p>
                    </div>
                </div>
                <div className="mt-2 card" style={{ borderRadius: '20px',height: '95px' }}>
                    <div className="card-body">
                        <p style={{ fontSize: '13px', fontWeight: '600' }}> Don't miss out on extra rewards</p>
                        <p style={{ fontSize: '11px', fontWeight: '600' }}> Have a KitKat and get a cashback offer! </p>
                        <p className="mt-1" style={{ fontSize: '13px', fontWeight: '600',color: 'rgb(37, 37, 161)' }}>Get offer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offers