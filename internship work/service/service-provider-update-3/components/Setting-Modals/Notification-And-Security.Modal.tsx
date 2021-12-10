import {Button, Form, Input} from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
 
const NotiicationAndSecurityModal = (props : any) =>{
    console.log("minOrderPrice",props.minOrderPrice);
    
    function handleEmail(event: any) {
        event.target.value==false?props?.setEmailNotifyNew(0):props?.setEmailNotifyNew(1);
    }
    function handleSms(event: any) {
        event.target.value==false?props?.setSmsNotifyNew(0):props?.setSmsNotifyNew(1);
    }
    function handleOrderPrice(event:any){
        
        props?.setMinOrderPriceNew(event.target.value);
        // console.log("taxrate",event?.target.value);
    }
    return(
      <div className="pl-22 pr-20">
          <Form>
              <Form.Item label="Notification Methods">
                  <Checkbox defaultChecked={props.emailNotify==0?false:true} onChange={handleEmail}>E-Mail</Checkbox>
                  <Checkbox defaultChecked={props.smsNotify==0?false:true} onChange={handleSms}>SMS</Checkbox>
              </Form.Item>

              <Form.Item className="mt-26 mb-20">
                    <div className="user-ratings multi" style={{gridColumnGap : "53px"}}>
                        <Form.Item label="Minimum Order Price">
                            <Input onChange={handleOrderPrice} className="ht-43" defaultValue={props.minOrderPrice}></Input>
                           
                        </Form.Item>
                     </div>
                        </Form.Item>
                {/* <Form.Item className="mt-25" label='Verify Password'>
                    <Input className="ht-43" type="password" placeholder="Password" style={{ width: 350 }}></Input>
                </Form.Item> */}

                {/* <Form.Item className="mt-28 mb-40">
                    <Button className="primary txt">Change Password</Button>
                </Form.Item> */}
          </Form>

      </div>
    
    )

}
export default NotiicationAndSecurityModal;