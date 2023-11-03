import "./App.css";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import MyDetails from "./Components/MyDetails/MyDetails";
import MyLeave from "./Components/MyLeave/MyLeave";
import Profile from "./Components/Profile/Profile";
import SideBar from "./Components/SideBar/SideBar";
import Calendar from "./Components/Calendar/Calendar";
import LeaveHistory from "./Components/LeaveHistory/LeaveHistory";
import React, { useState } from "react";
import BCard from './Components/AddLeave/Card';
import CalendarLeave from "./Components/CalendarLeave/CalendarLeave";
import { Link } from "react-router-dom";

function MyP() {
    const users = [{ id: 1, name: "Elena" }, { id: 2, name: "Marcel" }];

  const [data, setData] = useState([
    {
      id: 1,
      name: "Snow",
      email: "Jon",
      adresa: "ionut",
      age: 35,
      state: "done",
    },
    {
      id: 2,
      name: "Lannister",
      email: "Cersei",
      adresa: "zxczxcz",
      age: 42,
      state: "undone",
    },
    { id: 3, name: "Casdn Doe", email: "john@example.com", state: "pending" },
    { id: 4, name: "JasdasdasSmith", email: "jane@example.com" },
    { id: 5, name: "BSohn Doe", email: "john@example.com" },
    { id: 6, name: "DSane Smith", email: "jane@example.com" },
    { id: 7, name: "ZZXohn Doe", email: "john@example.com" },
    { id: 8, name: "SDSDane Smith", email: "jane@example.com" },
  ]);

  const handleDeleteRow = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

    return (
      <>
            <div className="relative bg-white w-full h-[980px] overflow-hidden text-left text-smi text-black font-inter">
                <HeaderBar />
                <SideBar />
                <div className="absolute top-[135px] left-[232px] text-[30px]">
                    My Profile
                </div>
                <div className="absolute top-[171px] left-[165px] rounded-3xs bg-whitesmoke w-[1311px] h-[841px]" />
                <div className="absolute top-[234.98px] left-[256px] rounded-[10.85px] bg-white shadow-[19.37296485900879px_19.37296485900879px_15.5px_rgba(0,_0,_0,_0.1)] w-[324.12px] h-[290.99px] overflow-hidden [transform:_rotate(-0.17deg)] [transform-origin:0_0] text-center text-[15.5px] text-gray-3 font-lato">
                    <Calendar />
                    <div className="absolute top-[4.65px] left-[0px] flex flex-col items-start justify-start gap-[6.2px]">
                        <div className="w-[324.69px] flex flex-row py-[12.398697853088379px] px-[24.797395706176758px] box-border items-center justify-center gap-[7.75px]"></div>
                    </div>
                </div>
                <div className="absolute top-[235px] left-[564px] bg-white w-[441px] h-[291px]">
                    <CalendarLeave rows={data} columns={columns} />
                </div>
                <MyLeave />
                <div className="absolute top-[340px] left-[1091px] w-[165px] h-[186px] text-xl">
                    <Profile />
                </div>

                <div className="absolute top-[550px] left-[200px] ">
                    <BCard />
                </div>

                <div className="absolute top-[550px] left-[800px] bg-white box-border w-[628px] h-[365px] border-[1px] border-solid border-black">
                    <LeaveHistory
                        rows={data}
                        columns={columns}
                        onDeleteRow={handleDeleteRow} />
                </div>
            </div>
            <div>
                {users.map(user => {
                    return (
                        <div key={user.id}>
                            {user.name}
                            <Link
                                to={{
                                    pathname: `/History/${user.id}/${user.name}`,
                                    state: { users: user }
                                }}
                            >
                                <button>View</button>
                            </Link>
                        </div>
                    );
                })}
            </div>        </>
  );
}

export default MyP;
