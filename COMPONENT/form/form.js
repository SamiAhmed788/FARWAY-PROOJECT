import { useState } from "react"

export default function Form({setitemArr, itemArr}) {
    console.log(itemArr, "=====>>> item")

    const [itemname, setname]= useState("")
    const [quantity, setquantity]= useState(1)

const Additem =()=>{
    const myitem = [...itemArr]
myitem.push({
    quantity : quantity,
    Naam : itemname,
    packed : false,

})
setitemArr(myitem)
}

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center',color:"#603300", backgroundColor:"#df6b1b",height:"100px",  alignItems: "center",gap:"10px"
 }}>

<h4>What do you need for your 😍 trip?</h4>


<select onChange={(v)=>setquantity(v.target.value)}   aria-label="Default select example" style={{width: "100px" ,height:"50px", borderRadius:"20px",backgroundColor:"#fde7aa"}}>
  <option selected>1</option>,
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>


<input onChange={(v)=>setname(v.target.value)}  style={{height:"50px",width:"260px", borderRadius:"20px",backgroundColor:"#fde7aa"}} type="text" placeholder="item..."></input>

<button onClick={Additem} type="button" class="btn" style={{backgroundColor:"#67c1a3", borderRadius:"20px",height:"50px",width: "100px"}}>ADD</button>
                
            
            </div>
        </>
    )
}