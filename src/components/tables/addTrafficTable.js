import React, { useState, useEffect } from "react";
import userService from "../../services/user.service";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';


const AddTrafficTable = () => {
  const [streetId, setStreetId] = useState("");
  const [streetFrom, setStreetFrom] = useState("");
  const [streetTo, setStreetTo] = useState("");
  const [grade, setGrade] = useState();
  const [streetList, setStreetList] = useState([]);

  useEffect(() => {
    userService
      .getAllStreets()
      .then((response) => setStreetList(response.data));
  }, []);

  const handleChangeStreet = (event) => {
    setStreetId(event.target.value);
  };

  const handleChangeStreetTo = (event) => {
    setStreetTo(event.target.value);
  };

  const handleChangeStreetFrom = (event) => {
    setStreetFrom(event.target.value);
  };

  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  const saveBtn = (e) => {
    e.preventDefault();
    console.log("street", streetId);
    console.log("streetFrom", streetFrom);
    console.log("streetTo", streetTo);
    console.log("Grade", grade);
    userService.addTraffic(streetId, streetTo, streetFrom, grade);

    window.location.reload(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <h2>Добавление пробки</h2>
        <br />

        <select
          className="form-control"
          value={streetId}
          onChange={handleChangeStreet}
        >
          <option value="">--- Выберете улицу ---</option>

          {streetList.map((company) => (
            <option value={company.id} key={company.id}>
              {company.streetTitle}
            </option>
          ))}
        </select>
        <br />
        <select
          className="form-control"
          value={streetFrom}
          onChange={handleChangeStreetFrom}
        >
          <option value="">--- Выберете улицу ---</option>

          {streetList.map((company) => (
            <option value={company.streetTitle} key={company.id}>
              {company.streetTitle}
            </option>
          ))}
        </select>
        <br />
        <select
          className="form-control"
          value={streetTo}
          onChange={handleChangeStreetTo}
        >
          <option value="">--- Выберете улицу ---</option>

          {streetList.map((company) => (
            <option value={company.streetTitle} key={company.id}>
              {company.streetTitle}
            </option>
          ))}
        </select>
        <br />
        <input
          type="number"
          placeholder="Grade"
          value={grade}
          onChange={handleChangeGrade}
          min="0"
          max="10"
        />
        <br />
        <br />
        <Link to="/">
          <Button className="btn btn-primary" onClick={saveBtn}>
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddTrafficTable;
