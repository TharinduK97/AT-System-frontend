import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import Job_list_item from "../job list item/Job-list-item";

class Joblist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [],
            error: false,
        }
    }
    componentDidMount () {
        fetch('https://localhost:5001/Job/GetAll')
            .then(res => res.json())
            .then(job =>

                this.setState({jobs:job.data}),

            )
            .catch(error => {

                this.setState({error: true});
            });

        // axios.post('http://localhost:3001/applicant/applicantjobs/search', {
        //     "applicant_id": this.props.applicant_id
        // })
        //     .then(job => {
        //         console.log(job.data.data)
        //         const appliedJobs = []
        //         job.data.data.map(element => {
        //             appliedJobs.push(element.job_id)
        //         })
        //         console.log(appliedJobs)
        //         this.setState({ appliedJobs: appliedJobs })
        //     })
        //     .catch(error => {
        //
        //         this.setState({ error: true });
        //     });
    }

render() {


    let jobitem = (
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                this.state.jobs.map((job) => {

            return (
            <Job_list_item
            key={job.id}
            ID={job.id}
            title={job.title}
            salary={job.salary}
            limitLine={job.limitLine}
            description={job.description}
            skills={job.skills}
            time={job.updatedAt}

            />
            );

                }
                )
            }
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



                            {jobitem}




                    <div className="col-sm-1">

                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}


}



export default Joblist;