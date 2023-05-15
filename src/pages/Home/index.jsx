import { filterStoriesByTitle, stories } from '../../features/Story/services'
import { welcome } from '../../features/Welcome/services'
import { useStorageState } from '../../hooks'
import Template from './template'

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', 'React')
  const searchedStories = filterStoriesByTitle(stories, searchTerm)

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
