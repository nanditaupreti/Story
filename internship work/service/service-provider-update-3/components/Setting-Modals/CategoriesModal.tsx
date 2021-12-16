import {Button, Form, Input, InputNumber, Select} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { Option } from 'antd/lib/mentions';
import React,{useState,useEffect} from 'react';
import { getCurrencyDetails,getDemographics } from '../../services/address';
import styles from '../../styles/components/Booking-Payments-Modal.module.scss';
  
const CategoriesModal = (props : any) =>{
    
    return(
        <div className="pl-22 pr-20">
            <Form>
                <Form.Item className="mt-25" label="Currency">
                    <Select className="h43" defaultValue={"INR"} 
                    // onChange={handleCurrency}
                    >
                          
                          {props?.currency.map((curr:any) =>(

                              <Option key={curr.id} value={curr.id}>{curr.name}</Option>
                          ))
                          }
                    </Select>
                </Form.Item>

                <Form.Item className="mt-25" label="Demorgraphics">
                    <Select className="h43" defaultValue={"Women"}
                    //  onChange={handleDemographics}
                     >
                          
                          {props?.demographics.map((demo:any) =>(

                              <Option key={demo.id} value={demo.id}>{demo.name}</Option>
                          ))
                          }
                    </Select>
                </Form.Item>
              </Form>
        </div>
    )

}
export default CategoriesModal;