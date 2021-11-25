import style from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importing pages
import { FriendDetailPage } from './Pages/FriendDetailPage';
import { FriendsPage } from './Pages/FriendsPage';
import { UserProfilePage } from './Pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import { useState } from 'react';
// importing contextex
import {FavoritesContext} from './contexts/FavoritesContext';

export  const App = () =>  {

  const existingFevList = JSON.parse(localStorage.getItem('fevlist'));
    const [fevList,SetFevList] = useState(existingFevList || []);

    const SetBestFriend = (id) =>{
        let newFevList = fevList.includes(id) ? fevList.filter(i => i!==id) : fevList.concat(id);
        SetFevList(newFevList); 
        localStorage.setItem('fevlist',JSON.stringify(newFevList));
    }

  return(
    <BrowserRouter>
      <NavBar/>
      <FavoritesContext.Provider value={{favoritesIds:fevList,SetBestFriend}}>
      <Routes>
        <Route path="/" element={<div className={style.contentContainer}><FriendsPage/></div>}/>
        <Route path="/userProfile" element={<div className={style.contentContainer}><UserProfilePage/></div>}/>
        <Route path="/friendDetails/:id" element={<div className={style.contentContainer}><FriendDetailPage/></div>}/>
      </Routes>
      </FavoritesContext.Provider>
    </BrowserRouter>
  );
}
