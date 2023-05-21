import Proptypes from 'prop-types'

const List = ({ items, onRemoveItem }) => (
    <ul>
        {items.map((item) => (
            <ListItem key={item.objectID} item={item} onRemove={onRemoveItem} />
        ))}
    </ul>
)

List.propTypes = {
    items: Proptypes.array,
    onRemoveItem: Proptypes.func,
}

export default List

const ListItem = ({ item, onRemove }) => {
    const { url, title, author, num_comments, points } = item

    return (
        <li>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
            <span>
                <button type='button' onClick={() => {
                    onRemove(item)
                }}>
                    Dismiss
                </button>
            </span>
        </li>
    )
}

ListItem.propTypes = {
    item: Proptypes.shape({
        url: Proptypes.string,
        title: Proptypes.string,
        author: Proptypes.string,
        num_comments: Proptypes.number,
        points: Proptypes.number,
    }),
    onRemove: Proptypes.func,
}
