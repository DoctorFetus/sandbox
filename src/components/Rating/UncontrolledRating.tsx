import React, {useState} from "react";
import {start} from "repl";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star value={1} setValue={setValue} selected={value >= 1}/>
            <Star value={2} setValue={setValue} selected={value >= 2}/>
            <Star value={3} setValue={setValue} selected={value >= 3}/>
            <Star value={4} setValue={setValue} selected={value >= 4}/>
            <Star value={5} setValue={setValue} selected={value >= 5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    setValue: (value: number) => void
    value: 1 | 2 | 3 | 4 | 5

}

function Star(props: StarPropsType) {
    return <span onClick={() => props.setValue(props.value)}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}