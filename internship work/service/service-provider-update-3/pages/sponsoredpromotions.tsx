// import Header from './../components/Public/Header';
import FooterMenus from './../components/FooterMenus';
import Footer from './../components/Footer';
import styles from './../styles/components/Sponsored.module.scss';
// import TopMenubar from './TopMenubar';
import cx from 'classnames';

import logo from './../public/icons/gift.svg';

import SponsoredPromotionsHeader from './../components/Public/SponsoredPromotionsHeader'
// import MonthlyOverView from './monthly-overview-container';
import AllListing from './all-listing-list';
import Layout from '../components/User/Layout';
import { Button, Divider, Input, Menu, Select, Table } from 'antd';
import {Form} from 'antd';
import { useState } from 'react';
import { Option } from 'antd/lib/mentions';

const SponsoredPromotions = () =>{

    let mainLeftList = [];

    mainLeftList = [{
        logo : "shopping_basket",
        item : "Booking",
        id : 1,
    },{
        logo : "cleaning_services",
        item : "Services",
        id : 2,
    },{
        logo : "people",
        item : "Staff",
        id : 3,
    },{
        logo : "card_giftcard",
        item : "Gift Cards",
        id : 4,

    },{
        logo : "stars",
        item : "Reviews",
        id : 5,

    },{
        logo : "store",
        item : "Branches",
        id : 6,

    },{
        logo : "pie_chart",
        item : "Reports",
        id : 7,
    },{
        logo : "monetization_on",
        item : "Payments",
        id : 8,

    },{
        logo : "description",
        item : "Store Policies",
        id : 9,

    },{
        logo : "campaign",
        item : "Sponsored Listing",
        id : 10,

    }]

    const [viewDetail, setViewDetail] = useState(false);
    const [reject, setReject] = useState(false);
    const [del, setDel] = useState(false);


    const user_types = ['User Type', 'User Type 1', 'User Type 2', 'User Type 3'],
    status = ['Accepted', 'Rejected', 'Re-Submited'],
    dataSource = [
        {key : 'name',name : "Holiday Promo", status : "Paused", impressions : "100", clicks : "100", activedates : "12 Dec, 2020 -12 Dec, 2020", averagedailyspend : "$1.00", totalspent : "$100.00"},
        {key : 'name',name : "Holiday Promo", status : "Paused", impressions : "100", clicks : "100", activedates : "12 Dec, 2020 -12 Dec, 2020", averagedailyspend : "$1.00", totalspent : "$100.00"},
       
    ],
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Impressions',
            dataIndex: 'impressions',
            key: 'impressions',
        },
        {
            title: 'Clicks',
            dataIndex: 'clicks',
            key: 'clicks',
        },
        {
            title: 'Active Dates',
            dataIndex: 'activedates',
            key: 'activedates',
            // render: function document(documents) {
            //     return (
            //         <>
            //             { documents.map(document => <a key={document} className="txt success mr-10" rel="noreferrer" target="_blank" href={ document.link }>{ document.name }</a>) }
            //         </>
            //     )
            // }
        },
        {
            title: 'Average Daily Spend',
            dataIndex: 'averagedailyspend',
            key: 'averagedailyspend',

        },
        {
            title: 'Total Spent',
            dataIndex: 'totalspent',
            key: 'totalspent',
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action() {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="View Details" onClick={()=>openModal("view_details")} icon={<span className="material-icons">visibility</span>}>View Details</Menu.Item>
                            <Menu.Item key="Message" icon={<span className="material-icons">done</span>}>Accept</Menu.Item>
                            <Menu.Item key="Delete" onClick={()=>openModal("delete")} className="txt danger" icon={<span className="material-icons">delete</span>}>Reject</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </>
            }
        },

    ],
    handleOk = (evt :any) => {
        console.log('ok clicked', evt)
    },
    handleCancel = () => {
        // console.log('cancel clicked', evt);
        // if(type === "view_details"){
            setViewDetail(false);
        // }else if(type === "delete"){
            setDel(false);
        // }
        
    },
    openModal = (type : any) => {

        console.log(type);

        if(type === "view_details"){
            setViewDetail(true);
        }
        
        if(type === "delete"){
            setDel(true);
        }
    };


    return(
        
        <Layout>

            <div className={styles['page-title']}>
                <h3>Sponsored Listings</h3>
                <Button className="txt primary">Create A Promotion</Button>
            </div>
            
            <h5 className="mt-24">Monthly Overview</h5>

            <div className={styles['monthly-overview-container']}>
                <div className={styles['moc-item']}>
                    <span className="material-icons mb-7 fz-20">visibility</span>
                    <h5>12458</h5>
                    <span>Total Impressions</span>
                </div>
                {/* <Divider className={styles['divider']} type="vertical"></Divider> */}
                <div className={styles['moc-item']}>
                    <span className="material-icons fz-20 mb-7 fz-20">near_me</span>
                    <h5>12458</h5>
                    <span>Total Impressions</span>
                </div>
                {/* <Divider className={styles['divider']} type="vertical"></Divider> */}
                <div className={styles['moc-item']}>
                    <span className="material-icons mb-7 fz-20">visibility</span>
                    <h5>12458</h5>
                    <span>Total Impressions</span>
                </div>
                {/* <Divider className={styles['divider']} type="vertical"></Divider> */}
                <div className={styles['moc-item']} style={{borderRight : "0px!important"}}>
                    <span className="material-icons mb-7 fz-20">visibility</span>
                    <h5>12458</h5>
                    <span>Total Impressions</span>
                </div>

            </div>

            <h3 className="mt-60">All Listings</h3>

            <Form className="stats-filter medium mt-11">
                <Form.Item className="auto-width">
                    <Button className="medium" style={{border : "1px solid var(--light-neutral-1)", color : "var(--light-neutral-1)"}}>Date</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
                <Form.Item className="auto-width">
                    <Button className="medium full-width">Clear Filters</Button>
                </Form.Item>
            </Form>

            <Table className="bordered mt-25" rowSelection={{
                    type: 'checkbox',
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
                    }
                }} dataSource={dataSource} columns={columns} />


        </Layout>


        // <div className={styles['spromotion']}>
        //     <header>
        //         <SponsoredPromotionsHeader></SponsoredPromotionsHeader>
        //     </header>

        //     <main>
        //         <div className={cx(styles['main-container'])}>
        //             <div className={styles['left_main']}>
        //                 {mainLeftList.map((obj) =>{
        //                     return(
        //                         <div key={obj.id} style={{ display : "flex", paddingLeft : "23.33px"}}>
        //                             <div style={{ display : "flex", alignItems : "center",width : "200px", columnGap : "9.83px"}}>
        //                                 {/* <div className="item-image" style={{width : "20%"}}></div> */}
        //                                 {obj.logo === "campaign" ? 
        //                                 <>
        //                                 <span className="material-icons" style={{color : "var(--primary-1)"}}>{obj.logo}</span>
        //                                 <span className="item-text" style={{width : "80%", overflowWrap: "break-word", color : "var(--primary-1)",fontWeight :"bold" }}>{obj.item}</span>
        //                                 </>
        //                                 :
        //                                 <>
        //                                 <span className="material-icons">{obj.logo}</span>
        //                                 <span className="item-text" style={{width : "80%", overflowWrap: "break-word", color : "var(--dark-neutral-3)"}}>{obj.item}</span>
        //                                 </>
        //                                 }
        //                             </div>
        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //             <div className={styles['right_main']}>

        //                 <div className={styles['sponsored-listing']}>
        //                     <div className={styles['title']}>
        //                         <h3>Sponsored Listing</h3>
        //                         <button className="create_promotion">Create A Promotion</button>
        //                     </div>

        //                     <h5>Monthly Overview</h5>
        //                         {/* <MonthlyOverView></MonthlyOverView> */}
        //                     <h3 style={{marginTop : "73px"}}>All Listings</h3>
        //                     <div className={styles['filters']}>
        //                         <button>Date</button>
        //                         <button style={{backgroundColor : "var(--primary-1)", color : "white"}}>Apply Filters</button>
        //                         <button>Clear Filters</button>
        //                     </div>

        //                     <div className={styles['all-listing-container']}>
        //                         <div className={styles['all_list_columns']}>
        //                             <span className="material-icons">check_box_outline_blank</span>
        //                             <div className="">NAME</div>
        //                             <div className="">STATUS</div>
        //                             <div className="">IMPRESSIONS</div>
        //                             <div className="">CLICKS</div>
        //                             <div className="">ACTIVE DATES</div>
        //                             <div className="">AVERAGE DAILY SPENT</div>
        //                             <div className="">TOTAL SPENT</div>
        //                             <div className="">ACTIONS</div>
        //                         </div>
        //                         <AllListing></AllListing>
        //                     </div>

        //                 </div>

        //                 <div className={styles['all-listing']}></div>

        //             </div>
        //         </div>
        //     </main>
            
        //     <footer>
        //             <FooterMenus />
        //             <Footer />
        //     </footer>

        // </div>
    
    )

}


export default SponsoredPromotions;