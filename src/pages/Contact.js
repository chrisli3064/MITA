import React from "react"
import useForm from "../useForm"
import validate from '../validateInfo'
import { useState, useEffect } from 'react';
export default function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    const { handleChange, handleSubmit, values, errors } = useForm(validate, submitForm);

    return (
        <div className="mainBody">
            <div className="form-content-right">
                {!isSubmitted ? ( // Render different content based on the `submitted` state
                    <form className="form" onSubmit={handleSubmit}>
                        <h1
                            style={{
                                fontSize: '3rem',
                                fontFamily: 'Arial, sans-serif',
                                padding: '25px 0 40px', /* 200px top and bottom padding, 0px left and right padding */
                            }}
                        >
                            Contact Me
                        </h1>
                        <div className="name-forms">
                            <div className="form-inputs">
                                {/*<label htmlFor="firstname" className="form-label">
                                First Name
                            </label>*/}
                                <input
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    className="name-input"
                                    placeholder="First Name"
                                    value={values.firstname}
                                    onChange={handleChange}
                                />
                                {errors.firstname && <p>{errors.firstname}</p>}
                            </div>

                            <div className="form-inputs">
                                {/*<label htmlFor="lastname" className="form-label">
                                Last Name
                        </label>*/}
                                <input
                                    id="lastname"
                                    type="text"
                                    name="lastname"
                                    className="name-input"
                                    placeholder="Last Name"
                                    value={values.lastname}
                                    onChange={handleChange}
                                />
                                {errors.lastname && <p>{errors.lastname}</p>}
                            </div>
                        </div>

                        <div className="form-inputs">
                            {/*<label htmlFor="email" className="form-label">
                                Email
                            </label>*/}
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="email-input"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div

                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <button
                                className="form-input-btn"
                                type="submit"
                            >
                                <div className="button_text">
                                    Sign up
                                </div>
                            </button>
                        </div>
                        {/*<span className="form-input-login">Some other text</span>*/}
                    </form>) : (<div
                        className="success_message"
                    >
                        Thank you for subscribing!
                    </div>)
                }
            </div>
        </div>
    );

}