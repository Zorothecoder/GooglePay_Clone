import React, { useState } from 'react';
import { person } from '../../persons/persons.js';
import Send from './Send.js';

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
    upi: {
        fontSize: '11px',
        background: '#6b6be947',
        padding: '4px 12px',
        borderRadius: '25px',
    },
    contacts: {
        height: '35px',
        width: '35px',
        borderRadius: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }
};

const Contacts = ({ handleGoBack }) => {
    const [isPersonDetailsVisible, setPersonDetailsVisible] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleClick = (p) => {
        setSelectedPerson(p)
        setPersonDetailsVisible(true)
    }

    return (
        <div className="details-popup" style={styles.detailsPopup}>
            <div className='d-flex justify-content-between'>
                <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} onClick={handleGoBack}></i>
                <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} ></i>
            </div>
            <h5 style={{ textAlign: 'left' }} className='mt-3'>Contacts</h5>
            {person.map((persons) => (
                <div className="contacts d-flex" onClick={() => handleClick(persons)} key={persons.id} style={{ cursor: 'pointer' }}>
                    <div style={{ background: persons.bg, ...styles.contacts }}>{persons.name[0]}</div>
                    <div className='ms-3'>
                        <p style={{ fontSize: '11px', textAlign: 'left', fontWeight: 'bold' }}>{persons.name}</p>
                        <p style={{ fontSize: '11px', textAlign: 'left' }}>+91 {persons.phoneNumber}</p>
                    </div>
                </div>
            ))}
            {isPersonDetailsVisible && (
                <Send handleGoBack={handleGoBack} persons={selectedPerson}></Send>
            )}
        </div>
    );
};

export default Contacts;
