import React from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../../actions/user_actions'
import {closeModal} from '../../../actions/modal_actions'

class EditUser extends React.Component {
    constructor(props){
        super(props)

        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({ username: e.currentTarget.value })
    }


    handleImageChange(e){
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader(); 
        fileReader.onloadend = () => {
            this.setState({ profilePic: file, picUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
            
    }

    handleSubmit(e){
        e.preventDefault();
         
        const formData = new FormData();
        if (this.state.id) formData.append('user[id]', this.state.id)
        formData.append('user[username]', this.state.username)
        if (this.state.profilePic) formData.append('user[profile_pic]', this.state.profilePic)
        this.props.updateUser(formData) // formData
        .then(res => {
            this.props.closeModal();
        })
    }

    handleImageClick(){
        $("#image-upload").trigger('click')
    }

    render(){
        const preview = this.state.picUrl ? <img className="preview-image" src={this.state.picUrl} width="100" /> : this.state.imageUrl ? <img className="preview-image" src={this.state.imageUrl} width="100" /> : null  
        return(
            <div className="user-edit-container">
                <div className="user-edit-form">
                    <form>
                        <label className="server-name-form-outer">
                                    <p className="server-name-form">yer username:</p>
                                    <input
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                    placeholder="what's it gonna be pal òwó"
                                    />
                                </label>
                        </form>
                    <div className="file-upload" onClick={this.handleImageClick}>
                            {preview}
                            <input id="image-upload" type="file" onChange={this.handleImageChange} />
                            upwoad a pwofile pic
                    </div>
                    <button onClick={this.handleSubmit}>edwit</button>
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => ({
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp,mdp)(EditUser)