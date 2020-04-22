import React from 'react'

class TutorialCollapse extends React.Component{

    componentDidMount(){
        const panels = document.querySelectorAll('.tutorial-panel');
        // debugger
        function toggleOpen(){
            this.classList.toggle('open')
        }
        panels.forEach(panel => panel.addEventListener('click', toggleOpen))
    }

    render(){

        return(
            <div className="tutorial-panels-container">
                <div className="tutorial-panel" id="panel1">
                    <h1>Servers</h1>
                    <div className="tutorial-content">
                        <p>Click the "+" button on the left panel to either create or join a server</p>
                        <img src={window.serverJoin} />
                        <p>As a server owner, you'll be able to edit your server by clicking on the <i className="fas fa-paw"></i></p>
                        <img src={window.serverEdit} />
                        <p>Didn't enjoy the server you joined ? It's easy to leave it all behind ya !</p>
                        <img src={window.serverLeave} />
                    </div>
                </div>
                <div className="tutorial-panel " id="panel2">
                    <h1>Channels</h1>
                    <div className="tutorial-content">
                        <p>
                        Each server comes with a "genewal" channel ! 
                        <br/>
                        PS: it can't be destroyed >:3
                        </p>
                        <img src={window.channelGenewal} />
                        <p>
                        All users have the ability to add channels by click on the <i className="fas fa-fish"></i>,
                        <br/>
                        but only owners of the server will be able to edit them !
                        </p>
                        <img src={window.channelAdd} />
                    </div>
                </div>
                <div className="tutorial-panel" id="panel3" >
                    <h1>Profile</h1>
                    <div className="tutorial-content">
                        <p>
                        Upload a profile pic or change your username by clicking on your user information on the bottom !
                        </p>
                        <img src={window.profileEdit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TutorialCollapse