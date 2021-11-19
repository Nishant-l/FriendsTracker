import style from './personCard.module.css';
import PropTypes from 'prop-types';

const PersonCard = ({
    person:{id,profilePic,name,Age},
    SetBestFriend,
}) =>{
    return(
        <div 
            onClick = {()=> {SetBestFriend(id)}}
            className={style.card}
        >
            <div className={style.profilePicContainer}>
                <div className={style.profilePicWrap}>
                    <img
                    className={style.profilePic}
                    src={profilePic}
                    alt=''
                    />
                </div>
            </div>
            <div className={style.cardDetails}>
                <h3>Name</h3>
                <p>{name}</p>
                <h3>Age</h3>
                <p>{Age}</p>
            </div>
        </div>
    )
}

PersonCard.propTypes = {
    person:PropTypes.shape({
        id:PropTypes.number.isRequired,
        profilePic:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        Age:PropTypes.number.isRequired
    }).isRequired,
    SetBestFriend:PropTypes.func.isRequired
}

export {PersonCard}