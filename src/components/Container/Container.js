import React, { useEffect, useState } from 'react';
import File from '../File/File';
import Profile from '../Profile/Profile';
import './Container.css';

const Container = () => {
    const breakTime = [
        {time:10,},
        {time:15,},
        {time:20,},
        {time:15,}
    ]
    const [times, setTimes] = useState([])
const [files, setFiles] = useState([]);
const [profile, setProfile] = useState([]);

    useEffect( () => {
        fetch('file.json')
        .then(res => res.json())
        .then(data=> setFiles(data))
    } ,[])

    const handleClick = (fil) =>{
        const newProfile = [...profile, fil]
        setProfile(newProfile);
    }
    const clicks = (tim) =>{
        setTimes(tim);
    }

    return (
        <div className='container'>
            <div className="study-container">
                
                {
                    files.map(file => <File 
                        key={file.id}
                        file={file}
                        handleClick = {handleClick}
                        ></File>)
                }
            </div>
            <div className="side-container">
                <h2>Add A Break</h2>
                <div  className='dis'>
                {
                    breakTime.map(times => <button className='btnss' onClick={()=> clicks(times.time)}>{times.time}</button>)
                }
                </div>
                <Profile times={times} profile={profile}></Profile>
            </div>
        </div>
    );
};

export default Container;