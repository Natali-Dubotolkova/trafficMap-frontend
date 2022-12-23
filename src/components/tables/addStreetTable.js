import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import streetService from "../../services/street.service";


const AddStreetTable = () => {
  const [street, setStreet] = useState([]);

  const handleChangeTitle = (event) => {
    setStreet(event.target.value);
  };


  const saveBtn = (e) => {
    e.preventDefault();
    streetService.addStreet(street);
    console.log(street);
    // window.location.reload(true);
  };

  return (
    <div>
      <div className="container-fluid">
        <h2>Добавление улицы</h2>
        <br />
        <input
          type="string"
          placeholder="Название"
          value={street}
          onChange={handleChangeTitle}
        />
        <br />
        <br />
        <Link to="/">
          <Button className="btn btn-primary" onClick={saveBtn}>
            Сохранить
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AddStreetTable;
