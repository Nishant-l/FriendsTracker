import {WelcomeMessage} from '../components/WelcomeMessage'
import { myProfileData,fraindsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { useState } from 'react';
import style from './friendPage.module.css'
const FriendsPage = () => {
    
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
        <WelcomeMessage name={myProfileData.name}/>
        <h2 className={style.contentHeading}>My Best Friends</h2>
        <PeopleList people={fevList.map((id)=>fraindsData.find(friend => friend.id === id))} onClickPerson={SetBestFriend}/>
        <h2 className={style.contentHeading}>My Friends</h2>
        <PeopleList people={fraindsData.filter((friend)=>!fevList.includes(friend.id))} onClickPerson={SetBestFriend}/>
        </>
    )

}

export {FriendsPage}