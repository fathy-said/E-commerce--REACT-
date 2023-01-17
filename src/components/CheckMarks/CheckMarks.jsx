import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./CheckMarks.css";
import { IoIosArrowDown } from "react-icons/io";

const activiyType = [
    `1-اختر نوع النشاط`,
    `2-اختر نوع النشاط`,
    `3-اختر نوع النشاط`,
    `4-اختر نوع النشاط`,
];

let CheckMarks = () => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    return (
        <>
            <Select
                sx={{
                    height: "3.5rem",

                    border: "1px solid rgba(167, 167, 167, 0.5)",

                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                }}
                IconComponent={IoIosArrowDown}
                multiple
                displayEmpty
                className="check-mark"
                onClick={(e) => {
                    if (e.target.className === "check-mark-button") {
                        document.querySelector("#menu-").style.position =
                            "unset ";
                        document
                            .querySelector(".check-mark .MuiSelect-select ")
                            .setAttribute("aria-expanded", false);
                        e.currentTarget
                            .querySelector("svg")
                            .classList.remove("MuiSelect-iconOpen");
                        e.currentTarget
                            .querySelector("svg")
                            .classList.add("css-3qbkez-MuiSelect-icon");
                        e.currentTarget.querySelector("svg").style.transform =
                            "rotate(0deg)";
                        e.currentTarget
                            .querySelector("svg")
                            .classList.remove("css-10q54uo-MuiSelect-icon");
                    } else {
                        document.querySelector("#menu-").style.position =
                            "fixed";
                        document
                            .querySelector(".check-mark .MuiSelect-select ")
                            .setAttribute("aria-expanded", true);
                        e.currentTarget
                            .querySelector("svg")
                            .classList.add("MuiSelect-iconOpen");
                        e.currentTarget
                            .querySelector("svg")
                            .classList.remove("css-3qbkez-MuiSelect-icon");
                        e.currentTarget
                            .querySelector("svg")
                            .classList.add("css-10q54uo-MuiSelect-icon");
                        e.currentTarget.querySelector("svg").style.transform =
                            "rotate(180deg)";
                    }
                }}
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    if (personName.length === 0) {
                        return (
                            <span
                                style={{
                                    marginRight: " -30px",
                                    color: "#67747b",
                                }}
                            >
                                اختر نوع النشاط
                            </span>
                        );
                    }

                    return selected.join(", ");
                }}
                // MenuProps={MenuProps}
            >
                {activiyType.map((name) => (
                    <MenuItem
                        key={name}
                        className="check-mark-liData"
                        value={name}
                    >
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
                <MenuItem className="check-mark-button">
                    <button className="check-mark-button">اختر</button>
                </MenuItem>
            </Select>
        </>
    );
};
export default CheckMarks;
// import React from "react";

// const CheckMarks = () => {
//     return <div>sss</div>;
// };

// export default CheckMarks;
