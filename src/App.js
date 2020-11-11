import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { itemsList } from './items/itemsList'
import Cart from './cart/Cart'
import ItemGrid from './items/ItemGrid'
import Header from './Header'

const useStyles = createUseStyles({
    app: {
        backgroundColor: 'rgb(235, 235, 224)'
    },
    bookContainer: {
        padding: '30px',
        display: 'flex'
    },
    items: {
        padding: '10px',
        marginRight: '10px',
        backgroundColor: 'white',
        flex: '75%',
    },
    cart: {
        flex: '25%',
        backgroundColor: 'white',
        padding: '10px',
        marginRight: '10px',
        textAlign: 'center'
    },
    '@media screen and (max-width: 900px)': {
        bookContainer: {
            flexDirection: 'column',
        },
        cart: {
            width: '70%',
            margin: 'auto',
            marginTop: '10px'
        }
    },
    '@media screen and (max-width: 700px)': {
        cart: {
            width: '80%'
        }
    }
})

function App() {
    const classes = useStyles()
    const [cartItems,setCartItems] = useState([]);
    const [total,setTotal] = useState(0)

    const handleAddToCart = (item) => {
        setTotal(total + item.price)
        setCartItems(oldItems => [...oldItems, item.id])
    }

    const handleAddItem = (i) => {
    const item = itemsList.find(item => item.id === i);
    setTotal(total+item.price);
    setCartItems(oldItems => [...oldItems,i])
    }

    const handleRemoveItem = (i) => {
        const item = itemsList.find(item => item.id === i);
        setTotal(total-item.price)
        let index = cartItems.lastIndexOf(i)
        let array = cartItems.slice()
        if (index > -1) {
            array.splice(index, 1);
        }        
        setCartItems(array)
    }

    return (
        <div className={classes.app}>
        <Header />
        <div className={classes.bookContainer}>
            <div className={classes.items}>
               <ItemGrid 
                   onClick = {(i) => handleAddToCart(i)}
               />
            </div>
            <div className={classes.cart}>
                <Cart 
                    ids = {cartItems}
                    onAddItem = {(i) => handleAddItem(i)}
                    onRemoveItem = {(i) => handleRemoveItem(i)}
                    total = {total}
                />
            </div>
        </div>
        </div>
    )
}

export default App;