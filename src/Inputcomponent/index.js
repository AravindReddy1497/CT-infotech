import { Input, Row } from "antd";
import React from "react";

function NewInputComp({
  star = "block",
  label = "name",
  className,
  name,
  value,
  onChange,
  placeholder,
  errors,
  touched,
  type,
  suffix = "",
  onFocus,
  style,
  defaultValue,
  readOnly = false,
}) {
  return (
    <div className="re-inp-box">
      <Row>
        <p style={{ display: `${star}` }} className="re-input-p">
          *
        </p>
        {label}
      </Row>
      <Row>
        <Input
          readOnly={readOnly}
          name={name}
          type={type}
          onFocus={onFocus}
          style={{
            border: `${
              errors
                ? errors[name] && touched[name]
                  ? "1px solid #d16e6c"
                  : ""
                : null
            }`,
            color: "#858585",
            ...style,
          }}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          suffix={suffix}
          defaultValue={defaultValue}
        />
        {errors ? (
          errors[name] && touched[name] ? (
            <p className="re-err fs-10">{errors[name]}</p>
          ) : null
        ) : null}
      </Row>
    </div>
  );
}

export default NewInputComp;
