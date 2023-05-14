import dummyStoryService from '../../features/Story/services/Dummy'
import dummyWelcomeService from '../../features/Welcome/services/Dummy'
import useStorageState from '../../hooks/useStorageState'
import Template from './template'

const { stories } = dummyStoryService
const { welcome } = dummyWelcomeService

const searchStoriesByTitle = (title) => {
  return stories.filter((story) => {
    const lowerCaseStoryTitle = story.title.toLowerCase()
    const lowerCaseTitle = title.toLowerCase()

    return lowerCaseStoryTitle.includes(lowerCaseTitle)
  })
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', 'React')
  const searchedStories = searchStoriesByTitle(searchTerm)

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
