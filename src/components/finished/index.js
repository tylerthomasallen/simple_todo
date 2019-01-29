import React, { Component } from 'react';

const Finished = ({finished}) => {
    return(
        <div>
            <h1>Finished List!</h1>
            <div>
                {finished.map((task, i) => {
                    return <h4 key={i}>{task}</h4>
                })}
            </div>
        </div>
    )

}

export default Finished;