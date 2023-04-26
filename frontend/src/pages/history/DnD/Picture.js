import React from "react";
import { useDrag } from "react-dnd";
import "./Picture.css";

function Picture({ nome, data, service, status, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "text",
    item: {
      status: status,
      id: id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="history-card-item" ref={drag}>
      <p>{nome}</p>
      <p>{data}</p>
      <p>{service}</p>
    </div>
  );
}

export default Picture;
