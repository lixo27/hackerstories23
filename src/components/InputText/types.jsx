import Proptypes from 'prop-types'

export const inputTextType = {
    id: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
    hasFocus: Proptypes.bool,
    children: Proptypes.object,
}
