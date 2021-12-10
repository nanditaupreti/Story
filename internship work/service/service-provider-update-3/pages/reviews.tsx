import React from 'react'
import Layout from '../components/User/Layout';
import ReviewsComponent from '../components/Common/Reviews';


const Reviews = () => {
    return (
        <Layout>
            <div>
                <h3 className="mb-47">Reviews</h3>
                <ReviewsComponent />
            </div>
        </Layout>
    )
}

export default Reviews
