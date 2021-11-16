import { myProfileData } from "./data"
import './WelcomeMessage.css'
export const WelcomeMessage = ({name}) => {
    return(
        <h2 className="welcome-message">Welcome to the Friend-Tracker app,{name}</h2>
    )
}