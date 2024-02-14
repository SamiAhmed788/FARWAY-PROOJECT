
export default function Buttonb({setitemArr, itemArr ,setcount, count}) {

    console.log(itemArr, "=====>>> item")
    const clearAll = ()=>{
        setitemArr([])
        count = 0
        setcount(count)
     }
 
     const sortingItems = (val) => {
        console.log("hello", val);
        if (val == "1") {
            const check = itemArr.sort((a, b) => a.quantity > b.quantity ? 1 : -1);
            console.log("chek", check);
            setitemArr([...itemArr]);
        }
       
            if (val == "2") {
                const sortedByDescription = itemArr.sort((a, b) => {
                    // Provide a fallback for potentially undefined descriptions
                    const descriptionA = a.Naam || "";
                    const descriptionB = b.Naam || "";
                    return descriptionA.localeCompare(descriptionB);
                });
                console.log("sorted by description", sortedByDescription);
                setitemArr([...sortedByDescription]);
            }
        
            
        
        if (val == "3") {
            const check4 = itemArr.sort((a, b) => a.packed === b.packed ? 0 : a.packed ? -1 : 1);
            console.log("chek", check4);
            setitemArr([...itemArr]);
        }
    }    
     


    return (
      
        
        <div className="bottomSelectList" style={{ display:"flex", justifyContent:"center", marginBottom:"20px", gap:"10px"}}>
            <select style={{backgroundColor:"#fde7aa",borderRadius:"20px"}} onChange={(e)=> sortingItems(e.target.value)} name="cars" className="cars">
                <option className="option1" value="1" >SORT BY INPUT ORDER</option>
                <option value="2">SORT BY DESCRIPTION</option>
                <option value="3">SORT BY PACKED STATUS</option>
            </select>
            <button style={{backgroundColor:"#fde7aa",borderRadius:"20px"}} className="btmBtn" onClick={clearAll}>CLEAR LIST</button>
        </div>
                
    
    )
}