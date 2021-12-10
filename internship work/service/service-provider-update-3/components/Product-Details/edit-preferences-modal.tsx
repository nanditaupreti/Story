import { Checkbox, DatePicker, Form, Select, TimePicker } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

const EditPreferences = () =>{
    
    function handleChange(value : any) {
        console.log(`selected ${value}`);
    }

    function onChange(time : any, timeString : any) {
        console.log(time, timeString);
    }
    
    return(
        <div className="container">
            <Form>
                <Form.Item label="Services">
                    <Checkbox>Dine in</Checkbox>
                    <Checkbox>Pick up</Checkbox>
                </Form.Item>
                <Form.Item className="mt-13" label="Select Staff">
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Staff 1</Option>
                        <Option value="lucy">Staff 2</Option>
                        <Option value="Yiminghe">Staff 3</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="mt-13">
                    <div className="grid-view grid-2 colgap-30">
                        <Form.Item label="Time">
                            <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                        </Form.Item>

                        <Form.Item label="Date">
                            <DatePicker onChange={onChange} />
                        </Form.Item>

                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditPreferences;