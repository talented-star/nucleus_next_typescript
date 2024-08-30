import React, {useEffect} from "react";
import {useFormik} from "formik";
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


interface MyValues {
    name: string,
    email: string,
    message: string,
    companyName: string,
    phone: string,
}

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .trim().matches(/^(?!.*[-\s]{2})[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s.'-]*$/gi, "Enter Valid Name")
        .min(2, 'Name should be of minimum 2 characters length.')
        .max(100, 'Name should be of ,maximum 100 characters length.')
        .required('Name is required.'),


    email: yup
        .string()
        .trim()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email address')
        .required('Email is required.'),


    companyName: yup
        .string()
        .trim()
        .required('Company Name is required.'), message: yup
        .string()
        .trim()
        .min(25, 'Description should be of minimum 25 characters length.')
        .max(200, 'Description should be of maximum 200 characters length.')
        .required('Description is required.'),

    phone: yup
        .string()
        .trim()
        .required('Mobile Number is required.'),

    aboutUs: yup.string().trim()
});

const ConnectForm = () => {
    const formik = useFormik<MyValues>({
        initialValues: {
            companyName: '',
            name: '',
            email: '',
            message: '',
            phone: '',

        }, validationSchema: validationSchema, validateOnMount: false, validateOnBlur: true, validateOnChange: true,// Pass the validation schema
        onSubmit: async (values, formikHelpers) => {

            handleSubmitContactUS(values)

        },
    });

    const handleSubmitContactUS = async (params: any) => {
        // try {
        //     // Dispatch the thunk action and unwrap the result
        //     const result = await dispatch(contactUs(params));
        //     const data = unwrapResult(result);
        //     if(data){
        //         toast.success('Thanks For reaching us! ')
        //     }
        //
        //     console.log('Success:', data);
        // } catch (error) {
        //     toast.error('something went wrong');
        //
        // }

    }


    useEffect(() => {
        console.log('errors---', formik.errors)
        console.log('values---', formik.values)
    }, [formik.values, formik.errors]);

    return (
        <div>
            <h3 className={'font-bold text-[#FEBF46] text-3xl md:text-4xl py-5 h-full'}>
                Connect With Your Next Great Hire Today!
            </h3>
            <form className={'contactForm w-full'} onSubmit={formik.handleSubmit} style={{
                display: 'flex', // justifyContent: 'center',
                // alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div className={'flex flex-col justify-start items-start gap-4 w-full h-full'}>
                    <div className={'w-full flex flex-col md:flex-row justify-start items-center gap-4'}>

                        <div className={ 'w-full md:w-1/2 flex justify-center items-start flex-col  col-span-2 gap-2'}>

                            <p className={'font-bold'}>Company</p>
                            <input
                                id="companyName"
                                name="companyName"
                                type="text"
                                // placeholder={"Company Name"}
                                onChange={formik.handleChange}
                                value={formik.values.companyName}
                                style={{
                                    width: '100%',
                                    border: `2px solid ${formik.errors.companyName ? 'red' : '#D3D3D3'}`,
                                    borderRadius: '8px',
                                    height: '2.5rem',
                                    paddingLeft: '10px'
                                }}
                            />
                            {formik.errors.companyName && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.companyName}</span>)}
                        </div>

                        <div
                            className={'w-full md:w-1/2 flex justify-center items-start flex-col col-span-2 md:col-span-2 gap-2'}>
                            <p className={'font-bold'}>Your Name</p>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                // placeholder={"Enter Full Name*"}
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                style={{
                                    width: '100%',
                                    border: `2px solid ${formik.errors.name ? 'red' : '#D3D3D3'}`,
                                    borderRadius: '8px',
                                    height: '2.5rem',
                                    paddingLeft: '10px'

                                    // color: '#11192A',
                                    // outlineColor: `${formik.errors.name ? '#ff4d48' : '#11192A'}`
                                }}
                            />
                            {formik.errors.name && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.name}</span>)}

                        </div>
                    </div>


                    <div className={'w-full flex flex-col md:flex-row justify-start items-center gap-4'}>


                        <div className={'w-full md:w-1/2 flex justify-center items-start flex-col col-span-2 md:col-span-2 gap-0'}>
                            <p className={'font-bold'}>Phone Number</p>
                            <PhoneInput
                                placeholder={"+81 0000 000 000"}
                                specialLabel={''}
                                value={formik.values.phone}
                                isValid={(value, country: any) => {
                                    if (value.slice(country?.dialCode.length).length < 10 && value.slice(country?.dialCode.length).length >= 1) {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }}
                                country={'us'}
                                countryCodeEditable={false}
                                // preferredCountries={['in', 'us']}
                                // onlyCountries={['in', 'us']}
                                onChange={(value, data, event, formattedValue) => {
                                    if ('dialCode' in data) {
                                        formik.setFieldValue('phone', `+${value}`);
                                    }
                                }}
                                inputStyle={{
                                    width: '100%',
                                    // border: `2px solid ${formik.errors.phone ? 'red' : '#D3D3D3'}`,
                                    borderRadius: '8px',
                                    paddingTop: '16px',
                                    paddingBottom: '16px',
                                    height: '42px',
                                }}
                                containerStyle={{
                                    // border: `2px solid ${formik.errors.phone ? 'red' : '#D3D3D3'}`,
                                    marginTop: '0.5rem',
                                    width: '100%',
                                    backgroundColor: '#383c4a !important',
                                    borderRadius: '1rem',
                                }}
                            />


                            {formik.errors.phone && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.phone}</span>)}
                        </div>

                        <div
                            className={'w-full md:w-1/2 flex justify-center items-start flex-col col-span-2 md:col-span-2 gap-2'}>
                            <p className={'font-bold '}>Email</p>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                // placeholder={"Enter Email*"}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                style={{
                                    width: '100%',
                                    border: `2px solid ${formik.errors.email ? 'red' : '#D3D3D3'}`,
                                    borderRadius: '8px',
                                    height: '2.5rem',
                                    paddingLeft: '10px'
                                }}
                            />

                            {formik.errors.email && (<span style={{
                                color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                            }}>*{formik.errors.email}</span>)}

                        </div>
                    </div>


                    <div className={'flex justify-center items-start flex-col w-full col-span-2  gap-2'}>
                        <p className={'font-bold'}>Project Details</p>
                        <textarea
                            id="message"
                            name="message"
                            aria-multiline={true}
                            // placeholder={"Enquiry Content"}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            style={{
                                padding: '8px',
                                height: '4rem',
                                width: '100%',
                                border: `2px solid ${formik.errors.message ? 'red' : '#D3D3D3'}`,
                                borderRadius: '8px',
                            }}
                        />
                        <div className={'flex justify-between w-full'}>
                            <div>
                                {formik.errors.message && (<span style={{
                                    color: '#ff4d48', fontSize: '12px', paddingLeft: '4px'
                                }}>*{formik.errors.message}</span>)}
                            </div>


                        </div>
                    </div>


                </div>

                <div>
                    <Checkbox {...label} defaultChecked /><span>By sending this form I confirm that I have read and accept the Privacy Policy</span>
                </div>

                <div className={'pt-4'}>
                    <button
                        type={'submit'}
                        className={'text-white font-bold bg-[#44CEF6] px-10 py-3 rounded-md flex items-center gap-2'}
                        style={{}}
                    >
                        <p className={'text-white font-normal'}>Get Consulation</p>
                        <ArrowForwardIcon />
                    </button>


                </div>


            </form>
        </div>
    )
}

export default ConnectForm;