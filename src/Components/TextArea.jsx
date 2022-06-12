import React from 'react';

const TextArea = ({
    placeholder,
    rows,
    cols,
    className
}) => {
  return (
    <div>
        <textarea
          className={className}
            rows={rows}
            cols={cols}
            placeholder={placeholder}
        />
    </div>
  )
}

export default TextArea;