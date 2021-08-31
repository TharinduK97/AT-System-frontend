import React, {Component, useEffect, useState} from 'react';
import './admin.css';

import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {History} from 'react-router-dom';
import * as actions from '../../../../../src/store/actions/index';
import User_list_item from "../Dashboard/user_list_item/user_list_item";
import {Link} from 'react-router-dom'

class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            error: false,
            cv:null,

        }

    }

    componentDidMount() {
        fetch('https://localhost:5001/User/GetAll')//2
            .then(res => res.json())
            .then(user =>
                this.setState({users: user.data}),
            ).catch(error => {
            this.setState({error: true});
        });

    }


    handle_edit = () => {
        this.props.get_applicant_detail(this.state.applicant.firstName,this.state.applicant.lastName,this.state.applicant.gender,this.state.applicant.contactNum,this.state.applicant.workExperience,this.state.applicant.skills,this.state.applicant.img_url,
            this.state.applicant.bio,this.state.applicant.user_name,this.state.applicant.email);

        // this.props.history.push('/editprofile')

    }


    render() {

        let userlist = (
            <div className="">
                {

                    this.state.users != undefined && (

                        this.state.users.map((user) => {
                            if( user.role=="Applicant"  ) {
                                return (
                                    <User_list_item
                                        key={user.id}
                                        ID={user.id}
                                        role={user.role}
                                        firstName={user.firstName}
                                        lastName={user.lastName}
                                        email={user.email}

                                    />
                                );
                            }
                        })
                    )
                }

            </div>
        );

        return (


            <div class="container mjob">

                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-8">
                            <br/>
                            <h3>Applicants</h3>
<hr/>
                            <div className="list-group">
                                {userlist}

                            </div>
                        </div>
                        <div className="col-2">

                        </div>
                    </div>



            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        applicant_id: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {

        get_applicant_id: (id) => dispatch(actions.get_applicant_id(id)),
        get_applicant_detail: (fName,lName,gender,contactNo,workExperience,skills,imgUrl,bio,userName,email) => dispatch(actions.get_applicant_details(fName,lName,gender,contactNo,workExperience,skills,imgUrl,bio,userName,email)),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
