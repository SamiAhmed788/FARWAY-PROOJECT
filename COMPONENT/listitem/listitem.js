export const Listitem = ({setitemArr, itemArr ,setcount, count}) => {


    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            width: "70%",
            margin: "0px auto"
        }}>
        
        {
            itemArr?.map((singleitem, indx)=>(
                <Item
                setitemArr={setitemArr}
                itemArr={itemArr}
                singleitem={singleitem}
                num = {indx}
                setcount={setcount}
                count={count}
                />
            )

            )
        }
        </div>
    )
    
}


const Item =({setitemArr,itemArr,singleitem,num,setcount, count})=>{

    
const packedhandler =(packingvalue,itemnumber)=>{
const mmyitem  = [...itemArr]
mmyitem[num].packed = !packingvalue
setitemArr(mmyitem)
setcount(count+1)
}

const delethandler =(index)=>{
console.log(index);
    const chk = [...itemArr]
    const myCheck =  chk.filter((val, ind) => ind !== index);
    console.log("filteredValue", myCheck);
setitemArr(myCheck)
setcount(count-1)

}

    return(
        <div style={{display:"flex", gap:"10px",alignItems:"center"}} >

<input style={{marginBottom:"12px"}} type="checkbox" checked={singleitem.packed} onChange={()=>packedhandler(singleitem.packed,num)}></input>

<p style={{
                color: "#dbc69b",
                textDecoration: singleitem.packed ? "line-through" : "none"}}>

  {
    `${singleitem.quantity} ${singleitem.Naam}`
  }

</p>
<p style={{cursor:"pointer"}} onClick={()=>delethandler(num)}>❌</p>

        </div>
    )

}