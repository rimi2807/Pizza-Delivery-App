import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Route, Routes, Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser?.isAdmin) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <div style={{ backgroundColor: "black", padding: "10px", border: "1px solid white", textAlign: "center" ,width:"100%"}}>
            <h2 style={{ fontSize: "35px", color: "white", fontFamily: "cursive", }}>Admin Panel</h2>
          </div>
          <ul className="adminfunctions" style={{ backgroundColor: 'red' }}>
            <li>
              <Link to="userslist" style={{ color: 'white' , fontFamily:"Times new roman",fontWeight:"bolder" ,fontSize:"21px", padding:"70px" }}>Users List</Link>
            </li>
            <li>
              <Link to="pizzaslist" style={{ color: 'white' ,fontFamily:"Times new roman",fontWeight:"bolder" ,fontSize:"21px", padding:"70px" }}>Pizzas List</Link>
            </li>
            <li>
              <Link to="addpizza" style={{ color: 'white',fontFamily:"Times new roman",fontWeight:"bolder" ,fontSize:"21px", padding:"70px"  }}>Add Pizza</Link>
            </li>
            <li>
              <Link to="orderslist" style={{ color: 'white' , fontFamily:"Times new roman",fontWeight:"bolder" ,fontSize:"21px", padding:"70px" }}>Orders List</Link>
            </li>
          </ul>

          <Routes>
            <Route path="userslist" element={<Userslist />} />
            <Route path="orderslist" element={<Orderslist />} />
            <Route path="pizzaslist" element={<Pizzaslist />} />
            <Route path="addpizza" element={<Addpizza />} />
            <Route path="editpizza/:pizzaid" element={<Editpizza />} />
          </Routes>
        </div>
      </div>
    </div>
  );
} 