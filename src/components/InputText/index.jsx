import { useEffect, useRef } from 'react'
import { inputTextType } from './types'

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

InputText.propTypes = inputTextType

export default InputText
