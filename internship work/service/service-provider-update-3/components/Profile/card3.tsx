import React,{useEffect} from 'react';
import CardTemplate from './card-template';
import styles from '../../styles/components/Card3.module.scss'
import { Divider } from 'antd';

const Card3 = (props:any) =>{
 
    // if(props?.address[0].houseNumber==null){
        //     console.log("got it");
        
        // }else{
        // console.log(props.address[0]);
    //     console.log("didnt");
        
    // }
    useEffect(() => {
        // console.log(props?.address[0]);
        
        console.log("data: ",props?.email);
        
        // let itemList = [
        //  {title : "Building Number", value : props?.address[0].houseNumber==null?"-":props?.address[0].houseNumber},
        // {title : "Unit Number", value : "@King abdul aziz south road"},
        // {title : "Street", value : props?.address[0].streetAddress==null?"-":props?.address[0].streetAddress},
        // {title : "District/Square", value : "Riyadh"},
        // {title : "District/Square", value : "Yemeni"},
        // {title : "Postal/Zip Code", value :props?.address[0].zipCode==null?"-":props?.address[0].zipCode},
        // {title : "Additional Number", value : "2132"},
        // {title : "State/Region", value : props?.address[0].state==null?"-":props?.address[0].state},
        // {title : "Country", value : props?.address[0].country==null?"-":props?.address[0].country}];
        // console.log(itemList);
    }, [])


    return(
        <CardTemplate title={"General Store Details"}>
            <div className={styles['main-content-container']}>
{/* 
                {itemList.map((obj) =>{
                    return( */}
                        <div key={1}>
                            <strong>{props.email}</strong>
                        </div>
                            {/* <span>{}</span> */}
                        {/* </div>
                    )
                })}    
             */}
            </div>
        
        </CardTemplate>
   
   )

}
export default Card3;

Card3.getInitialProps = async (value: any) =>{
    return {
        value: value
    }
}


