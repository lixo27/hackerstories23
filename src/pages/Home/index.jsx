import { useState } from 'react'
import Template from './template'
import dummyService from '../../services/Dummy'

const { welcome, stories } = dummyService

const Home = () => {
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
    <Template
      welcome={welcome}
      searchTerm={searchTerm}
      onSearch={handleSearch}
      items={searchedStories}
    />
  )
}

export default Home
