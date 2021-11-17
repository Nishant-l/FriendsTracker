import style from './personCard.module.css';
import PropTypes from 'prop-types';

const PersonCard = ({
    person:{profilePic,name,Age}
}) =>{
    return(
        <div className={style.card}>
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
        profilePic:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        Age:PropTypes.number.isRequired
    }).isRequired
}

export {PersonCard}