import React from 'react';
import './Arrow.css'

export enum DIR {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

interface ArrowProps {
    direction: DIR.UP|DIR.DOWN|DIR.LEFT|DIR.RIGHT
    visible: boolean
}

const Arrow = ({direction, visible}: ArrowProps) => {
    return (
        <div style={{opacity: visible ? '1' : '0'}} className={
            ['arrow',
            direction == DIR.RIGHT ? "arrow-1" :
                (direction == DIR.LEFT ? "arrow-2" :
                    (direction == DIR.DOWN ? "arrow-3" : "arrow-4"))].join(' ')
        }>
            <div></div>
        </div>
    );
};

export default Arrow;