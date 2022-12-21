// import React, { useEffect, useState, Component } from 'react'
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';
// import userService from "../services/user.service";
// import { Link } from 'react-router-dom';

// export default class Traffic extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { streets:[]};

//   }

//   componentDidMount() {
//     userService.getPublicContent()
//     .then(response => this.setState({streets: response.data}));
//   }

//   render() {
//     const {streets} = this.state;
//     console.log(streets);
//     const streetsList = streets.map(street => {
//       var trafficList = street.trafficList.map( traf => <>
//         <tr>
//         <td width="20%">
//           {traf.titleStreetFrom}
//         </td>
//         <td width="20%">
//         {traf.titleStreetTo}
//         </td>
//         <td width="30%">
//         {traf.grade}
//         </td>
//         </tr>
//       </>
//       )
//         return <tr key={street.titleStreet}>
//             <td style={{whiteSpace: 'nowrap'}}>{street.titleStreet}</td>
//             <td>{trafficList}</td>
//         </tr>
//     });

//     return (
//         <div>
//             <Container fluid>
//                 <div className="float-right">
//                     <Button color="success" tag={Link} to="/traffic/new">Добавить пробку</Button>
//                 </div>
//                 <h3>Вся информация</h3>
//                 <Table className="mt-4">
//                     <thead>
//                     <tr>
//                         <th width="30%">Название улицы</th>
//                         <th width="70%">Описание пробки</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {streetsList}
//                     </tbody>
//                 </Table>
//             </Container>
//         </div>
//     );
//   }
// }

import React, { Component } from "react";
import {Link, Navigate} from 'react-router-dom';
import { Button } from 'reactstrap';

import AuthService from "../services/auth.service";

import AllTrafficTable from "./tables/allTrafficTable";

export default class Traffic extends Component {
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
        <AllTrafficTable />
      </>
    );
  }
}
