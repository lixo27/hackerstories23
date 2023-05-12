import Proptypes from 'prop-types'

const List = ({ items }) => (
    <ul>
        {items.map((item) => (
            <ListItem key={item.objectID} item={item} />
        ))}
    </ul>
)

List.propTypes = {
    items: Proptypes.array
}

export default List

const ListItem = ({ item }) => {
    const { url, title, author, num_comments, points } = item

    return (
        <li>
            <span>
                <a href={url}>{title}</a>
            </span>
            <span>{author}</span>
            <span>{num_comments}</span>
            <span>{points}</span>
        </li>
    )
}

ListItem.propTypes = {
    item: Proptypes.object
}
