import React, { useState } from 'react';
import UserLayout from '../../components/User/Layout';
import ServiceTypes from '../../components/Services/Add/ServiceTypes';
import Categories from '../../components/Services/Add/Categories';
import SubCategories from '../../components/Services/Add/SubCategories';
import ServiceDetails from '../../components/Services/Add/ServiceDetails';
import ServiceReview from '../../components/Services/Add/ServiceReview';
import cx from 'classnames';
import { useRouter } from 'next/router';

const Add = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});


    let form = null,
    card = null;
    
    switch(step) {
        
        case 2: 
            form = <Categories onNext={(value) => {
                setStep(step+1);
                setFormData({ ...formData, serviceCategory: { name: 'Service Category', value: value } });
            }} onPrevious={() => setStep(step-1)} selected={ formData?.serviceCategory?.value }></Categories>;
            break;

        case 3: 
            form = <SubCategories onNext={(value) => {
                setStep(step+1);
                setFormData({ ...formData, subCategory: { name: 'Sub Category', value: value } });
            }} onPrevious={() => setStep(step-1)} selected={ formData?.subCategory?.value }></SubCategories>;
            break;
        
        case 4: 
            // form = <div>test</div>;
            form = <ServiceDetails onNext={() => {
                setStep(step+1);
            }} onPrevious={() => setStep(step-1)}></ServiceDetails>;
            break;
            
        case 5: 
            // form = <div>test</div>;
            form = <ServiceReview onSaveAndAddNew={(value) => {
                setStep(1);
            }} onSaveAndPublish={() => {
                router.push('/services');
            }} onPrevious={() => setStep(step-1)}></ServiceReview>;
            break;
        
        default: 
            form = <ServiceTypes onNext={(value) => {
                setStep(step+1);
                setFormData({ ...formData, serviceTypes: { name: 'Service Types', value: value } });
            }} selected={ formData?.serviceTypes?.value }></ServiceTypes>;
    }

    if(step > 1 && step < 5) {
        card = <div>
            <div className="card card-sidepanel pb-50" style={{ width: '300px' }}>
                <p><strong style={{ fontSize: '1.714rem' }}>Service overview</strong></p>
                <div className="pl-20">
                    {
                        Object.keys(formData).map((key, i) => {
                            if(i >= step-1) {
                                return ''
                            }
                            return <div className="mt-20" key={key}>
                                <p><strong style={{ fontSize: '1.428rem' }}>{ formData[key]?.name }</strong></p>
                                <p className="pl-5 lh-20 mt-13"><span className="material-icons txt primary fz-20 pull-left mr-5">check_circle</span> { formData[key]?.value.map((row) => row.name).join(', ') }</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    } else {
        card = null
    }

    // const card = () => {
    //     console.log('test')
    //     if(Object.keys(formData).length) {
    //         return 'working'
    //     } else {
    //         return null
    //     }
    // }



    return (
        <UserLayout>
            <h3 className="mb-24">
                Add New Service
            </h3>
            <div className={ cx("grid-view grid-1 formarray", card ? 'colgap-50' : '')}>
                { form }
                { card }
            </div>
        </UserLayout>
    )
}

export default Add