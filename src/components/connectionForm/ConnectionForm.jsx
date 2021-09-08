import { useFormik } from "formik";
import { useState } from "react";
import Switch from 'react-input-switch';
import Button from "../button/Button";
import Input from "../input/Input";

const ConnectionForm = () => {

    const [value, setValue] = useState('Connect as observer');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            ava: "",
            // isObserver: "no"
        },
        onSubmit: values => console.log(values)

    })

    console.log();

    return (
        <div>
            <h2>Connect to lobby</h2>
            <>
                {value}
                <Switch on="Connect as player" off="Connect as observer" value={value} onChange={setValue} />
            </>

            <form onSubmit={formik.handleSubmit}>
                <Input
                    text="Your first name:"
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    required />

                <Input
                    text="Your last name (optional):"
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <Input
                    text="Your job position (optional):"
                    id="position"
                    name="position"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                />

                <label htmlFor="ava">Image:</label>
                <div>
                    <input
                        id="ava"
                        name="ava"
                        type="file"

                    />
                    <Button text="button" />
                </div>
                <Button text="Confirm" height="big" type="submit" />
                <Button color="white" text="Cancel" height="big" />
            </form>
        </div>
    )
}

export default ConnectionForm;
