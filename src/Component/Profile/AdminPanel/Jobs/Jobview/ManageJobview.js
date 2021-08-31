import React, {Component} from 'react';
import './Jobview.css';
import { withRouter } from "react-router";
import axios from 'axios';
import * as actions from "../../../../../store/actions/index";
import connect from "react-redux/es/connect/connect";

class ManageJobview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title:'',
            skills:'',
            salary:'',
            jobtype:'',
            description:'',
            deadline:'',
            status:'',
            job: [],
            error: false,

        }

        this.handleChangetitle = this.handleChangetitle.bind(this);
        this.handleChangeskills = this.handleChangeskills.bind(this);
        this.handleChangesalary = this.handleChangesalary.bind(this);
        this.handleChangejobtype = this.handleChangejobtype.bind(this);
        this.handleChangedescription = this.handleChangedescription.bind(this);
        this.handleChangedeadline = this.handleChangedeadline.bind(this);
        this.handleChangestatus = this.handleChangestatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
    handleChangetitle(event) {
        this.setState({title: event.target.value});
    }
    handleChangeskills(event) {
        this.setState({skills: event.target.value});
    }
    handleChangesalary(event) {
        this.setState({salary: event.target.value});
    }
    handleChangejobtype(event) {
        this.setState({jobtype: event.target.value});
    }
    handleChangedescription(event) {
        this.setState({description: event.target.value});
    }
    handleChangedeadline(event) {
        this.setState({deadline: event.target.value});
    }
    handleChangestatus(event) {
        this.setState({status: event.target.value});
    }

    handleSubmit(event) {

        event.preventDefault();
       // console.log(this.state.title)
       //  console.log(this.state.skills)
       //  console.log(this.state.salary)
       //  console.log(this.state.jobtype)
       //  console.log(this.state.description)
       //  console.log(this.state.deadline)
       //  console.log(this.state.status)

        var axios = require('axios');

        var data = JSON.stringify({ "id":this.props.match.params.id, "title":this.state.title===''?this.state.job.title:this.state.title , "skills":this.state.skills===''?this.state.job.skills:this.state.skills ,  "salary":this.state.salary===''?this.state.job.salary:this.state.salary, "description": this.state.description===''? this.state.job.description:this.state.description,
            "jobStatus": this.state.status===''?this.state.job.jobStatus:this.state.status, "limitLine": this.state.deadline===''?this.state.job.limitLine:this.state.deadline, "fullPart":this.state.jobtype===''?this.state.job.fullPart:this.state.jobtype});

        // console.log(data)
        var config = {
            method: 'put',
            url: `https://localhost:5001/Job`,
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
        return (



            <div className="mjob">
                <br/>
                <div className="container card ">

                    <div className="row ">
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-10 ">
                            <br/>

                            <form onSubmit={this.handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputEmail3" maxlength = "40" placeholder={this.state.job.title} onChange={this.handleChangetitle} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"  >Skills</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputPassword3" maxlength = "100" placeholder={this.state.job.skills} onChange={this.handleChangeskills}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label" >Salary</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="inputPassword3" min="0" max="150000" placeholder={this.state.job.salary} onChange={this.handleChangesalary}/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Job type </label>
                                    <div className="col-sm-10">
                                        <select className="form-select" aria-label="Default select example"  onChange={this.handleChangejobtype}>

                                            <option value="Full Time" >Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                                  rows="3" placeholder={this.state.job.description} onChange={this.handleChangedescription}></textarea>

                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Deadline</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control" id="inputPassword3" min={today} placeholder={this.state.job.limitLine} onChange={this.handleChangedeadline}/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="" className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">
                                        <select className="form-select " aria-label="Default select example"  onChange={this.handleChangestatus}>
                                            <option value="Active" >Active</option>
                                            <option value="Deactive"  >Deactive</option>

                                        </select>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-secondary">Save</button>
                            </form>







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
        token: state.auth.token

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageJobview);

