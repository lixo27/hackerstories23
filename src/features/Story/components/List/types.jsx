import Proptypes from 'prop-types'

export const listType = {
    items: Proptypes.array.isRequired,
    onRemoveItem: Proptypes.func.isRequired,
}

export const listItemType = {
    item: Proptypes.shape({
        url: Proptypes.string,
        title: Proptypes.string,
        author: Proptypes.string,
        num_comments: Proptypes.number,
        points: Proptypes.number,
    }).isRequired,
    onRemoveItem: Proptypes.func.isRequired,
}
