import React from 'react';
import {Link} from 'react-router-dom'
import {demoUsers} from '../session/session_form'

class Splash extends React.Component {
    constructor(){
        super()
        this.state = {demoUsers}
    }


    render(){
        const {login} = this.props
        const {demoUsers} = this.state
        const user = demoUsers[Math.floor(Math.random() * demoUsers.length)]

        return(
            <>
            <div className="splish-splash">
                <h1>is tiem 2 dwitch skwypwe and tweamspeak ùwú</h1>
                <p className="splish-splash-text">Aww-in-one vwoice and textie chwat fow gamews dat's fwee, secuwe, and wowks on both youw desktop and phone !! Stop paying fow teamspeak sewvews and hasswing with skype. Simpwify youw wife. ;3</p>
                <div className="splish-buttons">
                    <Link to="/channels/@me"><button className="splash-button demo" onClick={() => login(user)}>twy da demowo !</button></Link>
                    <Link to="/register"><button className="splash-button">go wegister</button></Link>
                </div>
            </div>
             <div className="splash-images-container">
             <img src={window.splashImagesMonitor} id="splash-images-monitor"></img>
              <img src={window.splashImagesLaptop} className="splash-image"  id="splash-images-laptop"></img>
              <img src={window.splashImagesController} className="splash-image"  id="splash-images-controller"></img>
              <img src={window.splashImagesMobile1} className="splash-image"  id="splash-images-mobile1"></img>
              <img src={window.splashImagesMobile2} className="splash-image"  id="splash-images-mobile2"></img>
              <img src={window.splashImagesPotion} className="splash-image"  id="splash-images-potion"></img>
              <img src={window.splashImagesCd} className="splash-image"  id="splash-images-cd"></img>
              <img src={window.splashImagesHeadset} className="splash-image"  id="splash-images-headset"></img>
              <img src={window.splashImagesCoinbox} className="splash-image"  id="splash-images-coinbox"></img>
              <img src={window.splashShapesDot} className="splash-shape"  id="splash-shapes-dot1"></img>
              <img src={window.splashShapesDot} className="splash-shape"  id="splash-shapes-dot2"></img>
              <img src={window.splashUwu} className="splash-shape"  id="splash-shapes-dot3"></img>
              <img src={window.splashShapesDot} className="splash-shape"  id="splash-shapes-dot4"></img>
              <img src={window.splashShapesDot} className="splash-shape"  id="splash-shapes-dot5"></img>
              <img src={window.splashShapesTriangle} className="splash-shape"  id="splash-shapes-triangle1"></img>
              <img src={window.splashShapesTriangle} className="splash-shape"  id="splash-shapes-triangle2"></img>
              <img src={window.splashShapesTriangle} className="splash-shape"  id="splash-shapes-triangle3"></img>
              <img src={window.splashOwo} className="splash-shape"  id="splash-shapes-circle1"></img>
              <img src={window.splashShapesCircle} className="splash-shape"  id="splash-shapes-circle2"></img>
              <img src={window.splashShapesCircle} className="splash-shape"  id="splash-shapes-circle3"></img>
              <img src={window.splashShapesCross} className="splash-shape"  id="splash-shapes-cross1"></img>
              <img src={window.splashShapesCross} className="splash-shape"  id="splash-shapes-cross2"></img>
              <img src={window.splashShapesSquare} className="splash-shape"  id="splash-shapes-square1"></img>
              <img src={window.splashShapesSquare} className="splash-shape"  id="splash-shapes-square2"></img>
              <img src={window.splashShapesSquare} className="splash-shape"  id="splash-shapes-square3"></img>
              <img src={window.splashFloatBomb} className="splash-image"  id="splash-float-bomb"></img>
              <img src={window.splashFloatDisk} className="splash-image"  id="splash-float-disk"></img>
              <img src={window.splashFloatCoin} className="splash-image"  id="splash-float-coin1"></img>
              <img src={window.splashFloatCoin} className="splash-image"  id="splash-float-coin2"></img>
            </div>
            {/* <div className="splash-footer">
                foot
            </div> */}
            </>
        )
    }
}




export default Splash