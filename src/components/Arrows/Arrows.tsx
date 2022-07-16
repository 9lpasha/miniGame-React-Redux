import React from 'react';
import './Arrows.css'
import Quadro from "../Quadro/Quadro";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";

interface ArrowsProps {
}

const Arrows = ({}: ArrowsProps) => {

    const visibility = useSelector((state: RootState) => state.arrowsVisibility.array)
    const directions = useSelector((state: RootState) => state.arrowsDirection.array)

    return (
        <div className="Arrows">
            <div className='row2'>
                <Quadro direction={directions[0]} visible={visibility[0]} ifArrow={true} color={1}/>
                <Quadro direction={directions[1]} visible={visibility[1]} ifArrow={true} color={1}/>
                <Quadro direction={directions[2]} visible={visibility[2]} ifArrow={true} color={1}/>
                <Quadro direction={directions[3]} visible={visibility[3]} ifArrow={true} color={1}/>
                <Quadro direction={directions[4]} visible={visibility[4]} ifArrow={true} color={1}/>
            </div>
            <div className='row2'>
                <Quadro direction={directions[5]} visible={visibility[5]} ifArrow={true} color={1}/>
                <Quadro direction={directions[6]} visible={visibility[6]} ifArrow={true} color={1}/>
                <Quadro direction={directions[7]} visible={visibility[7]} ifArrow={true} color={1}/>
                <Quadro direction={directions[8]} visible={visibility[8]} ifArrow={true} color={1}/>
                <Quadro direction={directions[9]} visible={visibility[9]} ifArrow={true} color={1}/>
            </div>
        </div>
    );
};

export default Arrows;