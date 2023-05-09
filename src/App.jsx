const welcome = {
  greeting: 'Hey',
  title: 'React'
}

const Greeting = () => {
  return (
    <h1>{welcome.greeting}, {welcome.title}!</h1>
  )
}

const Search = () => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </>
  )
}

export default function App() {
  return (
    <>
      <Greeting/>
      <Search />
    </>
  )
}
