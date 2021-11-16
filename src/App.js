import './App.css';
import {ProfileInfo} from './ProfileInfo';
import {WelcomeMessage} from './WelcomeMessage'
export  const App = () =>  {
  return(
    <>
    <h1>Fraind tracker</h1>
    <div className="content-container">
      <WelcomeMessage/>
      <ProfileInfo/>
    </div>
    </>
  )
}
