import React, {Component} from 'react';
import './Jobview.css';
import { withRouter } from "react-router";
import axios from 'axios';
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

            fetch('https://localhost:5001/Job/'+this.props.match.params.id)
            .then(res => res.json())
            .then(job =>
                this.setState({ job:job.data}),

            )
            .catch(error => {

                this.setState({error: true});
            });

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
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-10">

                            <div className="card border-secondary">
                                <h5 className="card-header  text-secondary">{this.state.job.title}</h5>
                                <div className="card-body  text-secondary">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col">
                                                <h6 className="card-title">Skills - {this.state.job.skills}</h6>
<br/>
                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <h6 className="card-title">Date - {this.state.job.limitLine}</h6>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="card-title">Salary - {this.state.job.salary}</h6>
                                                <br/>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <h6 className="card-title">Type - {this.state.job.fullPart}</h6>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-8">
                                                <hr/>
                                                <p className="card-text"><u>Job Requirment</u></p>

                                                <p className="card-text">{this.state.job.description}</p>

                                            </div>

                                            <div className="col-4">


                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col">

                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <button  className="btn btn-secondary">Apply</button>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>


                        </div>
                        <div className="col-sm-1">

                        </div>
                    </div>
                </div>

            </div>


        )


    }
}


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default (Jobview);

