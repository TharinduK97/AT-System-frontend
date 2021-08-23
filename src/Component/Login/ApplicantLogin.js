import axios from "axios";
import React, {useState} from "react";

import {auth} from "../../../src/store/actions/index";
import {useHistory} from "react-router";
import "./ApplicantLogin.css";
import * as actions from '../../../src/store/actions/index';
import Select_profile from "../Profile/Userprofile";
import Select_admin from "../Profile/AdminPanel/Dashboard/admin.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

const ApplicantLogin = (props) => {
    const history = useHistory();
    const  [state, setstate] = useState(  {

        password: "",
        email: "",


        errors: {
            password: "",
            email: "",

        },
        isvalid:false,

    })

    const  Changehandler = (event) => {
        setstate({[event.target.name]: event.target.value})
    }


    const   formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const validPnumRegex = RegExp(
            /^[0-9]{10}$/
        );
        const validletterRegex = RegExp(
            /^[a-zA-Z]+$/
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {


            case "password":
                if (value.length < 6) {
                    errors.password = "Password must be 6 characters long!";
                } else {
                    errors.password = "";
                    setstate({
                        ...state,
                        password: value,
                    });
                }
                break;

            case "email":
                if (!validEmailRegex.test(value)) {
                    errors.email = "Email is not valid!";
                } else {
                    errors.email = "";
                    setstate({
                        ...state,
                        email: value,
                    });
                }
                break;



        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });

    };
    const { errors } = state;


    const login =(e)=> {

        e.preventDefault();
        errors.password==""&&errors.email==""?state.isvalid=true:state.isvalid=false;
        if (state.isvalid===true) {
            props.onAuth(state.email, state.password);
        }
    }

    if (props.isAuthenticated && props.role=="Applicant") {
        return (
            <Select_profile id={props.userid}/>
        )
    }else if (props.isAuthenticated && props.role=="Admin"){
        return (
            <Select_admin/>
        )
    }


    return (
        <div className="container">
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>

                    <div className="col card">
                        <form onSubmit={login}>
                        <br/>
                        <div className="form-floating mb-3 " >
                            <input type="email" className="form-control" id="floatingInput"  name="email"
                                   placeholder=""
                                   value={state.email}
                                   onChange={formValChange}
                            />
                                <label htmlFor="floatingInput">Email address</label>
                            <div className="text-danger">{state.errors.email}</div>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder=""
                                   name="password"
                                   value={state.password}
                                   onChange={formValChange}
                            />
                                <label htmlFor="floatingPassword">Password</label>
                            <div className="text-danger">{state.errors.password}</div>
                        </div>

                        <div className="form-floating">

                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <button type="submit" className="btn btn-secondary"  >Login</button>
                                    </div>

                                    <div className="col-sm-7">

                                    </div>
                                </div>
                            </div>

                        </div>
                            <div className="form-floating">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-5">

                                        </div>

                                        <div className="col-sm-7">
                                            <Link to="/signup"><p className="text-center signup">Create your account</p></Link>
                                        </div>
                                    </div>
                                </div>
<br/>
                            </div>
                        </form>
                    </div>


                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userid: state.auth.userId,
        loading: state.auth.loading,
        error: state.auth.error,
        role:state.auth.role
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(auth(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicantLogin)
