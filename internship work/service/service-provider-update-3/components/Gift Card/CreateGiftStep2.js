import {Form, Radio} from 'antd';
import { Checkbox, Divider, Select, Space } from 'antd';
import styles from '../../styles/components/Create-Gift-Card-Step2.module.scss'

const CheckboxGroup = Checkbox.Group;

import React, { useState } from 'react';

const CreateGiftStep2 = () => {

    const [value, setValue] = useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    ///////

    const options = [];

    for (let i = 10; i < 36; i++) {
    const value = i.toString(36) + i;
    options.push({
        label: `${value}`,
        value,
    });
    }

    const countries = [{
        label: "India",
        value,
    },
    {
        label: "America",
        value,
    }];



    const [value1, setValue1] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
    const [country, setCountry] = useState(['India', 'America', 'London', 'Pakistan', 'China']);
    
    const selectProps = {
        mode: 'multiple',
        style: {
        width: '100%',
        },
        value1,
        options,
        onChange: (newValue) => {
        setValue1(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };

    const countryProps = {
        mode: 'multiple',
        style: {
        width: '100%',
        },
        options,
        countries,
        onChange: (newValue) => {
        setCountry(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };


    function onChange1(checkedValues) {
        console.log('checked = ', checkedValues);
      }

      const plainOptions = ['Male', 'Female'];

    return ( 
        <>
        <Form className={styles['container']}>
            <Form.Item >
                <h5 className="primary-txt fz-22">Target Demography</h5>
            </Form.Item>

            <Form.Item className="mb-26 mt-17" label="Gender">
               
               
            <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange1} />


                {/* <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Male</Radio>
                    <Radio value={2}>Female</Radio>
                </Radio.Group> */}
            </Form.Item>

            <Form.Item className="mb-20" label="Age Group">
                <Space direction="vertical">
                    <Select className="h43" {...selectProps} />
                </Space>
            </Form.Item>

            <Form.Item className="mb-27" label="Country">
                <Space direction="vertical">
                    <Select className="h43" {...countryProps} />
                </Space>
            </Form.Item>

            <Form.Item className="mb-28" label="Cities">
                <Space direction="vertical">
                    <Select className="h43" {...countryProps} />
                </Space>
            </Form.Item>

            <Form.Item className="mb-38" label="Postal/Zip Codes">
                <Space direction="vertical">
                    <Select className="h43" {...countryProps} />
                </Space>
            </Form.Item>

            <Form.Item>
               <div className={styles['estimated-cost-container']}>
                   <span className="pl-22" >Estimated cost of this gift card creation <span>(100*0.20)</span></span>
                    <span className="pull-right"><strong>$20.00</strong></span>
               </div>
            </Form.Item>
        </Form>
        </>
     );
}
 
export default CreateGiftStep2;