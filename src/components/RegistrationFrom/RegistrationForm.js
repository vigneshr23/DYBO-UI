/*
* Main component to render routes and route matched component.
*/

import { Fragment, useEffect, useState } from "react";
import content from "../../Constants"
import Form from "../Form";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { createUser } from "../../api/User"

const RegistrationForm = () => {
    const [isValidated, setIsValidated] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [userDetails, setUserDetails] = useState({})

    const handleSubmit = async (formdata) => {
        const user = await createUser(formdata)
        setShowMessage(true)
        setUserDetails(user)
    }
    useEffect(() => {
        // if (showMessage) {
        return () => {
            setTimeout(() => setShowMessage(false), 5000)
        }
        // }
    }, [showMessage])

    return (
        <div className="form-container">
            <Form
                initial={{
                    firstName: "vignesh",
                    lastName: "sharma",
                    email: "",
                    phone: "",
                    linkedInProfile: ""
                }}
                handleSubmit={handleSubmit}
                isValidForm={setIsValidated}
            >
                <Field
                    id="fname"
                    name="firstName"
                    type="text"
                    placeholder={content.firstName}
                    icon
                />
                <Field
                    id="lname"
                    name="lastName"
                    type="text"
                    placeholder={content.lastName}
                    icon
                />
                <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder={content.email}
                    icon
                />
                <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={content.phone}
                    icon
                />
                <Field
                    id="linkedInProfile"
                    name="linkedInProfile"
                    type="text"
                    placeholder={content.linkedInProfile}
                    icon
                />
                <div className="form-btns">
                    <Button
                        type="submit"
                        label={content?.labels?.register}
                        disabled={!isValidated}
                    />
                </div>
            </Form>
            {showMessage &&
                <div className="form-alert">
                    User {userDetails?.STATUS?.toLowerCase()} successfully
                </div>
            }
            {
                // Object.keys(userDetails?.data)?.length > 0 && (
                <div class="user-details row">
                    <div class="col-sm-12 col-md-12">
                        <div class="thumbnail">
                            <img src={userDetails?.data?.picture} alt="" />
                            <div class="caption">
                                <h3>{userDetails?.data?.first_name} {userDetails?.data?.last_name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                // )
            }
        </div>
    )
}

export default RegistrationForm