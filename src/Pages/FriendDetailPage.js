import {ProfileInfo} from '../components/ProfileInfo';
import {fraindsData} from '../data';
import { Link, useParams } from 'react-router-dom';
const FriendDetailPage = () => {
    const {id} = useParams();
    const selectedFriend = fraindsData.find(f => f.id.toString() === id);
    console.log(selectedFriend)
    return(
        selectedFriend?
       <ProfileInfo person={selectedFriend}/>
       :(<>
            <h1>404 Not found, Ooops!!! </h1>
            <Link to="/">
                <button>GoToHome</button>
            </Link>
        </>)
    )
}

export {FriendDetailPage}