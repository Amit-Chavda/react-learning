import { useState } from "react";
export default function Form() {
    const [formData, setformData] = useState({ firstName: "", lastName: "" });

    console.log(formData)
    function handleOnChange(event) {
        setformData((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleOnChange}
                name="firstName" />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleOnChange}
                name="lastName" />
        </>
    )
}