import React, { useState } from 'react';
import MaterialReactTable from 'material-react-table';
import userService from "../../services/user.service";
import { useEffect } from 'react';

const AllTrafficTable = () => {

  const [data, setData] = useState([]);
  
  const columns = [
    {header: "Id", accessorKey: "idTraffic"},
    {header: "Улица", accessorKey: "titleStreet"},
    {header: "Начало пробки", accessorKey: "titleStreetFrom"},
    {header: "Конец пробки", accessorKey: "titleStreetTo"},
    {header: "Шкала", accessorKey: "grade"}
  ]

  useEffect(()=>{
    userService.getPublicContent()
    .then(response => setData(response.data))
  }, [])

  return <MaterialReactTable 
    columns={columns} 
    data={data} 
    enableGrouping
    initialState={{ columnVisibility: { idTraffic: false } }}
    />;
};

export default AllTrafficTable;