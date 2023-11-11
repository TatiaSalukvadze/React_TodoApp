import React from "react";

function Thirdbox({ ar, b, setb, settemp }) {
  return (
    <div className="box third">
      <button
        className={b === "all" ? "active" : ""}
        onClick={() => {
          setb("all");
          settemp([...ar]);
        }}
      >
        All
      </button>
      <button
        className={b === "active" ? "active" : ""}
        onClick={() => {
          setb("active");
          settemp(ar.filter((el) => !el.checked));
        }}
      >
        Active
      </button>
      <button
        className={b === "completed" ? "active" : ""}
        onClick={() => {
          setb("completed");
          settemp(ar.filter((el) => el.checked));
        }}
      >
        Completed
      </button>
    </div>
  );
}

export default Thirdbox;
