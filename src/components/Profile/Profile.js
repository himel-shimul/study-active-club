import React from 'react';
import './Profile.css';

const Profile = ({profile, times}) => {
    console.log(times)
    let total = 0;

    for (const times of profile){
        total = total + times.time;
    }
    
    return (
        <div>
            <div>
                <h2>Practice Details</h2>
                <div className='times'>
                    <h3>practice Time</h3>
                    <p> {total} Hours</p>
                </div><br />
                <div className='times'>
                    <h3>Break Time</h3>
                    <p> {times} Minutes</p>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;