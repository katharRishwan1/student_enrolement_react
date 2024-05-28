import axios from 'axios';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Label, Input, Form, FormFeedback, Button } from 'reactstrap';
import { course } from '../Api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const CourseCreatePage = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async payload => {
        console.log('data0--', payload);
        const data = await axios.post(course, payload);
        console.log('data---is ', data);
        if (data) {
            toast.success(data?.result?.msg)
            navigate(-1)
        }

    };

    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '40px' }}>
            <Button style={{ marginLeft: 'auto' }} color="primary">Create Course</Button>
            <Row style={{ marginLeft: '100' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Col lg={6}>
                        <Label className="form-label" for="name">
                            Name<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="name"
                            name="name"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter  your name"
                                    invalid={!!errors.name}
                                />
                            )}
                        />
                        {errors.name && <FormFeedback>{errors.name.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="fullName">
                            full Name<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="fullName"
                            name="fullName"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'fullName is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter  your fullName"
                                    invalid={!!errors.fullName}
                                />
                            )}
                        />
                        {errors.fullName && <FormFeedback>{errors.fullName.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="description">
                            Description
                        </Label>
                        <Controller
                            id="description"
                            name="description"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Description is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="textarea"
                                    placeholder="Enter your description"
                                    invalid={!!errors.description}
                                />
                            )}
                        />
                        {errors.description && <FormFeedback>{errors.description.message}</FormFeedback>}
                    </Col>



                    <Button style={{ marginTop: '30px', textAlign: 'center' }} type="submit" color="primary">Submit</Button>
                </Form >
            </Row >
        </div>

    );
};

export default CourseCreatePage;
