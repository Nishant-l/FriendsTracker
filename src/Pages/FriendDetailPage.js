import {ProfileInfo} from '../components/ProfileInfo';
import {fraindsData} from '../data';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FriendDetailPage = () => {
    const {favoritesIds,SetBestFriend} = useContext(FavoritesContext);
    const {id} = useParams();
    const selectedFriend = fraindsData.find(f => f.id.toString() === id);
    const isBestFriend = favoritesIds.includes(selectedFriend.id);
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

export {FriendDetailPage}