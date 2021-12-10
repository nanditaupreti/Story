import Head from 'next/head'
import GiftCard from '../components/Gift Card/GiftCard';
import ReactivateModal from '../components/Gift Card/Reactivate-Modal';
import GiftCardValidatorChecker from '../components/Gift Card/GiftCard-Validater-Checker';
import UserLayout from '../components/User/Layout';
import { Tabs, Button } from 'antd';
import CreateGiftCard from '../components/Gift Card/Create-Gift-Card';
import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';



const { TabPane } = Tabs;

export default function GiftCards() {
    const count = [
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            visibleToStore: false,
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            validity: '10 Days',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            value: '50',
            quantity: '100',
            purchases: '25',
            timesUsed: '17',
            cardsExpired: '08',
        },
        {
            cardName: 'Gift Card 2',
            cardNumber: '22AW-L8CT-22',
            visibleToStore: true,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae totam eos, qui accusantium eum earum commodi porro iste consequatur aperiam cupiditate eius eaque enim dolorum minima deleniti itaque repellat sunt.',
            validity: '14 Days',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            value: '50',
            quantity: '100',
            purchases: '25',
            timesUsed: '17',
            cardsExpired: '08',
        },
        {
            cardName: 'Gift Card 1',
            cardNumber: '22AW-L8CT-20',
            visibleToStore: false,
            description: 'A short Description about the gift card goes here for getting an initial idea.',
            validity: '10 Days',
            dates: 'Nov 11, 2020 - Nov 11, 2021',
            price: '25',
            value: '50',
            quantity: '100',
            purchases: '25',
            timesUsed: '17',
            cardsExpired: '08',
        }
    ];

    const [createGiftCard, setCreateGiftCard] = useState(false);
    const [reactivateCard, setReactivateCard] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalName, setModalName] = useState("");

    const handleOk = () => {
        // console.log('ok clicked', evt);
    }

    const handleCancel = () => {
        setCreateGiftCard(false);
        setReactivateCard(false);
        setModal(false);
    }
    
    const openModal = (type :any) => {

        console.log(type);
        setModal(true);

        if(type === "create-gift-card"){
            setCreateGiftCard(true);
            setModalName("create-gift-card");
        }else if(type === "reactivate_card"){
            setReactivateCard(true);
            setModalName("reactivate_card");
            // setCreateGiftCard(true);
        }

    };


    return (
        <UserLayout>
            <div className="">
                <h3 className="mb-24">
                    Gift Cards
                    <Button className="primary pull-right" onClick={()=>openModal("create-gift-card")}>Create A Gift Card</Button>
                    <Modal style={{borderRadius :"15px", overflow : "hidden",width : "fit-content"}} title={
                            <div style={{width : "100%", 
                            height: "100%",
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            alignItems: "center"}}
                            >
                                <h4 className="txt primary">{modalName === "reactivate_card" ? "Re Activate Expired Gift Card " : "Create Gift Card"}</h4>
                            </div>
                    } footer={
                        <div style={{padding : "20px"}}>
                            {modalName === "reactivate_card"
                            ?
                            <>
                                <Button className="mr-20" >Cancel</Button>
                                <Button className="ant-btn primary mr-7">Re Activate Gift Card</Button> 
                             </>
                             : 
                            <>
                                <Button className="mr-20" >Cancel</Button>
                                <Button className="ant-btn primary mr-7">Create Gift Card</Button>
                            </>
                            }
                           
                        </div>
                        } visible={modal} onOk={handleOk} onCancel={handleCancel}>
                            {modalName === "create-gift-card" ? 
                        <CreateGiftCard></CreateGiftCard>
                        :
                        < ReactivateModal/>
                        
                        }
                        </Modal>

                </h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Active Gift Cards" key="1">
                        <h5>Active Gift Cards</h5>
                        <div className="grid-view grid-2 colgap-30 rowgap-30 mt-30">
                            {count.map((a, i) => {
                                return <GiftCard key={i} card={a} />
                            })}
                        </div>
                    </TabPane>
                    <TabPane tab="Inactive Gift Cards" key="2">
                        <h5>Inactive Gift Cards</h5>
                        <div className="grid-view grid-2 colgap-30 rowgap-30 mt-30">
                            {count.map((a, i) => {
                                return <GiftCard modal={openModal} key={i} card={a} type={"inactive_card"} />
                            })}
                        </div>
                    </TabPane>
                    <TabPane tab="Validity Checker" key="3">
                        <h5>Gift Card Validity Checker</h5>
                        {/* <div className="grid-view grid-2 colgap-30 rowgap-30 mt-30"> */}
                            <GiftCardValidatorChecker></GiftCardValidatorChecker>
                        {/* </div> */}
                    </TabPane>
                </Tabs>
            </div>
        </UserLayout>
    )
}
