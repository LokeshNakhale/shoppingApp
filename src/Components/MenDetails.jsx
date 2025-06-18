import React from 'react'

const MenDetails = ({mendetail, onClose}) => {
  return (
    <>
      <div id="menDet">
        <div className="Mleft">
            <div className="image">
                <img src={mendetail.image} alt=""/>
            </div>
            <div className="Mbuttons">
                {/* <button>Add to card</button> */}
                <button>Buy now</button>
            </div>
        </div>
        <div className="MRight">
            <h1> {mendetail.title} </h1>
            <h4> {mendetail.description}</h4>
            <p>Rs: {mendetail.price}</p>
            <p>Discount</p>
        <button onClick={onClose} id='close' > x </button>
        </div>
      </div>
    </>
  )
}

export default MenDetails
