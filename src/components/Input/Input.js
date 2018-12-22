import React from 'react';

const input = (props) => {
    let clname = null;
    if (props.loading) {
        clname = 'button is-link is-fullwidth is-loading';
    } else {
        clname = 'button is-link is-fullwidth';
    }
    return (
        <section className="hero">
            <form onSubmit={props.submitted}>
                <div className="columns">
                    <div className="column is-four-fifths">
                        <div className="field">
                            <div className="control">
                                <input
                                    type="text"
                                    placeholder="What are you upto?"
                                    onChange={props.changed}
                                    value={props.value}
                                    className="input is-link" />
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-fifth">
                        <div>
                            <button className={clname}>Add</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default input;