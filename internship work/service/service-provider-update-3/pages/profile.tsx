import React, { useState,useEffect } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Profile.module.scss';
import Layout from '../components/User/Layout';
import Card1 from '../components/Profile/card1';
import Card2 from '../components/Profile/card2';
import Card3 from '../components/Profile/card3';
import Card4 from '../components/Profile/card4';
import Card5 from '../components/Profile/card5';
import Card6 from '../components/Profile/card6';
import Card7 from '../components/Profile/card7';
import Modal from 'antd/lib/modal/Modal';
import ChangeEmail from '../components/Profile/change-email-address';
import ChangePassword from '../components/Profile/change-mobile-number';
import Card1Modal from '../components/Profile/card1-modal';
import ProfileLeft from './profile-left';
// import Card7AddAddress from './Profile/card7-add-address';
import cx from 'classnames';
import CardTemplate from '../components/Profile/card-template';
import astyles from '../styles/components/Card3.module.scss'
// import AddAddress from './product-details/add-address-modal';
import AddressByMap from '../components/Common/AddressByMap';
import { getMyStoreDetails } from '../services/address';


const Profile = () =>{

const [changePassword, setChangePassword] = useState(false);
const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [footer, setFooter] = useState(false);

const [email, setEmail] = useState("");
const [mobileNumber, setMobileNumber] = useState("");

const [userDetailsArray, setUserDetailsArray] = useState({});
const [userName, setUserName] = useState("");
const [storeName, setStoreName] = useState("");
const [address, setAddress] = useState({} as any);
const [storeId, setstoreId] = useState(0);
const [addressId, setAddressId] = useState(0);
const [userId,setUserId]=useState(0);

useEffect(() => {
    
    
    getMyStoreDetails().then(res =>{
          
        if(res.status == true){
            console.log("response",storeId);
            
            // console.log("response",res.StoreData.store.Addresses[0]);
            // console.log("storedata",res.StoreData.store.storeName);
            // console.log("response",res.StoreData.store.Addresses[0].id); 
            setUserDetailsArray(res.StoreData);
            setEmail(res.StoreData.email);
            setMobileNumber(res.StoreData.phoneNumber);
            setUserName(res.StoreData.userName);
            setStoreName(res.StoreData.store.storeName);
            setAddress(res.StoreData.store.Addresses[0]);  
            setstoreId(res.StoreData.store.id);              
            setAddressId(res.StoreData.store.Addresses[0].id);              
        }else{
            console.log('error');
        }
          
      }).catch((err:any)=>{
           console.log(err);
      })


    
}, [])
function resetUI(){
    setchooseModal(false);
    
    getMyStoreDetails().then(res =>{
        
          
        if(res.status == true){
            console.log("inside res");
            
            // console.log("response",res.StoreData.store.Addresses[0]);
            // console.log("storedata",res.StoreData.store.storeName);
            console.log("response",res.StoreData.store.Addresses[0].id); 
            setUserDetailsArray(res.StoreData);
            setEmail(res.StoreData.email);
            setMobileNumber(res.StoreData.phoneNumber);
            setUserName(res.StoreData.userName);
            setStoreName(res.StoreData.store.storeName);
            setAddress(res.StoreData.store.Addresses[0]);  
            setstoreId(res.StoreData.id);              
            setAddressId(res.StoreData.store.Addresses[0].id);              
        }else{
            console.log('error');
        }
          
      }).catch((err:any)=>{
           console.log(err);
      })
}


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setchooseModal(false); 
};

const openModal = (type : any) => {

    setchooseModal(true);

    // setchooseModalName(type)
    if(type === "Email"){
        setchooseModalName(type)
    }else if(type === "Mobile Number"){
        setchooseModalName(type)
    }else if(type === "General details"){
        setchooseModalName(type);
        setFooter(true);
    }else if(type === "Addresses"){
        setchooseModalName(type);
    }

    console.log(type);
    
};

    return(
        <Layout>
            <div className={styles['main-container']}>
                <div>
                    <ProfileLeft></ProfileLeft>
                </div>

                <div className={styles['main-container-right']}>
                <div className={styles['wallet-deposit-container']}>
                        <div className="card card2 p-0" style={{height : "fit-content", position : "relative"}}>
                            <div className={styles['card-header-container']}>
                                <h5 className="mt-22 pb-21 pl-27 pr-27">Profile
                                </h5>
                            </div>
                            <Divider className="mt-0 mb-0"></Divider>

                            <div className="pl-38 pr-38 pb-43">
                                <Card1 modal={openModal} title={setchooseModalName} setUserDetailsArray={setUserDetailsArray} email={email} mobileNumber={mobileNumber}
                                storeName={storeName} userName={userName} ></Card1>
                                <Card7 setUserDetailsArray={setUserDetailsArray} email={email} mobileNumber={mobileNumber} ></Card7>
                                <h5 className="mt-20">Store Settings</h5>
                                <Card2></Card2>
                                <Card4></Card4>
                                <Card5></Card5>
                                <Card6></Card6>
        
                                <CardTemplate title={"Addresses"} modal={openModal}>
                                    <div className={astyles['main-content-container']}>

                                        <div>
                                            <strong>{"House No."}</strong>
                                            <span>{address?.houseName == null ? '---' : address?.houseName}</span>
                                        </div>
                        
                                        <div>
                                            <strong>{"Street Address"}</strong>
                                            <span>{address?.streetAddress == null ? '---' : address?.streetAddress}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"Address Line: 1"}</strong>
                                            <span>{address?.add1 == null ? '---' : address?.add1}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"Address Line: 2"}</strong>
                                            <span>{address?.add2 == null ? '---' : address?.add2}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"Pincode/Zip code"}</strong>
                                            <span>{address?.zipCode == null ? '---' : address?.zipCode}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"City"}</strong>
                                            <span>{address?.city == null ? '---' : address?.city}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"Country"}</strong>
                                            <span>{address?.country == null ? '---' : address?.country}</span>
                                        </div>
                                    </div>
                                </CardTemplate>
                            </div>

                            <div className={cx('modal',  `modal-width`)}>
                                <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                                            <div style={{width : "100%", 
                                            height: "100%",
                                            display: "grid",
                                            gridTemplateColumns: "1fr",
                                            alignItems: "center"}}>
                                                <h4 className="txt primary">Change {chooseModalName}</h4>
                                            </div>
                                    } footer={
                                        <div className="pt-20 pb-20 pr-0">
                                            <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                                            <Button className="ant-btn primary mr-21">Save Chages</Button>
                                        </div>} 
                                    visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                                        {
                                            chooseModalName === "Email" ? 
                                            <ChangeEmail cancelModal={handleCancel} setEmail={setEmail} ></ChangeEmail> : 
                                            
                                            chooseModalName === "Mobile Number" ? 
                                            <ChangePassword cancelModal={handleCancel} setMobileNumber={setMobileNumber}></ChangePassword> : 
                                            
                                            chooseModalName === "Addresses" ? 
                                            <AddressByMap storeId={storeId} addressId={addressId} resetUI={resetUI} handleCancel={handleCancel}></AddressByMap> : 

                                            <Card1Modal></Card1Modal>
                                        }
                                    </Modal>
                            </div>
                        </div>
                </div>     
                </div>
            </div>    
        </Layout>
    )
}
export default Profile;