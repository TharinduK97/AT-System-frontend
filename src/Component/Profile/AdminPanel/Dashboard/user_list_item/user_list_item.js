import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './user_list_item.css';
import {withRouter} from "react-router";

class User_list_item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            job: [],
            error: false,

        }
    }

    componentDidMount() {


    }
    render() {


        return (

            <div>

                <Link to={`/admin/${this.props.ID}`} className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.firstName} {this.props.lastName}</h5>
                        <small>{this.props.role}</small>
                    </div>

                    <small>{this.props.email}</small>
                </Link>


            </div>

        )
    }


}

export default withRouter(User_list_item);