import React, { useState } from 'react';
import { Form, Input, Select, Divider, InputNumber, Button, Checkbox, Upload, Modal, message } from 'antd';
import { RequiredMark } from 'antd/lib/form/Form';
import styles from './Style.module.scss';
import Image from 'next/image';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import TextArea from 'antd/lib/input/TextArea';

const ServiceDetails = ({onNext, onPrevious}) => {
    const [form] = Form.useForm();
    const [serviceVariations, updateServiceVariations] = useState([{
        variationName: '',
        price: '',
        hours: '',
        minutes: '',
    }]),

    addVariation = () => {
        const newVariation = {
            variationName: '',
            price: '',
            hours: '',
            minutes: '',
        };
        updateServiceVariations([...serviceVariations, newVariation]);
    },
    removeVariation = (index) => {
        updateServiceVariations([...serviceVariations.filter((_form, i) => i != index)]);
    },
    
    onContinue = () => {
        // let selected = tags.filter(tag => tag.selected);
        message.config({top: 60});
        // if(selected.length) {000000000000x
            onNext && onNext();
        // } else {
            // message.error( 'Please select atleast one service type' );
        // }

    },

    onBack = () => {
        onPrevious && onPrevious();
    },

    uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
    // const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

    return (
        <div>
            <Form
                className="mt-55 grid-view grid-2 colgap-25 rowgap-35 full-width"
                form={form}
                layout="vertical">
                <h5 className="full mb-35">Service Details</h5>

                <Form.Item name={['primaryLanguage']} label="Primary Language" required>
                    <Select>
                        <Select.Option value="demo">English (UK)</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name={['secondaryLanguage']} label="Secondary Language">
                    <Select>
                        <Select.Option value="demo">English (US)</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name={['serviceName']} label="Service Name" required>
                    <Input placeholder="Hair Cut" />
                </Form.Item>

                <Form.Item name={['serviceName2']} label="Service Name">
                    <Input placeholder="Hair Cut" />
                </Form.Item>

                <Divider className="full"></Divider>

                <Form.Item name={['description']} label="Description" required>
                    <TextArea rows={5}/>
                </Form.Item>

                <Form.Item name={['description']} label="Description">
                    <TextArea rows={5}/>
                </Form.Item>

                <h5 className="full mt-20 mb-35">Service Variations</h5>
    
                <div className={ `${styles['service-variations']} full` }>
                    {
                        serviceVariations.map((_form, i) => (
                            <>
                                <Form.Item label={ !i && 'Variable Name (Opt)'}>
                                    <Input placeholder="ex: Regular" />
                                </Form.Item>

                                <Form.Item label={ !i && 'Price' }>
                                    <InputNumber placeholder="00.00" />
                                </Form.Item>

                                <Form.Item label={ !i && 'Hours' }>
                                    <InputNumber placeholder="00.00" min={0} />
                                </Form.Item>

                                <Form.Item label={ !i && 'Minutes' }>
                                    <InputNumber placeholder="1" min={1} max={59}/>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="link" className={ `${i < serviceVariations.length - 1 ? 'dark' : 'primary'} ${ i ? 'mt-20' : 'mt-44' }`  } onClick={ i < serviceVariations.length - 1 ? () => removeVariation(i) : addVariation }>{ i < serviceVariations.length - 1 ? 'Remove Variation' : 'Add Variation' }</Button>
                                </Form.Item>
                            </>
                        ))
                    }
                </div>

                <Divider className="full mb-20" />

                <div className="grid-view colgap-25 rowgap-25" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
                    <h5 className="full mb-30">Allowed to Book Time</h5>

                    <Form.Item>
                        <InputNumber placeholder="30" min={0} />
                    </Form.Item>

                    <Form.Item>
                        <Input placeholder="Minutes" />
                    </Form.Item>
                </div>

                <div className="grid-view colgap-25 rowgap-25" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
                    <h5 className="full mb-30">Service Type</h5>

                    <Form.Item>
                        <Checkbox><span>In Store</span></Checkbox>
                        <span className="material-icons">edit</span>
                    </Form.Item>

                    <Form.Item>
                        <Button className="default" style={{backgroundColor : "transparent", border : "1px dashed var(--light-neutral-1)", borderRadius : "6px", color : "var(--dark-neutral-4)"}}>+ Add Service Type</Button>
                    </Form.Item>
                </div>

                <div className="full mt-35 mb-30">

                    <h5>Product Images</h5>
                    <p className="pull-left full-width mt-5 mb-12">
                        Supported file formats are <strong>JPEG, JPG,PNG, GIF.</strong><br /> 
                        Product images are usually <strong>200 * 200</strong> with file size upto <strong>5MB</strong> 
                    </p>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        >
                            {/* fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange} */}
                        {/* {fileList.length >= 8 ? null : } */}
                        { uploadButton }
                    </Upload>
                </div>

            </Form>

            <Divider />
            <Button className="dark pull-left" onClick={ onBack }><span className="material-icons mr-10">west</span>Sub Caregories</Button>
            <Button className="primary pull-right" onClick={ onContinue }>Save &amp; Continue<span className="material-icons ml-10">east</span></Button>
        </div>
    )
}

ServiceDetails.propTypes = {
    onNext: PropTypes.func,
    onPrevious: PropTypes.func,
}

export default ServiceDetails
