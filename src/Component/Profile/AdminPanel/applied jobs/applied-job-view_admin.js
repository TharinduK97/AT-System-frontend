import React, {Component} from 'react';
import {withRouter} from "react-router";
import axios from 'axios';
import * as actions from "../../../../store/actions";
import connect from "react-redux/es/connect/connect";
import {History} from 'react-router-dom';
import {Link} from 'react-router-dom'

class Applied_job_view extends Component {

    constructor(props) {
        super(props)
        this.state = {
            job: [],
            jobs: [],
            user:[],
            error: false,
            status:'Pending',
            email:''
        }
        this.handleChangetitle = this.handleChangetitle.bind(this);
        this.handleChangeemail = this.handleChangeemail.bind(this);
    }

    handleChangetitle(event) {
        this.setState({status: event.target.value});
    }
    handleChangeemail(event) {
        this.setState({email: event.target.value});
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
                this.setState({ user:response.data.data.user});
                // console.log(JSON.stringify(response.data));
                //   console.log(response.data.data.user)

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

    handlesubmit = (event) => {

        console.log(this.state.status)

        var axios = require('axios');

        var data = JSON.stringify({ "id":this.state.job.id,"jobStatus": this.state.status});

        console.log(data)
        var config = {
            method: 'put',
            url: `https://localhost:5001/AppliedJob`,
            headers: {
                'Authorization': `Bearer ${this.props.token} `,
                'Content-Type': 'application/json',

            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('Updated!')
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handlesumbitemail=(event)=>{
        event.preventDefault();
        console.log(this.state.email)

        var axios = require('axios');
        var FormData = require('form-data');
        var fs = require('fs');
        var data = new FormData();
        data.append('ToEmail', 'tharindu1997811@gmail.com', {contentType: 'text/plain'});
        data.append('Attachments', fs.createReadStream('/path/to/file'));
        data.append('Subject', 'Schedule an interview with Azura dev', {contentType: 'text/plain'});
        data.append('Body',this.state.email , {contentType: 'text/plain'});

        var config = {
            method: 'post',
            url: 'https://localhost:5001/Mail/send',
            headers: {
                ...data.getHeaders()
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('email sent')
            })
            .catch(function (error) {
                console.log(error);
            });

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
                                <Link to={`/admin/${this.state.user.id}`}>
                                <h5 className="card-header  text-secondary">{this.state.jobs.title} -

                                {this.state.user.firstName} {this.state.user.lastName}</h5>

                            </Link>



                                <div className="card-body  text-secondary">
                                    <form onSubmit={this.handlesubmit}>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col">
                                                <p className="card-title">Status - {this.state.job.jobStatus}</p>
                                                <br/>
                                                <select className="form-select" aria-label="Default select example"  onChange={this.handleChangetitle}>

                                                    <option value="Pending" >Pending</option>
                                                    <option value="Reject">Reject</option>
                                                </select>

                                            </div>
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <p className="card-title">Apply Date - {this.state.job.createdAt}</p>

                                            </div>
                                        </div>
                                        <div className="row">


                                        </div>
                                        <div className="row">


                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col-8">



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
                                                <button type="submit" className="btn btn-secondary" >Save</button>

                                            </div>
                                        </div>

                                    </div>

                </form>


                                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form onSubmit={this.handlesumbitemail}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Schedule an interview
                                                    </h5>
                                                    <button type="button" className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">

                                                        <div className="mb-3">

                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="message-text"
                                                                   className="col-form-label">Message:</label>
                                                            <textarea className="form-control"
                                                                      id="message-text" onChange={this.handleChangeemail}></textarea>
                                                        </div>

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close
                                                    </button>
                                                    <button type="submit" className="btn btn-secondary">Send
                                                        message
                                                    </button>
                                                </div>

                                            </form>

                                            </div>
                                        </div>
                                    </div>



                                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" data-bs-whatever="@mdo">Schedule an Interview
                                    </button>


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

