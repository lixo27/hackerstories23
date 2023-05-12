import {useState} from 'react'
import Template from './template'

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

export default function Home() {
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
      <Template welcome={welcome} searchTerm={searchTerm} onSearch={handleSearch} items={searchedStories} />
    )
}
