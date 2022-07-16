import React from 'react';
import Quadro from "../Quadro/Quadro";
import './Labirint.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";

interface LabirintProps {

}

const Labirint = ({}: LabirintProps) => {

    const state = useSelector((state: RootState) => state.coords)

    return (
        <div className="Labirint">
            <div className='row'>
                <Quadro ifFinish={state.x == 0 && state.y == 0 && true} x={0} y={0} ifStart={state.startX == 0 && state.startY == 0 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 1 && state.y == 0 && true} x={1} y={0} ifStart={state.startX == 1 && state.startY == 0 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 2 && state.y == 0 && true} x={2} y={0} ifStart={state.startX == 2 && state.startY == 0 && true} ifArrow={false} color={0}/>
            </div>
            <div className='row'>
                <Quadro ifFinish={state.x == 0 && state.y == 1 && true} x={0} y={1} ifStart={state.startX == 0 && state.startY == 1 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 1 && state.y == 1 && true} x={1} y={1} ifStart={state.startX == 1 && state.startY == 1 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 2 && state.y == 1 && true} x={2} y={1} ifStart={state.startX == 2 && state.startY == 1 && true} ifArrow={false} color={0}/>
            </div>
            <div className='row'>
                <Quadro ifFinish={state.x == 0 && state.y == 2 && true} x={0} y={2} ifStart={state.startX == 0 && state.startY == 2 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 1 && state.y == 2 && true} x={1} y={2} ifStart={state.startX == 1 && state.startY == 2 && true} ifArrow={false} color={0}/>
                <Quadro ifFinish={state.x == 2 && state.y == 2 && true} x={2} y={2} ifStart={state.startX == 2 && state.startY == 2 && true} ifArrow={false} color={0}/>
            </div>
        </div>
    );
};

export default Labirint;