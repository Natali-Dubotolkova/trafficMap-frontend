import React, { Component } from 'react'
import AddStreetTable from './tables/addStreetTable';
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";

export default class Street extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };

  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;
    return (
      <div className="container">
        {(this.state.userReady) ?
          <AddStreetTable/>
          : null}
        </div>
    );
  }
}
