import React from 'react';
import './App.css';
import Product from "./Product";

function App() {

  const [ aardbeienCount, setAardbeienCount ] = React.useState(0);
  const [ bananenCount, setBananenCount ] = React.useState(0);
  const [ appelCount, setAppelCount ] = React.useState(0);
  const [ kiwiCount, setKiwiCount ] = React.useState(0);

  return (
    <>
        <main className="main">
          <h1>Fruitmand bezorgservice</h1>
          <div className="productContainer">
            <p className="title">🍓 Aardbeien</p>
            <button type="button" className="button" onClick={ () => {
              aardbeienCount > 0 ?
                  setAardbeienCount(aardbeienCount - 1) : setAardbeienCount(aardbeienCount)
            }}>-</button>
            <p className="counter">{aardbeienCount}</p>
            <button type="button" className="button" onClick={() => {
              setAardbeienCount(aardbeienCount + 1)
            }}>+</button>
          </div>
          <div className="productContainer">
            <p className="title">🍌 Bananen</p>
            <button type="button" className="button" onClick={() => {
              bananenCount > 0 ?
              setBananenCount(bananenCount - 1) : setBananenCount(bananenCount)
            }}>-</button>
            <p className="counter">{bananenCount}</p>
            <button type="button" className="button" onClick={() => {
              setBananenCount(bananenCount + 1)
            }}>+</button>
          </div>
          <div className="productContainer">
            <p className="title">🍏 Appels</p>
            <button type="button" className="button" onClick={() => {
              appelCount > 0 ?
              setAppelCount(appelCount - 1) : setAppelCount(appelCount)
            }}>-</button>
            <p className="counter">{appelCount}</p>
            <button type="button" className="button" onClick={() => {
              setAppelCount(appelCount + 1)
            }}>+</button>
          </div>
          <div className="productContainer">
            <p className="title">🥝 Kiwi's</p>
            <button type="button" className="button" onClick={() => {
              kiwiCount > 0 ?
              setKiwiCount(kiwiCount - 1) : setKiwiCount(kiwiCount)
            }}>-</button>
            <p className="counter">{kiwiCount}</p>
            <button type="button" className="button" onClick={() => {
              setKiwiCount(kiwiCount + 1)
            }}>+</button>
          </div>
          <button className="resetButton" onClick={() => {
            setAardbeienCount(0)
            setBananenCount(0)
            setAppelCount(0)
            setKiwiCount(0)
          }}>Reset</button>
          {/*            <Product
                fruit="🍓"
                title="Aardbeien"
            />
            <Product
                fruit="🍌"
                title="Bananen"
            />
            <Product
                fruit="🍏"
                title="Appels"
            />
            <Product
                fruit="🥝"
                title="Kiwi's"
            />*/}
        </main>
    </>
  );
}


export default App;
