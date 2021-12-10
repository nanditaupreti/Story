import React ,{useState,useEffect} from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card3.module.scss'
import { Button, Divider, Modal } from 'antd';
import {Form} from 'antd';
import ChangeEmail from './change-email-address';
import ChangeNumber from './change-mobile-number';

// import EditGeneralDetails from './edit-general-details';

const Card7 = (props:any) =>{
    const [emailnew, setEmailNew] = useState("");
    const [mobileNumberNew, setMobileNumberNew] = useState("");
    const [chooseModal, setchooseModal] = useState(false);
    const [chooseModalName, setchooseModalName] = useState("");

    useEffect(() => {
        setEmailNew(props?.email);
        setMobileNumberNew(props?.mobileNumber);
    }, [])

    const handleOk = (evt : any) => {
        console.log('ok clicked', evt)
    };

    const handleCancel = () => {
        setchooseModal(false);
    };

    const openModal = (type : any) => {
        setchooseModal(true);
        setchooseModalName(type);
       
    };
   

    // function setUI(){
    //     setchooseModal(false);
    //     getMyDetails().then(res =>{
              
    //         if(res.status == true){
    //             setEmail(res.StoreData.email);
    //             setMobileNumber(res.StoreData.phoneNumber);
                            
    //         }else{
    //             console.log('error');
    //         }
              
    //       }).catch((err:any)=>{
    //            console.log(err);
    //       })
    // }
    return(
        <CardTemplate title={"General Details"}>
            <div className={styles['main-new-container']}>
                <Form>
                    <Form.Item className="mb-10" label="Email">
                        <div className={styles['grid-design']}>
                            <span>{emailnew==""?props?.email:emailnew}</span>
                            <span className="txt primary mr-50" onClick={() => openModal("Email")}>Change Email</span>
                        </div>
                    </Form.Item>
                    <Form.Item label="Mobile Number">
                        <div className={styles['grid-design']}>
                            <span>{mobileNumberNew==""?props?.mobileNumber:mobileNumberNew}</span>
                            <span className="txt primary" onClick={() => openModal("Number")}>Change Mobile Number</span>
                        </div>                
                    </Form.Item>
                </Form>
            </div>
        
        
    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
        <div style={{width : "100%", 
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr",
        alignItems: "center"}}>
            <h4 className="txt primary">{"Edit Profile"}</h4>
        </div>
        } 
        footer={null}
        visible={chooseModal} onOk={handleOk} onCancel={handleCancel}>
            {    chooseModalName === "Email"?
                <ChangeEmail  cancelModal={handleCancel} setEmailNew={setEmailNew} />
                :
                <ChangeNumber cancelModal={handleCancel} setMobileNumberNew={setMobileNumberNew} /> 
            }
            
    </Modal>
</CardTemplate>
   )

}
export default Card7;