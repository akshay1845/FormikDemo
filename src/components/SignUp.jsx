import React from 'react'
import { Formik, Form } from 'formik'
import {TextField} from './TextField'
import * as Yup from 'yup'

const SignUp = () => {
    const validate = Yup.object({
        firstName: Yup.string()
                    .max(20, 'Maximum length can be 20')
                    .required("FirstName is required"),
        lastName: Yup.string()
                    .max(20, 'Maximum length can be 20')
                    .required("LastName is required"),
        email: Yup.string()
                    .email('Please Enter valid Email')
                    .required("Email is required"),
        password: Yup.string()
                    .min(6, 'Atleast 6 characters required')
                    .required("passsword is required"),
        confirmPassword: Yup.string() 
                    .oneOf([Yup.ref('password'),null], 'Password does not match')
                    .required("Confirm Password is required"),
    })
  return (
    <Formik
        initialValues={{
            firstName : '',
            lastName: '', 
            email: '',
            password: '',
            confirmPassword: ''
        }}
        validationSchema={validate}
        onSubmit={values => {
            console.log(values);
        }}
    >
        {
            formik =>(
                <div>
                    <h1 className="h1 my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form>
                       <TextField label="First Name" name = "firstName" type="text" />
                       <TextField label="Last Name" name = "lastName" type="text" />
                       <TextField label="Email" name = "email" type="email" />
                       <TextField label="Password" name = "password" type="password" />
                       <TextField label="Confirm Password" name = "confirmPassword" type="password" />
                       <button className="btn btn-dark mt-3" type="submit">Register</button>
                       <button className="btn btn-danger mt-3 ml-3" style = {{marginLeft:'3px'}} type="reset">Reset</button>
                    </Form>
                </div> 
            )
        }
    
   </Formik>

  )
}

export default SignUp