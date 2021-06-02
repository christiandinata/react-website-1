import React from 'react'
import { Button } from './Button'
import './ScrollTop.css'

function ScrollTop() {
    return (
        <div className="scrolltop-container">
            <div className="scrolltop-inner">
                <Button buttonStyle="btn--outline" buttonSize="btn--medium">Up</Button>
            </div>
        </div>
    )
}

export default ScrollTop
