/* eslint-disable */

import { useFormik } from "formik";
import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledButtonGroup, StyledConnectionForm, StyledForm, StyledHeading, StyledFormSwitch, StyledPar, StyledError, StyledFormControl } from "./style";
import FileUploader from "../fileUploader/FileUploader";
import InputToggle from "../input/InputToggle";

const ConnectionForm = ({ connectLobby, disconnectLobby, observer }) => {

    const [uploadedFile, setUploadedFile] = useState('');
    // const [visibleObserver, setVisibleObserver] = useState(true);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            isObserver: false
        },
        onSubmit: values => {
            connectLobby({ ...values, ava: uploadedFile });

        },
        validate: values => {
            const errors = {};
            if (!values.firstName) {
                errors.firstName = "Enter your name"
            } else if (values.firstName.length > 12) {
                errors.firstName = "First name must contain 1-12 characters"
            }

            if (values.lastName.length > 12) {
                errors.lastName = "Last name must contain 1-12 characters"
            }

            if (values.position.length > 20) {
                errors.position = "Position must contain 1-20 characters"
            }

            return errors;
        }

    })

    // console.log("333", formik.touched);

    return (
        <StyledConnectionForm>
            <StyledHeading> Connect to Lobby
            </StyledHeading>

            <StyledForm onSubmit={formik.handleSubmit}>

                {observer && <StyledFormSwitch>
                    <StyledPar>Connect as<br /> observer</StyledPar>
                    <InputToggle
                        name="isObserver"
                        id="isObserver"
                        onChange={formik.handleChange}
                        checked={formik.values.isObserver} />
                </StyledFormSwitch>}


                <StyledFormControl>
                    <Input
                        text="Your first name:"
                        id="firstName"
                        name="firstName"
                        type="text"
                        width="big"
                        fontWeight="bold"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        required
                    />

                    {formik.errors.firstName && formik.touched.firstName ? <StyledError>{formik.errors.firstName}</StyledError> : null}
                </StyledFormControl>
                <StyledFormControl>
                    <Input
                        text="Your last name (optional):"
                        id="lastName"
                        name="lastName"
                        type="text"
                        width="big"
                        fontWeight="bold"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.lastName ? <StyledError>{formik.errors.lastName}</StyledError> : null}
                </StyledFormControl>

                <StyledFormControl>
                    <Input
                        text="Your job position (optional):"
                        id="position"
                        name="position"
                        type="text"
                        width="big"
                        fontWeight="bold"
                        onChange={formik.handleChange}
                        value={formik.values.position}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.position ? <StyledError>{formik.errors.position}</StyledError> : null}
                </StyledFormControl>


                <FileUploader uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} firstInitial={formik.values.firstName.trim().slice(0, 1).toUpperCase()} lastInitial={formik.values.lastName.trim().slice(0, 1).toUpperCase()} />
                <StyledButtonGroup>
                    <Button text="Confirm" height="big" type="submit" disabled={!(formik.isValid && formik.dirty)} />
                    <Button onClick={disconnectLobby} type="button" color="white" text="Cancel" height="big" />
                </StyledButtonGroup>

            </StyledForm>

        </StyledConnectionForm>
    )
}

export default ConnectionForm;
