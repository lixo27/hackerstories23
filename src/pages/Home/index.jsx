import { useState, useEffect } from 'react'
import Template from './template'
import dummyService from '../../services/Dummy'

const { welcome, stories } = dummyService

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('searchTerm') || 'React'
  )

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm])

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
