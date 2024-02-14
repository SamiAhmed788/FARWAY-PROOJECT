import { useState } from "react";
import Data from "./data.js";
import Stages from "./stages.js";
import Buttons from "./button.js";


export default function DifferentStages() {

    const [level, setLevel] = useState(1)   //3

    return (

            <div style={differentStagesCSS}>
                <Stages level={level} />
                <Data level={level} />
                <Buttons setLevel={setLevel} level={level} />
            </div>
    )
}

const differentStagesCSS = { height: "50vh", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }