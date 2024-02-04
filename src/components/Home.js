import React from "react";
function Home() {
    return(
        <div>
        {/* https://i.imgur.com/xJdegE9.png */}
        <div className="cart-wrapper">
        <img src="https://i.imgur.com/xJdegE9.png"/>
        </div>
        <h1>HOme component</h1>
        <div className="car-wrapper">
            <div className="img-wrapper item">
                <img src='https://i.imgur.com/jEXe4Tu.jpeg'/>
            </div>
            <div className="item-wrapper item">
                <span>I-Phone 15 pro max</span><br/>
                <span>Price: $1000.00</span>
            </div>
            <div className="button-wrapper item">
               <button>Add to cart</button>
            </div>
        </div>
        </div>
    )
}
export default Home;