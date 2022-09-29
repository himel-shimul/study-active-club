import React from 'react';
import './File.css';

const File = (props) => {
    const {handleClick} = props;
    const{name, img, age, time }  = props.file;
     


    return (
        <div className='files'>
            <img className='image' src={img} alt="" />
            <div className='docs'>
                <h3>{name}</h3>
                <p>For age : {age}</p>
                <p>Time Required: {time} H</p>
            </div>
            <button onClick={()=> handleClick(props.file)} className='btn-lists'>Add to list</button>
        </div>
    );
};

export default File;