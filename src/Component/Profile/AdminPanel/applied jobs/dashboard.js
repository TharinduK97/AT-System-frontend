import React, {Component} from 'react';

import Joblistitem from "./Joblistitemadmin";
import connect from "react-redux/es/connect/connect";
import axios from "axios";


class Dashboard extends Component {
    state = {
        jobs: [],
        error: false,

    };

    componentDidMount() {




        var config = {
            method: 'get',
            url: 'https://localhost:5001/AppliedJob/GetAll',
            headers: {
                'Authorization': `Bearer ${this.props.token} `,

            },

        };

        axios(config)
            .then(function (response) {
                this.setState({ jobs:response.data.data});
                // console.log(JSON.stringify(response.data));
                //  console.log(response.data)

            }.bind(this))
            .catch(function (error) {
                this.setState({error: error});
                console.log(error);
            }.bind(this));

    }


    render() {
        // console.log(this.state.jobs)
        let jobitem = (
            <div>

                { this.state.jobs.map((job) => {
                    if( job.jobStatus==="Pending"  ) {
                        return (
                            <Joblistitem
                                key={job.id}
                                ID={job.id}
                                id={job.jobID}
                                title={job.title}
                                status={job.jobStatus}
                                created_at={job.createdAt}

                            />
                        );
                    }
                })}
            </div>
        );

        let complete_jobitem = (
            <div>

                { this.state.jobs.map((job) => {
                    if( job.jobStatus === "Reject"  ) {
                        return (
                            <Joblistitem
                                key={job.id}
                                ID={job.id}
                                id={job.jobID}
                                title={job.title}
                                status={job.jobStatus}
                                created_at={job.createdAt}

                            />
                        );
                    }
                })}
            </div>
        );
        return (


            <div>
                <br/>
                <div className="container  ">

                    <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-6">
                            <h3>Pending list</h3>
                            <br/>
                            {jobitem}
                            <br/>
                            <h3>Complete list</h3>
                            <br/>
                            {complete_jobitem}
                        </div>

                        <div className="col-sm-3">

                        </div>


                    </div>
                </div>

            </div>

        )
    }


}
const mapStateToProps = state => {
    return {
        applicant_id: state.auth.userId,
        token: state.auth.token
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);