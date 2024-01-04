import React from 'react'
const styles = {
    detailsPopup: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '324px',
        background: 'white'
    },
}
const Rewards = ({ handleGoBack }) => {

    return (
        <div style={styles.detailsPopup}>
            <div className="rewards_background" style={{ padding: '30px', height: '25%' }}>
                <div className='d-flex justify-content-between'>
                    <i className="fa-solid fa-arrow-left" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} onClick={handleGoBack}></i>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ cursor: 'pointer', color: 'rgb(65, 67, 69)' }} ></i>
                </div>
            </div>
            <div className='' style={{ padding: '15px 30px 0 30px' }}>
                <h5>Your rewards</h5>
                <div className="mt-2 row">
                    <div className="col-6" style={{padding: '0px 5px'}}>
                        <div className="card" style={{height: '110px!important',padding: '10px'}}>
                            <div class="p-0 card-body" >
                                <p style={{fontSize: '8px', fontWeight: '600',  textAlign: 'right'}}> 3d left</p>
                                <p style={{fontSize: '16px', fontWeight: '600'}}> ₹10 -  ₹50</p>
                                <p style={{fontSize: '11px', fontWeight: '600'}}>On credit card bill payment on Google Pay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{padding: '0px 5px'}}>
                        <div class="card" style={{height: '110px!important', padding: '10px'}}>
                            <div class="p-0 card-body" >
                                <p style={{fontSize: '8px', fontWeight: '600',  textAlign: 'right'}}> 5d left</p>
                                <p style={{fontSize: '16px', fontWeight: '600'}}> Vit Face Care</p>
                                <p style={{fontSize: '11px', fontWeight: '600'}}>Face Wash worth ₹649 at ₹99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{padding: '0px 5px'}}>
                        <div class="card mt-2" style={{height: '110px!important',padding: '10px'}}>
                            <div class="p-0 card-body" >
                                <p style={{fontSize: '8px', fontWeight: '600',  textAlign: 'right'}}> 1d left</p>
                                <p style={{fontSize: '16px', fontWeight: '600'}}> ₹2000 Cashback</p>
                                <p style={{fontSize: '11px', fontWeight: '600'}}>On Samsung Product of ₹10,000 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-2" style={{padding: '0px 5px'}}>
                        <div class="card" style={{height: '110px!important',padding: '10px'}}>
                            <div class="p-0 card-body" >
                                <p style={{fontSize: '8px', fontWeight: '600',  textAlign: 'right'}}> 13d left</p>
                                <p style={{fontSize: '16px', fontWeight: '600'}}> Flat ₹7,350 off</p>
                                <p style={{fontSize: '11px', fontWeight: '600'}}>on Skullcandy jib True-2 Wireless Earbuds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rewards