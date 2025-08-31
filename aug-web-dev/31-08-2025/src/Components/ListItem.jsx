import React from "react";
import "./ListItem.css";
import { Trash } from "lucide-react";

function ListItem(props) {
  return (
    <div className="list-item">
      <li>{props.data}</li>
      <Trash onClick={() => props.deleteFunction(props.index)} />
    </div>
  );
}

export default ListItem;
