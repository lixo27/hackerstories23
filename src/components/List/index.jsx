import Proptypes from 'prop-types'

const List = ({ items }) => (
    <ul>
        {items.map((item) => (
            <ListItem key={item.objectID} {...item} />
        ))}
    </ul>
)

List.propTypes = {
    items: Proptypes.array
}

export default List

const ListItem = ({ url, title, author, num_comments, points }) => (
    <li>
        <span>
            <a href={url}>{title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>
)

ListItem.propTypes = {
    url: Proptypes.string,
    title: Proptypes.string,
    author: Proptypes.string,
    num_comments: Proptypes.number,
    points: Proptypes.number,
}
