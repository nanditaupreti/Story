// import fetch from "isomorphic-unfetch";
import { getMyAddresslist } from '../services/address';

const Test = ({ data }) => {
  console.log(`${process.env.api_url}/profile/user/getMyAddresslist`);
  return <div>{JSON.stringify(data)}</div>;
};

Test.getInitialProps = async () => {
  const fs = "http://saloonplus.com:3004/api_v1";
  // const params = new URLSearchParams();
  // params.append("f", "json");
  // params.append("where", "LocationID='LAX'");

  // const config = {
  //   method: "post",
  //   url: fs,
  //   data: {
  //     userType: 2,
  //     password: "12345678",
  //     userName: "yashgovindani2@gmail.com",
  //   },
  // };
  // ****************************************************************
  // const resp = await fetch(fs, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     userType: 2,
  //     password: "12345678",
  //     userName: "hackrish",
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: "authToken",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  //   //   cache: "no-cache",
  //   //   mode: "cors",
  //   //   withCredentials: true,
  //   //   credentials: "include",
  // });

  const resp = await getMyAddresslist()

  console.log('res', resp);
  // const userData = await resp.json();
  // console.log('userData', userData)

  // ****************************************************************
  return { data: resp };
};

export default Test;
