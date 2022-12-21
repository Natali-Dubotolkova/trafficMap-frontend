import React, { useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { useEffect } from 'react';
import streetService from '../../services/street.service';

const AllStreetTable = () => {

  const [data, setData] = useState([]);
  
  const columns = [
    {header: "ID", accessorKey: "id"},
    {header: "Название улицы", accessorKey: "streetTitle"},
  ]

  useEffect(()=>{
    streetService.getAllStreets()
    .then(response => setData(response.data))
  }, [])

  return <MaterialReactTable 
    columns={columns} 
    data={data} 
    enableGrouping
    editable={{
      onRowAdd: (newRow) => new Promise((resolve, reject) => {
        const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
        setTimeout(() => {
          setData(updatedRows)
          resolve()
        }, 2000)
      })
    }}
    />;
};

export default AllStreetTable;