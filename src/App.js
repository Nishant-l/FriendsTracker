import style from './App.module.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
import { myProfileData,fraindsData } from './data';
import { PeopleList } from './PeopleList';
import { useState } from 'react';

export  const App = () =>  {
  const existingFevList = JSON.parse(localStorage.getItem('fevlist'));
  const [fevList,SetFevList] = useState(existingFevList || []);

  const SetBestFriend = (id) =>{
    let newFevList = fevList.includes(id) ? fevList.filter(i => i!==id) : fevList.concat(id);
    SetFevList(newFevList); 
    localStorage.setItem('fevlist',JSON.stringify(newFevList));
  }
  return(
    <>
    <h1>Frainds tracker</h1>
    <div className={style.contentContainer}>
      <WelcomeMessage name={myProfileData.name}/>
      <h2 className={style.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData}/>
      <h2 className={style.contentHeading}>My Best Friends</h2>
      <PeopleList people={fevList.map((id)=>fraindsData.find(friend => friend.id === id))} onClickPerson={SetBestFriend}/>
      <h2 className={style.contentHeading}>My Friends</h2>
      <PeopleList people={fraindsData.filter((friend)=>!fevList.includes(friend.id))} onClickPerson={SetBestFriend}/>
    </div>
    </>
  )
}
