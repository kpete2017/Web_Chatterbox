import React from 'react'
import './Header.css'
export default function Header(props) {
    return props.auth.currentUser && (
        <div className="nav">
            <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
        </div>
    )
}
