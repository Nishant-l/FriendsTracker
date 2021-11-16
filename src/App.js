import './App.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
import { myProfileData,fraindsData } from './data';
export  const App = () =>  {
  return(
    <>
    <div className="content-container">
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
