import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./OtpInput.scss";

export const OtpInput = ({
    length = 6,
    error = false,
    success = false,
    notice = 'Notice',

    onChange
}) => {
    const [values, setValues] = useState(Array(length).fill(""));
    const inputsRef = useRef([]);

    useEffect(() => {
        setValues(Array(length).fill(""));
    }, [length]);

    const handleChange = (e, idx) => {
        const val = e.target.value.replace(/[^0-9]/g, "");
        if (!val) return;

        const newValues = [...values];
        newValues[idx] = val[0];
        setValues(newValues);
        onChange && onChange(newValues.join(""));

        if (idx < length - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };


    const handleKeyDown = (e, idx) => {
        if (e.key === "Backspace") {
            const newValues = [...values];

            if (newValues[idx]) {
                newValues[idx] = "";
                setValues(newValues);
                onChange && onChange(newValues.join(""));
            } else if (idx > 0) {
                inputsRef.current[idx - 1]?.focus();
                newValues[idx - 1] = "";
                setValues(newValues);
                onChange && onChange(newValues.join(""));
            }
        }
    };

    return (
        <div className="storybook-otp--container">
            <div div className="otp-wrapper" >
                {
                    values.map((val, idx) => (
                        <input
                            key={idx}
                            type="text"
                            maxLength="1"
                            value={val}
                            ref={(el) => (inputsRef.current[idx] = el)}
                            className={`
                        storybook-otp 
                        ${val ? "filled" : ""}
                        ${error ? "storybook-otp--error" : ""}
                        ${success ? "storybook-otp--success" : ""}`}
                            onChange={(e) => handleChange(e, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                        />
                    ))
                }

            </div >
            <span className="storybook-otp-error-notice">
                {error ? notice : ''}
            </span>
        </div>
    );
};

OtpInput.propTypes = {
    length: PropTypes.number,
    error: PropTypes.bool,
    success: PropTypes.bool,
    notice: PropTypes.string
};
