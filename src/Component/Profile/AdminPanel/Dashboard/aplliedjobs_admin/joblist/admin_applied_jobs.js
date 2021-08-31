import React, {Component} from 'react';
import './Joblist.css'
import Joblistitem from "../../aplliedjobs_admin/Joblistitem/Joblistitem";
import connect from "react-redux/es/connect/connect";
import axios from "axios";

class Admin_applied_jobs extends Component {
    state = {
        jobs: [],
        error: false,

    };

    componentDidMount() {




        var config = {
            method: 'get',
            url: `https://localhost:5001/User/${this.props.ID}`,
            headers: {
                'Authorization': `Bearer ${this.props.token} `,

            },

        };

        axios(config)
            .then(function (response) {
                  this.setState({ jobs:response.data.data.appliedJobs});
                // console.log(JSON.stringify(response.data));
                //  console.log(response.data)

            }.bind(this))
            .catch(function (error) {
                this.setState({error: error});
                 console.log(error);
            }.bind(this));

    }


    render() {

        return (


            <div>
                <br/>
                <div className="container">
                    <div className="row">

                        <div className="col-sm">
                            {/*{jobitem}*/}

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
export default connect(mapStateToProps, mapDispatchToProps) (Admin_applied_jobs);