import React from 'react';

const Profile = ({profile}) => {
    console.log(profile)
    let total = 0;

    for (const times of profile){
        total = total + times.time;
    }
    return (
        <div>
            <h2>Practice Details</h2>
        <div>
            <p>practice Time : {total}</p>
            <p></p>
        </div>
        </div>
    );
};

export default Profile;