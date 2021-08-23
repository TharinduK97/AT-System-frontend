import React from 'react';
import './Nav.css';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import connect from "react-redux/es/connect/connect";



const navbar = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light"  >
                <div className="container">


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                {/*{ props.isAuthenticated  ?*/}
                {/*    <h2>Hi {props.f_name}</h2>*/}
                {/*:<p></p>}*/}



                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/' >
                                    Home
                                </Link>

                            </li>

                        { props.isAuthenticated && props.role==="Applicant" ?

                            <li className="nav-item">
                                <Link  className="nav-link" to='/userprofile' >
                                    Profile
                                </Link>

                            </li>
                            :<p></p>}


                        { !props.isAuthenticated  ?
                            <li className="nav-item " >
                                <Link className="nav-link " to="/signin" >
                                     Sign in
                                </Link>
                            </li>
                            :<p></p>}

                            { props.isAuthenticated && props.role==="Applicant" ?
                                <li className="nav-item ">
                                    <Link className="nav-link " to="/joblist">
                                        Applied Jobs
                                    </Link>
                                </li>
                                :<p></p>}

                            { props.isAuthenticated && props.role==="Admin" ?
                                <li className="nav-item ">
                                    <Link className="nav-link " to="/managejobs">
                                        Jobs
                                    </Link>
                                </li>
                                :<p></p>}

                            { props.isAuthenticated && props.role==="Admin" ?
                                <li className="nav-item ">
                                    <Link className="nav-link " to="/admin">
                                        Users
                                    </Link>
                                </li>
                                :<p></p>}


                            { props.isAuthenticated && props.role==="Admin" ?
                                <li className="nav-item ">
                                    <Link className="nav-link " to="/admin">
                                        Dashboard
                                    </Link>
                                </li>
                                :<p></p>}

                        { props.isAuthenticated  ?
                            <li className="nav-item ">
                                <Link className="nav-link " to='/logout'>
                                     Logout
                                </Link>
                            </li>
                            :<p></p>}

                        {/*{ props.isAuthenticated  ?*/}

                            {/*:<p></p>}*/}
                    </ul>
                </div>
                </div>
            </nav>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {

        isAuthenticated: state.auth.token !== null,
        // f_name: state.auth.f_name,
        id: state.auth.userId,
        role:state.auth.role
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);

