import React from 'react'
import { useRouter } from 'next/router';
import AdminLayout from '../../components/Admin/Layout';
import BookingData from '../../components/Admin/service-provider/BookingData';
import TransactionHistory from '../../components/Admin/service-provider/TransactionHistory';
import GeneralDetails from '../../components/Admin/service-provider/GeneralDetails';
import Address from '../../components/Admin/service-provider/Address';
import BranchConnected from '../../components/Admin/service-provider/BranchesConnected';
import Categories from '../../components/Admin/service-provider/Categories';
import Reviews from '../../components/Common/Reviews';
import { Tabs } from 'antd';

const ServiceProvider = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[1] ? slug[1] : 'booking-data',

    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}service-providers/${slug ? slug[0] : '0'}/${key}`)
    },
    goToAllProviders = () => {
        router.push(`${process.env.base_url}service-providers`)
    };
    
    return (
        <AdminLayout>
            <div className="">
                <div className="mtn-12">
                    <a onClick={goToAllProviders}>
                        <span className="material-icons pull-left">arrow_back_ios</span>
                        <span className="tag pull-left">All Providers</span>
                    </a>
                </div>
                <h3 className="mb-34">Halais</h3>
                <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Booking Data" key="booking-data">
                        <BookingData />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Transaction History" key="transaction-history">
                        <TransactionHistory />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="General Details" key="general-details">
                        <GeneralDetails />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Address" key="address">
                        <Address />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Categories" key="categories">
                        <Categories />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Review History" key="review-history">
                        <Reviews />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Branches Connected" key="branches-connected">
                        <BranchConnected />
                    </Tabs.TabPane>
                </Tabs>
            </div>    
        </AdminLayout>
    )
}

export default ServiceProvider
