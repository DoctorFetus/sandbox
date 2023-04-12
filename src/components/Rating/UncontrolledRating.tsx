import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)


    return (
        <div>
            <Star handler={() => setValue(1)} selected={value >= 1}/>
            <Star handler={() => setValue(2)} selected={value >= 2}/>
            <Star handler={() => setValue(3)} selected={value >= 3}/>
            <Star handler={() => setValue(4)} selected={value >= 4}/>
            <Star handler={() => setValue(5)} selected={value >= 5}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    handler: () => void

}

function Star(props: StarPropsType) {

    const element = () => <span onClick={props.handler}>star </span>

    return (props.selected) ? <b>{element()}</b> : element()
}