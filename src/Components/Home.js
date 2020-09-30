import React from 'react'
import ChatRoom from './ChatRoom'
import ChatSelection from './ChatSelection'
import './Home.css'

function Home(props) {
    return(
        <div className="home-page">
            <ChatSelection />
            <ChatRoom firestore={props.firestore} auth={props.auth} firebase={props.firebase} />

        </div>
    )
}

export default Home