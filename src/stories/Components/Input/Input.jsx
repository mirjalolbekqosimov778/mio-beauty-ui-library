import React, { useState } from "react";
import PropTypes from 'prop-types';
import './input.scss';
import { Icon } from "../Icons";

export const Input = ({
  disabled = false,
  label = 'Title',
  notice = 'Notice text',
  errorFilled = false,
  errorText = 'Error text',
  leftIcon = true,
  type = 'text',
  ...props
}) => {
  const disabledMode = disabled ? 'storybook-button--disabled' : '';

  const [showPassword, setShowPassword] = useState(false);
  const [phoneValue, setPhoneValue] = useState("+998 ");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  React.useEffect(() => {
    if (type !== "phone") {
      setPhoneValue("");
    } else {
      setPhoneValue("+998 ");
    }
  }, [type]);

  const formatPhone = (val) => {
    let digits = val.replace(/\D/g, "");

    if (!digits.startsWith("998")) {
      digits = "998" + digits;
    }

    digits = digits.slice(0, 12);

    let formatted = "+998";

    if (digits.length > 3) {
      formatted += " " + digits.slice(3, 5);
    }
    if (digits.length > 5) {
      formatted += " " + digits.slice(5, 8);
    }
    if (digits.length > 8) {
      formatted += " " + digits.slice(8, 10);
    }
    if (digits.length > 10) {
      formatted += " " + digits.slice(10, 12);
    }

    return formatted;
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    if (!input.startsWith("+998")) {
      input = "+998";
    }

    setPhoneValue(formatPhone(input));
  };
  const handlePhoneKeyDown = (e) => {
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      phoneValue.length <= 5
    ) {
      e.preventDefault();
    }
  };


  return (
    <form className="storybook-input-form">
      {label && <label className="storybook-input-label">{label}</label>}
      <div className={`storybook-input-wrapper ${leftIcon ? "with-left-icon" : ""}`}>

        {leftIcon && <Icon name='ic_add_outlined' className={`storybook-left-input-icon ${disabled ? 'storybook-input-icon--disabled' : ''}`} />}

        <input
          type={
            type === "password"
              ? (showPassword ? "text" : "password")
              : type === "phone"
                ? "tel"
                : type
          }
          disabled={disabled}
          placeholder="Enter text"
          className={[
            "storybook-input",
            disabledMode,
            errorFilled ? "storybook-input--error" : "",
          ].join(" ")}
          {...(type === "phone"
            ? {
              value: phoneValue,
              onChange: handlePhoneChange,
              onKeyDown: handlePhoneKeyDown,
            }
            : {
              ...props,
            })}
        />

        {type === "password" && (
          <Icon
            name={showPassword ? "ic_eye_outlined" : "ic_eye_slash_outlined"}
            className={`storybook-input--icon ${disabled ? 'storybook-input-icon--disabled' : ''}`}
            onClick={togglePassword}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>

      {errorFilled && (
        <span
          className={`storybook-input-notice ${errorFilled ? 'storybook-input-notice--error' : ''}`}
        >
          {errorText}
        </span>
      )}

      {notice && (
        <span
          className={`storybook-input-notice`}
        >
          {notice}
        </span>
      )}


    </form>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  leftIcon: PropTypes.bool,
  label: PropTypes.string,
  notice: PropTypes.string,
  errorFilled: PropTypes.bool,
  errorText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'phone']),
};
