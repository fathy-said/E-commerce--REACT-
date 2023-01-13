import React from "react";
import { ReactComponent as LogoSvg } from "../../assets/Icons/logo svg.svg";
import "./LogoHeader.css";

const LogoHeader = () => {
    return (
        <>
            <div className="logo-header">
                <div className="box-logo">
                    <LogoSvg />
                </div>
            </div>
        </>
    );
};

export default LogoHeader;
