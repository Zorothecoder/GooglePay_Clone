import React, { useState } from 'react'
import { person } from '../../persons/persons.js'
import Profile from '../Modules/Profile.js'
import Contacts from '../Modules/Contacts.js'
import Wallet from '../Modules/Wallet.js'
import Send from '../Modules/Send.js'
import Rewards from '../Modules/Rewards.js'
import Offers from '../Modules/Offers.js'
import pc from '../../img/pay_contacts.png'
import ppn from '../../img/pay_phone_number.png'
import bt from '../../img/bank_transfer.png'
import jio from '../../img/jio.png'
import ekart from '../../img/flipkart.png'
import rewards from '../../img/rewards.png'
import wallet from '../../img/wallet.png'

const Bottom = ({ handleContainerClick }) => {
    const [isWalletVisible, setIsWalletVisible] = useState(false)
    const [isPersonDetailsVisible, setPersonDetailsVisible] = useState(false);
    const [isContactsVisible, setIsContactsVisible] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [rewardsVisible, setIsRewardsVisible] = useState(false)
    const [offersVisible, setIsOffersVisible] = useState(false)

    const handleClick = (p) => {
        setSelectedPerson(p)
        setPersonDetailsVisible(true)
        handleContainerClick(true)
    }
    const handleContactsClick = () => {
        setIsContactsVisible(true)
        handleContainerClick(true)
    }
    const handleWalletClick = () => {
        setIsWalletVisible(true)
        handleContainerClick(true)
    }
    const handleGoBack = () => {
        setIsRewardsVisible(false)
        setIsOffersVisible(false)
        handleContainerClick(false)
        setPersonDetailsVisible(false)
        setIsWalletVisible(false)
        setIsContactsVisible(false)
    }
    const handleRewardsClick = () => {
        setIsRewardsVisible(true)
        handleContainerClick(true)
    }
    const handleOffersClick = () => {
        setIsOffersVisible(true)
        handleContainerClick(true)
    }
    return (
        <div className="bottom">
            <div className="">
                <div className="row text-center">
                    <div className="col-3">
                        <div className="box" onClick={handleClick}>
                            <img src={wallet} alt="qr" />
                            <p className="mt-2">Wallet</p>
                            <p>Balance</p>
                        </div>
                        {isPersonDetailsVisible && (
                            <Profile handleContainerClick={handleContainerClick} handleGoBack={handleGoBack} />
                        )}
                    </div>
                    <div className='col-3'>
                        <div className="box" onClick={handleWalletClick}>
                            <img src={ppn} alt="ppn" />
                            <p className="mt-2">Add</p>
                            <p>Money</p>
                        </div>
                        {isWalletVisible && (
                            <Wallet setIsWalletVisible={setIsWalletVisible} handleGoBack={handleGoBack} />
                        )}
                    </div>
                    <div className='col-3'>
                        <div className="box" onClick={handleContactsClick}>
                            <img src={pc} alt="pc" />
                            <p className="mt-2">Pay</p>
                            <p>Contacts</p>
                        </div>
                        {isContactsVisible && (
                            <Contacts setIsContactsVisible={setIsContactsVisible} handleGoBack={handleGoBack} />
                        )}
                    </div>
                    <div className="col-3">
                        <div className="box">
                            <img src={bt} alt="bt" />
                            <p className="mt-2">Bank</p>
                            <p>Transfer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 sections">
                <p>People</p>
                <div className="row">
                    {person.map((persons) => (
                        <div key={persons.id} className="col-3">
                            <div onClick={() => handleClick(persons)} style={{ background: persons.bg, cursor: 'pointer' }} className='person'>
                                <p>{persons.name[0]}</p>
                            </div>
                            <p className="name" style={{ textWrap: 'nowrap' }}>{persons.name}</p>
                            {isPersonDetailsVisible && selectedPerson.id === persons.id && (
                                <Send handleGoBack={handleGoBack} selectedPerson={selectedPerson} persons={persons}></Send>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-3 sections">
                <p>Bussinesss</p>
                <div className="row">
                    <div className="col-3">
                        <div className='person'>
                            <img style={{ height: '90%' }} src={jio} alt="" />
                        </div>
                        <p className='name text-center' >Jio</p>
                    </div>
                    <div className='col-3'>
                        <div style={{ background: '#25326f' }} className='person'>
                            <img style={{ height: '50%' }} src={ekart} alt="" />
                        </div>
                        <p className='name'>Ekart</p>
                    </div>
                    <div className='col-3'>
                        <div style={{ background: 'rgb(43 177 48)' }} className='person'>
                            <p>I</p>
                        </div>
                        <p className='name'>Vi</p>
                    </div>
                </div>
            </div>
            <div className="mt-3 sections">
                <p>Offers and rewards</p>
                <div className="row">
                    <div className="col-3" style={{ cursor: 'pointer' }} onClick={handleRewardsClick}>
                        <div style={{ background: 'linear-gradient(180deg, #fdd835, #cb6800)' }} className='person' >
                            <img style={{ height: '65%' }} src={rewards} alt="" />
                        </div>
                        <p className='name'>Rewards</p>
                    </div>
                    <div className='col-3' style={{ cursor: 'pointer' }} onClick={handleOffersClick}>
                        <div style={{ background: 'linear-gradient(121deg, #d81a60, #ef5350)' }} className='person'>
                            <i style={{ color: 'white', fontSize: '28px' }} className="fa-solid fa-tag"></i>
                        </div>
                        <p className='name'>Offers</p>
                    </div>
                </div>
                {rewardsVisible &&
                    <Rewards handleGoBack={handleGoBack} />
                }
                {offersVisible &&
                    <Offers handleGoBack={handleGoBack} />
                }
            </div>
            <div className="payment">
                <div className="d-flex justify-content-between align-items-center">
                    <i style={{ color: '#2525a1' }} className="fa-solid fa-clock-rotate-left"></i>
                    <p>See all payment activity</p>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}
export default Bottom