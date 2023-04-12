import React, {useState} from 'react';
import s from "./OnOff.module.css"


const OnOff = () => {

    let [switcher, setSwitch] = useState(false)

    const turnOn = () => {
        setSwitch(true)
    }

    const turnOff = () => {
        setSwitch(false)
    }

    const buttonOn = (enabled: boolean) => {
        return (!enabled && "") || (enabled && s.on)
    }

    const buttonOff = (enabled: boolean) => {
        return (!enabled && s.off) || (enabled && "")
    }

    const bulbColor = (enabled: boolean) => {
        return (!enabled && s.off) || (enabled && s.on)
    }

    return (
        <div className={s.switcher}>
            <button onClick={turnOn} className={`${buttonOn(switcher)}`}>On</button>
            <button onClick={turnOff} className={`${buttonOff(switcher)}`}>Off</button>
            <div className={`${s.bulb} ${bulbColor(switcher)}`}></div>
        </div>
    );
};

export default OnOff;