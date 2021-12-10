import useTranslation from 'next-translate/useTranslation';
import Header from "../components/Public/Header";
import FooterMenus from "../components/FooterMenus";
import Footer from "../components/Footer";
import { message, Form, Input, Button, Checkbox, Divider } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authenticate } from '../actions/user';
import { login } from '../services/auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// import styles from '../styles/scss/overwrite/input';
import cx from 'classnames'
import Cookies from 'universal-cookie';

export default function Login(props:any) {
    const { t } = useTranslation('common');
    const cookies = new Cookies();
    const userid = 'sp@saloonplus.com',
    pass = 'cybertrons';
    console.log(props)
    const [form] = Form.useForm(),
    dispatch = useDispatch(),
    router = useRouter();

    const validateMessages = {
        required:  t('validator:required', {field: '${label}'}),
        types: {
          email: t('validator:email', {field: '${label}'}),
        },
        string: {
            min: t('validator:minLengthValidator', {field: '${label}', count: '${min}'}),
        }
    },
    onFinish = (values: any) => {
        login({
            userType: 2,
            userName: values.userName,
            password: values.password
        })
        .then(res => {
            console.log(res)
            if(res.status) {
                localStorage.setItem('accessToken', res.accessToken);
                cookies.set('accessToken', res.accessToken)
                localStorage.setItem('user', res.UserData);
                dispatch(authenticate(true));
                router.push(`${ process.env.base_url }services`);
            } else {
                message.config({duration: 5, top: 60})
                message.error( t(res.message) );
            }
        })
        .catch(error => {
            console.log(error)
        })
        // if(values.userName == userid && values.password == pass) {
        //     dispatch(authenticate(true));
        //     localStorage.setItem('accessToken', 'test')
        //     localStorage.setItem('user', 'test')
        //     router.push(`${ process.env.base_url }services`);
        // } else {
        //     message.config({duration: 5, top: 60})
        //     message.error('Invalid User Name or Password');
        // }
    }

    return (
        <div className="layout three-rows signup">
            <header>
                <Header></Header>
            </header>
            <main>
            <div className="content-wrapper table mb-56">
                    <h4 className="center-text mt-67 mb-67">Register to manage your bookings via SaloonPlus</h4>
                    <Form
                        className="grid-view grid-1 rowgap-24"
                        form={form}
                        onFinish={onFinish}
                        // layout="vertical"
                        validateMessages={validateMessages}>

                        <Form.Item name={['userName']} label={ t('Email/Mobile/Username') } rules={[{ required: true }]}>
                            <Input placeholder={ t('placeholder:loginUserName') } />
                        </Form.Item>
                        <Form.Item name={['password']} label={ t('Password') } rules={[{ required: true, min: 8 }]}>
                            <div className={cx('pwd-eye-cont', '_input')}>
                                <Input.Password className="input medium input" placeholder="input password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className="mt-10"><span className="primary-txt">{ t('Remember Me') }</span></Checkbox>
                            </Form.Item>
                            <Button className="primary pull-right" htmlType="submit">{ t('Sign In') }</Button>
                        </Form.Item>


                        <div className="center">
                            <Divider>
                                <Link href="/forgot-password" passHref={true}>
                                    <Button className="ant-btn ant-btn-link">Forgot password</Button>
                                </Link>
                            </Divider>
                        </div>
                    </Form>
                </div>
            </main>
            <footer>
                <FooterMenus />
                <Footer />
            </footer>
        </div>
    )

}

// Login.getInitialProps = async () => {
//     // 3.108.65.128
//     const fs = "http://194.163.134.197:3000/login";
//     // const params = new URLSearchParams();
//     // params.append("f", "json");
//     // params.append("where", "LocationID='LAX'");
  
//     // const config = {
//     //   method: "post",
//     //   url: fs,
//     //   data: {
//     //     userType: 2,
//     //     password: "12345678",
//     //     userName: "yashgovindani2@gmail.com",
//     //   },
//     // };
//     // ****************************************************************
//     const resp = await fetch(fs, {
//       method: "POST",
//       body: JSON.stringify({
//         userType: 2,
//         password: "12345678",
//         userName: "hackrish",
//       }),
//       headers: {
//         "Content-Type": "application/json",
//         authorization: "authToken",
//         "Access-Control-Allow-Origin": "*",
//       },
//       //   cache: "no-cache",
//       //   mode: "cors",
//       //   withCredentials: true,
//       //   credentials: "include",
//     });
//     console.log('res', resp);
//     const userData = await resp.json();
//     console.log('userData', userData)
  
//     // ****************************************************************
//     return { data: userData };
//   };