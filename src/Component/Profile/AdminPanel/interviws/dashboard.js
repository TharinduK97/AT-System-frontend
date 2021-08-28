import React, {Component, useEffect, useState} from 'react';
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import {History} from 'react-router-dom';
import * as actions from '../../../../../src/store/actions/index';
import User_list_item from "../Dashboard/user_list_item/user_list_item";
import {Link} from 'react-router-dom'
import Sidebar from "./sidebar";

class Dashboard extends Component {

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




    render() {



        return (


            <div class="container-fluid">




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


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
