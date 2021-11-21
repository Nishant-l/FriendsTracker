import {ProfileInfo} from '../components/ProfileInfo';
import {fraindsData} from '../data';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const FriendDetailPage = ({
    fevList=[],
    SetBestFriend
}) => {
    const {id} = useParams();
    const selectedFriend = fraindsData.find(f => f.id.toString() === id);
    const isBestFriend = fevList.includes(selectedFriend.id);
    return(
        selectedFriend?
        <ProfileInfo 
            person={selectedFriend} 
            togglefriend={()=>SetBestFriend(selectedFriend.id)} 
            toggleText={isBestFriend?'Remove from Favorites':'Add to Favorites'}
        />
       :(<>
            <h1>404 Not found, Ooops!!! </h1>
            <Link to="/">
                <button>GoToHome</button>
            </Link>
        </>)
    )
}

FriendDetailPage.propTypes = {
    fevList: PropTypes.arrayOf(PropTypes.number),
    SetBestFriend: PropTypes.func.isRequired
}

export {FriendDetailPage}