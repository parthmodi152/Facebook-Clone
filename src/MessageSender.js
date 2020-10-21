import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
// import VideocamIcon from '@material-ui/icons/Videocam';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LiveVideoIcon from './Assets/Live_Video.png'
import PhotoLibraryIcon from "./Assets/Photo_Library.png"
import InsertEmoticonIcon from "./Assets/Insert_Emoticon.png"
import { useStateValue } from './StateProvider'
import db from "./firebase.js"
import firebase from "firebase"

function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        // Some Clever DB stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        });

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input} 
                    onChange= {(e) => setInput(e.target.value)}
                    className="messageSender__input" 
                    placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input 
                    value={imageUrl} 
                    onChange= {(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    {/* <VideocamIcon style={{color: "red"}}/> */}
                    <img style={{height: "24px"}} alt="" src={LiveVideoIcon}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    {/* <PhotoLibraryIcon style={{color: "red"}}/> */}
                    <img style={{height: "24px"}} src={PhotoLibraryIcon} alt=""/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    {/* <InsertEmoticonIcon style={{color: "red"}}/> */}
                    <img style={{height: "24px"}} src={InsertEmoticonIcon} alt=""/>
                    <h3>Feeling Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
