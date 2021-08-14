import React, {Component} from 'react';
import './Jobview.css';
import { withRouter } from "react-router";
import axios from 'axios';
import * as actions from "../../../store/actions";
import connect from "react-redux/es/connect/connect";

class Jobview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            job: [],
            error: false,

        }
    }

    componentDidMount() {

            // fetch('http://localhost:3001/applicant/jobs/job/'+this.props.match.params.id)
            // .then(res => res.json())
            // .then(job =>
            //     this.setState({ job:job.data}),
            //
            // )
            // .catch(error => {
            //
            //     this.setState({error: true});
            // });

    }

    handlesubmit=()=>{

        // if (this.props.isAuthenticated) {
        //     axios
        //         .post('http://localhost:3001/applicant/applicantjobs', {
        //             applicant_iD: this.props.applicant_id,
        //             job_iD: this.props.match.params.id,
        //             status: ''
        //
        //         })
        //         .then(response => {
        //             console.log("ok");
        //             // alert('submitted');
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // } else {
        //     alert("Please Sign In");
        //     this.props.history.push('/signin');
        //
        // }
    }


    render() {

        return (

            <div>


            </div>


        )


    }
}


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Jobview);

