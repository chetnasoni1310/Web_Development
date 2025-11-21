import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex justify-center items-center mt-8 gap-8">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : " ",
              fontWeight: e.isActive ? "bold" : " ",
            };
          }}
          to="/"
        >
          Home
        </NavLink>


        <NavLink to="/about">
          {(e) => {
            return <span className={[
                e.isActive ? "text-red-500" : " ",
                    e.isActive ? "font-bold" : " "
                ].join(" ")} >About</span>;
          }}
        </NavLink>


        <NavLink
          className={
            (e)=>{
                return [
                    e.isActive ? "text-red-500" : " ",
                    e.isActive ? "font-bold" : " "
                ].join(" ")
            }
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
