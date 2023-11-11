import React, { useRef, useEffect } from "react";
import "./Item.css";
import cross from "../../../assets/images/icon-cross.svg";

function Item({
  text,
  checked,
  ar,
  setar,
  settemp,
  len,
  setlen,
  provided,
  snapshot,
}) {
  const activebox = useRef(null);
  const t = useRef(null);

  const indx = ar.findIndex((x) => x.text === text);

  useEffect(() => {
    if (checked) {
      t.current.classList.add("ischeck");
      activebox.current.checked = true;
    }
  }, []);

  const changed = () => {
    const nval = ar;
    checked = !checked;
    nval[indx] = { text: text, checked: checked };
    setar(nval);
    settemp(nval);

    t.current.classList.toggle("ischeck");
    setlen(ar.filter((el) => !el.checked).length);
  };

  const del = () => {
    const nval = [...ar.slice(0, indx), ...ar.slice(indx + 1)];
    console.log(nval);
    setar(nval);
    settemp(nval);
    setlen(len - 1);
  };

  return (
    <div
      className="box item"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={{
        ...provided.draggableProps.style,
        opacity: snapshot.isDragging ? 0.8 : 1,
      }}
    >
      <label htmfor={text}>
        <span className="text" ref={t}>
          {text}
        </span>
        <input
          type="checkbox"
          name={text}
          className="chbox"
          ref={activebox}
          // checked={checked}
          onChange={() => changed()}
        />
        <span className="geekmark"></span>
      </label>
      <img src={cross} onClick={() => del()} />
    </div>
  );
}

export default Item;
