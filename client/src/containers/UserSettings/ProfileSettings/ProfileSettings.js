import React, {Component} from "react";
import "./ProfileSettings.css";
import { Menu } from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { _loadProfile } from "../../../actions/userLoadActions";




class ProfileSettings extends Component {



    componentDidMount() {
        this.props._loadProfile(localStorage.getItem('token'));
    }

    render() {

        const { user_info} = this.props
        console.log("User Infor ", user_info);  

        return (
            <div className="d-flex flex-direction-row">
                <div className="w-100 mx-0 text-center">

                    <h1 className="text-center lightBlueText">Profile Settings</h1>
                    <hr></hr>
                    <div className="profileSettings text-left">
                        <div id="editUsername" className="mb-3">
                            <h3 className="mb-3">Change Username</h3>
                            <h5 className="blueText margin-L-15 mb-3">Current Username: <span className="ml-4">{user_info !== undefined && user_info.length > 0 ? user_info[0].username  : null }</span></h5>
                            <h5 className="blueText margin-L-15 mb-1">New Username: <input className="ml-2" type="username" required /><button className=" ml-3  py-1 btn btn-primary button-font">Update</button></h5>
                            <h6 className="redText margin-L-38" id="usernameResponse">Error Message</h6>
                        </div>
                    <div id="editEmailAddress" className="mb-3">
                            <h3 className="mb-3">Change Email Address</h3>
                            <h5 className="blueText margin-L-15 mb-3">Current Email Address: <span className="ml-4">{user_info !== undefined && user_info.length > 0 ? user_info[0].email  : null }</span></h5>
                            <h5 className="blueText margin-L-15 mb-1">New Email Address: <input className="ml-2" type="email" required /><button className=" ml-3  py-1 btn btn-primary button-font">Update</button></h5>
                            <h6 className="redText margin-L-45" id="emailResponse">Error Message</h6>
                        </div>
                        <div id="editPassword" className="mb-3">
                            <h3>Change Password</h3>
                            <h5 className="blueText margin-L-15 mb-3">Old Password: <input className="ml-2" type="password" required /></h5>
                            <h5 className="blueText margin-L-15 mb-1">New Password: <input className="ml-2" type="password" required /><button className=" ml-3  py-1 btn btn-primary button-font">Update</button></h5>
                            <h6 className="redText margin-L-38" id="passwordResponse">Error Message</h6>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    user_info: state.UserInfo.user_info,
    activeProfileSettingsItem: state.Settings.activeProfileSettingsItem,
    
});

const matchDispatchToProps = dispatch => {
    return bindActionCreators({_loadProfile }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(ProfileSettings);
