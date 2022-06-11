import React from 'react';

const TextInput = ({
    value,
    type,
    onChange,
    placeholder,
    className,
    id,
    name
}) => {
  return (
    <div>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            id={id}
            name={name}
        />
    </div>
  )
}

export default TextInput;