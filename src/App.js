import style from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importing pages
import { FriendDetailPage } from './Pages/FriendDetailPage';
import { FriendsPage } from './Pages/FriendsPage';
import { UserProfilePage } from './Pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import { FavoritesProvider } from './components/FevoritesProvider';
import { NewFriendPage } from './Pages/NewFraiendPage';

export  const App = () =>  {

  return(
    <BrowserRouter>
      <NavBar/>
     <FavoritesProvider>
      <Routes>
        <Route path="/" element={<div className={style.contentContainer}><FriendsPage/></div>}/>
        <Route path="/userProfile" element={<div className={style.contentContainer}><UserProfilePage/></div>}/>
        <Route path="/friendDetails/:id" element={<div className={style.contentContainer}><FriendDetailPage/></div>}/>
        <Route path="/new-friend" element={<div className={style.contentContainer}><NewFriendPage/></div>} />
      </Routes>
    </FavoritesProvider>
    </BrowserRouter>
  );
}
