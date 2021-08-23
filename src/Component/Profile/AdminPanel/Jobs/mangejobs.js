import React, {Component} from 'react';
import './managejobs.css';
import Manage_Job_list_item from "../../AdminPanel/Jobs/job-list-item/Job-list-item";
import axios from 'axios';
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom'
class mangejobs extends Component {


    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            appliedJob: [],
            error: false,
        }
    }


    componentDidMount () {
        fetch('https://localhost:5001/Job/GetAll')
            .then(res => res.json())
            .then(job =>

                this.setState({jobs: job.data})
            )
            .catch(error => {

                this.setState({error: true});
            });





        var config = {
            method: 'get',
            url: 'https://localhost:5001/AppliedJob/GetAll',
            headers: {
                'Authorization': `Bearer ${this.props.token} `
            }
        };

        axios(config)
            .then(function (job) {
                 // console.log(JSON.stringify(job.data));
                // console.log(job.data.data)
                const appliedJobs = []
                job.data.data.map(element => {
                    appliedJobs.push(element.jobID)
                });
                // console.log(appliedJobs)
                    this.setState({appliedJob: appliedJobs});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });


    }








    render() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
       var today = yyyy + "-" + mm + "-" + dd;





        let jobitem = (
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {

                        this.state.jobs != undefined && (

                        this.state.jobs.map((job) => {
                            // console.log(this.state.jobs)
                            //      console.log(today<=job.limitLine)

                             // console.log(this.props.role)
                                if(this.props. isAuthenticated && today<=job.limitLine && this.props.role=="Applicant"  ){
                                    if (this.state.appliedJob !==[] && !this.state.appliedJob.includes(job.id)) {
                                        return (
                                            <Manage_Job_list_item
                                                key={job.id}
                                                ID={job.id}
                                                title={job.title}
                                                salary={job.salary}
                                                limitLine={job.limitLine}
                                                description={job.description}
                                                skills={job.skills}


                                            />
                                        );
                                    }
                                }else  {
                                    return (
                                        <Manage_Job_list_item
                                            key={job.id}
                                            ID={job.id}
                                            title={job.title}
                                            salary={job.salary}
                                            limitLine={job.limitLine}
                                            description={job.description}
                                            skills={job.skills}


                                        />
                                    );
                                }

                            //check date difference = ex => diff = 8 or -1


                        })
                    )}

            </div>
        );
        return (

            <div>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-10">

                            <div className="row">
                                <Link to="/addnewjobs" type="button" className="btn btn-outline-secondary">Add new</Link>
                                </div>
                            <div className="row">
                                {jobitem}

                            </div>

                            <div className="col-sm-1">

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        applicant_id: state.auth.applicant_id,
        isAuthenticated: state.auth.token !== null,
        token: state.auth.token,
        role:state.auth.role
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps) (mangejobs);
