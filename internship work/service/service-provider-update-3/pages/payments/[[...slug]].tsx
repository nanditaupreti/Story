import React from 'react'
import { Button, Divider, Tabs } from 'antd';
import styles from '../../styles/components/Payment.module.scss';
import { useRouter } from 'next/router';
import DashboardMiniTable from '../../components/Common/DashboardMiniTable';
import Layout from '../../components/User/Layout'
import Wallet from  '../wallet';
import PaymentWalletDeposit from '../../components/Payments/payment-wallet-deposit';
import PaymentWalletPayout from '../../components/Payments/payment-wallet-payout';
import PaymentMethods from '../../components/Payments/payment-methods';
import PaymentDetails from '../../components/Payments/payment-details-1';
import PaymentDetails2 from '../../components/Payments/payment-details-2';
import PaymentDetails3 from '../../components/Payments/payment-details-3';
import PaymentDetails4 from '../../components/Payments/payment-details-4';
import PaymentMethods2 from '../../components/Payments/payment-methods-2';

const Payments = () => {

    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}payments/${key}`)
    };

    return(
        <Layout>
        <div className="">
            <h3 className="mb-24">Payments</h3>
            <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                <Tabs.TabPane tab="Wallet" key="wallet">
                    <Wallet />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Payment Methods" key="payment-methods">
                    < PaymentMethods2/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Payout Details" key="payout-details">
                    <PaymentWalletDeposit/>
                </Tabs.TabPane>
            </Tabs>
        </div>    
    </Layout>
        
    )
}

export default Payments;
