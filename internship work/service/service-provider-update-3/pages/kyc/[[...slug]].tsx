import React from 'react'
import { useRouter } from 'next/router';
import AdminLayout from '../../components/Admin/Layout';
// import Providers from '../../components/Admin/kyc/Providers';
import { Tabs } from 'antd';

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'providers',
    
    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}kyc/${key}`)
    };
    
    return (
        <AdminLayout>
            <div className="">
                <h3 className="mb-24">KYC Applications</h3>
                <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Providers" key="providers">
                        {/* <Providers /> */}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Freelancers" key="freelancers">
                        {/* <Providers /> */}
                    </Tabs.TabPane>
                </Tabs>
            </div>    
        </AdminLayout>
    )
}

export default Index
