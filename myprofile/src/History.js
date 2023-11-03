import { useState } from "react";
import "./History.css";
import Table from "./components/Table";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const His = (_) => {

  const [data, setData] = useState([
    {
      id: 1,
      name: "Snow",
      email: "Jon@example.com",
      state: "pending",
      from: "July 31th, 2023",
      to: "August 4th, 2023",
      days: 5,
    },
    {
      id: 2,
      name: "Lannister",
      email: "Cersei@example.com",
      state: "pending",
      from: "June 1st, 2023",
      to: "June 8th, 2023",
      days: 6,
    },
    {
      id: 3,
      name: "Casdn Doe",
      email: "john@example.com",
      state: "pending",
      from: "June 1st, 2023",
      to: "June 8th, 2023",
      days: 6,
    },
    {
      id: 4,
      name: "JasdasdasSmith",
      email: "jane@example.com",
      state: "pending",
      from: "June 5st, 2023",
      to: "June 10th, 2023",
      days: 5,
    },
    {
      id: 5,
      name: "BSohn Doe",
      email: "john@example.com",
      state: "pending",
      from: "June 1st, 2023",
      to: "June 8th, 2023",
      days: 6,
    },
    {
      id: 6,
      name: "DSane Smith",
      email: "jane@example.com",
      state: "pending",
      from: "June 1st, 2023",
      to: "June 8th, 2023",
      days: 6,
    },
    {
      id: 7,
      name: "ZZXohn Doe",
      email: "john@example.com",
      state: "pending",
      from: "August 1st, 2023",
      to: "August 10 8th, 2023",
      days: 10,
    },
    {
      id: 8,
      name: "SDSDane Smith",
      email: "jane@example.com",
      state: "pending",
      from: "June 5st, 2023",
      to: "June 8th, 2023",
      days: 3,
    },
  ]);

  const handleDeleteRow = (id) => {
    setData((prevData) =>
      prevData.map((row) => {
        return row.id === id ? { ...row, state: "undone" } : row;
      })
    );
  };

  const handleCheckRow = (id) => {
    setData((prevData) =>
      prevData.map((row) => {
        return row.id === id ? { ...row, state: "done" } : row;
      })
    );
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "from", headerName: "From", flex: 1 },
    { field: "to", headerName: "To", flex: 1 },
    { field: "days", headerName: "Days", flex: 1 },
    ];

    const { state } = useLocation();
    const { id } = useParams();

  return (
      <>
          <Table
          rows={data}
          onCheckRow={handleCheckRow}
          columns={columns}
          onDeleteRow={handleDeleteRow} />

          <div>
              <div>
                  <strong>{id}</strong>
              </div>
              <div>
 
              </div>
          </div>

          <div>
              <Link to='/'>
                  <button>Back</button>
              </Link>
          </div>
    </>
  );
}

export default His;
