import './ProfileInfo.css'
import PropTypes from 'prop-types';

const ProfileInfo = ({
    person: {profilePic,name,Age,Bio,birthDay,Interests}
}) =>{
      return (
        <>
            <div className='profile-pic-container'>
                <div className='profile-pic-wrap'>
                <img
                    className='profile-pic'
                    src={profilePic} 
                    alt='nishant'
                />
                </div>
            </div>
          <h2 className='content-heading'>My profile</h2>
          <h3>Name</h3>
          <p>{name}</p>
          <h3>Age</h3>
          <p>{Age}</p>
          <h3>Bio</h3>
          <p>{Bio}</p>
          <h3>Birthday</h3>
          <p>{birthDay}</p>
          <h3>Interests</h3>
          {Interests.map((i)=>{
            return(<li>{i}</li>);
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