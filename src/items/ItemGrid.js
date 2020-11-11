import React from 'react'
import { createUseStyles } from 'react-jss'
import { itemsList } from './itemsList'
import Item from './Item'

const useStyles = createUseStyles({
    grid: {
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gridAutoRows: 'auto',
        gridGap: '1.5rem'
    }
})

function ItemGrid(props) {
    const classes = useStyles();

    const renderItem = (item) => {
        return (
            <Item
            key = {item.id}
                id={item.id}
                name={item.name}
                author={item.author}
                image={item.image}
                price={item.price}
                onClick={() => props.onClick(item)}
            />
        )
    }

    const items = itemsList.map(i => renderItem(i))

    return (
        <div className={classes.grid}>
            {items}
        </div>
    )
}

export default ItemGrid;