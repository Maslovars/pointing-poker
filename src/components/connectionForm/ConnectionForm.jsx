/* eslint-disable */

import { useFormik } from "formik";
import { useState } from "react";
import Switch from 'react-input-switch';
import Button from "../button/Button";
import Input from "../input/Input";
import { StyledButtonGroup, StyledConnectionForm, StyledForm, StyledHeading } from "./style";
import FileUploader from "../fileUploader/FileUploader";

const ConnectionForm = ({connectLobby, disconnectLobby}) => {

    const [value, setValue] = useState('Connect as observer');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            ava: ""
        },
        onSubmit: values => {
            connectLobby({...values, isObserver: value});
            
        }

    })

    return (
        <StyledConnectionForm>
            <StyledHeading> Connect to Lobby
            </StyledHeading>
            {value}
            <Switch on="Connect as player" off="Connect as observer" value={value} onChange={setValue} />


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

                <FileUploader />
                <StyledButtonGroup>
                    <Button text="Confirm" height="big" type="submit" />
                    <Button onClick={disconnectLobby} ontype="button" color="white" text="Cancel" height="big" />
                </StyledButtonGroup>

            </StyledForm>

        </StyledConnectionForm>
    )
}

export default ConnectionForm;
