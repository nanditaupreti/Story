import React, { useState } from 'react';
import {Divider, Dropdown, Form, Input, Menu, Select, Space} from 'antd';
import styles from '../../styles/components/Create-Gift-Card-Step1.module.scss'
import { AmpStories } from '@material-ui/icons';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Button } from 'antd/lib/radio';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';


const { RangePicker } = DatePicker;


const CreateGiftStep1 = () => {
    
    function onChange(dates, dateStrings) {
        console.log('From: ', dates[0], ', to: ', dates[1]);
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      }

      function handleButtonClick(e) {
        message.info('Click on left button.');
        console.log('click left button', e);
      }
      
      function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
      
      function handleChange(value) {
        console.log(`selected ${value}`);
      }

      const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );


      const validList = [{value : 1},{value : 2}];
      const priceList = [{value : 1},{value : 2}];
      const quantityList = [{value : 1},{value : 2}];
      const valueList = [{value : 1},{value : 2}];



    return ( 
        
        <Form className={styles['container']}>
            <Form.Item label="Gift Card Name">
                    <Input  className="full-width mb-16" placeholder="Create Gift Card Name"></Input>
            </Form.Item>

            <Form.Item label="Description">
                    <TextArea rows={2} minLength="55" />,
                    {/* <Input className="descinput full-width mb-12 ht-55" placeholder="A descriptions goes here..." style={{height : "55px !important"}}></Input> */}
            </Form.Item>

            <Form.Item  className="mb-16" label="Valid for">
                <div className={styles['valid-for-container']}>
                    <Select className="h43" style={{ width: 70 }} onChange={handleChange}>
                        {validList.map((obj)=>{
                                    return <Option key={obj.value} value={obj.value}>{obj.value}</Option>
                                })}
                    </Select>
                    <span className="ml-10">Days after purchase</span>
                </div>
            </Form.Item>

            <Form.Item className="mb-26">
                <div className={styles['pvq-container']}>
                    <Form.Item   label="Price">
                        <Select className="h43" onChange={handleChange}>

                            {priceList.map((obj)=>{
                                return <Option key={obj.value} value={obj.value}>{obj.value}</Option>
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Value">
                        <Select className="h43" onChange={handleChange}>
                        {valueList.map((obj)=>{
                                return <Option key={obj.value} value={obj.value}>{obj.value}</Option>
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Quantity">
                        <Select className="h43" onChange={handleChange}>
                        {quantityList.map((obj)=>{
                                return <Option key={obj.value} value={obj.value}>{obj.value}</Option>
                            })}
                        </Select>
                        <span className="fz-11" style={{position : "absolute", top : "47px", left : "0px"}}>Estimate fee : <span style={{color : "#549853"}}>$20.00</span></span>
                    </Form.Item>
                </div>
            </Form.Item>

            <Form.Item className="mt-8">
                <div className={styles['date-category-container']}>

                    <Form.Item label="Date">
                        <RangePicker />
                    </Form.Item>

                    <Form.Item label="Sub Category">
                        <RangePicker renderExtraFooter={() => 'extra footer'} />
                        <span className="fz-11" style={{position : "absolute", top : "47px", left : "0px",color : "#549853"}}>3 items<span style={{color : "black"}}> Selelcted</span></span>
                    </Form.Item>
         
                </div>

            </Form.Item>

            <Form.Item>
                <Divider className="mt-50"></Divider>
            </Form.Item>

        </Form>
  
     );
}
 
export default CreateGiftStep1;