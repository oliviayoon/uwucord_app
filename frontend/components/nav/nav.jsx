import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({currentUser, logout}) => {
    
    // const display = currentUser ? (
    //     <div>
    //         <p>henwo {currentUser.username} !</p>
    //         <button onClick={logout}>wog o-out</button>
    //     </div>
    // ) : (
      
    // )
    return (
        <nav className="login-sigup">
            <ul>
            <li><img src={window.whiteWogo} width={"180px"} /></li>
            </ul>
            <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
                <li>
                <Link className="btn-login" to="/login">wogin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav