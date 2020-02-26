import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => dispatch(getAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)