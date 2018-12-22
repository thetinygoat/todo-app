import React from 'react';

const input = (props) => {
    return (
        <form onSubmit={props.submitted}>
            <input type="text" placeholder="What are you upto?" onChange={props.changed} value={props.value} />
            <button >Add</button>
        </form>
    )
}

export default input;