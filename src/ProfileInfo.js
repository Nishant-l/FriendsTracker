import style from './ProfileInfo.module.css'
import PropTypes from 'prop-types';

const ProfileInfo = ({
    person: {profilePic,name,Age,Bio,birthDay,Interests}
}) => {
      return (
        <>
            <div className={style.profilePicContainer}>
                <div className={style.profilePicWrap}>
                <img
                    className={style.profilePic}
                    src={profilePic} 
                    alt='nishant'
                />
                </div>
            </div>
          <h3 className={style.detailedHeading}>Name</h3>
          <p>{name}</p>
          <h3 className={style.detailedHeading}>Age</h3>
          <p>{Age}</p>
          <h3 className={style.detailedHeading}>Bio</h3>
          <p>{Bio}</p>
          <h3 className={style.detailedHeading}>Birthday</h3>
          <p>{birthDay}</p>
          <h3 className={style.detailedHeading}>Interests</h3>
          {Interests.map((i)=>{
            return(<li key={i}>{i}</li>);
          })}
        
        </>
      );
}

ProfileInfo.propTypes = {
   person:PropTypes.shape({
    profilePic:PropTypes.string,
    name:PropTypes.string.isRequired,
    Age:PropTypes.number.isRequired,
    Bio:PropTypes.string.isRequired,
    birthDay:PropTypes.string.isRequired,
    Interests:PropTypes.arrayOf(PropTypes.string).isRequired,
   }).isRequired
}

export {ProfileInfo}