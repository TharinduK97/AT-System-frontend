import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {withRouter} from "react-router";

class Joblistitem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            job: [],
            error: false,

        }
    }

    componentDidMount() {
        fetch('https://localhost:5001/Job/'+this.props.id)
            .then(res => res.json())
            .then(job =>
                this.setState({ job:job.data}),

            )
            .catch(error => {

                this.setState({error: true});
            });

    }
    render() {


        var date = new Date(this.props.created_at);

        return (


            <div>

                <Link to={`/adjobs/${this.props.ID}`} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.state.job.title}</h5>
                        <small>{this.props.status}</small>
                    </div>

                    <small>{this.props.email}</small>
                </Link>




            </div>

        )
    }


}

export default withRouter(Joblistitem);