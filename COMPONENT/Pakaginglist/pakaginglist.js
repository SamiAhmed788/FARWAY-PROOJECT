import Buttonb from "../buttonbottom/butto";
import { Listitem } from "../listitem/listitem";

export default function Packagelist({setitemArr, itemArr ,setcount, count}) {

    console.log(itemArr, "=====>>> item")



    return (
        <div style={{ display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "450px", alignItems: "center",
        backgroundColor: "#4c3423"}}>
         

<Listitem setitemArr={setitemArr} itemArr={itemArr} setcount={setcount} count={count}/>
<Buttonb setitemArr={setitemArr} itemArr={itemArr} setcount={setcount} count={count} />
                
        </div>
    )
}