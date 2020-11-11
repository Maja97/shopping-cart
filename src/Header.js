import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    header: {
        fontSize: '2rem',
        padding: '20px',
        textAlign: 'center',
        color: 'rgb(12, 33, 69)',
        borderBottom: '2px solid rgb(18, 48, 100)',
        backgroundColor: 'rgba(255,255,255,0.4)'
    }
})

function Header(){
    const classes = useStyles();
    return(
        <div className={classes.header}>Web knjižara</div>
    )
}

export default Header;