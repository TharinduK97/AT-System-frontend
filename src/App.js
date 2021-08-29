import React, {Component,useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Nav from './Component/Navigationbar/Nav';
import Userprofile from './Component/Profile/Userprofile';
import Editprofile from './Component/Profile/temp';
import Joblist from './Component/Jobs/joblist/Joblist';
import Interviews from './Component/interviewsx/interviews';
import Signin from './Component/Login/ApplicantLogin';
import Jobview from './Component/home/Jobview/Jobview';
import AppliedJobview from './Component/Jobs/applied-job-view/applied-job-view';
import Home from './Component/home/main_job_list';
import Footer from './Component/Footer/Footer';
import {authCheckState} from '../src/store/actions/auth';
import { connect } from 'react-redux';
import Logout from "./Component/Login/Logout/Logout";
import ApplicantSignup from './Component/Login/Signup/ApplicantSignup';
import Admin from './Component/Profile/AdminPanel/Dashboard/admin.js';
import Mangejobs from "./Component/Profile/AdminPanel/Jobs/mangejobs";
import ManageJobview from "./Component/Profile/AdminPanel/Jobs/Jobview/ManageJobview";
import Addnewjob from "./Component/Profile/AdminPanel/Jobs/AddNewJob/addnewjob";
import User_list_item from "./Component/Profile/AdminPanel/Dashboard/user_list_item/user_list_item";
import Userview from "./Component/Profile/AdminPanel/Dashboard/user_list_item/userview/Userview";
import Dashboard from "./Component/Profile/AdminPanel/applied jobs/dashboard";
import Admin_applied_jobs from "./Component/Profile/AdminPanel/Dashboard/aplliedjobs_admin/joblist/admin_applied_jobs";
import Applied_job_view from "./Component/Profile/AdminPanel/applied jobs/applied-job-view_admin";

const App = (props) => {


    useEffect(() => {

        props.onTryAutoSignup();

    }, []);

    return (
        <BrowserRouter>
            <div>
                <Nav/>
                <Switch>

                    {/*<Route path="/appliedjobview/:id"><AppliedJobview/></Route>*/}
                    <Route path="/joblist/:id" component={Jobview}/>
                    <Route path="/joblist"><Joblist/></Route>
                    <Route path="/editprofile"><Editprofile/></Route>
                    <Route path="/userprofile" component={Userprofile}/>
                    <Route path="/managejobs/:id" component={ManageJobview}/>
                    <Route path="/addnewjobs" component={Addnewjob}/>
                    <Route path="/managejobs" component={Mangejobs}/>
                    <Route path="/adjobs/:id" component={Applied_job_view}/>
                    <Route path="/adjobs"><Admin_applied_jobs/></Route>
                    <Route path="/admin/:id" component={Userview}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/interviews"><Interviews/></Route>
                    <Route path="/signin"><Signin/></Route>
                    <Route path="/dashboard"><Dashboard/></Route>
                    <Route path="/logout"><Logout/></Route>
                    <Route path="/signup" component={ApplicantSignup}/>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>

    );
}


const mapStateToProps = (state) => {
    return {

        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onTryAutoSignup: () => dispatch(authCheckState())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

