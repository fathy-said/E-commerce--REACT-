import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoHeader, PasswordField } from "../../index";
import { ReactComponent as SvgComponent } from "../../../assets/Icons/Component 59 – 11.svg";
import "./SignInBox.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginThunk } from "../../../RTK/Login/Thunk/LoginThunk";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(5, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required').matches(/^[A-Z]/, 'The first letter must be capitalize'),
    pass: Yup.string()
        .min(4, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),

});

const SignInBox = () => {
    let dispatch = useDispatch()
    let { loginToken, loginSuccess } = useSelector((state) => state.LoginReducer)


    let navigate = useNavigate();
    let [LoginData, setLoginData] = useState({ pass: '', userName: '' });
    // let [success, setSuccess] = useState(false);
    let sendDataLogin = (e) => {
        e.preventDefault()
        dispatch(LoginThunk({ pass: LoginData.pass, userName: LoginData.userName })).unwrap()
            .then((e) => {
                if (e.success) {
                    // setSuccess(e.success)
                    localStorage.setItem('Login_Token', e.data.token);
                    window.location = 'https://admin.atlbha.com'
                }
                else {
                    localStorage.setItem('Login_Token', null);
                    alert("كلمه السر او الاسم خطأ");
                }
                // handle result here
            })
            .catch((e) => {
                console.log(e)
                // handle error here
            })


    }
    const formik = useFormik({
        initialValues: {
            userName: '',
            pass: '',
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: SignupSchema,
    });
    return (
        <>
            <div className="sign-in-box" dir="ltr" onSubmit={formik.handleSubmit}>
                <div className="all-content" dir="rtl">
                    <div className="box-container-form">
                        <LogoHeader />
                        <form action="" className="all">
                            <h2>قم بتسجيل الدخول الى حسابك</h2>
                            <div className="box">
                                <div>
                                    <h5>الاسم</h5>
                                    <input
                                        type="text"
                                        placeholder="ادخل اسم المستخدم او البريد الالكتروني"
                                        // value={LoginData.userName}
                                        // onChange={(e) => {
                                        //     setLoginData({ ...LoginData, userName: e.target.value })

                                        // }}
                                        name="userName"
                                        onChange={formik.handleChange}
                                        value={formik.values.userName}

                                    />

                                </div>
                                {formik.errors.userName && formik.touched.userName ? (
                                    <span style={{ width: "100%", color: 'red' }}>{formik.errors.userName}</span>
                                ) : null}
                                <PasswordField DataPass={LoginData} setPass={setLoginData} Data={formik} />
                            </div>
                            <div className="top">
                                <div className="check">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                    <h6>تذكرني</h6>
                                </div>
                                <h5
                                    onClick={() => {
                                        navigate("/passwordBackPage");
                                    }}
                                >
                                    نسيت كلمة المرور ؟
                                </h5>
                            </div>
                            <button
                                className="bt-main"
                                type="submit"
                            >
                                تسجيل الدخول
                            </button>
                            <ul>
                                <li> ليس لديك حساب؟</li>
                                <li
                                    onClick={() => {
                                        navigate("/register/merchant");
                                    }}
                                >
                                    أنشئ حساب
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="box-form-banner">
                        <span className="over-info">
                            <SvgComponent />
                        </span>
                        <div className="info-svg">
                            <h4>منصة اطلبها للتجارة الإلكترونية</h4>
                            <h1> مرحباً بعودتك</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignInBox;
