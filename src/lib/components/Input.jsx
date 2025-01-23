import React from 'react';

const Input = ({ name, type = 'text', placeholder, defaultValue, ...props }) => {
  return (
    <input
      autoComplete={false}
      name={name} // Ensure this attribute exists
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

export default Input;
