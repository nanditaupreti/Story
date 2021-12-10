import { DatePicker, Form, Input, Select ,Button} from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';
import moment from 'moment';

const GeneralSettingsModal = (props:any) =>{
   console.log("timezone",props.timeZone);
   
    function handleTimeZone(value : any) {
        props?.setTimeZoneNew(value);
        // console.log("timezone",value);
    }
    function handleDateFormat(value : any) {
        props?.setDateNew(value);
        // console.log("date",value);
    }
    function handleTaxRate(event:any){
        
        props?.setTaxRateNew(event.target.value);
        // console.log("taxrate",event?.target.value);
    }
        
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const customFormat = (value : any)  => `custom format: ${value.format(dateFormat)}`;


    return(
        <div className="pl-22 pr-20">
            <Form className="mt-5">
                <Form.Item label="Timezone">
                    <Select className="h43" defaultValue={props?.timeZone} onChange={handleTimeZone}>
                        <Option value="Arabian Standard Time (GMT+3)">Arabian Standard Time (GMT+3)</Option>
                        <Option value="India Standard Time ">India Standard Time </Option>
                        <Option value="Central European Summer Time">Central European Summer Time</Option>
                        <Option value="Pacific Standard Time">Pacific Standard Time</Option>
                    </Select>
                </Form.Item>

                <Form.Item className="mt-26 mb-20">
                    <div className="user-ratings multi" style={{gridColumnGap : "53px"}}>
                        <Form.Item label="Tax Rate">
                            <Input onChange={handleTaxRate} className="ht-43" defaultValue={props.taxRate}></Input>
                           
                        </Form.Item>
                        
                        <Form.Item label="Date Format">
                            <Select className="h43"  defaultValue={props.date} onChange={handleDateFormat}>
                                <Option value="DD/MM/YYYY">DD/MM/YYYY</Option>
                                <Option value="MM/YYYY/DD">MM/YYYY/DD</Option>
                                <Option value="YYYY/MM/DD">YYYY/MM/DD</Option>

                                <Option value="DD-MM-YYYY">DD-MM-YYYY</Option>
                                <Option value="MM-YYYY-DD">MM-YYYY-DD</Option>
                                <Option value="YYYY-MM-DD">YYYY-MM-DD</Option>

                                <Option value="DD:MM:YYYY">DD:MM:YYYY</Option>
                                <Option value="MM:YYYY:DD">MM:YYYY:DD</Option>
                                <Option value="YYYY:MM:DD">YYYY:MM:DD</Option>
                                
                            </Select>
                        </Form.Item>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default GeneralSettingsModal;