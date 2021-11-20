import {ProfileInfo} from '../components/ProfileInfo';
import style from './UserProfilePage.module.css'
import { myProfileData } from '../data';

const UserProfilePage = () => {
    return(
        <>
            <h2 className={style.contentHeading}>My Profile</h2>
            <ProfileInfo person={myProfileData}/>
        </>
    )
}

export {UserProfilePage}