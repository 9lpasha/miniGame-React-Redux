import React, {useRef, useState} from 'react';
import './Button.css'
import {AppDispatch, RootState, store} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {setArrowsVisibility} from "../../store/slices/arrowsVisibilitySlice";
import {setArrowsDirection} from "../../store/slices/arrowsDirectionSlice";
import {DIR} from "../Arrow/Arrow";
import {down, left, right, setRandomCoords, up} from "../../store/slices/coordsSlice";
import {setCanAnswer} from "../../store/slices/canAnswerSlice";

const arrayDIR = [DIR.DOWN, DIR.LEFT, DIR.RIGHT, DIR.UP]
let int: any

const Button = () => {

    const [buttonIsActive, setButtonIsActive] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    const begin = () => {
        dispatch(setRandomCoords())
        dispatch(setCanAnswer({
            flag: false,
            visibleMistake: false,
            visibleCorrect: false,
            visibleSuccess: false,
            x: -1,
            y: -1
        }))
        clearInterval(int)
        let n = 0
        for (let i = 0; i < 10; i++) {
            let stateCoords = store.getState().coords
            let tempX = stateCoords.x
            let tempY = stateCoords.y
            let tempRandom = arrayDIR[Math.floor(Math.random() * 4)]
            while ((tempX === 0 && tempRandom === DIR.LEFT) || (tempX === 2 && tempRandom === DIR.RIGHT) ||
            (tempY === 0 && tempRandom === DIR.UP) || (tempY === 2 && tempRandom === DIR.DOWN)){
                tempRandom = arrayDIR[Math.floor(Math.random() * 4)]
            }
            dispatch(setArrowsDirection({
                    num: i,
                    value: tempRandom
                }
            ))
            switch (tempRandom){
                case DIR.UP: dispatch(up())
                    break
                case DIR.DOWN: dispatch(down())
                    break
                case DIR.LEFT: dispatch(left())
                    break
                case DIR.RIGHT: dispatch(right())
                    break
            }
            dispatch(setArrowsVisibility({
                num: i,
                value: false
            }))
        }
        int = setInterval(() => {
            dispatch(setArrowsVisibility({
                num: n,
                value: true
            }))
            if (n < 9) {
                n++
                console.log(n)
            } else {
                clearInterval(int)
                dispatch(setCanAnswer({
                    flag: true,
                    visibleMistake: false,
                    visibleCorrect: false,
                    visibleSuccess: false,
                    x: -1,
                    y: -1
                }))
                n = 0
            }
        }, 1000)
    }

    return (
        <div className={["Button", buttonIsActive ? "ButtonActive" : "ButtonNotActive"].join(' ')}
             onClick={begin}
             onMouseEnter={() => setButtonIsActive(true)}
             onMouseLeave={() => setButtonIsActive(false)}>Начать игру</div>
    );
};

export default Button;