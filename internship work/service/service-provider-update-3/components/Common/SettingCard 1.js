import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React,{ useState} from 'react';
import styles from './SettingCard.module.scss'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
 

const SettingCard1 = (props) =>{
   console.log(props);
    // const [timeZoneNew,setTimeZoneNew]=useState("");
    // const [taxRateNew,setTaxRateNew]=useSate(0);
    // const [dateNew,setDateNew]=useState("");
    
   const OpenModal = () =>{
        props.modal("general_settings");
    }

    return(
        <div className="card card2 p-0" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18">General Details</h5>
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
                                            <strong>{"Time Zone"}</strong>
                                            <span>{props.timeZoneNew==""?props.timeZone:props.timeZoneNew}</span>
                                        </div>
                        
                                        <div>
                                            <strong>{"Tax Rate"}</strong>
                                            <span>{props?.taxRateNew==0?props?.taxRate:props?.taxRateNew}</span>
                                        </div>
                                        
                                        <div>
                                            <strong>{"Date Format"}</strong>
                                            <span>{props?.dateNew==""?props.date:props?.dateNew}</span>
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

export default SettingCard1;