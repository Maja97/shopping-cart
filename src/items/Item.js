import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    card: {
        padding: '5%'
    },
    image: {
        width: 'inherit',
        height: '300px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    itemInfo: {
        marginTop: '5%',
        marginLeft: '5%'
    },
    name: {
        fontSize: '1.1em'
    },
    author: {
        marginTop: '3px',
        fontSize: '1em'
    },
    price: {
        textAlign: 'center',
        color: 'red',
        marginTop: '3%'
    },
    addToCart: {
        '&:hover': {
            cursor: 'pointer',
            color: 'red'
        },
        fontSize: '1em',
        textDecoration: 'underline',
        padding: 0,
        background: 'none',
        border: 'none',
        display: 'block',
        marginTop: '5px',
        margin: '0 auto'
    }
})

function Item(props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <img className={classes.image} src={props.image} />
            <div className={classes.itemInfo}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.author}>{props.author}</div>
            </div>
            <div className={classes.price}>{props.price.toFixed(2)} kn</div>
            <button className={classes.addToCart} onClick={props.onClick}>Dodaj u košaricu</button>
        </div>
    )
}

export default Item;