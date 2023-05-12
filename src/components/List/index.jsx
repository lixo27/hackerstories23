import Proptypes from 'prop-types'

const ListItem = ({ item }) => (
    <li>
        <span>
            <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
    </li>
)

ListItem.propTypes = {
    item: Proptypes.object
}

export default function List({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <ListItem key={item.objectID} item={item} />
            ))}
        </ul>
    )
}

List.propTypes = {
    items: Proptypes.array
}
