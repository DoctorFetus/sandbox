import React, {useState} from 'react';
import s from "./OnOff2.module.css"

type PropsType = {
    // on: false
}

const OnOff2: React.FC<PropsType> = (props) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "lightgreen" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "lightgreen" : "red"
    }

    const enable = () => {
        setOn(true)
    }

    const disable = () => {
        setOn(false)
    }
    return (
        <div>
            <div onClick={enable} style={onStyle}>On</div>
            <div onClick={disable} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff2;