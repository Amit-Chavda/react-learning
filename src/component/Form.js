import { useState } from "react";
export default function Form() {
    const [formData, setformData] = useState({ firstName: "", lastName: "", email: "", comment: "" });

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
                name="firstName"
                value={formData.firstName} />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleOnChange}
                name="lastName"
                value={formData.lastName} />
            <input
                type="email"
                placeholder="Email"
                onChange={handleOnChange}
                name="email"
                value={formData.email} />

            <textarea
                name="comment"
                onChange={handleOnChange}
                value={formData.comment} />
        </>
    )
}