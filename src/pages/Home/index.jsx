import dummyStoryService from '../../features/Story/services/Dummy'
import dummyWelcomeService from '../../features/Welcome/services/Dummy'
import useStorageState from '../../hooks/useStorageState'
import Template from './template'

const { stories } = dummyStoryService
const { welcome } = dummyWelcomeService

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', 'React')

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
