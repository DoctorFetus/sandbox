import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import ControlledOnOff from "./components/OnOff/ControlledOnOff";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switcher, setSwitch] = useState<boolean>(false)

    return (
        <div>
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <Accordion titleValue={"Accordion"} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed} />
            <ControlledOnOff setSwitch={setSwitch} switcher={switcher}/>
        </div>
    );
}


export default App;
