import React, { useEffect, useState } from 'react';
import File from '../File/File';
import Profile from '../Profile/Profile';
import './Container.css';

const Container = () => {
const [files, setFiles] = useState([]);
const [profile, setProfile] = useState([]);

    useEffect( () => {
        fetch('file.json')
        .then(res => res.json())
        .then(data=> setFiles(data))
    } ,[])

    const handleClick = (fil) =>{
        console.log(fil)
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
                <h2>side container</h2>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Container;