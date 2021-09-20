/* eslint-disable */

import { useFormik } from "formik";
import { useState } from "react";
import Switch from 'react-input-switch';
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledButtonGroup, StyledConnectionForm, StyledForm, StyledHeading, StyledFormSwitch, StyledPar } from "./style";
import FileUploader from "../fileUploader/FileUploader";
import InputToggle from "../input/InputToggle";

const ConnectionForm = ({ connectLobby, disconnectLobby }) => {

    const [uploadedFile, setUploadedFile] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            isObserver: false


        },
        onSubmit: values => {

            connectLobby({ ...values, ava: uploadedFile });

        }

    })

    return (
        <StyledConnectionForm>
            <StyledHeading> Connect to Lobby
            </StyledHeading>
            <StyledFormSwitch>
                <StyledPar>Connect as<br /> observer</StyledPar>
                <InputToggle
                    name="isObserver"
                    onChange={formik.handleChange}
                    value={formik.values.isObserver} />
            </StyledFormSwitch>

            <StyledForm onSubmit={formik.handleSubmit}>
                <Input
                    text="Your first name:"
                    id="firstName"
                    name="firstName"
                    type="text"
                    width="big"
                    fontWeight="bold"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    required />

                <Input
                    text="Your last name (optional):"
                    id="lastName"
                    name="lastName"
                    type="text"
                    width="big"
                    fontWeight="bold"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <Input
                    text="Your job position (optional):"
                    id="position"
                    name="position"
                    type="text"
                    width="big"
                    fontWeight="bold"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                />

                <FileUploader uploadedFile={uploadedFile} setUploadedFile={setUploadedFile} />
                <StyledButtonGroup>
                    <Button text="Confirm" height="big" type="submit" />
                    <Button onClick={disconnectLobby} type="button" color="white" text="Cancel" height="big" />
                </StyledButtonGroup>

            </StyledForm>

        </StyledConnectionForm>
    )
}

export default ConnectionForm;
