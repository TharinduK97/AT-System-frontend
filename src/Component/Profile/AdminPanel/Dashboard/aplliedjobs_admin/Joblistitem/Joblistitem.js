import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Joblistitem.css';
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
                <br/>

                <Link className="link textdec"  to={`/joblist/${this.props.id}`}>

                    <div className="tab-content ">

                        <div className="row">
                            <div className="tm-recommended-place-wrap">
                                <div className="tm-recommended-place">

                                    <div className=" border-rounded ">
                                        <div className="container">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h3 className="tm-text-gray">{this.state.job.title}</h3>
                                            </div>

                                        </div>
                                    </div>

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <div className="col-sm">

                                                            {/*<strong>{date.toLocaleDateString()}</strong></div>*/}
                                                            <strong className="tm-text-gray">{this.props.created_at}</strong></div>
                                                        <strong className='col-status tm-text-gray'>{this.props.status}</strong>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Link>


            </div>

        )
    }


}

export default withRouter(Joblistitem);