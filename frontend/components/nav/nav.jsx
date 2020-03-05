import React from 'react';
import {Link} from 'react-router-dom'
import SplashContainer from '../splash/splash_container';

const Nav = ({currentUser, logout}) => {
    
    // const display = currentUser ? (
    //     <div>
    //         <p>henwo {currentUser.username} !</p>
    //         <button onClick={logout}>wog o-out</button>
    //     </div>
    // ) : (
      
    // )
    return (
        <>
        <nav className="login-sigup">
            <ul>
                <li><img src={window.whiteWogo} width={"180px"} /></li>
            </ul>
            <ul>
                <li><a href="https://linkedin.com/in/yooneunsil"><i class="fab fa-linkedin"></i></a></li>
                <li>
                    <a href="https://github.com/jigglycode/uwucord_app">
                        <i className="fab fa-github-alt"></i>
                    </a>
                </li>
                <li>
                    <Link className="btn-login" to="/login">wogin</Link>
                </li>
            </ul>
        </nav>
        <SplashContainer />
        </>
    )
}

export default Nav