import React,{useState} from 'react'
import Pay from '../Pay/Pay.js'
import send from '../../img/paper_plane.svg'
import { person } from '../../persons/persons.js'

const styles = {
    details: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '324px',
        background: 'white'
    },
    detailsPopup: {
        background: '#e1e1e2',
        padding: '30px 30px 15px 30px'
    },
    detailsBottom: {
        padding: '0 30px',
        width: '100%',
        bottom: '13px'
    },
    detailsBody: {
        height: '79%'
    }
}
const Send = ({handleGoBack, persons}) => {
    const [pay, setPay] = useState(false);
    const payClick = () => {
        setPay(true);
    }
    return (
        <div style={styles.details}>
            <div className="details-popup" style={styles.detailsPopup}>
                <div className='position-relative d-flex justify-content-between align-items-center'>
                    <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', position: 'absolute', left: '0' }} onClick={handleGoBack}></i>
                    <div className='d-flex align-items-center'>
                        <div className="person-pay" style={{background: persons.bg}}>
                            <p className='text-white mb-0'>{persons.name[0]}</p>
                        </div>
                        <div className='' >
                            <p style={{ fontSize: '11px' }} className='mb-0'>{persons.name}</p>
                            <p style={{ fontWeight: '500', fontSize: '11px' }} className='mb-0'>+91 {persons.phoneNumber}</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer' }} ></i>
                </div>
            </div>
            <div className="details-body d-flex justify-content-center align-items-center" style={{ height: '79%' }}>
                <div className="text-center">
                    <div className="person" style={{ color: 'white', margin: '0 auto', background: persons.bg }}>{persons.name[0]}</div>
                    <p className="mt-2" style={{ fontWeight: 'normal', fontSize: '16px' }}>{persons.name}</p>
                    <p className="mt-2" style={{ fontWeight: 'normal', fontSize: '16px' }}>+91 {persons.phoneNumber}</p>
                    <p className="mt-3" style={{ fontWeight: '600', fontSize: '16px', color: 'rgb(37, 37, 161)' }}>Say "Hello!"</p>
                </div>
            </div>
            <div className="details-bottom position-absolute d-flex justify-content-around" style={styles.detailsBottom}>
                <p onClick={payClick} className="button" style={{ cursor: 'pointer', fontSize: '11px' }}>Pay</p>
                {pay && (
                    <Pay persons={persons} goBack={handleGoBack} />
                )}
                <p className="button" style={{ fontSize: '11px' }}>Request</p>
                <div className='msg d-flex justify-content-between align-items-center'>
                    <p className="mb-0" style={{ fontSize: '11px' }}>Message...</p>
                    <img src={send} alt="" height="16px" />
                </div>
            </div>
        </div>
    )
}
export default Send