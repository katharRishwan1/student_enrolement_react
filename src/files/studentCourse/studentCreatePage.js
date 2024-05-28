import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Label, Input, Form, FormFeedback, Button } from 'reactstrap';
import { course, student } from '../Api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Select, { } from 'react-select';


const StudentCreatePage = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [courseData, setCourseData] = useState([])


    const onSubmit = async payload => {
        console.log('data0--', payload);
        payload.course = payload.course.value
        payload.adress = {
            addressLine1: payload.addressLine1,
            addressLine2: payload.addressLine2,
            country: payload.country,
            state: payload.state,
            city: payload.city,
            pincode: payload.pincode
        };
        delete payload.addressLine1;
        delete payload.addressLine2;
        delete payload.country;
        delete payload.state;
        delete payload.city;
        delete payload.pincode;

        const data = await axios.post(student, payload);
        console.log('data---is ', data);
        if (data) {
            toast.success(data?.result?.msg)
            navigate(-1)
        }
        console.log(data);
    };
    const getCourse = async () => {
        try {
            const response = await axios.get(course)
            setCourseData(response?.data?.result)
            toast.success(response?.data?.msg)

        } catch (error) {
            toast.error(error?.response?.data?.msg)
        }
    }
    useEffect(() => {
        getCourse();

    }, [])
    const options = courseData?.map((item) => (
        {
            label: item?.name,
            value: item?._id
        }
    ))
    console.log('options-----', options);
    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '40px' }}>
            <Button style={{ marginLeft: 'auto' }} color="primary">Create Students</Button>
            <Row style={{ marginLeft: '100' }}>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Col lg={6}>
                        <Label className="form-label" for="firstName">
                            First Name<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="firstName"
                            name="firstName"
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
                        <Label className="form-label" for="lastName">
                            Last Name<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="lastName"
                            name="lastName"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'lastName is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter  your lastName"
                                    invalid={!!errors.name}
                                />
                            )}
                        />
                        {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
                    </Col>

                    <Col lg={6}>
                        <Label className="form-label" for="student-email">
                            Email<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="email"
                            name="email"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email address'
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your email"
                                    invalid={!!errors.email}
                                />
                            )}
                        />
                        {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="mobile">
                            Mobile
                        </Label>
                        <Controller
                            id="mobile"
                            name="mobile"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                                <Input
                                    type="number"
                                    {...field}
                                    placeholder="Enter your age"
                                    invalid={!!errors.mobile}
                                />
                            )}
                        />
                        {errors.mobile && <FormFeedback>{errors.mobile.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="course">
                            Course<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            name='course'
                            id='course'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={options}
                                    invalid={errors.course && true}
                                />
                            )}
                        />
                        {errors.course && <FormFeedback>{errors.course.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="motherName">
                            MotherName<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="motherName"
                            name="motherName"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter  your motherName"
                                    invalid={!!errors.motherName}
                                />
                            )}
                        />
                        {errors.motherName && <FormFeedback>{errors.motherName.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="fatherName">
                            FatherName<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="fatherName"
                            name="fatherName"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Name is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter  your fatherName"
                                    invalid={!!errors.fatherName}
                                />
                            )}
                        />
                        {errors.fatherName && <FormFeedback>{errors.fatherName.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="dateOfBirth">
                            Date of Birth<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="dateOfBirth"
                            name="dateOfBirth"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Date of Birth is required' }}
                            render={({ field }) => (
                                <Input
                                    type="date"
                                    {...field}
                                    placeholder="Enter your date of birth"
                                    invalid={!!errors.dob}
                                />
                            )}
                        />
                        {errors.dateOfBirth && <FormFeedback>{errors.dateOfBirth.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="gender">
                            Gender<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="gender"
                            name="gender"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Gender is required' }}
                            render={({ field }) => (
                                <>
                                    <Input
                                        {...field}
                                        type="radio"
                                        value="MALE"
                                        invalid={!!errors.gender}
                                    />{' '}
                                    Male{' '}
                                    <Input
                                        {...field}
                                        type="radio"
                                        value="FEMALE"
                                        invalid={!!errors.gender}
                                    />{' '}
                                    Female
                                </>
                            )}
                        />
                        {errors.gender && <FormFeedback>{errors.gender.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="addressLine1">
                            Address Line 1<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="addressLine1"
                            name="addressLine1"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Address Line 1 is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your address"
                                    invalid={!!errors.addressLine1}
                                />
                            )}
                        />
                        {errors.addressLine1 && <FormFeedback>{errors.addressLine1.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="addressLine2">
                            Address Line 2
                        </Label>
                        <Controller
                            id="addressLine2"
                            name="addressLine2"
                            defaultValue=""
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your address"
                                    invalid={!!errors.addressLine2}
                                />
                            )}
                        />
                        {errors.addressLine2 && <FormFeedback>{errors.addressLine2.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="city">
                            City<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="city"
                            name="city"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'City is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your city"
                                    invalid={!!errors.city}
                                />
                            )}
                        />
                        {errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="state">
                            State<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="state"
                            name="state"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'State is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your state"
                                    invalid={!!errors.state}
                                />
                            )}
                        />
                        {errors.state && <FormFeedback>{errors.state.message}</FormFeedback>}
                    </Col>
                    <Col lg={6}>
                        <Label className="form-label" for="country">
                            Country<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="country"
                            name="country"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Country is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your country"
                                    invalid={!!errors.country}
                                />
                            )}
                        />
                        {errors.country && <FormFeedback>{errors.country.message}</FormFeedback>}
                    </Col>

                    <Col lg={6}>
                        <Label className="form-label" for="pincode">
                            Pincode<span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Controller
                            id="pincode"
                            name="pincode"
                            defaultValue=""
                            control={control}
                            rules={{ required: 'Pincode is required' }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    placeholder="Enter your pincode"
                                    invalid={!!errors.pincode}
                                />
                            )}
                        />
                        {errors.pincode && <FormFeedback>{errors.pincode.message}</FormFeedback>}
                    </Col>

                    <Button style={{ marginTop: '30px', textAlign: 'center' }} type="submit" color="primary">Submit</Button>
                </Form >
            </Row >
        </div>

    );
};

export default StudentCreatePage;
