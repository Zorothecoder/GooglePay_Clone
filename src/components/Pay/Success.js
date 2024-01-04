import React from 'react'

const styles = {
    detailsPopup: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '324px',
        background: 'white',
        padding: '30px'
    },
    logo: {
        background: '#080cb7',
        height: '60px',
        width: '60px',
        borderRadius: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50% auto 0 auto',
    }
}

const Success = ({ goBack, persons, cashBack }) => {
    return (
        <div className="text-center success-slide">
            <div className='' style={styles.logo}>
                <i style={{ fontSize: '32px', color: 'white', fontWeight: 'bold' }} className="fa-solid fa-check"></i>
            </div>
            <div>
                <p className='mt-1' style={{ fontSize: '16px', fontWeight: '600' }}>Hurray!</p>
                <p className='mt-2' style={{ fontSize: '11px', fontWeight: '600' }}>You received a cashback of {cashBack}</p>
                <p className='mt-5' style={{ fontSize: '16px', fontWeight: '600' }}>Paid to {persons.name} successfully</p>
                <p className='mt-1' style={{ fontSize: '11px', fontWeight: '600' }}>{persons.phoneNumber.replace(/\s/g, '')}@oksbi.in</p>
            </div>
            <div className="hover-animation" onClick={goBack}>
                <p className="button">Done</p>
            </div>
        </div>
    )
}
export default Success