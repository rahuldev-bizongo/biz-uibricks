import React from 'react';

const Dropdown = ({ name, options, defaultValue, placeholder, onChange, ...props }) => {
    return (
        <select
            name={name}
            defaultValue={defaultValue}
            onChange={(e) => onChange && onChange(e.target.value)}
            {...props}
        >
            {placeholder && (
                <option value="" disabled>{placeholder}</option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
