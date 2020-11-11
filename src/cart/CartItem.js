import React from 'react'
import { createUseStyles } from 'react-jss'
import { itemsList } from '../items/itemsList'


const useStyles = createUseStyles({
    itemCard: {
        marginBottom: '5%',
        marginTop: '5%',
        borderRadius: '5px',
        border: '2px solid rgba(46, 49, 49, 1)',
        padding: '5%',
        display: 'flex'
    },
    image: {
        flex: '30%',
        width: '30%'
    },
    itemInfo: {
        flex: '70%',
    },
    priceInfo: {
        position: 'relative',
        height: '40%',
        marginBottom: 0,
        textAlign: 'right'
    },
    bookInfo:{
        textAlign: 'left',
        marginLeft:'5%',
        position: 'relative',
        height: '40%'
    },
    '@media screen and (min-width: 900px)': {
        bookInfo: {
            fontSize: '1.2vw'
        }
    },
    changeQuantity: {
        position: 'relative',
        height: '20%',
        textAlign: 'right'
    },
    btnAdd: {
        marginLeft: '5px'
    }
})

function CartItem(props) {
    const classes = useStyles();
    const item = itemsList.find(item => item.id === props.id);

    return (
        <div className={classes.itemCard}>
            <img className={classes.image} src={item.image} />
            <div className={classes.itemInfo}>
                <div className={classes.bookInfo}>
                    <div>{item.name}</div>
                    <div>{item.author}</div>
                </div>
                <div className={classes.priceInfo}>
                    <div>Količina: {props.quantity}</div>
                    <div>{(item.price*props.quantity).toFixed(2)} kn</div>
                </div>
                <div className={classes.changeQuantity}>
                <button onClick={props.onRemoveItem}>-</button>
                <button className={classes.btnAdd} onClick={props.onAddItem}>+</button>
                </div>
            </div>
           
        </div>

    )
}

export default CartItem;