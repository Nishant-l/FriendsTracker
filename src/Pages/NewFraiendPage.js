import { useState } from "react";
import styles from './newFriendPage.module.css'

const NewFriendPage = () => {
    const  [name,setName] = useState('');
    const  [age,setAge] = useState('');
    const  [bio,setBio] = useState('');
    const  [birthday,setBirthday] = useState('');
    const  [interests,setInterests] = useState('');
    return(
        <>
        <h1>Add New Friend</h1>
        <div className={styles.infoForm}>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
             <label htmlFor="age">
                Age
            </label>
            <input
                id="age"
                placeholder="22"
                type="number"
                value={age}
                onChange={(e)=>{setAge(Number(e.target.value))}}
            />
             <label htmlFor="bio">
                Bio
            </label>
            <textarea
                id="bio"
                placeholder="Tell as some thing abouth this friend"
                type="text"
                value={bio}
                onChange={(e)=>{setBio(e.target.value)}}
            />
             <label htmlFor="birthday">
                Birthday
            </label>
            <input
                id="birthday"
                placeholder="i.e. jan 21"
                type="text"
                value={birthday}
                onChange={(e)=>{setBirthday(e.target.value)}}
            />
             <label htmlFor="interests">
                Interests (seperated with comas)
            </label>
            <input
                id="interests"
                placeholder="food, movies, travel"
                type="text"
                value={interests}
                onChange={(e)=>{setInterests(e.target.value)}}
            />
            <button>Create</button>
        </div>
        </>
    );
}

export { NewFriendPage };