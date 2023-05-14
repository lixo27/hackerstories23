import Proptypes from 'prop-types'

const Greeting = ({ greeting, title }) => (
    <h1>{greeting}, {title}!</h1>
)

Greeting.propTypes = {
    greeting: Proptypes.string,
    title: Proptypes.string,
}

export default Greeting
