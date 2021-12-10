import {Form, Select, Input, Slider, Divider, Button, Checkbox} from 'antd';
// import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import styles from './SettingCard.module.scss'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
 

const SettingCard3 = (props) =>{

    // console.log(props.cardDetails.content);
    // console.log(props.modal);
    const checkPayout=()=>{ 
        if(props.payoutFrequencyIdNew==0){
            if(props.payoutFrequencyId==0){
                return "-";
            }else if(props.payoutFrequencyId==1){
                return "Weekly";
            }else if(props.payoutFrequencyId==2){
                return "15 Days"
            }else{
                return "Monthly"
            }
        }else if(props.payoutFrequencyIdNew==1){
          return "Weekly";
        }else if(props.payoutFrequencyIdNew==2){
          return "15 Days"
        }else{
            return "Monthly"
        }
      } 
    const checkVenue = ()=>{
        if(props.payAtVenueNew==0){
            if(props.payAtVenue==0){
                return "Yes";
            }else{
                return "No";
            }
        }else{
            return "No";
        }
    }
    const checkCurrency=()=>{
        if(props.currencyNew==0){
           if(props.currencyIdNew==0){
               return "-";
           }else if(props.currencyIdNew==1){
               return "SAR"
           }else{
               return "INR"
           }
        }else if(props.currencyNew==1){
            return "SAR"
        }else{
            return "INR"
        }
        // props?.currencyNew==""?"-":
        // props?.currencyNew=="1"?"SAR":
        // "INR"
    }
    const handleDemographics=()=>{
        if(props.demographicsNew==""){
            if(props.demographicsId==0){
                return "-";
            }else if(props.demographicsId==1){
                return "Men"
            }else if(props.demographicsId==2){
                return "Women"
            }else if(props.demographicsId==3){
                return "Children"
            }else if(props.demographicsId==4){
                return "Men & Women"
            }else if(props.demographicsId==5){
                return "Men & Children"
            }else if(props.demographicsId==6){
                return "Women & Children"
            }else{
                return "Men & Women & Children"
            }
        }else if(props.demographicsNew==1){
            return "Men"
        }else if(props.demographicsNew==2){
            return "Women"
        }else if(props.demographicsNew==3){
            return "Children"
        }else if(props.demographicsNew==4){
            return "Men & Women"
        }else if(props.demographicsNew==5){
            return "Men & Children"
        }else if(props.demographicsNew==6){
            return "Women & Children"
        }else{
            return "Men & Women & Children"
        }
    }
   const OpenModal = () =>{
        props.modal("booking_and_payments");
    }

    return(
        <div className="card card2 p-0" style={{height : "fit-content", position : "relative", boxShadow : "none"}}>
            <div className={styles['card-header-container']}>
                <h5 className="mt-10 mb-10 pl-27 pr-27 fz-18">Booking & Payments</h5>
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
                        <strong>{"Payout Frequency"}</strong>
                        <span>{checkPayout()}</span>
                        </div>
                        
                        <div>
                            <strong>{"Pay at Venue"}</strong>
                            <span>{checkVenue()}</span>
                        </div>
                        <div>
                            <strong>{"Currency"}</strong>
                            <span>{checkCurrency()}</span>
                        </div>
                        <div>
                            <strong>{"Demorgraphics"}</strong>
                            <span>{handleDemographics()}
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

export default SettingCard3;