import Proptypes from 'prop-types'

export default function Greeting({ greeting, title }) {
    return (<h1>{greeting}, {title}!</h1>)
}

Greeting.propTypes = {
    greeting: Proptypes.string,
    title: Proptypes.string,
}
