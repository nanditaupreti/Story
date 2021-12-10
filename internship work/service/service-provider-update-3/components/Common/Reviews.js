import React from 'react';
import styles from './Reviews.module.scss';
import cx from 'classnames';
import { Rate, Form, Select, Avatar, List } from 'antd';
import Tag from './Tag';
import * as moment from 'moment';

const Reviews = () => {
    const tags = [
        {
            id: 1,
            name: 'Completed Bookings (3500)',
            icon: null,
            selected: true
        },
        {
            id: 2,
            name: 'Reviews Received  (890)',
            icon: null,
            selected: false
        },
    ],
    sortings = ['Latest Reviews', 'Sorting 1', 'Sorting 2', 'Sorting 3'],
    categories = ['Restaurants', 'Category 1', 'Category 2', 'Category 3'],
    subCategories = ['Fine Dining', 'Sub Category 1', 'Sub Category 2', 'Sub Category 3'],
    ratings = [
        { name: '5 Stars', count: 1 },
        { name: '4 Stars', count: 0 },
        { name: '3 Stars', count: 0 },
        { name: '2 Stars', count: 0 },
        { name: '1 Stars', count: 0 }
    ],
    reviews = [
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            replies: [
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date(),
                    replies: [
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        },
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        },
                        {
                            user_name: 'Ehsaan',
                            rating: '5.0',
                            comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                            date_time: new Date()
                        }
                    ]
                },
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                },
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                }
            ]
        },
        {
            user_name: 'Halais',
            rating: '5.0',
            comment: 'Wonderful discipline from Ehsaan, did a great order with him. He was found with good understanding of the service and prompt payment.',
            booking_id: 'SP15912502',
            date_time: new Date(),
            replies: [
                {
                    user_name: 'Ehsaan',
                    rating: '5.0',
                    comment: 'Wonderful service by halais, did a great job from the time of order to delivery. Would love to make more orders in future.',
                    date_time: new Date()
                }
            ]
        },
    ],
    rendered_reviews = [],
    render_reviews = (reviews, level=0) => {
        reviews.forEach(review => {
            review['level'] = level;
            rendered_reviews.push(review);
            if(review?.replies) {
                render_reviews(review.replies, level+1)
            }
        });
    };

    render_reviews(reviews);

    return (
        <div className={ cx("card", styles["card"] ) }>
            <h5 className={ cx("card-title", styles["card-title"]) }>Reviews For Halais</h5>
            <div className={ cx(styles["card-details"]) }>
                <div className={ styles['review-filters']}>
                    <div className="tags-wrap">
                        { tags.map(tag => (
                            <Tag key={tag.id} type="primary" item={ tag }>{ tag }</Tag>
                        )) }
                    </div>
                    <Form labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
                        <Form.Item label="Sort By">
                            <Select className="medium" defaultValue={sortings[0]}>
                                {sortings.map(option => (
                                    <Select.Option key={option} value={option}>{option}</Select.Option>
                                    ))}
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
                <div className={ cx(styles['reviews-filter-container'], 'mt-35') }>
                    <div>
                        <div className={ styles["filter-container"] }>
                            <h5 className="mb-5">Reviews For Ehsaan</h5>
                            <Rate className="fz-18" value={ 5 } /> <span className="ant-rate-text fz-17">5 out of 5</span>
                            <ul className={ cx(styles['review-filters'], "no-style full-width") }>
                                { ratings.map(rating => (
                                    <li key={rating.name}>
                                        <a>{ rating.name } ({ rating.count })</a>
                                    </li>
                                )) }
                            </ul>

                            <Form layout="vertical" className="pull left full-width mt-45">
                                <Form.Item label="Categories">
                                    <Select defaultValue={categories[0]}>
                                        {categories.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Sub Categories" className="mt-25">
                                    <Select defaultValue={subCategories[0]}>
                                        {subCategories.map(option => (
                                            <Select.Option key={option} value={option}>{option}</Select.Option>
                                            ))}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>


                    <div className={ cx(styles["reviews"], "reviews") }>
                        <List
                            itemLayout="vertical"
                            pagination={{
                                onChange: page => {
                                    console.log(page)
                                },
                                pageSize: 6,
                            }}
                            dataSource={ rendered_reviews }
                            renderItem = {review => (
                                <List.Item key={review} className={ `level-${review?.level}` } 
                                    actions={[
                                        <span key={'date_time'}>{ moment(review.date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</span>,
                                        (review?.booking_id && <span>Booking ID <span className="txt italic">{  review.booking_id }</span></span>)
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar size={60} />}
                                        title={
                                            <div className="review-header">
                                                <strong className='user-name'>{ review.user_name }</strong>
                                                <Rate className="fz-14" value={ review.rating } /> <span className="ant-rate-text">({ review.rating })</span>
                                            </div>
                                        }
                                        description={ review.comment }
                                        //     <div className={ styles["review-comment"] }>{ review.comment }</div>
                                        // }
                                    ></List.Item.Meta>
                                </List.Item>
                            )}
                        ></List>
                        {/* { review_renderer(reviews) } */}
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Reviews
