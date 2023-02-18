
import React, { useState } from "react";
import "./PasswordField.css";
import { ReactComponent as EyeOPen } from "../../assets/eye_open.svg";
import { ReactComponent as EyeClose } from "../../assets/eye_close.svg";

const PasswordField = ({ Data }) => {
    const [showPassword, setShowPassword] = useState(false);

    let type = "password";
    return (
        <>
            {
                Data ? (
                    <>
                        <div className="password-field">
                            {type === "password" ? (
                                showPassword ? (
                                    <EyeOPen
                                        onClick={() => {
                                            setShowPassword((prev) => !prev);
                                        }}
                                        className="show-password-icon"
                                    />
                                ) : (
                                    <EyeClose
                                        onClick={() => {
                                            setShowPassword((prev) => !prev);
                                        }}
                                        className="show-password-icon"
                                    />
                                )
                            ) : null}

                            <h5>كلمة المرور</h5>
                            <input
                                type={
                                    !type === "password" ? type : showPassword ? "text" : type
                                }

                                name="pass"
                                onChange={Data.handleChange}
                                value={Data.values.pass}
                            />
                        </div>
                        {Data.errors.pass && Data.touched.pass ? (
                            <span style={{ width: "100%", color: 'red' }}>{Data.errors.pass}</span>
                        ) : null}
                    </>
                ) : (
                    <>
                        <div className="password-field">
                            {type === "password" ? (
                                showPassword ? (
                                    <EyeOPen
                                        onClick={() => {
                                            setShowPassword((prev) => !prev);
                                        }}
                                        className="show-password-icon"
                                    />
                                ) : (
                                    <EyeClose
                                        onClick={() => {
                                            setShowPassword((prev) => !prev);
                                        }}
                                        className="show-password-icon"
                                    />
                                )
                            ) : null}

                            <h5>كلمة المرور</h5>
                            <input
                                type={
                                    !type === "password"
                                        ? type
                                        : showPassword
                                            ? "text"
                                            : type
                                }

                            />
                        </div>

                    </>)

            }


        </>
    );
};

export default PasswordField;
