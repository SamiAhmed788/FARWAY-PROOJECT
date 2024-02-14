export default function Stats({ itemArr , setcount, count}) {

    const percentage =(count * 100)/ itemArr.length




    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' ,backgroundColor:"#67c1a3",height:"100px",color: "#6f4109",fontWeight:"bold",fontSize:"20px",alignItems:"center"}}>
                <i><p>You have {itemArr.length} item on your list,you already packed {count} ({!percentage ? "0": Math.floor(percentage)}%)</p></i>
                
            </div>
        </>
    )
}






