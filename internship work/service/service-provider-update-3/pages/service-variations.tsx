import { Form, Input, Button, Radio, Checkbox, Select, Divider, InputNumber } from 'antd';
import React, { useState } from 'react';
import { RequiredMark } from 'antd/lib/form/Form';
import { Option } from 'antd/lib/mentions';
 
const Step2 = () => {

    let selectLanguage = [{id : 0, lang : "Hindi"},{id : 1, lang : "English"}];

    return ( 
        <>
        <div>
        <div className="content-wrapper table mb-56 wdp-80">
            <h4 className="center-text mt-67 mb-26" style={{width : "fit-content", marginTop: "41px !important"}}>Service Variations</h4>
            <Form className="grid-view grid-7 rowgap-32 colgap-21" style={{gridTemplateColumns: "auto auto auto auto auto 70px auto"}}>
                <Form.Item label="Variation Name" style={{width : "100%"}}>
                    <Input placeholder="A descriotion goes here" width="100%" />
                </Form.Item>
                <Form.Item label="Calories">
                    <Input placeholder="A descriotion goes here" width="100%" />
                </Form.Item>

                <Form.Item className="mt-35">

                <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Kcal"
                        optionFilterProp="children"

                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        
                        {selectLanguage.map((obj) =>{
                                return(    
                                    <Option key={`${obj.id}`} value={`${obj.id}`}>{obj.lang}</Option>
                                );

                        })}
                    </Select>

                </Form.Item>

                <Form.Item label="Amount">
                    <Input placeholder="A description goes here" width="100%" />
                </Form.Item>

                <Form.Item label="" className="mt-35">
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="g"
                        optionFilterProp="children"

                        filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        
                        {selectLanguage.map((obj) =>{
                                return(    
                                    <Option key={`${obj.id}`} value={`${obj.id}`}>{obj.lang}</Option>
                                );

                        })}
                    </Select>

                </Form.Item>
                
                <Form.Item label="Price">
                    <Input placeholder="A description goes here" width="100%" />
                </Form.Item>
                <Form.Item className="mt-35" label="">
                    <span style={{color : "var(--primary-1)", fontWeight : 700}}><u>Add Variation</u></span>
                </Form.Item>

            </Form>
            <Divider className="mt-45"></Divider>

            <Form className="grid-view grid-2 colgap-200" style={{width: "80%", gridTemplateColumns: "40% 40%", gridColumnGap : "130px"}}>

                <Form className="grid-view grid-2 colgap-20" style={{width: "68%", gridTemplateColumns: "132% 66%"}}>
                    
                    <Form.Item label="Allowed to Book Time">
                        <InputNumber min={1} max={10} defaultValue={3}/>
                    </Form.Item>
                    
                    <Form.Item className="mt-35">
                        <InputNumber min={1} max={10} defaultValue={3} placeholder="Minutes"/>
                    </Form.Item>
                </Form>

 
                <Form className="grid-view grid-2" style={{width: "88%", gridTemplateColumns: "88% 99%"}}>
                    <Form.Item label="Service Type">
                        <Checkbox><span>In Store</span></Checkbox>
                        <span className="material-icons">edit</span>
                    </Form.Item>

                    <Form.Item className="mt-40">
                        <Button className="default" style={{backgroundColor : "transparent", border : "1px dashed var(--light-neutral-1)", borderRadius : "6px", color : "var(--dark-neutral-4)"}}>+ Add Service Type</Button>
                    </Form.Item>

                </Form>

            </Form>
        </div>
    </div>
    </>
     );
}
 
export default Step2;