import React from 'react';

const Task = ({title, handleDelete}) => {
    return (
        <div className={"CardContainer"}>
        <h1>{title}</h1>
          <buton onClick={handleDelete}>Delete</buton>
        </div>
    )
}
export default Task;