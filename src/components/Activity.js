import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getActivity } from '../actions';


const Activity = ({ activity, isFetching,  dispatch }) => {

  useEffect(()=> {
    dispatch(getActivity());
  }, []);
  
  if (isFetching) {
    return <h2>Fetching an activity ...!</h2>;
  }

  const handleClick = () => {
    dispatch(getActivity());
  }
  return (
    <>
      <div>
        <p>Acitivity Name: {activity.activity}</p>
        <p>Acitivity Type: {activity.type}</p>
        <p>Acitivity Participants: {activity.participants}</p>
        <p>Acitivity Price: {activity.price}</p>
        <p>Acitivity Link: {activity.link}</p>
      </div>
      <button onClick={handleClick}>Get new activity</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    activity: state.activity,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps)(Activity);