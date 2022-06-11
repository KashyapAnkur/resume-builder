import React from 'react'

const Button = ({
    type,
    className,
    handleChange,
    btnText
}) => {
  return (
    <div>
        <button
            type={type}
            className={className}
            handleChange={handleChange}
        >   
            {btnText}
        </button>
    </div>
  )
}

export default Button;