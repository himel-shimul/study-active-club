import React, { useEffect, useState } from 'react';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';
import File from '../File/File';
import Profile from '../Profile/Profile';

import './Container.css';

const Container = () => {
    const breakTime = [
        {time:12, id:1},
        {time:15, id:11},
        {time:17, id:12},
        {time:19, id:13}
    ]
    const [times, setTimes] = useState([])
const [files, setFiles] = useState([]);
const [profile, setProfile] = useState([]);
// console.log(files[4].id)

    useEffect( () => {
        fetch('file.json')
        .then(res => res.json())
        .then(data=> setFiles(data))
    } ,[])
    // useEffect(() =>{
    //     const storedCart= getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         // const ids = parseInt(id);
    //         const addedFile = breakTime.find(file=> file.id === id);
            
    //         if(addedFile){
                
    //             // const quantity = storedCart[id];
    //             // addedFile.quantity = quantity;
    //             savedCart.push(addedFile);
    //             console.log(savedCart)
    //         }
    //     }
    //     setTimes(savedCart);    
    // } ,[])



    // useEffect(() =>{
    //     const storedCart= getLocal();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         // const ids = parseInt(id);
    //         const addedFile = breakTime.find(file=> file.id === id);
            
    //         if(addedFile){
                
    //             // const quantity = storedCart[id];
    //             // addedFile.quantity = quantity;
    //             savedCart.push(addedFile);
    //             console.log(savedCart)
    //         }
    //     }
    //     setTimes(savedCart);    
    // } ,[])

    const handleClick = (fil) =>{
        const newProfile = [...profile, fil]
        setProfile(newProfile);

    }
    const clicks = (tim) =>{
        console.log(tim)
        setTimes(tim.time);
        callLocal(tim.time)
        // addToDb(tim.id);
    }
    const callLocal = (id) =>{
        let cart = {};
        cart = id;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    const getLocal = () =>{
        const storedCart = localStorage.getItem('cart');
        let cart = {};
        if(storedCart){
            cart = JSON.parse(storedCart);


        }
        console.log(cart)
        
        return cart;
    }
    useEffect(() =>{
        const storedCart= getLocal();
        console.log(storedCart);
        setTimes(storedCart)
    } ,[])
    


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
                    breakTime.map(times => <button className='btnss' onClick={()=> clicks(times)}>{times.time}</button>)
                }
                </div>
                <Profile times={times} profile={profile}></Profile>
            </div>
        </div>
    );
};

export default Container;