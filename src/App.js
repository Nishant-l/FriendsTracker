import style from './App.module.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
import { myProfileData,fraindsData } from './data';
export  const App = () =>  {
  return(
    <>
    <h1>Frainds tracker</h1>
    <div className={style.contentContainer}>
      <WelcomeMessage name={myProfileData.name}/>
      <ProfileInfo person={myProfileData}/>
      {fraindsData.map((friend)=>{
        return(
          <>
          <WelcomeMessage name={friend.name} className=''/>
          <ProfileInfo person={friend}/>
          </>
        )
      })}
    </div>
    </>
  )
}
