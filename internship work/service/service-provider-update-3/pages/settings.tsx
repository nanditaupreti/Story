import React, { useState,useEffect } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Settings.module.scss';
import Layout from '../components/User/Layout'
import SettingCard1 from '../components/Common/SettingCard 1'
import SettingCard2 from '../components/Common/SettingCard 2'
import SettingCard3 from '../components/Common/SettingCard 3'
import SettingCard4 from '../components/Common/SettingCard 4'
import Modal from 'antd/lib/modal/Modal';
import ResetPassword from '../components/Common/ResetPassword';
import GeneralSettingsModal from '../components/Setting-Modals/Edit-General-Settings_Modal';
import BookingAndPaymentsModal from '../components/Setting-Modals/Booking-Payments-Modal';
import NotificationAndSecurity from '../components/Setting-Modals/Notification-And-Security.Modal';
import SubscriptionTiersModal from '../components/Setting-Modals/Subscription-Tiers-Modal';
import ProfileLeft from './profile-left';
import CompleteSettingModal from '../components/Setting-Modals/Complete-Setting-modal';
import cx from 'classnames';
import { editStoreAddSettings, getCurrencyDetails, getMyStoreDetails, getStoreAddDetails } from '../services/address';
import Card4 from '../components/Common/card4';
import CategoriesModal from '../components/Setting-Modals/CategoriesModal';


const Settings = () => {
    const [selectedModalName, setSelectedModalName] = useState("");
    const [selectedModal, setSelectedModal] = useState(false);
    const [subscriptionTiers, setSubscriptionTiers] = useState(false);
    const [del, setDel] = useState(false);
    const [timeZone,setTimeZone]=useState("");
    const [taxRate,setTaxRate]=useState(0);
    const [date,setDate]=useState("");
    const [storeId,setstoreId]=useState(0);
    const [minOrderPrice,setMinOrderPrice]=useState(0);
    const [minOrderPriceNew,setMinOrderPriceNew]=useState(0);
    const [payoutFrequencyId,setPayoutFrequencyId]=useState(0);
    const [payAtVenue,setPayAtVenue]=useState(0);
    const [emailNotify,setEmailNotify]=useState(0);
    const [smsNotify,setSmsNotify]=useState(0);
    const [updatedAt,setUpdatedAt]=useState("");
    const [timeZoneNew,setTimeZoneNew]=useState("");
    const [taxRateNew,setTaxRateNew]=useState(0);
    const [dateNew,setDateNew]=useState("");
    const [emailNotifyNew,setEmailNotifyNew]=useState(0);
    const [smsNotifyNew,setSmsNotifyNew]=useState(0);
    const [payoutFrequencyIdNew,setPayoutFrequencyIdNew]=useState(0);
    const [payAtVenueNew,setPayAtVenueNew]=useState(0);
    const [currency,setcurrency]=useState([]);
    const [currencyNew,setCurrencyNew]=useState(0);
    const [currencyId,setCurrencyId]=useState(1);
    const [currencyIdNew,setCurrencyIdNew]=useState(0);
    const [demographicsNew,setDemographicsNew]=useState(0);
    const [demographicsId,setDemographicsId]=useState(0);
    const [demographics,setdemographics]=useState([]);
    const [categoriesId,setCategoriesId]=useState(0);
    const [categoriesName,setCategoriesName]=useState("");
    const [subcategoriesId,setSubCategoriesId]=useState(0);
    const [subcategoriesName,setSubCategoriesName]=useState("");

    useEffect(() =>{
        
            getMyStoreDetails().then(res =>{
          
                if(res.status == true){
                    console.log(res.StoreData.store.id);
                    setstoreId(res.StoreData.store.id);                      
                }else{
                    console.log('error');
                }
                
            }).catch((err:any)=>{
                console.log(err);
            })
            
            
    },[]);
    function settingInitials(){
        getStoreAddDetails(storeId).then(res =>{
            // console.log("response",res);
            
           if(res.status == true){
               setTimeZone(res.addSettings.timeZone);
               setTaxRate(res.addSettings.taxRate);
               setDate(res.addSettings.dateFormat);
               setMinOrderPrice(res.addSettings.minimumOrderPrice);
               setPayoutFrequencyId(res.addSettings.payoutFrequencyId);
               setEmailNotify(res.addSettings.EmailNotify);
               setSmsNotify(res.addSettings.smsNotify);
               setCurrencyIdNew(res.addSettings.Currency.currencyId);
               setUpdatedAt(res.addSettings.updatedAt);
               setPayAtVenue(res.addSettings.payAtVenue);
               setDemographicsId(res.addSettings.DemorgraphicType.demorgraphicServedId);
           }
        }).catch((err:any)=>{
            console.log(err);
            
        })
    }
    settingInitials(); 
    

const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setSelectedModal(false);   
    setSubscriptionTiers(false);
};

const openModal = (type : any) => {

    console.log(type);

    if(type === "subscription_tier"){
        setSubscriptionTiers(true);
    }else{
        setSelectedModal(true);
    }

    switch(type){
        case "general_settings" : setSelectedModalName("General Settings");
        break;
        
        case "notification_and_security" : setSelectedModalName("Notification And Security");
        break;
        
        case "booking_and_payments" : setSelectedModalName("Booking And Payments");
        break;
        
        case "subscription_tier" : setSubscriptionTiers(true);
        break;

        case "Change Password" : setSelectedModalName("Change Password");
        break;

        case "Categories" : setSelectedModalName("Categories");
        break;
    }
};

