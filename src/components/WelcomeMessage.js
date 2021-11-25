import PropTypes  from "prop-types"
import style from './WelcomeMessage.module.css'
import { useState } from "react"

const WelcomeMessage = ({name}) => {

    let toHide;
    if(localStorage.getItem('hideStatus')===null){
        toHide=true;
    }else{
        toHide = false;
    }
    const [isVisible ,setVisibility] = useState(toHide);
    return(
        isVisible ?
        (<div className={style.welcomeMessage}>
            <h2 >Welcome to the Friend-Tracker app,{name}</h2>
            <button onClick={()=>{
                if(toHide){
                    localStorage.setItem('hideStatus',false)
                    toHide=false;
                }
                setVisibility(toHide);
                }}>Hide</button>
        </div>): null
    )
}

WelcomeMessage.propTypes = {
    name:PropTypes.string.isRequired
}

export {WelcomeMessage};