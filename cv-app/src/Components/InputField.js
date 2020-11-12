import React, { useState } from 'react';

function InputField(props) {
    const [text, setText] = useState(props.defaultValue);
    return (
        <div>
            <input type="text"
                value={text} name={props.name}
                onChange={ (e) => setText(e.target.value) }
            />
        </div>
    );
}
 
export default InputField;