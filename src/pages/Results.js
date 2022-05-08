import React from 'react'

let Results = (props) => {
    return (
        <div>
            {/* Data dikhega yha */}
            {props.resultarr.map((x, y) => {
                return (
                    <div>
                        {x.giver} give {x.amount} to {x.taker}
                    </div>
                )
            })}
        </div>
    )
}

export default Results