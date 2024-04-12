import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header box-border w-fit m-auto flex justify-center items-center gap-12 p-5 bg-yellow-500">
      <p
        className="headerItem box-border hover:text-zinc-100 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        All tasks
      </p>
      <p
        className="headerItem box-border hover:text-zinc-100 cursor-pointer"
        onClick={() => {
          navigate("/active");
        }}
      >
        Active tasks
      </p>
      <p
        className="headerItem box-border hover:text-zinc-100 cursor-pointer"
        onClick={() => {
          navigate("/completed");
        }}
      >
        Completed tasks
      </p>
      <p
        className="headerItem box-border hover:text-zinc-100 cursor-pointer"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add new task
      </p>
      <p
        className="headerItem box-border hover:text-zinc-100 cursor-pointer"
        onClick={() => {
          navigate("/notes");
        }}
      >
        Notes
      </p>
    </div>
  );
}

export default Header;
