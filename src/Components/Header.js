import React from 'react'
import './Header.css'
export default function Header(props) {
    return props.auth.currentUser && (
        <div className="nav">
            <h2 id="chatterbot">Chatterbot</h2>
            <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
        </div>
    )
}
