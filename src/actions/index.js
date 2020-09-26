import axios from 'axios';
import { FETCH_USER } from './types';
/*api ke aage jis bhi route se current user mitla ho wo dal dena package.json mai proxy dal di hai
usme routes ke naam check krlena */
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('./api/...');

  dispatch({ type: FETCH_USER, payload: res.data });
};
