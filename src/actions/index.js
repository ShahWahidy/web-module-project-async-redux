import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getActivity = () => (dispatch) => {
    dispatch(fetchStart());
    axios.get('http://www.boredapi.com/api/activity/')
        .then(resp => {
            console.log(resp.data)
            dispatch(fetchSuccess(resp.data));
        })
}

export const fetchStart = () => {
    return({type:FETCH_START});
}

export const fetchSuccess = (activity) => {
    return({type:FETCH_SUCCESS, payload: activity});
}
