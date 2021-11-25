import PropTypes from 'prop-types';
import style from './newFriendCard.module.css';
const NewFriendCard = ({onClick = () => {}}) => {

    return(
        <div onClick={onClick} className={style.cardContainer}>
            <h3>+ Add New Friend</h3>
        </div>
    )
}

NewFriendCard.propTypes = {
    onClick:PropTypes.func,
};

export {NewFriendCard}