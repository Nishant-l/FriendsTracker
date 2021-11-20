import style from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// importing pages
import { FriendDetailPage } from './Pages/FriendDetailPage';
import { FriendsPage } from './Pages/FriendsPage';
import { UserProfilePage } from './Pages/UserProfilePage';
import { NavBar } from './components/NavBar';

export  const App = () =>  {

  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<div className={style.contentContainer}><FriendsPage/></div>}/>
        <Route path="/userProfile" element={<div className={style.contentContainer}><UserProfilePage/></div>}/>
        <Route path="/friendDetails/:id" element={<div className={style.contentContainer}><FriendDetailPage/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}
