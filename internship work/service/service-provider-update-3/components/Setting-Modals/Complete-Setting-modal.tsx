import React, { useState } from 'react';
import GeneralSettingsModal from '../../components/Setting-Modals/Edit-General-Settings_Modal';
import BookingAndPaymentsModal from '../../components/Setting-Modals/Booking-Payments-Modal';
import NotificationAndSecurity from '../../components/Setting-Modals/Notification-And-Security.Modal';
import SubscriptionTiersModal from '../../components/Setting-Modals/Subscription-Tiers-Modal';
import Card1Modal from '../Profile/card1-modal';
import { Button, Form, Input, Modal } from 'antd';
import AddressByMap from '../Common/AddressByMap';
import CardTemplate from '../Profile/card-template';
import astyles from '../../styles/components/Card3.module.scss'

const CompleteSettingModal = () =>{


    const [chooseModal, setchooseModal] = useState(false);
    const [addressFilled, setAddressFilled] = useState(false);
    const [pinCode, setPinCode] = useState(0);
    const [houseNo, setHouseNo] = useState("");
    const [addressone, setAddressOne] = useState("");
    const [addresstwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const [alreadyAddressPresent, setAlreadyAddressPresent] = useState(false);
    // const [completeAddress, setCompleteAddress] = useState([
    //     houseNo,addressone,addresstwo,city,country
    // ])

    const completeAddress = [
        {title : "House No.",value : houseNo},{title : "Address Line 1",value : addressone},{title : "Address Line 2",value : addresstwo},{title : "City",value : city},{title : "Country",value : country}
    ]
      
    const handleOk = (evt : any) => {
        console.log('ok clicked', evt)
    };
    
    const handleCancel = (type : any) => {
        if(type === "cancel"){
            if(alreadyAddressPresent === true){

            }
            else if(addressFilled === true){
                setAddressFilled(false);
            }
            setchooseModal(false);
        }else if(type === "submit"){
            setchooseModal(false);
            setAlreadyAddressPresent(true);
        }
    };
    
    const openModal = () => {
        setchooseModal(true);
    };
    

    return(
        <div>

            <Card1Modal></Card1Modal>

            <h5 className="ml-20 mt-20 mb-10">General Settings</h5>
            <GeneralSettingsModal></GeneralSettingsModal>

            <h5 className="ml-20 mb-15">Booking And Payments</h5>
            <BookingAndPaymentsModal></BookingAndPaymentsModal>

            <h5 className="ml-20 mt-10">Addresses</h5>
            <Form className="ml-20 mb-15">
                <Form.Item label="">
                    {addressFilled ? 
                        <CardTemplate title={"Addresses"} modal={openModal}>
                        <div className={astyles['main-content-container']}>

                            {completeAddress.map((obj) =>{
                                return(
                                    <div key={`${obj}`}>
                                        <strong>{obj.title}</strong>
                                        <span>{obj.value}</span>
                                    </div>
                                )
                            })}    
                        
                        </div>
                    
                    </CardTemplate>

                    :

                    <Button className="txt primary mt-10" onClick={() =>openModal()}>Select Address</Button>

                    }
                </Form.Item>
            </Form>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                    <div style={{width : "100%", 
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    alignItems: "center"}}>
                        <h4 className="txt primary">Set Address</h4>
                    </div>
            } footer={
                <div className="pt-20 pb-20 pr-0">
                    <Button className="mr-20" onClick={() =>handleCancel("cancel")}>Cancel</Button>
                    <Button className="ant-btn primary mr-21" onClick={() => handleCancel("submit")}>Save Chages</Button>
                </div>} 
            visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                {
                    <AddressByMap addressFilled={setAddressFilled} houseno={setHouseNo} pincode={setPinCode} address1 = {setAddressOne} address2 = {setAddressTwo} city={setCity} country={setCountry} />
                }
            </Modal>
            
            

        </div>
    )
}

export default CompleteSettingModal;