import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <hr></hr>

        <li class="nav-item text-center m-5 side-li">
          <Link className="side_items" to={"/Mentors"}>
            Mentors
          </Link>
        </li>
        <hr></hr>
        <li class="nav-item text-center m-5 side-li">
          <Link className="side_items" to={"/Students"}>
            Students
          </Link>
        </li>
        <hr></hr>
      </ul>
    </aside>
  );
}

export default Sidebar;
