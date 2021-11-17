import style from './App.module.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
import { myProfileData,fraindsData } from './data';
import {PersonCard} from './PersonCard';
export  const App = () =>  {
  return(
    <>
    <h1>Frainds tracker</h1>
    <div className={style.contentContainer}>
      <WelcomeMessage name={myProfileData.name}/>
      <h2 className={style.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData}/>
      <h2 className={style.contentHeading}>My Friends</h2>
      <div className={style.peopleList}>
        {fraindsData.map((friend)=>{
          return(
            <>
            <div className={style.peopleListItem}>
            <PersonCard person={friend}/>
            </div>
            </>
          )
        })}
      </div>
    </div>
    </>
  )
}
