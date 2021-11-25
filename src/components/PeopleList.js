import style from './peopleList.module.css';
import { PersonCard } from './PersonCard';
import PropTypes from 'prop-types'
import { NewFriendCard } from './NewFraindCard';
import {useNavigate} from 'react-router-dom';
const PeopleList = ({
    people,
    onClickPerson,
    actionName,
    onToggleFavorite,
    allowAddation
}) =>{
    const navigate = useNavigate();
    return(
        <div className={style.peopleList}>
        {people.map((person)=>
          (
            <div className={style.peopleListItem} key={person.id}>
            <PersonCard person={person}
            SetBestFriend={onClickPerson}
            actionName={actionName}
            onAction={onToggleFavorite}
            />
            </div>
          )
        )}
        {allowAddation && <div className={style.peopleListItem}>
        <NewFriendCard onClick={() => navigate('/new-friend')}/>
        </div>}
      </div>
    )
    
}

PeopleList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            profilePic:PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            Age:PropTypes.number.isRequired
        })
    ).isRequired,
    onClickPerson: PropTypes.func.isRequired,
    actionName: PropTypes.string,
    onToggleFavorite: PropTypes.func,
    allowAddation:PropTypes.bool
}

export {PeopleList}