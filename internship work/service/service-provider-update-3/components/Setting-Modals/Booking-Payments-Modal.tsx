import {Button, Form, Input, InputNumber, Select} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React,{useState,useEffect} from 'react';
import { getCurrencyDetails,getDemographics } from '../../services/address';
import styles from '../../styles/components/Booking-Payments-Modal.module.scss';
  
const BookingAndPaymentsModal = (props : any) =>{
    
    
    useEffect(() =>{
        
        getCurrencyDetails().then(res =>{

            if(res.status == true){
             console.log(res.data);
             
             // setcurrencyVal(res.data.id);
             props?.setcurrency(res.data);
            }
         }).catch((err:any)=>{
             console.log(err);
             
         })

         getDemographics().then(res =>{

            if(res.status == true){
             console.log(res.data);
             
             // setcurrencyVal(res.data.id);
             props?.setdemographics(res.data);
            }
         }).catch((err:any)=>{
             console.log(err);
             
         })
        
},[]);
    function handleCurrency(value:any){
       props?.setCurrencyNew(value);
    }
    function handleDemographics(value:any){
        props?.setDemographicsNew(value);
    }
    function handleChange(value : any) {
        props?.setPayoutFrequencyIdNew(value);
    }

    function yesfn(event : any) {
        event.target.value==false?props?.setPayAtVenueNew(0):props?.setPayAtVenueNew(1);
    }
    function nofn(event : any) {
        event.target.value==false?props?.setPayAtVenueNew(0):props?.setPayAtVenueNew(1);
    }
    
    return(
        <div className="pl-22 pr-20">
            <Form>
                <Form.Item>
                <Form.Item label="Payout Frequency">
                    <Select className="h43" defaultValue={props.payoutFrequencyId==1?"Weekly":
                                             props.payoutFrequencyId==2?"15 days":
                                             props.payoutFrequencyId==3?"Monthly":
                                             "Monthly"} onChange={handleChange}>
                            <Option value="1">Weekly</Option>
                            <Option value="2">15 Days</Option>
                            <Option value="3">Monthly</Option>
                    </Select>
                </Form.Item>
                
                <Form.Item className="mt-25" label="Pay At Venue">
                    <Checkbox defaultChecked={props.payAtVenue==0?true:false} onChange={yesfn}>Yes</Checkbox>
                    <Checkbox defaultChecked={props.payAtVenue==0?false:true} onChange={nofn}>No</Checkbox>
                </Form.Item>
                </Form.Item>
                <Form.Item>
                <Form.Item className="mt-25" label="Currency">
                    <Select className="h43" defaultValue={"INR"} onChange={handleCurrency}>
                          
                          {props?.currency.map((curr:any) =>(

                              <Option key={curr.id} value={curr.id}>{curr.name}</Option>
                          ))
                          }
                    </Select>
                </Form.Item>

                <Form.Item className="mt-25" label="Demorgraphics">
                    <Select className="h43" defaultValue={"Women"} onChange={handleDemographics}>
                          
                          {props?.demographics.map((demo:any) =>(

                              <Option key={demo.id} value={demo.id}>{demo.name}</Option>
                          ))
                          }
                    </Select>
                </Form.Item>
                </Form.Item>
                {/* <Form.Item label="Allowed to book time" className="mt-13 mb-14">
                    <div className={styles['allowed-to-booking-container']}>
                        <Form.Item className={styles['input-number-form-item']}>
                            <InputNumber className="h43" min={1} max={10} defaultValue={3} onChange={onChange} />
                        </Form.Item> */}
                        
                        {/* <Form.Item >
                            <Select className="h43" defaultValue="Daily" onChange={handleChange}>
                                    <Option value="Daily">Daily</Option>
                                    <Option value="Minutes">Minutes</Option>
                                    <Option value="Hours">Hours</Option>
                                    <Option value="Weeks">Weeks</Option>
                                    <Option value="Days">Days</Option>
                            </Select>
                        </Form.Item> */}
                    {/* </div>
                </Form.Item> */}
            </Form>
        </div>
    )

}
export default BookingAndPaymentsModal;