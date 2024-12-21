import React, {useEffect, useRef } from 'react';

function FocusInput()
{
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus jest tutaj" />
        </div>
    );
}

export default FocusInput;