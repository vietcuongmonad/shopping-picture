import React, {useContext, useState} from "react"
import {Context} from "../Context"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [binStyle, setBinStyle] = useState("line")

    return (
        <div className="cart-item">
            <i
                className={`ri-delete-bin-${binStyle}`}
                onClick={() => removeFromCart(item.id)}
                onMouseOver={() => setBinStyle("fill")}
                onMouseOut={() => setBinStyle("line")}
                ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
