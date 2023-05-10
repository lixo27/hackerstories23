import {useState} from 'react'
import Proptypes from 'prop-types'

const welcome = {
  greeting: 'Hey',
  title: 'React'
}

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

const Greeting = ({greeting, title}) => (
  <h1>{greeting}, {title}!</h1>
)

Greeting.propTypes = {
  greeting: Proptypes.string,
  title: Proptypes.string,
}

const Search = ({searchTerm, onSearch}) => (
  <>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={onSearch}></input>

    <p>Searching for <strong>{searchTerm}</strong></p>
  </>
)

Search.propTypes = {
  onSearch: Proptypes.func,
  searchTerm: Proptypes.string,
}

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

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const searchedStories = stories.filter((story) => {
    const lowerCaseStoryTitle = story.title.toLowerCase()
    const lowerCaseSearchTerm = searchTerm.toLowerCase()

    return lowerCaseStoryTitle.includes(lowerCaseSearchTerm)
  })

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Greeting greeting={welcome.greeting} title={welcome.title} />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      <hr />
      <List items={searchedStories} />
    </>
  )
}

export default function App() {
  return <Page />
}
