import React from "react";

function Create({ nItem, ar, setar, settemp, len, setlen }) {
  const add = (event) => {
    if (event.key === "Enter") {
      let nar = ar;
      let nval = nItem.current.value.trim();
      if (nval !== "") {
        nar.push({ text: nval, checked: false });
        setar(nar);
        settemp(nar);
        setlen(len + 1);
        console.log(nval);
        nItem.current.value = "";
      }
    }
  };
  return (
    <div className="box">
      <input
        className="create"
        type="text"
        placeholder="Create a new todo…"
        onKeyDown={add}
        ref={nItem}
      />
    </div>
  );
}

export default Create;
