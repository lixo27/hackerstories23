import Proptypes from 'prop-types'

const InputText = ({ id, value, onChange, children }) => (
    <>
        <label htmlFor={id}>{children}</label>
        <input id={id} type="text" value={value} onChange={onChange}></input>
    </>
)

InputText.propTypes = {
    id: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    children: Proptypes.children,
}

export default InputText
