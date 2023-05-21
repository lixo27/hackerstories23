import { useEffect, useState } from 'react'
import { filterStoriesByTitle, getAsyncStories } from '../../features/Story/services'
import { welcome } from '../../features/Welcome/services'
import { useStorageState } from '../../hooks'
import Template from './template'

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', 'React')
  const [stories, setStories] = useState([])

  useEffect(() => {
    getAsyncStories().then(result => {
      setStories(result.data.stories)
    })
  }, [])

  const searchedStories = filterStoriesByTitle(stories, searchTerm)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleRemoveItem = (item) => {
    setStories(stories.filter(
      (story) => item.objectID !== story.objectID
    ))
  }

  return (
    <Template
      welcome={welcome}
      searchTerm={searchTerm}
      onSearch={handleSearch}
      items={searchedStories}
      onRemoveItem={handleRemoveItem}
    />
  )
}

export default Home
