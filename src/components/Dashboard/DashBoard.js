import Top from './Top'
import Bottom from './Bottom'
import React, { useState } from 'react'
import Background from '../Animation/background'

const DashBoard = () => {
    const [isOverflowClipped, setOverflowClipped] = useState(false);

    const handleContainerClick = (e) => {
        setOverflowClipped(e);
    };

    const containerStyle = {
        position: 'relative',
        overflowY: isOverflowClipped ? 'clip' : 'auto',
        padding: '0% !important',
        backgroundColor: 'transparent',
        height: '565px',
        width: '350px',
    };

    return (
        <div className="bg">
            <div className="intro">
                <h3>This is a Simple Google Play Demo</h3>
                <p className='ms-5 text-white'>- by ZoroTheCoder (Chewang)</p>
            </div>
            <div className="desc d-flex justify-content-between align-items-center">
                <i className="fa-solid fa-arrow-left" style={{fontSize: '32px', cursor: 'pointer', color: 'white' }}></i>
                <div className="d-flex justify-content-center align-items-center " style={{height: '100%',width: '90%',margin: 'auto'}}>
                    <h5 className=' text-white'>This application uses temporary data storage(session</h5>
                </div>
            </div>
            <div className="descr d-flex justify-content-between align-items-center">
                <i className="fa-solid fa-arrow-left" style={{fontSize: '32px', cursor: 'pointer', color: 'white' }}></i>
                <div className="d-flex justify-content-center align-items-center " style={{height: '100%',width: '90%',margin: 'auto'}}>
                    <h5 className=' text-white'>This is for demonstration only</h5>
                </div>
            </div>
            <Background></Background>
            <div className="container" style={containerStyle}>
                <div className="left">
                    <Top handleContainerClick={handleContainerClick} />
                    <Bottom handleContainerClick={handleContainerClick} />
                </div>
            </div>
        </div>
    )
}

export default DashBoard