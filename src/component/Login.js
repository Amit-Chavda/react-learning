import { useState } from "react";

export default function Login() {
    const [formData, setformData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        isConfirmed: false,
    });

    function handleOnChange(event) {
        const { name, value, type, checked } = event.target
        setformData((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        if ((formData.password !== formData.confirmPassword)
            || formData.password === ""
            || formData.password === ""
            || !formData.isConfirmed
        ) {
            console.log("Please fill details correctly!")
        } else {
            console.log(formData)
        }
    }

    return (
        <>
            <input
                type="email"
                placeholder="Email"
                onChange={handleOnChange}
                name="email"
                value={formData.email} />

            <br />
            <br />
            <input
                type="password"
                placeholder="Password"
                onChange={handleOnChange}
                name="password"
                value={formData.password} />
            <br />
            <br />
            <input
                type="password"
                placeholder="Comfirm Password"
                onChange={handleOnChange}
                name="confirmPassword"
                value={formData.confirmPassword} />

            <br />
            <br />
            <input
                type="checkbox"
                onChange={handleOnChange}
                name="isConfirmed"
                id="isConfirmed"
                checked={formData.isConfirmed} />
            <label htmlFor="isConfirmed">I want to Join the newsletter</label>

            <br />
            <br />
            <br />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}