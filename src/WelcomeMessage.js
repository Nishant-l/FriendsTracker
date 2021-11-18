import PropTypes  from "prop-types"
import style from './WelcomeMessage.module.css'
import { useState } from "react"

const WelcomeMessage = ({name}) => {
    const [isVisible ,setVisibility] = useState(true);
    return(
        isVisible ?
        (<div className={style.welcomeMessage}>
            <h2 >Welcome to the Friend-Tracker app,{name}</h2>
            <button onClick={()=>{setVisibility(false)}}>Hide</button>
        </div>): null
    )
}

WelcomeMessage.propTypes = {
    name:PropTypes.string.isRequired
}

export {WelcomeMessage};