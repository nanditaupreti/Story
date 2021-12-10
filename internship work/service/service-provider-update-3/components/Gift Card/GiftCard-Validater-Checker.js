import {SearchOutlined } from '@ant-design/icons';
import { Button, Image, Input } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import styles from '../Gift Card/GiftCard-Validator-Checker.module.scss';
import CheckValidityModal from './Check-Validity-Modal';

const GiftCardValidatorChecker = () =>{
    
    const [createGiftCard, setCreateGiftCard] = useState(false);
    const [value, setValue] = useState("SP");

    const handleOk = () => {
        console.log('ok clicked', evt);
    }

    const handleCancel = () => {
        setCreateGiftCard(false);
    }
    
    const openModal = () => {

        // console.log(type);

        // if(type === "create-gift-card"){
            setCreateGiftCard(true);
        // }

    };

    return(
        <div className={styles['container']}>
            <div className={styles['validator-checker-container']}>
                {/* <GiftOutlined className="full-width mb-30" style={{fontSize : "60px", backgroundColor : "var(--primary-1])"}} /> */}
                <Image width={96} height={84} src="./check_validity.png" alt=""></Image>
                <div className="mt-20">
                    <h4 className="center">Enter the gift card number to check the validity</h4>
                </div>
                <Input className="header-search full-width mt-32" placeholder="Search" prefix={<span>SP</span>} suffix={<div className="flex center-content"><SearchOutlined /> <span className="ml-5"> </span></div>} ></Input>
                <Button className="txt primary full-width mt-32" onClick={openModal}>Check Validity </Button>
            </div>

            <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content", minWidth : "300px !important"}} title={ "This Card is Valid Till 22/12/2020" }
                footer={""} visible={createGiftCard} onOk={handleOk} onCancel={handleCancel}>
                < CheckValidityModal/>
            </Modal>
        </div>
        
    )
}

export default GiftCardValidatorChecker;
