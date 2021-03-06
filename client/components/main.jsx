import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../store';
import NavBar from './NavBar';

/* -------------- COMPONENT --------------
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn, showNavBar } = props;

  return (
    <div className="main-div">
      { showNavBar && <NavBar /> }
      {children}
    </div>
  );
};

/* -------------- CONTAINER -------------- */

const mapState = state => ({
  isLoggedIn: !!state.user.id,
  showNavBar: state.showNavBar,
});

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout());
  },
});

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main));

/* -------------- PROP TYPES -------------- */

Main.propTypes = {
  children: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};