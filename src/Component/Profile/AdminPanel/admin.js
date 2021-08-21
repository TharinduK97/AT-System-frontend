import React, {Component, useEffect, useState} from 'react';
import './admin.css';

import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {History} from 'react-router-dom';
import * as actions from '../../../../src/store/actions/index';


class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            applicant: [],
            error: false,
            cv:null,
            img:null
        }

    }

    componentDidMount() {
        fetch('https://localhost:5001/User/' + this.props.applicant_id)//2
            .then(res => res.json())
            .then(applicant =>
                this.setState({applicant: applicant.data}),
            ).catch(error => {
            this.setState({error: true});
        });

        // this.props.get_applicant_detail(this.state.applicant)

        axios
            .post('http://localhost:3001/applicant/cvs/search', {
                applicant_iD:this.props.applicant_id
            })
            .then(response => {
                const distance = response.data.data[0].cv_url;
                // console.log(distance);
                this.setState({cv: distance});
                // this.setState({cv:response.data.data})
                // console.log(response.data.)

            })
            .catch(error => {
                console.log(error)
            })
    }


    handle_edit = () => {
        this.props.get_applicant_detail(this.state.applicant.firstName,this.state.applicant.lastName,this.state.applicant.gender,this.state.applicant.contactNum,this.state.applicant.workExperience,this.state.applicant.skills,this.state.applicant.img_url,
            this.state.applicant.bio,this.state.applicant.user_name,this.state.applicant.email);
        this.props.get_imgurl(this.state.applicant.img_url)
        // this.props.history.push('/editprofile')

    }

    handle_cv = () => {

        // this.props.history.push('/interviews')

    }


    handle_applied_jobs = () => {
        // console.log(this.state.cv[0].cvUrl)
        this.props.history.push('/joblist')

    }


    render() {

        return (


            <div class="container scr">
    <h2>admin</h2>


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
        get_imgurl: (url) => dispatch(actions.get_imgurl(url)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
