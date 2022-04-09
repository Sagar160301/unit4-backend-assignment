import { useState } from "react";
import "./inventory.css";
const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });

  const Inventories = ["Books", "NoteBooks", "Pen"];

  const counterHandler = (counterName, a) => {
    let name = Changecounter(counterName);
    if (name === "books") {
      let value = inv.books + a;
      setInv((inv) => ({
        ...inv,
        books: value,
      }));
    } else if (name === "notebooks") {
      let value = inv.notebooks + a;
      setInv((inv) => ({
        ...inv,
        notebooks: value,
      }));
    } else if (name === "pens") {
      let value = inv.pens + a;
      setInv((inv) => ({
        ...inv,
        pens: value,
      }));
    }
  };
  return (
    <div className="App">
      {Inventories.map((el) => {
        return (
          <div className="items">
            <span>{el}: </span>
            <button
              className="circlularButton"
              onClick={() => {
                counterHandler(el, +1);
              }}
            >
              +
            </button>
            <button
              className="circlularButton"
              onClick={() => {
                counterHandler(el, -1);
              }}
            >
              -
            </button>

            <Check el={el} inv={inv} />
          </div>
        );
      })}
      <h1 className="centre">Total : {inv.books + inv.notebooks + inv.pens}</h1>
    </div>
  );
};

const Check = ({ el, inv }) => {
  if (el === "Books") {
    return <span>{inv.books}</span>;
  } else if (el === "NoteBooks") {
    return <span>{inv.notebooks}</span>;
  } else if (el === "Pen") {
    return <span>{inv.pens}</span>;
  }
};

const Changecounter = (counterName) => {
  // console.log(counterName);
  if (counterName === "Books") {
    return "books";
  } else if (counterName === "NoteBooks") {
    return "notebooks";
  } else if (counterName === "Pen") {
    return "pens";
  }
};
export { Inventory };
