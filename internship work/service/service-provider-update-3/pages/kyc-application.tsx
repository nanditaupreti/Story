import React, { useState } from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../styles/components/Kyc-Application.module.scss';
import Layout from '../components/User/Layout'
import Modal from 'antd/lib/modal/Modal';
import ChangeEmail from '../components/Profile/change-email-address';
import ChangePassword from '../components/Profile/change-mobile-number';
import KycApplicationCard from './kyc/kyc-application-card';
import ExistingKycCard from './kyc/existing-kyc-card';
import ProfileLeft from './profile-left';


const KycApplication = () =>{

const [chooseModal, setchooseModal] = useState(false);
const [chooseModalName, setchooseModalName] = useState("");
const [existingKyc, setExistingKyc] = useState(null);


const handleOk = (evt : any) => {
    console.log('ok clicked', evt)
};

const handleCancel = () => {
    setchooseModal(false);
};

const openModal = (type : any) => {

    setchooseModal(true);

    if(type === "Email"){
        setchooseModalName(type)
    }else if(type === "Mobile Number"){
        setchooseModalName(type)
    }

    console.log(type);
};

const kycPresent = (present : any) =>{
    setExistingKyc(present);
}



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
                                <h5 className="mt-22 pb-21 pl-27 pr-27">KYC Identy Verification
                                </h5>
                            </div>
                        <Divider className="mt-0 mb-0"></Divider>
                    <div className="pl-38 pr-38 pb-43">
                            <ExistingKycCard ExistingKyc={kycPresent} present={false}></ExistingKycCard>
                            
                            {existingKyc == false ? 
                                
                                // <ExistingKycCard ExistingKyc={kycPresent}></ExistingKycCard> 
                                <KycApplicationCard></KycApplicationCard>
                                :
                                <>
                                </>
                             }
                    </div>

                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                                <div style={{width : "100%", 
                                height: "100%",
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                alignItems: "center"}}>
                                    <h4 className="txt primary">Change {chooseModalName}</h4>
                                </div>
                        } footer={""} visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
                            {
                                chooseModalName === "Email" ? 
                                <ChangeEmail></ChangeEmail> : 
                                <ChangePassword></ChangePassword>
                            }
                        </Modal>

                    </div>
                </div>     
                </div>
        </div>    
    </Layout>
    )
}
export default KycApplication;