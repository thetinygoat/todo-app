import React from 'react';

const controls = (props) => {
    let button = null;
    switch (props.type) {
        case 'delete':
            button = <button> Delete </button>
            break;
        case 'done':
            button = <button> done </button>
            break;
        default:
            button = null;
    }

    return (
        <div>
            {button}
        </div>
    )
}

export default controls;