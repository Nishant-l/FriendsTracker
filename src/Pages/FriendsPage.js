import {WelcomeMessage} from '../components/WelcomeMessage'
import { myProfileData,fraindsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import style from './friendPage.module.css'
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const FriendsPage = ({
    fevList,
    SetBestFriend
}) => {
    
    const navigate = useNavigate();
    
    const goToPersonDetail = (id) => {
        navigate(`/friendDetails/${id}`);
    }

    return(
        <>
        <h1>Frainds tracker</h1>
        <WelcomeMessage name={myProfileData.name}/>
        <h2 className={style.contentHeading}>My Best Friends</h2>
        <PeopleList 
            people={fevList.map((id)=>fraindsData.find(friend => friend.id === id))} 
            onClickPerson={goToPersonDetail} 
            onToggleFavorite={SetBestFriend} 
            actionName="Remove from Favorites"
        />
        <h2 className={style.contentHeading}>My Friends</h2>
        <PeopleList 
            people={fraindsData.filter((friend)=>!fevList.includes(friend.id))} 
            onClickPerson={goToPersonDetail} 
            onToggleFavorite={SetBestFriend} 
            actionName="Add to Favorites"
        />
        </>
    )

}

FriendsPage.propTypes = {
    fevList: PropTypes.arrayOf(PropTypes.number),
    SetBestFriend: PropTypes.func.isRequired
}

export {FriendsPage}