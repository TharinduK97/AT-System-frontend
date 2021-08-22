import * as actionTypes from './actionTypes';
import axios from 'axios';
import jwt_decode from "jwt-decode"
import env from "../../environment"
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId, role) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId,
        role: role
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');

    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password) => {
    return dispatch => {
        // console.log(email, password)
        dispatch(authStart());


        axios({
            method: 'post',
            url: 'https://localhost:5001/Auth/Login',
            data: {
                email: email.toString(),
                password: password.toString()
            }
        })
            .then(response => {
                  // console.log(response.data.data)

                var decoded = jwt_decode(response.data.data);

                const expirationDate = new Date(new Date().getTime() + (3600 * 2 * 1000));
                localStorage.setItem('token', response.data.data);
                localStorage.setItem('expirationDate', new Date(decoded.exp * 1000));
                localStorage.setItem('userId', decoded.nameid);
                localStorage.setItem('role', decoded.role);
                dispatch(authSuccess(response.data.data, decoded.nameid, decoded.role));
                dispatch(checkAuthTimeout(3600 * 1));
                // console.log(response)
            })
            .catch(function (error) {
                var str = error.toString();
                var res = str.replace(/\D/g, "");
                if (res === '400') {
                    alert('The password that entered is incorrect.');
                } else if (res === '401') {
                    alert('Please Confirm your email')
                } else if (res === '404') {
                    alert('The email address you entered is not connected to an account. Please Register!')
                }else {
                    alert('Either of username or password is incorrect')
                    console.log(str);
                }

                // alert(error);
                dispatch(authFail(error));
            });


    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                const role = localStorage.getItem('role');
                dispatch(authSuccess(token, userId, role));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};




