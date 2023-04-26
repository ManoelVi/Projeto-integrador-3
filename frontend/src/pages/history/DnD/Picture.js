import React from "react";
import { useDrag } from "react-dnd";

function Picture({nome, data, service, status}){
    const [{ isDragging }, drag]= useDrag(()=>({
        type: "text",
        item: {status: status},
        collect: (monitor)=> ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    
    console.log(isDragging, status);
    return(
        <div className="history-card-item" ref={drag}>
            <p>{nome}</p>
            <p>{data}</p>
            <p>{service}</p>
        </div>
    );
}

export default Picture