import React, { useRef, useEffect, useState } from 'react'

const TextArea = ({ value, setValue, label }) => {

    const ref = useRef(null)
    const [height, setHeight] = useState('auto')
    const [minHeight, setMinHeight] = useState('auto')

    useEffect(() => {
        setHeight(`${ref.current.scrollHeight}px`)
        setMinHeight(`${ref.current.scrollHeight}px`)
    }, [value])

    const handleChange = e => {
        setHeight('auto');
        setMinHeight(`${ref.current.scrollHeight}px`);
        setValue(e.target.value);
    }

    return (
        <div className='Parent' style={{ minHeight, display: 'flex', justifyContent: 'center' }}>
            <div>
                <label for="TextBox">{label}</label>
                <div></div>
                <textarea
                    className='TextBox'
                    ref={ref}
                    rows={3}
                    value={value}
                    onChange={handleChange}
                    style={{ height, overflow: 'hidden', width: '40vw' }}
                />
            </div>
        </div>
    )
}

export default TextArea