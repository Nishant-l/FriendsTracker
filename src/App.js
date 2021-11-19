import style from './App.module.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
import { myProfileData,fraindsData } from './data';
import {PersonCard} from './PersonCard';
import { useState } from 'react';

export  const App = () =>  {
  const [fevList,SetFevList] = useState([]);
  const SetBestFriend = (id) =>{
    if(fevList.includes(id)){
      SetFevList(fevList.filter(i => i!==id)) 
    }else{
      SetFevList(fevList.concat(id));
    }
  }
  return(
    <>
    <h1>Frainds tracker</h1>
    <div className={style.contentContainer}>
      <WelcomeMessage name={myProfileData.name}/>
      <h2 className={style.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData}/>
      <h2 className={style.contentHeading}>My Friends</h2>
      <h3>{`Noumber of BestFriends ${fevList.length}`}</h3>
      <div className={style.peopleList}>
        {fraindsData.map((friend)=>
          (
            <div className={style.peopleListItem} key={friend.id}>
            <PersonCard person={friend}
            isBestFriend={fevList.includes(friend.id)}
            SetBestFriend={SetBestFriend}
            />
            </div>
          )
        )}
      </div>
    </div>
    </>
  )
}
