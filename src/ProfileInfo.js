import { myProfileData } from "./data";
import './ProfileInfo.css'

export const ProfileInfo = () =>{

      return (
        <div>
            <div className='profile-pic-container'>
                <div className='profile-pic-wrap'>
                <img
                    className='profile-pic'
                    src={process.env.PUBLIC_URL + myProfileData.profilePic} 
                    alt='nishant'
                />
                </div>
            </div>
          <h2 className='contrnt-heading'>My profile</h2>
          <h3>Name</h3>
          <p>{myProfileData.name}</p>
          <h3>Age</h3>
          <p>{myProfileData.Age}</p>
          <h3>Bio</h3>
          <p>{myProfileData.Bio}</p>
          <h3>Birthday</h3>
          <p>{myProfileData.birthDay}</p>
          <h3>Interests</h3>
          {myProfileData.Interests.map((i)=>{
            return(<li>{i}</li>);
          })}
        
        </div>
      );
}

