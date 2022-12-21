import React, { useEffect, useState, Component } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import userService from "../services/user.service";
import { Link } from 'react-router-dom';


export default class Traffic extends Component {
  constructor(props) {
    super(props);

    this.state = { streets:[],
      selectedStreet:"",
      selectedFromStreet: "",
      selectedToStreet : "",
      grade: 0
    };

  }


  componentDidMount() {
    userService.getAllStreets()
    .then(response => this.setState({streets: response.data}));
  }

  render() {
    const {streets} = this.state;

    const handleChangeStreet = event => {
      console.log(event.target.value);
      this.state.selectedStreet = event.target.value;
    };

    const handleChangeStreetTo = event => {
      console.log(event.target.value);
      this.state.selectedToStreet = event.target.value;
    };


    const handleChangeStreetFrom = event => {
      console.log(event.target.value);
      this.state.selectedFromStreet = event.target.value;
    };

    return (

        <div>
            <Container fluid>
                <p>Выберете улицу, на которой пробка</p>
                <select value={this.state.selectedStreet} onChange={handleChangeStreet}>
                  {streets.map(street => (
                    <option key={street.id} value={street.streetTitle}>{street.streetTitle}</option>
                  ))}
                </select>
                <p>Выберете улицу, где пробка начинается (оставьте пустым, если пробка на всей улице)</p>
                <select value={this.state.selectedFromStreet} onChange={handleChangeStreetFrom}>
                  {streets.map(street => (
                    <option key={street.id} value={street.streetTitle}>{street.streetTitle}</option>
                  ))}
                </select>
                <p>Выберете улицу, где пробка заканчивается</p>
                <select value={this.state.selectedToStreet} onChange={handleChangeStreetTo}>
                  {streets.map(street => (
                    <option key={street.id} value={street.streetTitle}>{street.streetTitle}</option>
                  ))}
                </select>
                {/* <h4>Полученная запись:</h4>
                <p>Пробка на улице {this.state.selectedStreet}, начиная от {this.state.selectedFromStreet}, заканчивая {this.state.selectedToStreet}. Балл: {} </p> */}
            </Container>
        </div>
    );
  }
}
