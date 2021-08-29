import React, {Component} from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import * as actions from "../../../../store/actions";
import connect from "react-redux/es/connect/connect";
import {History} from 'react-router-dom';

class Applied_job_view extends Component {

    constructor(props) {
        super(props)
        this.state = {
            job: [],
            jobs: [],
            error: false,

        }
    }

    componentDidMount() {

        var config = {
            method: 'get',
            url: `https://localhost:5001/AppliedJob/${this.props.match.params.id}`,
            headers: {
                'Authorization': `Bearer ${this.props.token} `,

            },

        };

        axios(config)
            .then(function (response) {
                 this.setState({ job:response.data.data});
                // console.log(JSON.stringify(response.data));
                  console.log(response.data)

                fetch('https://localhost:5001/Job/'+this.state.job.jobID)
                    .then(res => res.json())
                    .then(job =>
                        this.setState({ jobs:job.data}),

                    )
                    .catch(error => {

                        this.setState({error: true});
                    });


            }.bind(this))
            .catch(function (error) {
                this.setState({error: error});
                console.log(error);
            }.bind(this));



    }

    handlesubmit = () => {

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
                                <h5 className="card-header  text-secondary">{this.state.jobs.title}</h5>
                                <div className="card-body  text-secondary">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col">
                                                <p className="card-title">Skills - {this.state.job.skills}</p>
                                                <br/>
                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <p className="card-title">Apply Date - {this.state.job.crea}</p>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Salary - {this.state.job.salary}</p>
                                                <br/>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-title">Type - {this.state.job.fullPart}</p>
                                            </div>

                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-8">



                                            </div>

                                            <div className="col-4">


                                            </div>

                                        </div>

                                        <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static"
                                             data-bs-keyboard="false" tabIndex="-1"
                                             aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Confirm here</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                    </div>


                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                                                onClick={this.handlesubmit}>Confirm</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="col">

                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <button type="submit" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Save</button>
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
                <br/>
            </div>
        )


    }
}


const mapStateToProps = state => {
    return {
        applicant_id: state.auth.userId,
        isAuthenticated: state.auth.token !== null,
        token:state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Applied_job_view);

