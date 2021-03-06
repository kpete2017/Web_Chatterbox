import React from 'react'

export default function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img alt="userphoto" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }
  