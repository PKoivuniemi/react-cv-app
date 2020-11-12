import React, { useState } from 'react';

function InputField(props) {
    const [text, setText] = useState('');
    return (
        <div>
            <input type="text"
                value={state} name={name}
                onChange={ (e) => setText(e.target.value) }
            />
        </div>
    );
}
 
export default InputField;