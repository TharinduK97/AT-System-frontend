import React, {Component} from 'react';
import './Joblist.css'
import Joblistitem from "../Joblistitem/Joblistitem";
import connect from "react-redux/es/connect/connect";
import axios from "axios";

class Joblist extends Component {
    state = {
        jobs: [],
        error: false,

    };

    componentDidMount() {

        // fetch('http://localhost:3001/applicant/applicantjobs/get-applied-jobs/'+this.props.applicant_id)
        //     .then(res => res.json())
        //     .then(job =>
        //         this.setState({ jobs:job.data}),
        //
        //     )
        //     .catch(error => {
        //
        //         this.setState({error: true});
        //     });


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
                console.log(JSON.stringify(response.data));
                console.log(response.data)

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
                    return (

                        <Joblistitem
                            key={job.id}
                            id={job.jobID}
                            title={job.title}
                            status={job.jobStatus}
                            created_at={job.createdAt}

                        />
                    );
                })}
            </div>
        );
        return (


            <div>
<br/>
                <div className="container  card">
                    <div className="row">
                        <div className="col-sm-3">

                        </div>
                        <div className="col-sm-6">
                            {jobitem}

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
export default connect(mapStateToProps, mapDispatchToProps) (Joblist);