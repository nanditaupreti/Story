import LeftSidebar from '../SidebarMenu'
import Header from '../User/Header';
import FooterMenus from '../FooterMenus';
import Footer from '../Footer';
import styles from '../User/Layout.module.scss';

const Layout = ({children}) => {
    const menuItems = [
        {
            path: '/dashboard',
            pathArr: ['/dashboard'],
            label: 'Dashboard',
            icon: 'dashboard'
        },
        {
            path: '/service-providers',
            pathArr: ['/service-providers', '/service-providers/[...slug]'],
            label: 'Service Provider',
            icon: 'store_mall_directory'
        },
        {
            path: '/users/customers',
            pathArr: ['/users', '/users/[[...slug]]'],
            label: 'Users',
            icon: 'people'
        },
        {
            path: '/gift-cards',
            pathArr: ['/gift-cards'],
            label: 'Booking Data',
            icon: 'shopping_basket'
        },
        {
            path: '/revenue',
            pathArr: ['/revenue'],
            label: 'Revenue',
            icon: 'monetization_on'
        },
        {
            path: '/manage-reported-s-ps',
            pathArr: ['/manage-reported-s-ps'],
            label: 'Manage Reported SPs',
            icon: 'store_mall_directory'
        },
        {
            path: '/requests',
            pathArr: ['/requests'],
            label: 'Requests',
            icon: 'notifications_paused'
        },
        {
            path: '/policies',
            pathArr: ['/policies'],
            label: 'Policies',
            icon: 'description'
        },
        {
            path: '/subscription-tiers',
            pathArr: ['/subscription-tiers'],
            label: 'Subscription Tiers',
            icon: 'table_chart'
        },
        // {
        //     path: '/sponsored-results',
        //     label: 'Sponsored Results',
        //     icon: 'campaign'
        // },
        {
            path: '/kyc/providers',
            pathArr: ['/kyc', 'kyc/[[...slug]]'],
            label: 'KYC',
            icon: 'assignment_ind'
        }
    ]

    return (
        <div className={styles['main-layout']}>
            <LeftSidebar menu_items={menuItems}></LeftSidebar>
            <Header></Header>
            <main className={styles['main-content']}>
                {children}
            </main>
            <footer>
                <FooterMenus/>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;
