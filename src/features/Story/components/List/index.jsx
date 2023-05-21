import { listType, listItemType } from "./types"

const List = ({ items, onRemoveItem }) => (
    <ul>
        {items.map((item) => (
            <ListItem key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        ))}
    </ul>
)

const ListItem = ({ item, onRemoveItem }) => {
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
                    onRemoveItem(item)
                }}>
                    Dismiss
                </button>
            </span>
        </li>
    )
}

List.propTypes = listType
ListItem.propTypes = listItemType

export default List
