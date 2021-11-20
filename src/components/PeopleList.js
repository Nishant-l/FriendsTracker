import style from './peopleList.module.css';
import { PersonCard } from './PersonCard';
import PropTypes from 'prop-types'
const PeopleList = ({
    people,
    onClickPerson
}) =>{
    return(
        <div className={style.peopleList}>
        {people.map((person)=>
          (
            <div className={style.peopleListItem} key={person.id}>
            <PersonCard person={person}
            SetBestFriend={onClickPerson}
            />
            </div>
          )
        )}
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
}

export {PeopleList}