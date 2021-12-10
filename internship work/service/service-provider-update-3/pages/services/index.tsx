import UserLayout from '../../components/User/Layout';
import { Tabs, Button, Table, Menu } from 'antd';
import Link from 'next/link';
import React from 'react';

const { TabPane } = Tabs;

const Services = () => {
    let dataSource:any[] = [],
    renderer = (value : any, row: any, index: any) => {
        let obj = {
            children: value,
            props: {
                colSpan: 1
            }
        }
        if(row.key.length < 5) {
            obj.props.colSpan = 0
        }
        return obj;
    },

    columns = [
        {
            title: 'Service',
            dataIndex: 'name',
            key: 'name',
            render: function totalbookings(value : any, row: any, index: any) {
                let obj = {
                    children: value,
                    props: {
                        colSpan: 1
                    }
                }
                if(row.key.length < 5) {
                    obj.props.colSpan = 6
                }
                return obj;
            }
        },
        {
            title: 'Completed',
            dataIndex: 'completed',
            key: 'completed',
            render: renderer
        },
        {
            title: 'Cancelled',
            dataIndex: 'cancelled',
            key: 'cancelled',
            render: renderer
        },
        {
            title: 'No Show',
            dataIndex: 'no_show',
            key: 'no_show',
            render: renderer
        },
        {
            title: 'Revenue',
            dataIndex: 'revenue',
            key: 'revenue',
            render: function revenue(value : any, row: any, index: any) {
                let obj = {
                    children: <span className="txt success">{ value }</span>,
                    props: {
                        colSpan: 1
                    }
                }
                if(row.key.length < 5) {
                    obj.props.colSpan = 0
                }
                return obj;
            },
        },
        {
            title: 'actions',
            dataIndex: 'actions',
            key: 'actions',
            render: function action(value: any, row: any, index: any) {
                let obj = {
                    children: <Menu className="table-action-btn" mode="horizontal">
                        <Menu.SubMenu key="SubMenu" title="">
                            <Menu.Item key="Accept" className="txt primary" icon={<span className="material-icons">visibility</span>}>View</Menu.Item>
                            <Menu.Item key="Reject" className="txt primary" icon={<span className="material-icons">edit</span>}>Edit</Menu.Item>
                            <Menu.Item key="Reject" className="txt secondary" icon={<span className="material-icons">pause</span>}>Hold</Menu.Item>
                            <Menu.Item key="Reject" className="txt danger" icon={<span className="material-icons">delete</span>}>Delete</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>,
                    props: {
                        colSpan: 1
                    }
                }
                if(row.key.length < 5) {
                    obj.props.colSpan = 0
                }
                return obj
            }
        },
    ];

    dataSource = [
        {
            key: '1',
            name: 'Beauty Shop',
            completed: '104',
            cancelled: '0',
            no_show: '0',
            revenue: '$1400.00',
            children: [
                {
                    key: '1-1',
                    name: 'Barbershop',
                    completed: '104',
                    cancelled: '0',
                    no_show: '0',
                    revenue: '$1400.00',
                    children: [
                        {
                            key: '1-1-1',
                            name: 'Haircut',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        },
                        {
                            key: '1-1-2',
                            name: 'Beard Trimming',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        }
                    ]
                },
                {
                    key: '1-2',
                    name: 'Body Care',
                    completed: '104',
                    cancelled: '0',
                    no_show: '0',
                    revenue: '$1400.00',
                    children: [
                        {
                            key: '1-2-1',
                            name: 'Haircut',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        },
                        {
                            key: '1-2-2',
                            name: 'Beard Trimming',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        }
                    ]
                }
            ]
        },
        {
            key: '2',
            name: 'Clinics',
            completed: '104',
            cancelled: '0',
            no_show: '0',
            revenue: '$1400.00',
            children: [
                {
                    key: '2-1',
                    name: 'Cuping Therapy',
                    completed: '104',
                    cancelled: '0',
                    no_show: '0',
                    revenue: '$1400.00',
                    children: [
                        {
                            key: '2-1-1',
                            name: 'Haircut',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        },
                        {
                            key: '2-1-2',
                            name: 'Beard Trimming',
                            completed: '104',
                            cancelled: '0',
                            no_show: '0',
                            revenue: '$1400.00'
                        }
                    ]
                },
            ]
        }
    ];
    // const defaultExpandedRowKeys = dataSource.map(a => a.key);

    // for(let i = 1; i<20; i++) {
    //     dataSource.push({
    //         key: i,
    //         service_name: `Service ${i}`,
    //         service_category: `Category ${i}`,
    //         service_sub_category: `Sub Category ${i}`,
    //         service_type: `Service Type ${i}`,
    //         duration: `Duration ${i}`,
    //         allowed_to_book_time: `Allowed To Book Time ${i}`,
    //         description: `Description ${i}`
    //     })
    // }
    const rowSelection = {
        onChange: (selectedRowKeys:any, selectedRows:any) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record:any, selected:any, selectedRows:any) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected:any, selectedRows:any, changeRows:any) => {
          console.log(selected, selectedRows, changeRows);
        },
    };
    const [checkStrictly, setCheckStrictly] = React.useState(false);

    return (
        <UserLayout>
            <div className="">
                <h3 className="mb-24">
                    Services
                    <Link href="/services/add" passHref={true}><Button className="primary pull-right link-btn">Add New Service</Button></Link>
                </h3>
                <Table
                    className="bordered multi-level mt-25" 
                    rowSelection={{ ...rowSelection, checkStrictly }}
                    dataSource={ dataSource } 
                    defaultExpandedRowKeys={ dataSource.map(a => a.key) }
                    columns={ columns }
                />
            </div>
        </UserLayout>
    )
}

export default Services
