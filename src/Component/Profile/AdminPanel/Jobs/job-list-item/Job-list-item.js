import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import {withRouter} from "react-router";

class Job_List_Item extends Component {

    componentDidMount() {


    }
    render() {

        return (


        <div className="col">
            <div className="list-group">
                <Link to={`/managejobs/${this.props.ID}`} className="list-group-item list-group-item-action " aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.title}</h5>
                        <small></small>
                    </div>
                    <p className="mb-1">{this.props.skills}.</p>
                    <small>{this.props.limitLine}</small>
                </Link>

            </div>

            {/*<div className="card border-secondary mb-3" style={{width: "18rem"}}>*/}
            {/*    <div className="card-body text-secondary">*/}
            {/*        <h5 className="card-title">{this.props.title}</h5>*/}
            {/*        <p className="card-text">Skills - {this.props.skills}.</p>*/}
            {/*        <p className="card-text">Limitline - {this.props.limitLine}</p>*/}
            {/*        <Link to={`/joblist/${this.props.ID}`} className="btn btn-secondary">View More</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>

        )
    }


}

export default Job_List_Item;