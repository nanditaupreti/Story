import React from 'react'
import AdminLayout from '../../components/Admin/Layout';
import { Tabs, Button, Table, Menu, Input } from 'antd';
import { useRouter } from 'next/router';

const { SubMenu } = Menu;

const ServiceProvidersHome = () => {

    const dataSource = [],
    router = useRouter(),

    columns = [
        {
            title: 'SP Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'UserName',
            dataIndex: 'user_name',
            key: 'user_name',
        },
        {
            title: 'Completed Bookings',
            dataIndex: 'completed_bookings',
            key: 'completed_bookings',
            render: function completed_bookings(completed_bookings:string) {
                return (
                    <span className="txt success" key={completed_bookings}>{ completed_bookings }</span>
                )
            }
        },
        {
            title: 'Total Revenue',
            dataIndex: 'total_revenue',
            key: 'total_revenue',
            render: function total_revenue(total_revenue:string) {
                return (
                    <span className="txt danger" key={total_revenue}>${ total_revenue }</span>
                )
            }
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: function status(status:number) {
                let ret = null
                switch(status) {
                    case 0:
                        ret = <span className="txt secondary" key={status}>Deactivated</span>
                        break;
                    case 1:
                        ret = <span className="txt success" key={status}>Active</span>
                        break;
                        
                    default:
                        ret = <span className="txt success" key={status}>Active</span>
                        break;
                        
                }
                return ret
            }
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            render: function action(action:React.Key) {
            // render: function action(action:number) {
                return <>
                    <Menu className="table-action-btn" mode="horizontal">
                        <SubMenu key="SubMenu" title="">
                            <Menu.Item key="View Details" icon={<span className="material-icons">visibility</span>} onClick={ () => viewDetails(action) }>View Details</Menu.Item>
                            <Menu.Item key="Message" className="disabled" icon={<span className="material-icons">textsms</span>}>Message</Menu.Item>
                            <Menu.Item key="Deactive" className="disabled" icon={<span className="material-icons">do_disturb_alt</span>}>Deactive</Menu.Item>
                            <Menu.Item key="Delete" className="txt danger disabled" icon={<span className="material-icons">delete</span>}>Delete</Menu.Item>
                        </SubMenu>
                    </Menu>
                </>
            }
        },
    ],

    viewDetails = (row:any) => {
        router.push(`${ process.env.base_url }service-providers/${row.key}`);
    };

    
    for (let i = 1; i < 46; i++) {
        dataSource.push({
            key: i,
            name: `Mike ${i}`,
            user_name: `Mike${i}`,
            completed_bookings: '100',
            total_revenue: '10000.00',
            country: 'Saudi Arabia',
            city: 'Jidhah',
            email: 'halais@gmail.com',
            status: i%2
        })
    }
    
    
    return (
        <AdminLayout>
            <div className="">
                <h3 className="mb-24">Service Providers</h3>
                <div className="mb-20">
                    <div className="pull-right auto-width">
                        <Input className="search-field" size="small" placeholder="Search by username" prefix={<span className="material-icons">search</span>} />
                    </div>
                </div>
                <Table className="bordered" dataSource={dataSource} columns={columns} />
            </div>
        </AdminLayout>
    )
}

export default ServiceProvidersHome
