import React, {useState} from 'react';
import './Quadro.css'
import Arrow from "../Arrow/Arrow";
import {DIR} from "../Arrow/Arrow";
import * as startImg from '../../images/pngwing.png'
import * as success from '../../images/yes.png'
import * as mistake from '../../images/no.png'
import * as correct from '../../images/correct.png'
import {RootState, store} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {setCanAnswer} from "../../store/slices/canAnswerSlice";

interface QuadroProps {
    color: number
    ifArrow: boolean
    ifStart?: boolean
    visible?: boolean
    direction?: DIR.UP | DIR.LEFT | DIR.DOWN | DIR.RIGHT
    x?: number
    y?: number
    ifFinish?: boolean
}

const Quadro = ({color, ifArrow, visible, direction, ifStart, x, y, ifFinish}: QuadroProps) => {

    const dispatch = useDispatch()
    const stateVisible = useSelector((state: RootState) => state.canAnswerSlice)
    const stateCoords = useSelector((state: RootState) => state.coords)

    const clickHandler = () => {
        if(store.getState().canAnswerSlice.flag) {
            if (stateCoords.x == x && stateCoords.y == y) {
                dispatch(setCanAnswer({
                    flag: false,
                    visibleMistake: false,
                    visibleCorrect: false,
                    visibleSuccess: true,
                    x: x,
                    y: y
                }))
            } else if(x != undefined && y != undefined){
                dispatch(setCanAnswer({
                    flag: false,
                    visibleMistake: true,
                    visibleCorrect: true,
                    visibleSuccess: false,
                    x: x,
                    y: y
                }))
            }
        }
    }

    return (
        <div onClick={clickHandler} className={color == 0 ? "Quadro" : "SmallQuadro"}>
            {ifArrow && visible != undefined && direction ? <Arrow visible={visible} direction={direction}></Arrow> : null}
            {ifStart && <img style={{width: '30%', position: 'absolute', left: '10px', top: '10px'}} src={startImg.default} alt=""/>}
            {ifFinish && stateVisible.visibleSuccess && x != undefined && <img src={success.default} style={{width: '30%', position: 'absolute', right: '10px', top: '10px'}} alt=""/>}
            {!ifFinish && stateVisible.x == x && stateVisible.y == y && stateVisible.visibleMistake && x != undefined && <img src={mistake.default} style={{width: '30%', position: 'absolute', right: '10px', top: '10px'}} alt=""/>}
            {ifFinish && stateCoords.x == x && stateCoords.y == y && stateVisible.visibleCorrect && x != undefined && <img src={correct.default} style={{width: '30%', position: 'absolute', right: '10px', top: '10px'}} alt=""/>}
        </div>
    );
};

export default Quadro;