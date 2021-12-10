import React from 'react'
import { useRouter } from 'next/router';
import AdminLayout from '../../components/Admin/Layout';
import Customers from '../../components/Admin/users/Customers';
import ProfilePreview from '../../components/Admin/users/ProfilePreview';
import { Tabs } from 'antd';

const Index = () => {
    const router = useRouter(),
    { slug } = router.query,
    selected_tab = slug && slug[0] ? slug[0] : 'customers',
    user_id = slug ? slug[1] : null,

    onTabClick = (key:string, event: any) => {
        router.push(`${process.env.base_url}users/${key}`)
    };

    if(user_id) {
        return (
            <AdminLayout>
                <ProfilePreview />
            </AdminLayout>
        )
    }
    
    return (
        <AdminLayout>
            <div className="">
                <h3 className="mb-24">Users</h3>
                <Tabs className="wide-tabs" activeKey={selected_tab} onTabClick={ onTabClick }>
                    <Tabs.TabPane tab="Customers" key="customers">
                        <Customers />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Freelancers" key="freelancers">
                        <Customers />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Affiliates" key="affiliates">
                        <Customers />
                    </Tabs.TabPane>
                </Tabs>
            </div>    
        </AdminLayout>
    )
}

export default Index
