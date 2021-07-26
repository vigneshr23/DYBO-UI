/**
 * A wrapper component that utilizes Formik functions for validaton and form events.
 * Accepts a form component as a child and renders it with form fns.
 */

import "./form.scss";
import { FormikProvider, useFormik, Form } from "formik";
import constants from "../../Constants"
import { useEffect } from "react";

const FormWrapper = ({ initial, render, isValidForm, ...props }) => {
    const { firstName, lastName, email, phone, linkedInProfile } = initial;
    const formik = useFormik({
        initialValues: { firstName, lastName, email, phone, linkedInProfile },
        onSubmit: values => {
            alert(`will submit`)
            props.handleSubmit(values)
        },
        validate: values => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = constants?.errors?.required
            }
            if (!values.lastName) {
                errors.lastName = constants?.errors?.required
            }
            if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
                errors.email = constants?.errors?.invalidEmail
            }
            if (!values.phone || (!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(values.phone))) {
                errors.phone = constants?.errors?.phone
            }
            // Todo: lnkedin url format validation
            if (!values.linkedInProfile || (!(/((http|https):\/\/)(www.)?[a-zA-Z0-9@:%._\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\+~#?&//=]*)/).test(values.linkedInProfile))) {
                errors.linkedInProfile = constants?.errors?.linkedInProfile
            }
            
            return errors
        },
    })
    useEffect(() => {
        console.log("isValidForm ", formik.isValid)
        isValidForm && isValidForm(formik.isValid)
    }, [formik.isValid, isValidForm])

    return (
        <FormikProvider value={formik}>
            <Form>
                {props.children}
            </Form>
        </FormikProvider>
    )
}

Form.defaultProps = {
    initial: {
        firstName: "", lastName: "", email: "", phone: "", linkedInProfile: ""
    },
}

export default FormWrapper