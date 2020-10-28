import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import axios from "axios";

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
export const receiveLogin = (response, creds, isUsername) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
    creds,
    isUsername,
  };
};
export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};
export const loginUser = (profileObj) => (dispatch, Ownprops) => {
  // We dispatch requestLogin to kickoff the call to the API

  return axios
    .post(baseUrl + "google/signin", { profileObj })
    .then((response) => response.data)
    .then((response) => {
      if (response.success) {
        var creds = {
          user_id: response.user._id,
          displayname: response.user.displayname,
          username: response.user.envision_handle,
        };
        var isUsername;
        if (creds.username) {
          isUsername = true;
        } else {
          isUsername = false;
        }
        localStorage.setItem("token", response.token);
        localStorage.setItem("creds", JSON.stringify(creds));
        // Dispatch the success action
        dispatch(receiveLogin(response, creds, isUsername));
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};
export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem("token");
  localStorage.removeItem("creds");
  dispatch(receiveLogout());
};
export const receiveDetails = (creds, isUsername) => {
  return {
    type: ActionTypes.FILLDETAILS_SUCCESS,
    creds,
    isUsername,
  };
};
export const filldetailsUser = (details) => (dispatch) => {
  return axios
    .post(
      baseUrl + "users/filldetail",
      { ...details },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((res) => res.data)
    .then((response) => {
      var creds = {
        user_id: response.user._id,
        displayname: response.user.displayname,
        username: response.user.envision_handle,
      };
      var isUsername;
      if (creds.username) {
        isUsername = true;
      } else {
        isUsername = false;
      }
      localStorage.setItem("creds", JSON.stringify(creds));
      // Dispatch the success action
      dispatch(receiveDetails(creds, isUsername));
    })
    .catch((error) => dispatch(loginError(error.message)));

};
