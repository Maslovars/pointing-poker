import { useFormik } from "formik";
import { useState } from "react";
import Switch from 'react-input-switch';

const ConnectionForm = () => {

    const [value, setValue] = useState('Connect as observer');

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            position: "",
            ava: "",
            // isObserver: "no"
        }
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
                <label htmlFor="firstName">Your first name:</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">Your last name (optional):</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="position">Your job position (optional):</label>
                <input
                    id="position"
                    name="position"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.position}
                />

                <label htmlFor="ava">Image:</label>
                <input
                    id="ava"
                    name="ava"
                    type="file"

                />

                <button type="submit">Confirm</button>
                <button>Cancel</button>
            </form>
        </div>
    )
}

export default ConnectionForm;
