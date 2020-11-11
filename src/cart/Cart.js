import React from 'react'
import { createUseStyles } from 'react-jss'
import CartItem from './CartItem'

const useStyles = createUseStyles({
    cartTitle: {
        fontSize: '1.5em'
    },
    emptyCart: {
        marginTop: '5%'
    }
})


function Cart(props) {
    const classes = useStyles();

    let unique = [...new Set(props.ids)]

    const renderCartItem = (id) => {
        const count = props.ids.filter((el) => el === id).length;
        return (
            <CartItem
                onAddItem={() => props.onAddItem(id)}
                onRemoveItem={() => props.onRemoveItem(id)}
                key={id}
                id={id}
                quantity={count}
            />
        )
    }

    const cartItems = unique.map(id => renderCartItem(id))

    return (
        <div>
            <div className={classes.cartTitle}>Košarica</div>
            {
                unique.length ?
                    <div>{cartItems}</div> :
                    <div className={classes.emptyCart}>Vaša košarica je prazna.</div>
            }
        </div>
    )
}

export default Cart;