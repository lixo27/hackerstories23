import { useEffect, useRef } from 'react'
import Proptypes from 'prop-types'

const InputText = ({ id, value, onChange, hasFocus, children }) => {
    const inputRef = useRef()

    useEffect(() => {
        if (hasFocus && inputRef.current) {
            inputRef.current.focus()
        }
    }, [hasFocus])

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                ref={inputRef}
            />
        </>
    )
}

InputText.propTypes = {
    id: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    hasFocus: Proptypes.bool,
    children: Proptypes.object,
}

export default InputText
