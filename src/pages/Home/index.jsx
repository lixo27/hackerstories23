import { useState, useEffect } from 'react'
import dummyService from '../../services/Dummy'
import Template from './template'

const { welcome, stories } = dummyService

const useStorageStage = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  )

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageStage('searchTerm', 'React')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter((story) => {
    const lowerCaseStoryTitle = story.title.toLowerCase()
    const lowerCaseSearchTerm = searchTerm.toLowerCase()

    return lowerCaseStoryTitle.includes(lowerCaseSearchTerm)
  })

  return (
    <Template
      welcome={welcome}
      searchTerm={searchTerm}
      onSearch={handleSearch}
      items={searchedStories}
    />
  )
}

export default Home
