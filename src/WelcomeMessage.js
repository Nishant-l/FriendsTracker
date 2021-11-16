import PropTypes  from "prop-types"
import './WelcomeMessage.css'

const WelcomeMessage = ({name}) => {
    return(
        <h2 className="welcome-message">Welcome to the Friend-Tracker app,{name}</h2>
    )
}

WelcomeMessage.propTypes = {
    name:PropTypes.string.isRequired
}

export {WelcomeMessage};