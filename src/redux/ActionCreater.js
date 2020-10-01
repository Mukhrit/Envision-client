import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from 'axios';
import { browserHistory } from "../history";


// export const requestLogin = (creds) => {
//   return {
//     type: ActionTypes.LOGIN_REQUEST,
//     creds,
//   };
// };
// export const receiveLogin = (response) => {
//   return {
//     type: ActionTypes.LOGIN_SUCCESS,
//     token: response.token,
//   };
// };

// export const loginError = (message) => {
//   return {
//     type: ActionTypes.LOGIN_FAILURE,
//     message,
//   };
// };
export const receiveLogin = (response,creds) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
    creds
  };
};
export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};
export const loginUser = (profileObj) => (dispatch,Ownprops) => {
  // We dispatch requestLogin to kickoff the call to the API

  return axios.post(baseUrl + "google/signin", {profileObj})
    .then((response) => response.data)
    .then((response) => {
      if (response.success) {
        var creds={user_id:response.user._id,displayname:response.user.displayname,username:response.user.envision_handle};
        localStorage.setItem("token", response.token);
        localStorage.setItem("creds", JSON.stringify(creds));
        // Dispatch the success action
        dispatch(receiveLogin(response,creds));
  
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};
