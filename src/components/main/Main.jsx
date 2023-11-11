import React, { useRef, useState, useContext, useEffect } from "react";
import Item from "./item/Item";
import "./Main.css";
import { MyContext } from "../../App";
import Thirdbox from "./Thirdbox";
import Create from "./Create";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

let array = [
  { text: "Complete online JavaScript course", checked: false },
  { text: "Jog around the park 3x", checked: false },
  { text: "10 minutes meditation", checked: false },
  { text: "Read for 1 hour", checked: false },
  { text: "Pick up groceries", checked: false },
  { text: "Complete Todo App on Frontend Mentor", checked: false },
];

function Main() {
  const { day } = useContext(MyContext);
  const m = useRef(null);
  const nItem = useRef(null);

  const [b, setb] = useState("all");
  useEffect(() => {
    m.current.classList.toggle("d");
  }, [day]);

  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  const [ar, setar] = useState([...array]);
  const [temp, settemp] = useState([...array]);
  const [len, setlen] = useState(ar.filter((el) => !el.checked).length);

  return (
    <div className="main" ref={m}>
      <Create
        nItem={nItem}
        ar={ar}
        setar={setar}
        settemp={settemp}
        len={len}
        setlen={setlen}
      />
      <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const destI = param.destination?.index;
          if (destI) {
            let a = [...ar];
            a[srcI] = ar[destI];
            a[destI] = ar[srcI];
            setar(a);
            settemp(a);
          }
        }}
      >
        <div className="comps">
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {temp.map((el, i) => (
                  <Draggable
                    key={el.text}
                    draggableId={"draggable-" + el.text}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <Item
                        key={el.text}
                        text={el.text}
                        checked={el.checked}
                        ar={ar}
                        setar={setar}
                        settemp={settemp}
                        len={len}
                        setlen={setlen}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="bottom box item">
            <p>{len} items left</p>
            {width >= 1000 ? (
              <Thirdbox ar={ar} b={b} setb={setb} settemp={settemp} />
            ) : null}
            <button
              onClick={() => {
                setb("all");
                setar(ar.filter((el) => !el.checked));
                settemp(ar.filter((el) => !el.checked));
              }}
            >
              Clear Completed
            </button>
          </div>
        </div>
      </DragDropContext>
      {width < 1000 ? (
        <Thirdbox ar={ar} b={b} setb={setb} settemp={settemp} />
      ) : null}
    </div>
  );
}

export default Main;
