import React, { useState } from 'react';
import { VerifiedUser } from '@material-ui/icons';
import styles from './Styles.module.scss';
import cx from 'classnames';
import { Modal } from 'antd';
import ChangeEmail from '../Profile/change-email-address';
import ChangePassword from '../Profile/change-mobile-number';
import CompleteSettingModal from '../Setting-Modals/Complete-Setting-modal';
import KycInfo from '../Admin/kyc/KycInfo';

const PendingDetails = (props) =>{

    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");

    const handleOk = (evt) => {
        console.log('ok clicked', evt)
    };

    const handleCancel = () => {
        setchooseModal(false);
    };

    const openModal = (type) => {

        setchooseModal(true);
    console.log(type);
        // if(type === "kyc"){
            setchooseModalName(type)
        // }else if(type === "Mobile Number"){
        //     setchooseModalName(type)
        // }

        console.log(type);
    };

    return(
        <div className="mb-33">
            <div className={cx(styles['card'], styles[`card-border-${props.details.borderColor}`])}>
                <div className="flex">
                    <VerifiedUser className={cx(styles[`${props.details.iconColor}`], 'mr-15')} />
                    <div className="grid-view grid-1">
                        {props.details?.controlLine.length > 1 ? 
                         <span className="txt success">{props.details.controlLine}</span>
                        : 
                        <>
                        </>
                        }
                        <strong className="fz-18">{props.details.heading}</strong>
                        <span>{props.details.subheading}</span>
                    </div>
                    <div className={styles['card-inside']}>
                        <span className="txt primary" onClick={() => openModal(props.details.subject)}><u>{props.details.linkTitle}</u></span>
                    </div>
                </div>
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
                                chooseModalName === "email" ? 
                                <ChangeEmail></ChangeEmail> : 
                                
                                chooseModalName === "kyc" ? 
                                <KycInfo></KycInfo> : 
                                
                                chooseModalName === "complete profile" ? 
                                <CompleteSettingModal></CompleteSettingModal> : 
                                
                                <ChangePassword></ChangePassword>
                            }
                        </Modal>

        </div>
    )
}

export default PendingDetails;