import React, {useState} from "react";
import "./signup.css";
import {Link} from "react-router-dom";

const ApplicantSignup = (props) => {

  const  [state, setstate] = useState(  {

    firstName: "",
    lastName: "",
    gender:"male",
    email: "",
    phonenumber: "",
    bio: '',
    skills: '',
    workexperience: '',

    password: '',
    password2: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phonenumber: "",
      password: '',
      password2: "",
      gender:""
    },
    isvalid:false,

  })

  const  Changehandler = (event) => {
    setstate({[event.target.name]: event.target.value})
  }

  const   formValChange = (event) => {
    event.preventDefault();
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validPnumRegex = RegExp(
        /^[0-9]{10}$/
    );
    const validletterRegex = RegExp(
        /^[a-zA-Z]+$/
    );
    const { name, value } = event.target;
    let errors = { ...state.errors };
    switch (name) {

      case "firstName":
        if (value.length < 3) {
          errors.firstName = "First Name must be 3 characters long!";
        } else {
          errors.firstName = "";
          setstate({
            ...state,
            firstName: value,
          });
        }
        break;
      case "lastName":
        if (value.length < 3) {
          errors.lastName = "Last Name must be 3 characters long!";
        } else {
          errors.lastName = "";
          setstate({
            ...state,
            lastName: value,
          });
        }
        break;
      case "gender":
        if (state.gender=="") {
          errors.gender = "Please select your gender";
        } else {
          errors.gender = "";
          setstate({
            ...state,
            gender: value,
          });
        }
        break;

      case "email":
        if (!validEmailRegex.test(value)) {
          errors.email = "Email is not valid!";
        } else {
          errors.email = "";
          setstate({
            ...state,
            email: value,
          });
        }
        break;

      case "phonenumber":
        if (!validPnumRegex.test(value)) {
          errors.phonenumber = "Phone number is not valid!";
        } else {
          errors.phonenumber = "";
          setstate({
            ...state,
            phonenumber: value,
          });
        }
        break;

      case "password":
        if (value.length < 6) {
          errors.password = "Password must be 6 characters long!";
        } else {
          errors.password = "";
          setstate({
            ...state,
            password: value,
          });
        }
        break;
      case "password2":
        if (value !== state.password) {
          errors.password2 = "Passwords must match!";
        } else {
          errors.password2 = "";
          setstate({
            ...state,
            password2: value,
          });
        }
        break;

    }

    setstate({
      ...state,
      errors,
      [name]: value,
    });

  };
  const { errors } = state;


  const signup =(e)=> {

    e.preventDefault();

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

    errors.firstName==""&&errors.lastName==""&&errors.phonenumber==""&&errors.email==""&&errors.password2==""&&errors.password==""&&errors.gender==""?state.isvalid=true:state.isvalid=false;

    if (state.isvalid===true){
      var axios = require('axios');

      var data = JSON.stringify({ "role":"Applicant", "firstName":state.firstName , "lastName":state.lastName ,"contactNum":state.phonenumber, "workExperience": state.workexperience,
        "skills": state.skills, "imgUrl": "", "bio": state.bio, "email":state.email,"gender":state.gender,"createdAt":today,"password":state.password});

      var config = {
        method: 'post',
        url: `https://localhost:5001/Auth/Register`,
        headers: {
          'Content-Type': 'application/json',

        },
        data: data
      };
      axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            alert('Submitted!')
          })
          .catch(function (error) {
            console.log(error);
          });
    }else {
      alert('Please input valid information');
    }
  }


  return (
    <div className="container he">
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">

          </div>

          <div className="col card">
            <form onSubmit={signup}>
              <br/>
              <div className="form-floating mb-3 " >
                <input type="email" className="form-control" id="floatingInput"  name="firstName"
                       placeholder=""
                       value={state.firstName}
                       onChange={formValChange}
                />
                <label htmlFor="floatingInput">First name</label>
                <div className="text-danger">{state.errors.firstName}</div>
              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword"
                       placeholder=""
                       name="lastName"
                       value={state.lastName}
                       onChange={formValChange}
                />
                <label htmlFor="floatingPassword">Last name</label>
                <div className="text-danger">{state.errors.lastName}</div>
              </div>



              <div className="form mb-3">
                <select className="form-select" aria-label="Default select example" name="gender" onChange={formValChange} required>
                  <option value="male" selected>Male</option>
                  <option value="female">Female</option>
                </select>

              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingPassword"
                       placeholder=""
                       name="email"
                       value={state.email}
                       onChange={formValChange}
                />
                <label htmlFor="floatingPassword">Email</label>
                <div className="text-danger">{state.errors.email}</div>
              </div>

              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPassword"
                       placeholder=""
                       name="phonenumber"
                       value={state.phonenumber}
                       onChange={formValChange}
                />
                <label htmlFor="floatingPassword">Phone number</label>
                <div className="text-danger">{state.errors.phonenumber}</div>
              </div>

              <div className="form-floating mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"
                          name="bio" onChange={formValChange}  value={state.bio}
                ></textarea>

                <label htmlFor="floatingPassword">Bio</label>

              </div>

              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingPassword"
                       placeholder=""
                       value={state.skills}
                       name="skills" onChange={formValChange}
                />
                <label htmlFor="floatingPassword">Skills</label>

              </div>

              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingPassword"
                       placeholder=""
                       value={state.workexperience}
                       name="workexperience" onChange={formValChange}
                       max='40' min='0'
                />
                <label htmlFor="floatingPassword">Work Experience</label>

              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword"
                       placeholder=""
                       value={state.password}
                       name="password" onChange={formValChange} required
                       max='40' min='0'
                />
                <label htmlFor="floatingPassword">Password</label>
                <div className="text-danger">{state.errors.password}</div>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword"
                       placeholder=""
                       value={state.password2}
                       name="password2" onChange={formValChange} required
                       max='40' min='0'
                />
                <label htmlFor="floatingPassword">Confirm Password</label>
                <div className="text-danger">{state.errors.password2}</div>
              </div>



              <div className="form-floating">

                <div className="container">
                  <div className="row">
                    <div className="col-sm-5">
                      <button className="btn btn-secondary " type='submit'>Save</button>
                    </div>

                    <div className="col-sm-7">

                    </div>
                  </div>
                </div>

              </div>

            </form>
          </div>


          <div className="col">

          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default ApplicantSignup;
