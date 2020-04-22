import React from 'react';

class MessageIndexItem extends React.Component{
    constructor(props){
        super(props)
        // this.state = {uwufied: []}
        // this.uwufier = this.uwufier.bind(this);
        // this.uwufier(this.props.message.body);
    }

    // uwufier(message){
    //     let uwuSentence = ""
    //     // sentence.forEach(message => 
    //         message.body.split(" ").forEach(word => {
    //         if (word === "senpai") {
    //             uwuSentence += "senpwai"
    //         } else if (word === "LOL" || word === "uwu" || word === "owo" || word === "lol" ){
    //             uwuSentence += word
    //         } else {
    //             word.toLowerCase().split("").forEach(letter => 
    //             {if (letter === "l" || letter === "r") {
    //                 uwuSentence += "w"
    //             } else 
    //                 uwuSentence += letter
    //             })
    //         }
    //         uwuSentence += " "
    //     })
    //     // )
    //     // debugger
    //     const random = ["","uwu", "hehehoo", "owo", "~~!", "", "heheh", "b-baka", "bwaka !", ""]
    //     const randomWord = random[Math.floor(Math.random() * random.length)]
        
    //     // debugger
    //     return uwuSentence += randomWord
    // }

    // componentDidMount(){
    //     const messages = this.props.message
    //     let result = messages.map(message =>
    //                this.uwufier(message)
    //         )
    //     this.setState({ uwufied: result})
    //         // debugger
    // }

    render(){
        const {message, users} = this.props
        // const messages = message

        // const {uwufied} = this.state
        // let uwufied = messages.map(message =>
        //     this.uwufier(message)
        //     )
        
        const currentUser = users.filter(user => user.id == message[0].authorId)[0];
        if (!currentUser) return null;

        const otherContent = message.map(message => 
            <div className="message-content-text">{message.body}</div>
        )
        const icon = currentUser.imageUrl ? (<img className="user-profile" src={currentUser.imageUrl} height="15"></img>) :  (<div className="user-profile">{currentUser.username[0]}</div>)
        const time = moment(message[0].createdAt);
        const now = moment();
        let timeDisplay
        if (now.diff(time, 'days') > 1)
            timeDisplay = time.format("MM-DD-YY");
        else
        timeDisplay = time.fromNow();
        return(
            <div className="message-items">
            {icon}
            <div className="message-body-text">
                <div className="user-message-container">
                    {<div className="message-username" id="message-username-author">
                    {currentUser.username} 
                    </div>}
                    <p className="time-stamp">{timeDisplay}</p>
                </div>
                <div className="message-body-detail" id="message-body-detail-item">
                {/* <div className="tooltipuwu">{message.body}</div> */}
                    {/* {firstMessage.body}
                    {otherContent} */}
                    {otherContent}
                </div>
            </div>
            </div>
        )
    }

} 

export default MessageIndexItem