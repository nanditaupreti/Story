import LeftSidebar from '../SidebarMenu';
import Header from './Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import cx from 'classnames';

import StarsIcon from '@material-ui/icons/Stars';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RedeemRoundedIcon from '@material-ui/icons/RedeemRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';

const Layout = ({children, className=""}) => {
    const menuItems = [
        {
            path: '/dashboard',
            pathArr: ['/dashboard'],
            label: 'Dashboard',
            icon: <ShoppingBasketIcon />
        },
        {
            path: '/bookings',
            pathArr: ['/bookings'],
            label: 'Bookings',
            icon: <ShoppingBasketIcon />
        },
        {
            path: '/services',
            pathArr: ['/services'],
            label: 'Services',
            icon: <SettingsApplicationsIcon />
        },
        {
            path: '/gift-cards',
            pathArr: ['/gift-cards'],
            label: 'Gift Cards',
            icon: <RedeemRoundedIcon />
        },
        {
            path: '/reviews',
            pathArr: ['/reviews'],
            label: 'Reviews',
            icon: <StarsIcon />
        },
        {
            path: '/reports',
            pathArr: ['/reports'],
            label: 'Reports',
            icon: <PieChartRoundedIcon />
        },
        {
            path: '/payments/wallet',
            pathArr: ['/payments', '/payments/wallet'],
            label: 'Payments',
            icon: <MonetizationOnRoundedIcon />
        },
        {
            path: '/settings',
            pathArr: ['/settings'],
            label: 'Settings',
            icon: <DescriptionRoundedIcon />
        },
        {
            path: '/store-policies',
            pathArr: ['/store-policies'],
            label: 'Store Policies',
            icon: <DescriptionRoundedIcon />
        },
    ];

    return (
        <div className={ cx(styles['main-layout'], className) }>
            <LeftSidebar menu_items={menuItems}></LeftSidebar>
            <Header base_url={ process.env.base_url }></Header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
