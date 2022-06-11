import React from 'react';

const TextArea = ({
    placeholder
}) => {
  return (
    <div>
        <textarea
            rows="2"
            cols="23"
            placeholder={placeholder}
        />
    </div>
  )
}

export default TextArea;