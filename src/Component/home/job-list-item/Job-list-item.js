import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {withRouter} from "react-router";

class Job_List_Item extends Component {

    componentDidMount() {


    }

    render() {




        return (



        <div className="col">


            <div className="card border-secondary mb-3" style={{width: "18rem"}}>
                <div className="card-body text-secondary">
                    <h5 className="card-title">{this.props.title}</h5>

                    <p className="card-text"><span className="badge bg-secondary">{this.props.jobStatus}</span></p>


                    <Link to={`/joblist/${this.props.ID}`} className="btn btn-secondary">View More</Link>
                </div>
            </div>

        </div>

        )
    }


}

export default Job_List_Item;