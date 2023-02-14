
import React, { useState } from "react";
import "./PasswordField.css";
import { ReactComponent as EyeOPen } from "../../assets/eye_open.svg";
import { ReactComponent as EyeClose } from "../../assets/eye_close.svg";
const PasswordField = ({ DataPass, setPass }) => {
    const [showPassword, setShowPassword] = useState(false);

    let type = "password";
    return (
        <>
            {
                DataPass ? (
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
                                value={DataPass?.pass}

                                onChange={(e) => {
                                    setPass({ ...DataPass, pass: e.target.value })
                                }}
                            />
                        </div>
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
