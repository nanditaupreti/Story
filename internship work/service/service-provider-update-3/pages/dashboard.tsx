import Head from 'next/head'
import StatsCard from '../components/Common/StatsCard';
import Layout from '../components/User/Layout';
import { Tabs, Button, Select, DatePicker, Form, Tooltip } from 'antd';
import DashboardMiniTable from '../components/Common/DashboardMiniTable';
import styles from '../styles/components/Dashboard.module.scss';
import cx from 'classnames';
import PendingDetails from '../components/Dashboard/pending-details-card';
import { getMyAddresslist } from '../services/address';
import Cookies from 'universal-cookie';

const { TabPane } = Tabs;
const { Option } = Select;
const cookies = new Cookies();

export default function Dashboard(props:any) {
    const stats = [
        {
            id: 1,
            class: 'primary',
            icon: 'local_offer',
            value: '$2450.00',
            label: 'SP+ booked fee',
            additional_stats: []
        },
        {
            id: 2,
            class: 'secondary',
            icon: 'account_balance_wallet',
            value: '$22450.00',
            label: 'Spending by Users',
            additional_stats: []
        },
        {
            id: 3,
            class: 'primary',
            icon: 'store_mall_directory',
            value: '$2450.00',
            label: 'Payout to the SPs.',
            additional_stats: []
        },
        {
            id: 4,
            class: 'secondary',
            icon: 'engineering',
            value: '$22450.00',
            label: 'Payout to the Freelancers.',
            additional_stats: []
        },
        {
            id: 5,
            class: 'primary',
            icon: 'store_mall_directory',
            value: '4450',
            label: 'Sp’s Registered',
            additional_stats: []
        },
        {
            id: 6,
            class: 'secondary',
            icon: 'people',
            value: '10245',
            label: 'Users Registered',
            additional_stats: []
        },
        {
            id: 7,
            class: 'primary',
            icon: 'engineering',
            value: '2400',
            label: 'Freelancers Registered',
            additional_stats: []
        },
        {
            id: 8,
            class: 'secondary',
            icon: 'work',
            value: '3248',
            label: 'Affiliates',
            additional_stats: [
                { name: 'Total Commission Paidout', value: '$14587'},
            ]
        },
        {
            id: 9,
            class: 'primary',
            icon: 'people',
            value: '02',
            label: 'Users deactivated',
            additional_stats: []
        },
        {
            id: 10,
            class: 'secondary',
            icon: 'store_mall_directory',
            value: '23',
            label: 'SPs Unsubscribed',
            additional_stats: []
        },
        {
            id: 11,
            class: 'primary',
            icon: 'engineering',
            value: '21',
            label: 'Freelancers Unsubscribed',
            additional_stats: []
        },
        {
            id: 12,
            class: 'secondary',
            icon: 'undo',
            value: '456',
            label: 'Auto Rejections',
            additional_stats: []
        },
        {
            id: 12,
            class: 'primary',
            icon: 'card_giftcard',
            value: '2400',
            label: 'Total Created Gift Cards',
            additional_stats: [
                { name: 'Total Revenue', value: '$14587'},
                { name: 'Total Purchases', value: '1750'},
            ]
        }
    ],
    countryData = {
        title: 'Country/City Wide Usage',
        columns: [
            {
                title: 'Top Countries',
                dataIndex: 'country',
                key: 'country',
            },
            {
                title: 'Number of Users',
                dataIndex: 'users',
                key: 'users'
            }
        ],
        dataSource: [
            {
                key: '1',
                country: '1. Saudi Arabia',
                users: 24254
            },
            {
                key: '2',
                country: '2. Quatar',
                users: 23245
            },
            {
                key: '3',
                country: '3. Dubai',
                users: 22354
            },
            {
                key: '4',
                country: '4. France',
                users: 21454
            },
            {
                key: '5',
                country: '5. Germany',
                users: 20254
            }
        ]
    },
    deviceData = {
        title: 'Device',
        columns: [
            {
                title: 'Top Devices',
                dataIndex: 'device',
                key: 'device',
            },
            {
                title: 'Number of Users',
                dataIndex: 'users',
                key: 'users'
            }
        ],
        dataSource: [
            {
                key: '1',
                device: '1. IMac - IOS',
                users: '2000 (20%)'
            },
            {
                key: '2',
                device: '2. HP - Windows',
                users: '2000 (20%)'
            },
            {
                key: '3',
                device: '3. MacBook - IOS',
                users: '2000 (20%)'
            },
            {
                key: '4',
                device: '4. Asus - Windows',
                users: '2000 (20%)'
            },
            {
                key: '5',
                device: '5. Others',
                users: '2000 (20%)'
            }
        ]
    },
    revenueData = {
        title: 'Category Specific Revenue',
        columns: [
            {
                title: 'Top Devices',
                dataIndex: 'device',
                key: 'device',
            },
            {
                title: 'Number of Bookings',
                dataIndex: 'bookings',
                key: 'bookings'
            },
            {
                title: 'Total Revenue',
                dataIndex: 'revenue',
                key: 'revenue'
            }
        ],
        dataSource: [
            {
                key: '1',
                device: '1. Restaurants',
                bookings: '2000 (20%)',
                revenue: '$20000.00'
            },
            {
                key: '2',
                device: '2. Beauty Salon',
                bookings: '2000 (20%)',
                revenue: '$20000.00'
            },
            {
                key: '3',
                device: '3. Gift Shops',
                bookings: '2000 (20%)',
                revenue: '$20000.00'
            },
            {
                key: '4',
                device: '4. Sports & Fitness',
                bookings: '2000 (20%)',
                revenue: '$20000.00'
            },
            {
                key: '5',
                device: '5. Sports & Fitness',
                bookings: '2000 (20%)',
                revenue: '$20000.00'
            }
        ]
    },
    promotionalData = {
        title: 'Promotional ad Revenue',
        columns: [
            {
                title: 'Username',
                dataIndex: 'user',
                key: 'user',
            },
            {
                title: 'Gift Cards',
                dataIndex: 'gift_card',
                key: 'gift_card'
            },
            {
                title: 'SP+ Revenue',
                dataIndex: 'revenue',
                key: 'revenue'
            }
        ],
        dataSource: [
            {
                key: '1',
                user: '1. Halais',
                gift_card: '250',
                revenue: '$2000.00'
            },
            {
                key: '2',
                user: '2. Halais 2',
                gift_card: '145',
                revenue: '$17000.00'
            },
            {
                key: '3',
                user: '3. Halais  3',
                gift_card: '125',
                revenue: '$14000.00'
            },
            {
                key: '4',
                user: '4. Halais 4',
                gift_card: '115',
                revenue: '$11000.00'
            },
            {
                key: '5',
                user: '5. Halais 5',
                gift_card: '102',
                revenue: '$9000.00'
            }
        ]
    },
    categories = ['Category', 'Category 1', 'Category 2', 'Category 3'],
    subCategory = ['Sub Category', 'Sub Category 1', 'Sub Category 2', 'Sub Category 3'],
    countries = ['Country', 'Country 1', 'Country 2', 'Country 3'],
    cities = ['City', 'City 1', 'City 2', 'City 3'],
    websites = ['Website', 'Website 1', 'Website 2', 'Website 3'],
    userTypes = ['User Type', 'User Type 1', 'User Type 2', 'User Type 3'],

    pieChart = {'--rotate': `${80}deg`} as React.CSSProperties;


    const PendingDetailsArray = [
        {
            id: 1,
            controlLine: "Get complete control of your account",
            heading: "Verify your email",
            subheading: "Please verify your email to keep your account 100% protected. ",
            borderColor: "danger",
            iconColor: "secondary",
            linkTitle: "Verify Now",
            link: "",
            subject: "email"
        },
        
        {
            id: 2,
            controlLine: "",
            heading: "KYC document verification",
            subheading: "Please verify your KYC to keep your account complete and authentic. ",
            borderColor: "danger",
            iconColor: "danger",
            linkTitle: "Verify Now",
            link: "",
            subject: "kyc"
        },
        
        {
            id: 3,
            controlLine: "Profile Completion 70%",
            heading: "Complete profile sections",
            subheading: "Please input your profile information to complete your profile. ",
            borderColor: "danger",
            iconColor: "success",
            linkTitle: "Verify Now",
            link: "",
            subject: "complete profile"
        },
        {
            id: 4,
            controlLine: "Profile Completion 70%",
            heading: "Setup Payout",
            subheading: "Please input your profile information to complete your profile. ",
            borderColor: "danger",
            iconColor: "primary",
            linkTitle: "Verify Now",
            link: "",
            subject: "setup payout"
        },
        
    ]

    return (
        <Layout>
            <div>
                <h3 className="mb-47">Dashboard</h3>
                
                {PendingDetailsArray.map((obj) =>{
                    return(
                        <div key={obj.id}>
                            <PendingDetails details={obj} />
                        </div>
                    )
                })}
                
                <div className={ cx(styles['stats-container'], 'grid-view colgap-30 rowgap-30') }>
                    { stats.map((stat, i) => <StatsCard key={i} stats={stat}></StatsCard>)}
                </div>

                <h3 className="mt-44 mb-18">Statistics</h3>
                <Form className="stats-filter medium">
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={categories[0]}>
                            {categories.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={subCategory[0]}>
                            {subCategory.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={countries[0]}>
                            {countries.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={cities[0]}>
                            {cities.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={websites[0]}>
                            {websites.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Select className="medium" defaultValue={userTypes[0]}>
                            {userTypes.map(option => (
                                <Option key={option} value={option}>{option}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Button className="primary medium full-width">Apply Filters</Button>
                    </Form.Item>
                    <Form.Item className="auto-width">
                        <Button className="medium full-width">Clear Filters</Button>
                    </Form.Item>
                </Form>
                <div className={ cx(styles['dashboard-content'], 'mt-30') }>
                    <DashboardMiniTable table={countryData} />
                    <div className="card card2 p-0">
                        <h5 className="mt-22 pb-21 pl-27 pr-27" style={{ borderBottom: 'var(--border-neutral-3)'}}>Gender &amp; Age Group</h5>
                        <div className="grid-view grid-2 colgap-20 pt-18 pl-28 pr-28 pb-50">
                            <div>
                                <div><strong>Gender</strong></div>
                                <div className="pi-chart-container mt-20" style={{ width: '70%' }}>
                                    <div className="pi-chart" style={pieChart}>
                                        <div className="available" title="a"></div>
                                        <div className="occupied" title="b"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <strong>Age Group</strong>
                                <ul className="bar-charts mt-20">
                                    <li>
                                        <div className="bar-chart" data-label='<12' style={{'--width': '15%', '--percentage': '80%'} as React.CSSProperties}>
                                            <span>15%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bar-chart" data-label='12-17' style={{'--width': '25%', '--percentage': '80%'} as React.CSSProperties}>
                                            <span>25%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bar-chart" data-label='18-20' style={{'--width': '35%', '--percentage': '80%'} as React.CSSProperties}>
                                            <span>35%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bar-chart" data-label='20-40' style={{'--width': '25%', '--percentage': '80%'} as React.CSSProperties}>
                                            <span>25%</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="bar-chart invert" data-label='40-75' style={{'--width': '25%', '--percentage': '80%'} as React.CSSProperties}>
                                            <span>25%</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <DashboardMiniTable table={deviceData} />
                    <DashboardMiniTable table={revenueData} />
                    <DashboardMiniTable table={promotionalData} />
                </div>
            </div>
        </Layout>
    )
}

Dashboard.getInitialProps = async (ctx:any) => {
    const resp = await getMyAddresslist(ctx.req)
    return { data : resp }
}
