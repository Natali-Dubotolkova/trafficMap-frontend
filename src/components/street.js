import React, { Component } from "react";
import {Link, Navigate} from 'react-router-dom';
import { Button } from 'reactstrap';

import AuthService from "../services/auth.service";

import AllStreetTable from "./tables/allStreetTable"

export default class Street extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      role: ''
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) this.setState({ role: currentUser.roles[0]});
    this.setState({ currentUser: currentUser, userReady: true})
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <>
      {(this.state.userReady & (this.state.role == 'ROLE_ADMIN' || this.state.role == 'ROLE_MODERATOR')) ?
        <Link to="/traffic/new">
          <Button outline color="success">Добавить пробку</Button>
        </Link>: null}
        <AllStreetTable />
      </>
    );
  }
}