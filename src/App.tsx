import React from 'react';
import './App.css';
import {Accordion1, Accordion2} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import OnOff2 from "./components/OnOff2/OnOff2";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";


function App() {



    return (
        <div>
            {/*<Accordion1 titleValue={"My friend"} collapsed={false}/>*/}
            {/*<Accordion2 titleValue={"Feedback"} collapsed={true}/>*/}
            {/*<OnOff />*/}
            {/*<OnOff2 />*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: any) {
    console.log("Rendering PageTitle")
    return <h1> { props.title }</h1>
}



export default App;
