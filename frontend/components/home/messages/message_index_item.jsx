import React from 'react';

class MessageIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.uwufier = this.uwufier.bind(this);
        // this.uwufier(this.props.message.body);
    }

    uwufier(sentence){

        let uwuSentence = ""
        sentence.split(" ").forEach(word => {
            if (word === "senpai") {
                uwuSentence += "senpwai"
            } else {
                word.toLowerCase().split("").forEach(letter => 
                {if (letter === "l" || letter === "r") {
                    uwuSentence += "w"
                } else 
                    uwuSentence += letter
                })
            }
            uwuSentence += " "
        })

        const random = ["","uwu", "hehehoo", "owo", "~~!", "", "heheh", "b-baka", "bwaka !", ""]
        const randomWord = random[Math.floor(Math.random() * random.length)]
        
        return uwuSentence += randomWord
    }

    componentWillMount(){
        const result = this.uwufier(this.props.message.body)
        this.setState({ uwufied: result})
    }

    render(){
        const {message, users} = this.props
        const {uwufied} = this.state
        const currentUser = users.filter(user => user.id == message.authorId)[0];
        if (!currentUser) return null;
        const icon = currentUser.imageUrl ? (<img className="user-profile" src={currentUser.imageUrl} height="15"></img>) :  (<div className="user-profile">{currentUser.username[0]}</div>)
        const time = moment(message.createdAt);
        const now = moment();
        let timeDisplay
        if (now.diff(time, 'days') > 1)
            timeDisplay = time.format("MM D YY");
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
                    {uwufied}
                </div>
            </div>
            </div>
        )
    }

} 

export default MessageIndexItem