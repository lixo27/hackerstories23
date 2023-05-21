import { greetingType } from './types'

const Greeting = ({ greeting, title }) => (
    <h1>{greeting}, {title}!</h1>
)

Greeting.propTypes = greetingType

export default Greeting
