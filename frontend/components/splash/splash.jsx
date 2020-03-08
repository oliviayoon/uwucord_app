import React from 'react';
import {Link} from 'react-router-dom'
import {DEMO_USER} from '../session/session_form'

const Splash = ({login}) => (
    <div className="splish-splash">
        <h1>is tiem 2 dwitch skwypwe and tweamspeak ùwú</h1>
        <p className="splish-splash-text">Aww-in-one vwoice and textie chwat fow gamews dat's fwee, secuwe, and wowks on both youw desktop and phone !! Stop paying fow teamspeak sewvews and hasswing with skype. Simpwify youw wife. ;3</p>
        <div className="splish-buttons">
            <Link to="/channels/@me"><button onClick={() => login(DEMO_USER)}>twy da demowo !</button></Link>
            <Link to="/register"><button className="register-button">go wegister</button></Link>
        </div>
    </div>
)


export default Splash