import React from 'react'
import { Formik, Form } from 'formik'
import {TextField} from './TextField'

const SignUp = () => {
  return (
    <Formik
        initialValues={{
            firstName : '',
            LastName: '', 
            email: '',
            password: '',
            confirmPassword: ''
        }}
    >
        {
            formik =>(
                <div>
                    <h1 className="h1 my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form>
                       <TextField label="First Name" />
                    </Form>
                </div> 
            )
        }
    
   </Formik>

  )
}

export default SignUp