const handleEdit=()=>{
    try{
          
            editStoreAddSettings({
                "dateFormat": dateNew==""?date:dateNew,
                "timeZone": timeZoneNew==""?timeZone:timeZoneNew,
                "taxRate": taxRateNew==0?taxRate:taxRateNew,
                "minimumOrderPrice": minOrderPriceNew==0?minOrderPrice:minOrderPriceNew,
                "payoutFrequencyId": payoutFrequencyIdNew==0?payoutFrequencyId:payoutFrequencyIdNew,
                "demorgraphicServedId": demographicsNew==0?demographicsId:demographicsNew,
                "EmailNotify": emailNotifyNew==0?emailNotify.toString():emailNotifyNew.toString() ,
                "smsNotify": smsNotifyNew==0?smsNotify.toString():smsNotifyNew.toString(),
                "currencyId": currencyIdNew==0?currencyNew:currencyIdNew,
                "payAtVenue":payAtVenueNew
          } ).then(res=>{
              if(res.status){
                console.log("entered editapi")
                settingInitials();
              }else{
                console.log("error");
              }
          });
      
               handleCancel(); 
                // setName("");
                // setMobileNumber("");
                // setEmail("");
                // setconfirmAndProceed(false);
                
          
        }catch(err){
          console.log(err);
        }
      
}
    // console.log(currencyId,currencyIdNew,currencyNew);
    
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
                            <h5 className="mt-22 pb-21 pl-27 pr-27">Account Settings
                            <div>
                                    <span className="primary-txt mr-16 fz-16 txt weight400" onClick={()=>openModal("Change Password")}>Change Password</span>
                            </div>
                            </h5>
                        </div>
                        <Divider className="mt-0"></Divider>
                    <div className="pt-20 pl-38 pr-38">
                        {
                            // profileCards.map((cardDetails) =>{
                            //     return(
                            //         <div className="mb-40" key={cardDetails.title}>
                            //         </div>
                            //     )
                            // })
                            <div>
                            <SettingCard1  modal={openModal} taxRate={taxRate} timeZone={timeZone} date={date} 
                              timeZoneNew={timeZoneNew} taxRateNew={taxRateNew} dateNew={dateNew}
                            
                            ></SettingCard1>

                           
                            <Divider className="mt-0"></Divider>

                            <SettingCard2  modal={openModal} emailNotify={emailNotify} smsNotify={smsNotify}
                            emailNotifyNew={emailNotifyNew} smsNotifyNew={smsNotifyNew} minOrderPrice={minOrderPrice}
                            minOrderPriceNew={minOrderPriceNew}></SettingCard2>

                            <Divider className="mt-0"></Divider>

                            <SettingCard3  modal={openModal} payoutFrequencyId={payoutFrequencyId} payAtVenue={payAtVenue}
                            payoutFrequencyIdNew={payoutFrequencyIdNew} payAtVenueNew={payAtVenueNew} currencyNew={currencyNew}
                            demographicsNew={demographicsNew} currency={currency} demographics={demographics}
                            demographicsId={demographicsId} currencyIdNew={currencyIdNew}
                            ></SettingCard3>

                            <Divider className="mt-0"></Divider>
                             
                            <Card4 modal={openModal}></Card4>

                            <Divider className="mt-0"></Divider>

                            <SettingCard4  modal={openModal}></SettingCard4>

                            </div>
                        }
                    </div>

                    
                    </div>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}>
                                <h4 className="txt primary">{selectedModalName}</h4>
                            </div>
                    } footer={
                        <div className="pt-20 pb-20 pr-0">
                            <Button className="mr-20" onClick={handleCancel}>Cancel</Button>
                            <Button className="ant-btn primary mr-21" onClick={handleEdit}>Save Chages</Button>
                        </div>
                        } visible={selectedModal} onOk={handleOk} onCancel={handleCancel}>
                            {selectedModalName === "General Settings" ?
                            <GeneralSettingsModal setTimeZoneNew={setTimeZoneNew} setDateNew={setDateNew} setTaxRateNew={setTaxRateNew}
                            taxRate={taxRate} timeZone={timeZone} date={date} 
                              ></GeneralSettingsModal>
                            :
                            selectedModalName === "Notification And Security" ? 
                            <NotificationAndSecurity setSmsNotifyNew={setSmsNotifyNew} setEmailNotifyNew={setEmailNotifyNew} 
                            smsNotify={smsNotify} emailNotify={emailNotify} setMinOrderPriceNew={setMinOrderPriceNew} 
                            minOrderPrice={minOrderPrice}></NotificationAndSecurity>
                            :
                            
                            selectedModalName === "Booking And Payments" ? 
                            <BookingAndPaymentsModal setPayAtVenueNew={setPayAtVenueNew} setPayoutFrequencyIdNew={setPayoutFrequencyIdNew}
                            payoutFrequencyId={payoutFrequencyId} payAtVenue={payAtVenue} setCurrencyNew={setCurrencyNew}
                            setDemographicsNew={setDemographicsNew} setcurrency={setcurrency} setdemographics={setdemographics}
                            currency={currency} demographics={demographics}
                            ></BookingAndPaymentsModal> 
                            :

                            selectedModalName === "Change Password" ? 
                            <ResetPassword></ResetPassword>
                             :
                             selectedModalName === "Categories" ? 
                             <CategoriesModal></CategoriesModal>
                            :
                            <BookingAndPaymentsModal></BookingAndPaymentsModal>
                            }
                    </Modal>

                    <div className={cx('ant-modal-wrapp', 'modal')}>
                        <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} footer={
                            ""} visible={subscriptionTiers} onOk={handleOk} onCancel={handleCancel}>
                                
                                <SubscriptionTiersModal></SubscriptionTiersModal>
                                
                        </Modal>
                    </div>


                </div>     
                </div>
            </div>    
        </Layout>
    
    )
}

export default Settings;
