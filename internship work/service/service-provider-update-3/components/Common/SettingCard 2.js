import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import styles from './SettingCard.module.scss'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
 

const SettingCard2 = (props) =>{

    // console.log(props.cardDetails.content);
    // console.log(props.modal);
 
   const OpenModal = () =>{
        props.modal("notification_and_security");
    }
  const emailAndSms=()=>{
     if(props.emailNotifyNew == 0 && props.smsNotifyNew==0){
         if(props.emailNotify==0 && props.smsNotify==0){
             return "-";
         }else if(props.emailNotify==1 && props.smsNotify==0){
             return "Email";
         }else if(props.emailNotify==0 && props.smsNotify==1){
             return "SMS";
         }else{
             return "Email,SMS";
         }
     }else if(props.emailNotifyNew == 0 && props.smsNotifyNew==1){
         return "SMS";
     }else if(props.emailNotifyNew == 1 && props.smsNotifyNew==0){
         return "Email";
     }else{
         return "Email,SMS";
     }
  }
    return(
        <div className="card card2 p-0" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18">Notification & Security</h5>
                <Divider className="mt-5 mb-0"></Divider>
            </div>
            
            <div className="pt-20 pl-27 pr-37">
                <div className={styles['anpa-container-content']}>
                    {/* {
                        props.cardDetails.content.map((obj) =>{
                            return(
                                <div key={obj}>
                                    <strong>{obj[0]}</strong>
                                    <span>{obj[1]}</span>
                                </div>
                            )
                        })
                    } */}
                    <div>
                         <strong>{"Notification Methods"}</strong>
                         {/* <span>{props.emailNotifyNew==0?" -":props.emailNotifyNew},{props.smsNotifyNew==0?" -":props.smsNotifyNew}</span> */}
                         <span>{emailAndSms()}
                             
                             </span>
                     </div>
                     <div>
                         <strong>{"Minimum Order Price"}</strong>
                         <span>{props.minOrderPriceNew==0?props.minOrderPrice:props.minOrderPriceNew}
                             
                             </span>
                     </div>
                        
                                        
                                       
        </div>

            </div>

            <Divider className="mt-12 mb-12"></Divider>
            <div className={styles['bottom-btn-container']}>
            <div>
                <Button className="primary small mr-33" type="link" onClick={() =>OpenModal()}><span className="icon-wrap"><EditIcon /></span>Edit Details</Button>
            </div>
        </div>
        </div>
    )
}

export default SettingCard2;