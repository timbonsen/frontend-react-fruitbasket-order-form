import React from "react";

function Product({ fruit, title }) {
    let [ counter, setCounter ] = React.useState(0);
    return (
        <>
            <div className="productContainer">
                <p className="title">{fruit} {title}</p>
                <button type="button" className="button" onClick={setCounter(counter = counter - 1)}>-</button>
                <p className="counter">{counter}</p>
                <button type="button" className="button" onClick={setCounter(counter = counter + 1)}>+</button>
            </div>
        </>
    )
}

export default Product