import { Button, Divider } from 'antd';
import React from 'react';
import styles from '../../styles/components/Card6.module.scss';

const ExistingKycCard = (props : any) =>{

    console.log(props);
    
    const Present = (present : any) =>{
        props.ExistingKyc(present);
    }

    let itemList = [{title : "Pan Card", value : "HCDGH8758L", special_text : ""},
    {title : "Aadhar Card", value : "934682919117"},
    {title : "Kyc Date", value : "21 March 2021"},
    {title : "Name", value : "Muhammed"},
    {title : "Mobile", value : "+966-505-5515-86"},
];


    return(
        <div className="card card2 p-0 mt-30">
            <h5 className="pl-20 pt-20">Current Kyc Details</h5>
            <Divider></Divider>
             <div className={styles['main-content-container']}>

                    {itemList.map((obj) =>{
                        return(
                            <div key={`${obj}`}>
                                <strong>{obj.title}</strong><br/>
                                <span>{obj.value}<span className="primary txt fz-11"> {obj.special_text}</span></span>
                            </div>
                        )
                    })}    
                
                </div> 
                <div className="pl-30 pr-30 pt-20 pb-20">
                    <Button className="txt primary full-width" onClick={()=>Present(false)}>Add New KYC</Button>
                </div>
        </div>
    )

}

export default ExistingKycCard;