import { useState } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const FavoritesProvider = ({children}) => {
    const existingFevList = JSON.parse(localStorage.getItem('fevlist'));
    const [fevList,SetFevList] = useState(existingFevList || []);

    const SetBestFriend = (id) =>{
        let newFevList = fevList.includes(id) ? fevList.filter(i => i!==id) : fevList.concat(id);
        SetFevList(newFevList); 
        localStorage.setItem('fevlist',JSON.stringify(newFevList));
    }

    return(
        <FavoritesContext.Provider value={{favoritesIds:fevList,SetBestFriend}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export {FavoritesProvider}